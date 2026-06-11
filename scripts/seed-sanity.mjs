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

const projects = [
  {
    title: "Sprinter Sound System",
    slug: "sprinter-sound-system",
    year: "2023",
    category: "Event branding",
    summary:
      "A visual system for a moving sound concept: bold marks, modular rhythm and a graphic language built for noise, speed and temporary space.",
    theme: "dark",
    sortOrder: 0,
    featured: true,
  },
  {
    title: "Bilal Wahib",
    slug: "bilal-wahib",
    year: "2022",
    category: "Campaign and production",
    summary:
      "Campaign-led visual direction with a focus on image hierarchy, styling references, adaptation and production-ready output.",
    theme: "light",
    sortOrder: 1,
    featured: true,
  },
  {
    title: "Selected Work",
    slug: "selected-work",
    year: "2021—2026",
    category: "Portfolio selection",
    summary:
      "A compact selection of visual research, layout tests, image systems and production fragments collected from different project contexts.",
    theme: "light",
    sortOrder: 2,
    featured: true,
  },
  {
    title: "Club Visuals",
    slug: "club-visuals",
    year: "2025",
    category: "Music culture",
    summary:
      "Visual tests for nights, artists and dancefloor-adjacent spaces where typography, image treatment and atmosphere need to work fast.",
    theme: "dark",
    sortOrder: 3,
    featured: false,
  },
  {
    title: "Campaign Objects",
    slug: "campaign-objects",
    year: "2024",
    category: "Art direction",
    summary:
      "A study in object-led campaign images: props, surfaces, gesture and composition translated into usable graphic material.",
    theme: "light",
    sortOrder: 4,
    featured: false,
  },
  {
    title: "Stage Identity",
    slug: "stage-identity",
    year: "2023",
    category: "Spatial graphics",
    summary:
      "Identity fragments for staged environments: signage, screen rhythm, printed matter and spatial details designed as one visual system.",
    theme: "dark",
    sortOrder: 5,
    featured: false,
  },
  {
    title: "Editorial Tests",
    slug: "editorial-tests",
    year: "2021",
    category: "Layout and research",
    summary:
      "Typographic sketches and image-led layouts exploring contrast, sequence, pacing and the edge between portfolio and publication.",
    theme: "light",
    sortOrder: 6,
    featured: false,
  },
];

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  title: "Joep Cuypers",
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
  contactHeading: "Let’s make the image work.",
  contactText:
    "For collaborations, campaign visuals, event identities or production-based art direction.",
  email: "hello@joepcuypers.nl",
  instagram: "@joepcuypers",
  location: "Amsterdam / available for projects",
};

const cvItems = [
  {
    year: "2025",
    title: "Freelance art direction and visual production",
    text: "Visual concepts, campaign roll-outs and production support for cultural and commercial projects.",
    sortOrder: 0,
  },
  {
    year: "2024",
    title: "Campaign and event identity projects",
    text: "Graphic systems, artist assets and adaptable visual directions for temporary cultural spaces.",
    sortOrder: 1,
  },
  {
    year: "2023",
    title: "Spatial and graphic systems for cultural events",
    text: "Identity work translated into signage, stage moments, screens, print and on-site details.",
    sortOrder: 2,
  },
  {
    year: "2022",
    title: "Artist visuals and production support",
    text: "Image direction, layout, styling references and practical production for music-led projects.",
    sortOrder: 3,
  },
  {
    year: "2021",
    title: "Graphic design, layout and image direction",
    text: "Editorial tests, printed matter, visual research and portfolio-based design work.",
    sortOrder: 4,
  },
];

const aboutPage = {
  _id: "aboutPage",
  _type: "aboutPage",
  title: "About Joep",
  intro:
    "Joep Cuypers is a graphic designer and art director working across visual identity, events, campaigns and production.",
  body:
    "His practice is shaped by music culture, printed matter, temporary architecture and the practical reality of making things happen. The work often begins as a graphic idea and ends as something physical, social or spatial.",
  profileTitle: "Graphic thinking for live contexts.",
  profileText:
    "Joep works where image, typography, rhythm and production meet. His portfolio moves between campaign work, visual systems, styling, stage-related identity and event-based communication.",
  methodTitle: "Clear mood, strong layout, practical execution.",
  methodItems: [
    {
      _type: "object",
      number: "01",
      text: "Read the context: artist, space, audience, timing and constraints.",
    },
    {
      _type: "object",
      number: "02",
      text: "Build a visual direction that can stretch across screen, print, object and space.",
    },
    {
      _type: "object",
      number: "03",
      text: "Keep the design sharp enough to feel authored and practical enough to be produced.",
    },
  ],
  contexts: [
    "Music campaigns",
    "Club nights",
    "Cultural festivals",
    "Brand activations",
    "Artist visuals",
    "Independent productions",
  ],
};

const transaction = client.transaction();

for (const [index, project] of projects.entries()) {
  transaction.createOrReplace({
    _id: `project-${project.slug}`,
    _type: "project",
    ...project,
    slug: {
      _type: "slug",
      current: project.slug,
    },
    sortOrder: project.sortOrder ?? index,
  });
}

transaction.createOrReplace(siteSettings);

for (const item of cvItems) {
  transaction.createOrReplace({
    _id: `cvItem-${item.year}`,
    _type: "cvItem",
    ...item,
  });
}

transaction.createOrReplace(aboutPage);

await transaction.commit();

console.log("Seeded Sanity fallback content.");
