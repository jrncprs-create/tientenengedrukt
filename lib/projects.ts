import { projects as fallbackProjects } from "@/data/projects";
import {
  getProjectImageManifestByRouteSlug,
  getProjectImageManifestBySanitySlug,
  type ProjectImageManifestItem,
  type ProjectImageSourceType,
} from "@/lib/projectImageManifest";
import { projectSlugFromTitle } from "@/lib/projectSlug";
import { getSanityProjects } from "@/lib/sanity/fetch";
import { urlForImage } from "@/sanity/lib/image";

export type ProjectTheme = "light" | "dark";

export type ProjectMedia = {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  originalFilename?: string;
  sourcePath?: string;
  sourceType?: ProjectImageSourceType;
};

export type Project = {
  title: string;
  slug: string;
  year: string;
  category: string;
  summary: string;
  theme: ProjectTheme;
  media: ProjectMedia[];
  images: string[];
};

type ImageSourceMetadata = {
  originalFilename?: string | null;
  sourcePath?: string | null;
  sourceType?: ProjectImageSourceType | null;
};

type SanityProject = {
  title?: string | null;
  slug?: string | { current?: string | null } | null;
  year?: string | null;
  category?: string | null;
  summary?: string | null;
  theme?: ProjectTheme | null;
  coverImage?: unknown;
  galleryImages?: unknown[] | null;
  sortOrder?: number | null;
};

type SanityAssetDimensions = {
  width?: number | null;
  height?: number | null;
};

type SanityResolvedImage = {
  originalFilename?: string | null;
  sourcePath?: string | null;
  sourceType?: ProjectImageSourceType | null;
  asset?: {
    url?: string | null;
    originalFilename?: string | null;
    metadata?: {
      dimensions?: SanityAssetDimensions | null;
    } | null;
  } | null;
};

type SanityGalleryImage = {
  image?: unknown;
  caption?: string | null;
  alt?: string | null;
  originalFilename?: string | null;
  sourcePath?: string | null;
  sourceType?: ProjectImageSourceType | null;
};

const fallbackBySlug = new Map(
  fallbackProjects.map((project) => [project.slug, project]),
);

const fallbackByTitle = new Map(
  fallbackProjects.map((project) => [project.title.toLowerCase(), project]),
);

const selectedWorkFallback = fallbackProjects[0];

function resolveSanitySlug(slug: SanityProject["slug"]) {
  if (typeof slug === "string") return slug;
  return slug?.current ?? "";
}

function resolveImage(source: unknown) {
  if (!source) return null;

  try {
    return urlForImage(source).url();
  } catch {
    return null;
  }
}

function definedString(value?: string | null) {
  return value?.trim() ? value : undefined;
}

function mergeSourceMetadata(
  source: ImageSourceMetadata & {
    asset?: {
      originalFilename?: string | null;
    } | null;
  },
  manifestItem?: ImageSourceMetadata,
) {
  return {
    originalFilename:
      definedString(source.originalFilename) ??
      definedString(source.asset?.originalFilename) ??
      definedString(manifestItem?.originalFilename),
    sourcePath:
      definedString(source.sourcePath) ?? definedString(manifestItem?.sourcePath),
    sourceType: source.sourceType ?? manifestItem?.sourceType,
  };
}

function resolveImageItem(
  source: unknown,
  fallbackAlt: string,
  manifestItem?: ImageSourceMetadata,
): ProjectMedia | null {
  if (!source) return null;

  if (
    typeof source === "object" &&
    source !== null &&
    "asset" in source
  ) {
    const asset = (source as SanityResolvedImage).asset;
    const src = asset?.url ?? null;

    if (!src) return null;

    const dimensions = asset?.metadata?.dimensions;
    const metadata = mergeSourceMetadata(source as SanityResolvedImage, manifestItem);

    return {
      src,
      width: dimensions?.width ?? undefined,
      height: dimensions?.height ?? undefined,
      alt: fallbackAlt,
      originalFilename: metadata.originalFilename ?? undefined,
      sourcePath: metadata.sourcePath ?? undefined,
      sourceType: metadata.sourceType ?? undefined,
    };
  }

  const src = resolveImage(source);
  if (!src) return null;

  return {
    src,
    alt: fallbackAlt,
    originalFilename: definedString(manifestItem?.originalFilename),
    sourcePath: definedString(manifestItem?.sourcePath),
    sourceType: manifestItem?.sourceType ?? undefined,
  };
}

