import { readFileSync } from "node:fs";
import { createClient } from "next-sanity";

function loadEnvFile(path) {
  try {
    const contents = readFileSync(path, "utf8");

    for (const line of contents.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const separator = trimmed.indexOf("=");
      if (separator === -1) continue;

      const key = trimmed.slice(0, separator);
      const value = trimmed.slice(separator + 1);

      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch {
    // The script can still run with environment variables supplied by the shell.
  }
}

loadEnvFile(".env.local");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN.",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

function stripInternalFields(doc) {
  const { _rev, _createdAt, _updatedAt, _system, ...rest } = doc;
  return rest;
}

function toPublicId(id) {
  const baseId = id.replace(/^drafts\./, "");

  if (baseId.startsWith("project.")) {
    return baseId.replace(/^project\./, "project-");
  }

  if (baseId.startsWith("cvItem.")) {
    return baseId.replace(/^cvItem\./, "cvItem-");
  }

  return baseId;
}

async function migrateType(type, legacyPrefix) {
  const documents = await client.fetch(
    `*[_type == $type && (_id match $legacyMatch || _id match $draftMatch)]`,
    {
      type,
      legacyMatch: `${legacyPrefix}.*`,
      draftMatch: `drafts.${legacyPrefix}.*`,
    },
  );

  const tx = client.transaction();
  const migrated = [];

  for (const doc of documents) {
    const baseId = doc._id.replace(/^drafts\./, "");
    const newId = toPublicId(doc._id);

    if (baseId === newId && !doc._id.startsWith("drafts.")) {
      continue;
    }

    tx.createOrReplace(stripInternalFields({ ...doc, _id: newId }));

    if (doc._id !== newId) {
      tx.delete(doc._id);
    }

    if (baseId !== newId) {
      tx.delete(baseId);
    }

    migrated.push({ from: doc._id, to: newId, title: doc.title ?? null });
  }

  if (migrated.length > 0) {
    await tx.commit();
  }

  return migrated;
}

const migratedProjects = await migrateType("project", "project");
const migratedCvItems = await migrateType("cvItem", "cvItem");

console.log(
  JSON.stringify(
    {
      migratedProjects,
      migratedCvItems,
      note:
        "Sanity document IDs must not use periods in the namespace (project.slug is private by default). Use project-slug and cvItem-year instead.",
    },
    null,
    2,
  ),
);
