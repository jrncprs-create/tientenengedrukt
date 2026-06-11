import { projects as fallbackProjects } from "@/data/projects";
import { getSanityProjects } from "@/lib/sanity/fetch";
import { urlForImage } from "@/sanity/lib/image";

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

type SanityProject = {
  title?: string | null;
  year?: string | null;
  category?: string | null;
  summary?: string | null;
  theme?: ProjectTheme | null;
  coverImage?: unknown;
  galleryImages?: unknown[] | null;
  sortOrder?: number | null;
};

type SanityGalleryImage = {
  image?: unknown;
  caption?: string | null;
  alt?: string | null;
};

const fallbackByTitle = new Map(
  fallbackProjects.map((project) => [project.title.toLowerCase(), project]),
);

const selectedWorkFallback = fallbackProjects[0];

export function slugifyProjectTitle(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-") || "project";
}

function resolveImage(source: unknown) {
  if (!source) return null;

  try {
    return urlForImage(source).url();
  } catch {
    return null;
  }
}

function resolveGalleryImage(source: unknown) {
  if (!source) return null;

  if (
    typeof source === "object" &&
    source !== null &&
    "image" in source
  ) {
    return resolveImage((source as SanityGalleryImage).image);
  }

  return resolveImage(source);
}

function resolveImages(project: SanityProject, fallbackProject?: Project) {
  const sanityImages = [
    resolveImage(project.coverImage),
    ...(project.galleryImages ?? []).map(resolveGalleryImage),
  ].filter((image): image is string => Boolean(image));

  if (sanityImages.length > 0) {
    return sanityImages;
  }

  return fallbackProject?.images ?? selectedWorkFallback.images;
}

function mapSanityProject(project: SanityProject): Project | null {
  const title = project.title ?? "";

  if (!title) {
    return null;
  }

  const slug = slugifyProjectTitle(title);
  const fallbackProject = fallbackByTitle.get(title.toLowerCase());

  return {
    title,
    slug,
    year: project.year ?? fallbackProject?.year ?? "",
    category: project.category ?? fallbackProject?.category ?? "",
    summary: project.summary ?? fallbackProject?.summary ?? "",
    theme: project.theme ?? fallbackProject?.theme ?? "light",
    images: resolveImages(project, fallbackProject),
  };
}

function dedupeSlugs(projects: Project[]) {
  const seen = new Map<string, number>();

  return projects.map((project) => {
    const count = seen.get(project.slug) ?? 0;
    seen.set(project.slug, count + 1);

    if (count === 0) {
      return project;
    }

    return {
      ...project,
      slug: `${project.slug}-${count + 1}`,
    };
  });
}

export async function getProjectsWithFallback(): Promise<Project[]> {
  try {
    const sanityProjects = (await getSanityProjects()) as SanityProject[];

    if (!Array.isArray(sanityProjects) || sanityProjects.length === 0) {
      return fallbackProjects;
    }

    const mappedProjects = sanityProjects
      .slice()
      .sort((a, b) => {
        const sortA = a.sortOrder ?? Number.MAX_SAFE_INTEGER;
        const sortB = b.sortOrder ?? Number.MAX_SAFE_INTEGER;

        if (sortA !== sortB) {
          return sortA - sortB;
        }

        return (a.title ?? "").localeCompare(b.title ?? "");
      })
      .map(mapSanityProject)
      .filter((project): project is Project => Boolean(project));

    return mappedProjects.length > 0 ? dedupeSlugs(mappedProjects) : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}
