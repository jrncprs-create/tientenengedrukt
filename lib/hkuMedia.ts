export type HkuMediaType = "image" | "pdf" | "video" | "heic";

export type HkuMediaItem = {
  src: string;
  type: HkuMediaType;
  alt: string;
  label?: string;
};

export type HkuMediaGroup = {
  title: string;
  items: HkuMediaItem[];
  pairPortraits?: boolean;
};

export type HkuViewerSlide = {
  items: HkuMediaItem[];
  groupTitle: string;
  phase: string;
  groupIndex: number;
  itemIndices: number[];
  key: string;
};

const PHASE_RULES: { match: RegExp; phase: string }[] = [
  { match: /schets/i, phase: "schets" },
  { match: /other options|iteraties?|logo iteraties?/i, phase: "iteratie" },
  { match: /^proces$/i, phase: "proces" },
  { match: /proces/i, phase: "proces" },
  { match: /documentatie|text|pitch|verslag/i, phase: "documentatie" },
  { match: /mockup|look|poster in use|eindresultaat|identiteit|jaaroverzicht/i, phase: "eindbeeld" },
  { match: /video/i, phase: "documentatie" },
];

export function getHkuPhaseLabel(groupTitle: string): string {
  for (const rule of PHASE_RULES) {
    if (rule.match.test(groupTitle)) {
      return rule.phase;
    }
  }

  return "proces";
}

export type HkuMediaSectionKind = "process" | "final";

export function getHkuPhaseDisplay(groupTitle: string): string {
  const phase = getHkuPhaseLabel(groupTitle);

  if (phase === "iteratie") return "ITERATION";
  if (phase === "eindbeeld") return "FINAL";
  return "PROCESS";
}

export function isFinalMediaGroup(groupTitle: string): boolean {
  return getHkuPhaseLabel(groupTitle) === "eindbeeld";
}

export function splitMediaGroupsBySection(groups: HkuMediaGroup[]): {
  process: HkuMediaGroup[];
  final: HkuMediaGroup[];
} {
  const process: HkuMediaGroup[] = [];
  const final: HkuMediaGroup[] = [];

  for (const group of groups) {
    if (isFinalMediaGroup(group.title)) {
      final.push(group);
    } else {
      process.push(group);
    }
  }

  return { process, final };
}

export function flattenMediaGroups(groups: HkuMediaGroup[]): HkuViewerSlide[] {
  const slides: HkuViewerSlide[] = [];

  groups.forEach((group, groupIndex) => {
    const phase = getHkuPhaseLabel(group.title);

    for (let itemIndex = 0; itemIndex < group.items.length; itemIndex += 1) {
      const item = group.items[itemIndex];
      const nextItem = group.items[itemIndex + 1];
      const shouldPair =
        group.pairPortraits &&
        item?.type === "image" &&
        nextItem?.type === "image";
      const items = shouldPair ? [item, nextItem] : [item];
      const itemIndices = shouldPair ? [itemIndex, itemIndex + 1] : [itemIndex];

      slides.push({
        items,
        groupTitle: group.title,
        phase,
        groupIndex,
        itemIndices,
        key: `${groupIndex}-${itemIndices.join("-")}-${items.map(({ src }) => src).join("|")}`,
      });
      if (shouldPair) itemIndex += 1;
    }
  });

  return slides;
}

const HKU_BASE = "/hku";

export function hkuAsset(...segments: string[]) {
  return `${HKU_BASE}/${segments.map(encodeURIComponent).join("/")}`;
}

export function mediaTypeFromPath(path: string): HkuMediaType {
  const extension = path.split(".").pop()?.toLowerCase() ?? "";

  if (extension === "pdf") return "pdf";
  if (extension === "mp4" || extension === "webm" || extension === "mov") {
    return "video";
  }
  if (extension === "heic" || extension === "heif") return "heic";
  return "image";
}

export function hkuFile(
  segments: string[],
  alt: string,
  label?: string,
): HkuMediaItem {
  const src = hkuAsset(...segments);
  return {
    src,
    type: mediaTypeFromPath(segments.at(-1) ?? ""),
    alt,
    label,
  };
}

/** Natural sort: 2 before 10, respects numeric chunks in filenames. */
export function naturalSort<T>(items: T[], getKey: (item: T) => string): T[] {
  return [...items].sort((a, b) =>
    getKey(a).localeCompare(getKey(b), undefined, {
      numeric: true,
      sensitivity: "base",
    }),
  );
}

export function numberedFiles(
  folder: string[],
  prefix: string,
  start: number,
  end: number,
  extension: string,
  altPrefix: string,
  padLength = 0,
): HkuMediaItem[] {
  return Array.from({ length: end - start + 1 }, (_, index) => {
    const number = start + index;
    const numberLabel = padLength
      ? String(number).padStart(padLength, "0")
      : String(number);
    const filename = `${prefix}${numberLabel}.${extension}`;
    return hkuFile([...folder, filename], `${altPrefix} ${number}`);
  });
}

/** Build media items from explicit filenames, sorted naturally (1, 2, 10 not 1, 10, 2). */
export function hkuFilesSorted(
  folder: string[],
  filenames: string[],
  altFor: (filename: string) => string,
  labelFor?: (filename: string) => string | undefined,
): HkuMediaItem[] {
  return naturalSort(filenames, (name) => name).map((filename) =>
    hkuFile(
      [...folder, filename],
      altFor(filename),
      labelFor?.(filename),
    ),
  );
}
