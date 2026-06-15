import manifest from "@/data/project-image-manifest.json";

export type ProjectImageSourceType = "portfolio" | "public-fallback";

export type ProjectImageManifestItem = {
  kind: "cover" | "gallery";
  originalFilename: string;
  sourcePath: string;
  sourceType: ProjectImageSourceType;
};

export type ProjectImageManifestEntry = {
  routeSlug: string;
  sanitySlug: string;
  items: ProjectImageManifestItem[];
};

const projectImageManifestEntries =
  manifest.projects as ProjectImageManifestEntry[];

const manifestByRouteSlug = new Map(
  projectImageManifestEntries.map((entry) => [entry.routeSlug, entry]),
);

const manifestBySanitySlug = new Map(
  projectImageManifestEntries.map((entry) => [entry.sanitySlug, entry]),
);

export function getProjectImageManifestByRouteSlug(routeSlug: string) {
  return manifestByRouteSlug.get(routeSlug);
}

export function getProjectImageManifestBySanitySlug(sanitySlug: string) {
  return manifestBySanitySlug.get(sanitySlug);
}

export function getProjectImageManifestEntries() {
  return projectImageManifestEntries;
}
