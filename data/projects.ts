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

export const projects: Project[] = [
  {
    title: "Sprinter Sound System",
    slug: "sprinter-sound-system",
    year: "2023",
    category: "Event branding",
    summary:
      "Grafische lijn en productie-uitwerking voor een modulair sound system concept.",
    theme: "dark",
    images: [
      "/images/projects/_placeholder/placeholder.svg",
      "/images/projects/_placeholder/placeholder.svg",
      "/images/projects/_placeholder/placeholder.svg",
    ],
  },
  {
    title: "Bilal Wahib",
    slug: "bilal-wahib",
    year: "2022",
    category: "Campagne en productie",
    summary:
      "Art direction voor visuele campagne-assets, adaptaties en event-gerelateerde uitrol.",
    theme: "light",
    images: [
      "/images/projects/_placeholder/placeholder.svg",
      "/images/projects/_placeholder/placeholder.svg",
      "/images/projects/_placeholder/placeholder.svg",
    ],
  },
  {
    title: "Selected Work",
    slug: "selected-work",
    year: "2021",
    category: "Portfolio selectie",
    summary:
      "Compacte selectie van werk met focus op typografie, ritme en grafische helderheid.",
    theme: "light",
    images: [
      "/images/projects/_placeholder/placeholder.svg",
      "/images/projects/_placeholder/placeholder.svg",
      "/images/projects/_placeholder/placeholder.svg",
    ],
  },
];
