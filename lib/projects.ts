export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  category: string;
  image: string;
  previewImage: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "keuzedeel-styling",
    title: "KEUZEDEEL STYLING",
    description:
      "Editorial styling project exploring silhouette, texture and restrained composition for a vocational styling module.",
    year: "2024",
    category: "Styling",
    image: "/images/placeholders/project-1.svg",
    previewImage: "/images/placeholders/preview-1.svg",
    featured: true,
  },
  {
    slug: "eindexamen-project",
    title: "EINDEXAMEN PROJECT",
    description:
      "Graduation work combining set design, garment direction and visual narrative for final presentation.",
    year: "2024",
    category: "Graduation",
    image: "/images/placeholders/project-2.svg",
    previewImage: "/images/placeholders/preview-2.svg",
    featured: true,
  },
  {
    slug: "bilal-wahib-poster",
    title: "BILAL WAHIB POSTER",
    description:
      "Poster design with bold typographic rhythm and high-contrast imagery for a cultural release.",
    year: "2023",
    category: "Poster",
    image: "/images/placeholders/project-3.svg",
    previewImage: "/images/placeholders/preview-3.svg",
    featured: true,
  },
  {
    slug: "tdfw-annual-posters",
    title: "TDFW ANNUAL POSTERS",
    description:
      "Annual poster series for fashion week — minimal layouts, recurring grid and seasonal colour accents.",
    year: "2023",
    category: "Poster Series",
    image: "/images/placeholders/project-4.svg",
    previewImage: "/images/placeholders/preview-4.svg",
    featured: true,
  },
  {
    slug: "styling-debut",
    title: "STYLING DEBUT",
    description:
      "Debut styling lookbook — soft tailoring, negative space and documentary-style stills.",
    year: "2022",
    category: "Styling",
    image: "/images/placeholders/project-5.svg",
    previewImage: "/images/placeholders/preview-5.svg",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
