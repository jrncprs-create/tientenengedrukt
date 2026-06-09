import { createReadStream, readFileSync } from "node:fs";
import { basename, join } from "node:path";
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

const homePage = {
  _id: "homePage",
  _type: "homePage",
  heroKicker: "Portfolio 2026",
  heroTitle: "JOEP CUYPERS",
  heroSubtitle:
    "Art direction, visual concepts and production for events, campaigns and branded spaces.",
  heroNote:
    "From first visual direction to on-site production, Joep works where graphic design, spatial rhythm and cultural events meet.",
  statementKicker: "Practice",
  statementTitle: "Designing visual systems for temporary worlds.",
  statementIntro:
    "Joep Cuypers develops visual identities, campaign images and production-ready concepts for events, artists, agencies and cultural spaces.",
  statementBody:
    "His work moves between graphic design, styling, set logic and hands-on making. The result is visual direction that can live as a poster, a stage cue, a social asset, a spatial detail or a full event language.",
  workKicker: "Selected work",
  workTitle: "Work that moves between image, space and production.",
  approachKicker: "Approach",
  approachTitle: "From visual direction to buildable detail.",
  approachIntro:
    "A strong image is only useful when it survives production. The work combines mood, typography, material choices, planning and practical execution.",
  approachBody:
    "Each project starts with a clear visual rhythm: what should feel loud, what should stay quiet, and where the audience meets the work first.",
  capabilitiesKicker: "Capabilities",
  capabilitiesTitle: "What I do",
  capabilities: [
    "Art direction",
    "Campaign visuals",
    "Event identities",
    "Spatial styling",
    "Production design",
    "Graphic systems",
    "Image editing",
    "On-site visual support",
  ],
  cvKicker: "CV",
  cvTitle: "Experience",
  skillsLabel: "Skills",
  skillsText:
    "Art direction / Layout / Typography / Image research / Styling / Production / Adobe CC / Web direction",
  contactKicker: "Contact",
  contactHeading: "Let’s make the image work.",
  contactText:
    "For collaborations, campaign visuals, event identities or production-based art direction.",
  email: "hello@joepcuypers.nl",
  instagram: "@joepcuypers",
  location: "Amsterdam / available for projects",
};

const projectImages = {
  "sprinter-sound-system": [
    "public/images/projects/sprinter-sound-system/pdf-sprinter-01.jpg",
    "public/images/projects/sprinter-sound-system/pdf-sprinter-02.jpg",
    "public/images/projects/sprinter-sound-system/pdf-sprinter-03.jpg",
  ],
  "bilal-wahib": [
    "public/images/projects/bilal-wahib/pdf-bilal-01.jpg",
    "public/images/projects/bilal-wahib/pdf-bilal-02.jpg",
    "public/images/projects/bilal-wahib/pdf-bilal-03.jpg",
  ],
  "selected-work": [
    "public/images/projects/selected-work/pdf-selected-01.jpg",
    "public/images/projects/selected-work/pdf-selected-02.jpg",
    "public/images/projects/selected-work/pdf-selected-03.jpg",
  ],
  "club-visuals": [
    "public/images/projects/selected-work/pdf-selected-01.jpg",
    "public/images/projects/sprinter-sound-system/pdf-sprinter-02.jpg",
    "public/images/projects/bilal-wahib/pdf-bilal-03.jpg",
  ],
  "campaign-objects": [
    "public/images/projects/bilal-wahib/pdf-bilal-02.jpg",
    "public/images/projects/selected-work/pdf-selected-03.jpg",
    "public/images/projects/sprinter-sound-system/pdf-sprinter-01.jpg",
  ],
  "stage-identity": [
    "public/images/projects/sprinter-sound-system/pdf-sprinter-03.jpg",
    "public/images/projects/selected-work/pdf-selected-02.jpg",
    "public/images/projects/bilal-wahib/pdf-bilal-01.jpg",
  ],
  "editorial-tests": [
    "public/images/projects/selected-work/pdf-selected-03.jpg",
    "public/images/projects/bilal-wahib/pdf-bilal-01.jpg",
    "public/images/projects/sprinter-sound-system/pdf-sprinter-02.jpg",
  ],
};

function imageReference(assetId) {
  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: assetId,
    },
  };
}

async function findOrUploadAsset(filePath) {
  const filename = basename(filePath);
  const existingAsset = await client.fetch(
    `*[_type == "sanity.imageAsset" && originalFilename == $filename][0]{_id}`,
    { filename },
  );

  if (existingAsset?._id) {
    return existingAsset;
  }

  return client.assets.upload("image", createReadStream(filePath), {
    filename,
  });
}

async function syncHomePage() {
  await client.createIfNotExists(homePage);
}

async function syncProjectImages() {
  for (const [slug, paths] of Object.entries(projectImages)) {
    const project = await client.fetch(
      `*[_type == "project" && slug.current == $slug][0]{
        _id,
        title,
        coverImage,
        galleryImages
      }`,
      { slug },
    );

    if (!project?._id) {
      console.warn(`Skipped ${slug}: project document not found.`);
      continue;
    }

    const assets = [];

    for (const filePath of paths) {
      const asset = await findOrUploadAsset(join(process.cwd(), filePath));
      assets.push(asset);
    }

    const [coverAsset, ...galleryAssets] = assets;
    const patch = client.patch(project._id);
    let shouldCommit = false;

    if (!project.coverImage && coverAsset?._id) {
      patch.set({ coverImage: imageReference(coverAsset._id) });
      shouldCommit = true;
    }

    if (
      (!Array.isArray(project.galleryImages) ||
        project.galleryImages.length === 0) &&
      galleryAssets.length > 0
    ) {
      patch.set({
        galleryImages: galleryAssets.map((asset, index) => ({
          _key: `${slug}-${index + 1}`,
          _type: "galleryImage",
          image: imageReference(asset._id),
          caption: "",
          alt: project.title
            ? `${project.title} beeld ${index + 2}`
            : `${slug} beeld ${index + 2}`,
        })),
      });
      shouldCommit = true;
    }

    if (shouldCommit) {
      await patch.commit();
      console.log(`Synced images for ${slug}.`);
    } else {
      console.log(`Skipped ${slug}: images already set.`);
    }
  }
}

await syncHomePage();
await syncProjectImages();
console.log("Sanity content sync complete.");
