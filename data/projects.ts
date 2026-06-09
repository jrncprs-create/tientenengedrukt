export type ProjectTheme = "light" | "dark";

export type Project = {
  title: string;
  slug: string;
  year: string;
  category: string;
  summary: string;
  theme: ProjectTheme;
  images: string[];
};

const sprinterImages = [
  "/images/projects/sprinter-sound-system/pdf-sprinter-01.jpg",
  "/images/projects/sprinter-sound-system/pdf-sprinter-02.jpg",
  "/images/projects/sprinter-sound-system/pdf-sprinter-03.jpg",
];

const bilalImages = [
  "/images/projects/bilal-wahib/pdf-bilal-01.jpg",
  "/images/projects/bilal-wahib/pdf-bilal-02.jpg",
  "/images/projects/bilal-wahib/pdf-bilal-03.jpg",
];

const selectedImages = [
  "/images/projects/selected-work/pdf-selected-01.jpg",
  "/images/projects/selected-work/pdf-selected-02.jpg",
  "/images/projects/selected-work/pdf-selected-03.jpg",
];

export const projects: Project[] = [
  {
    title: "Sprinter Sound System",
    slug: "sprinter-sound-system",
    year: "2023",
    category: "Event branding",
    summary:
      "A visual system for a moving sound concept: bold marks, modular rhythm and a graphic language built for noise, speed and temporary space.",
    theme: "dark",
    images: sprinterImages,
  },
  {
    title: "Bilal Wahib",
    slug: "bilal-wahib",
    year: "2022",
    category: "Campaign and production",
    summary:
      "Campaign-led visual direction with a focus on image hierarchy, styling references, adaptation and production-ready output.",
    theme: "light",
    images: bilalImages,
  },
  {
    title: "Selected Work",
    slug: "selected-work",
    year: "2021—2026",
    category: "Portfolio selection",
    summary:
      "A compact selection of visual research, layout tests, image systems and production fragments collected from different project contexts.",
    theme: "light",
    images: selectedImages,
  },
  {
    title: "Club Visuals",
    slug: "club-visuals",
    year: "2025",
    category: "Music culture",
    summary:
      "Visual tests for nights, artists and dancefloor-adjacent spaces where typography, image treatment and atmosphere need to work fast.",
    theme: "dark",
    images: [selectedImages[0], sprinterImages[1], bilalImages[2]],
  },
  {
    title: "Campaign Objects",
    slug: "campaign-objects",
    year: "2024",
    category: "Art direction",
    summary:
      "A study in object-led campaign images: props, surfaces, gesture and composition translated into usable graphic material.",
    theme: "light",
    images: [bilalImages[1], selectedImages[2], sprinterImages[0]],
  },
  {
    title: "Stage Identity",
    slug: "stage-identity",
    year: "2023",
    category: "Spatial graphics",
    summary:
      "Identity fragments for staged environments: signage, screen rhythm, printed matter and spatial details designed as one visual system.",
    theme: "dark",
    images: [sprinterImages[2], selectedImages[1], bilalImages[0]],
  },
  {
    title: "Editorial Tests",
    slug: "editorial-tests",
    year: "2021",
    category: "Layout and research",
    summary:
      "Typographic sketches and image-led layouts exploring contrast, sequence, pacing and the edge between portfolio and publication.",
    theme: "light",
    images: [selectedImages[2], bilalImages[0], sprinterImages[1]],
  },
];
