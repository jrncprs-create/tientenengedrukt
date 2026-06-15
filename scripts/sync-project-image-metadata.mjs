import { readFileSync } from "node:fs";
import { createClient } from "next-sanity";
import manifest from "../data/project-image-manifest.json" with { type: "json" };

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

const manifestBySanitySlug = new Map(
  manifest.projects.map((entry) => [entry.sanitySlug, entry]),
);

const projects = await client.fetch(
  `*[_type == "project"]{
    _id,
    title,
    "slug": slug.current,
    coverImage,
    galleryImages
  }`,
);

let patchedCount = 0;

for (const project of projects) {
  const manifestEntry = manifestBySanitySlug.get(project.slug);

  if (!manifestEntry) {
    console.warn(`Skipped ${project._id}: no manifest entry for slug "${project.slug}".`);
    continue;
  }

  const [coverItem, ...galleryItems] = manifestEntry.items;
  const nextCoverImage =
    project.coverImage && coverItem
      ? {
          ...project.coverImage,
          originalFilename: coverItem.originalFilename,
          sourcePath: coverItem.sourcePath,
          sourceType: coverItem.sourceType,
        }
      : project.coverImage;

  const nextGalleryImages = Array.isArray(project.galleryImages)
    ? project.galleryImages.map((item, index) => {
        const manifestItem = galleryItems[index];

        if (!item?.image || !manifestItem) {
          return item;
        }

        return {
          ...item,
          originalFilename: manifestItem.originalFilename,
          sourcePath: manifestItem.sourcePath,
          sourceType: manifestItem.sourceType,
        };
      })
    : project.galleryImages;

  const hasChanged =
    JSON.stringify(project.coverImage) !== JSON.stringify(nextCoverImage) ||
    JSON.stringify(project.galleryImages) !== JSON.stringify(nextGalleryImages);

  if (!hasChanged) {
    console.log(`Unchanged ${project._id}`);
    continue;
  }

  await client
    .patch(project._id)
    .set({
      coverImage: nextCoverImage,
      galleryImages: nextGalleryImages,
    })
    .commit();

  patchedCount += 1;
  console.log(`Patched ${project._id}`);
}

console.log(`Project image metadata sync complete. Updated ${patchedCount} documents.`);