function resolveGalleryImage(
  source: unknown,
  fallbackAlt: string,
  manifestItem?: ProjectImageManifestItem,
) {
  if (!source) return null;

  if (
    typeof source === "object" &&
    source !== null &&
    "image" in source
  ) {
    const galleryImage = source as SanityGalleryImage;

    return resolveImageItem(
      galleryImage.image,
      galleryImage.alt?.trim() || fallbackAlt,
      {
        originalFilename:
          galleryImage.originalFilename ?? manifestItem?.originalFilename ?? undefined,
        sourcePath: galleryImage.sourcePath ?? manifestItem?.sourcePath ?? undefined,
        sourceType:
          galleryImage.sourceType ?? manifestItem?.sourceType ?? "public-fallback",
      },
    );
  }

  return resolveImageItem(source, fallbackAlt, manifestItem);
}

function fallbackMedia(
  title: string,
  fallbackProject?: Project,
): ProjectMedia[] {
  const images = fallbackProject?.media?.length
    ? fallbackProject.media
    : (fallbackProject?.images ?? selectedWorkFallback.images).map((src, index) => ({
        src,
        alt: `${title} beeld ${index + 1}`,
      }));

  return images;
}

function resolveMedia(project: SanityProject, fallbackProject?: Project) {
  const title = project.title?.trim() || fallbackProject?.title || "Project";
  const routeSlug = project.title ? projectSlugFromTitle(project.title) : "";
  const sanitySlug = resolveSanitySlug(project.slug);
  const manifestEntry =
    getProjectImageManifestByRouteSlug(routeSlug) ??
    getProjectImageManifestBySanitySlug(sanitySlug);
  const manifestItems = manifestEntry?.items ?? [];
  const [coverManifest, ...galleryManifestItems] = manifestItems;

  const coverImage = resolveImageItem(
    project.coverImage,
    `${title} beeld 1`,
    coverManifest,
  );
  const galleryImages = (project.galleryImages ?? [])
    .map((item, index) =>
      resolveGalleryImage(
        item,
        `${title} beeld ${index + 2}`,
        galleryManifestItems[index],
      ),
    )
    .filter((image): image is ProjectMedia => Boolean(image));

  const sanityMedia = [coverImage, ...galleryImages].filter(
    (image): image is ProjectMedia => Boolean(image),
  );

  if (sanityMedia.length > 0) {
    return sanityMedia;
  }

  return fallbackMedia(title, fallbackProject);
}

function mapSanityProject(project: SanityProject): Project | null {
  const title = project.title?.trim() ?? "";

  if (!title) {
    return null;
  }

  const slug = projectSlugFromTitle(title);
  const sanitySlug = resolveSanitySlug(project.slug);
  const fallbackProject =
    fallbackByTitle.get(title.toLowerCase()) ??
    fallbackBySlug.get(sanitySlug) ??
    fallbackBySlug.get(slug) ??
    undefined;
  const media = resolveMedia(project, fallbackProject);

  return {
    title,
    slug,
    year: project.year ?? fallbackProject?.year ?? "",
    category: project.category ?? fallbackProject?.category ?? "",
    summary: project.summary ?? fallbackProject?.summary ?? "",
    theme: project.theme ?? fallbackProject?.theme ?? "light",
    media,
    images: media.map((item) => item.src),
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
