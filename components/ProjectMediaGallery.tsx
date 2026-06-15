"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ProjectMedia } from "@/lib/projects";

type ProjectMediaGalleryProps = {
  projectSlug: string;
  projectTitle: string;
  media: ProjectMedia[];
};

type ImageOrientation = "portrait" | "landscape";

type GalleryRow = {
  type: "portrait-group" | "single";
  images: Array<ProjectMedia & { index: number }>;
};

function getOrientation(width: number, height: number): ImageOrientation {
  return height > width ? "portrait" : "landscape";
}

function getPortraitGroupSize(remaining: number) {
  if (remaining >= 4 && remaining % 3 === 1) return 2;
  if (remaining >= 3) return 3;
  if (remaining >= 2) return 2;
  return 1;
}

function buildRows(
  media: ProjectMedia[],
  orientations: Array<ImageOrientation | null>,
  allowTriplePortraitRows: boolean,
): GalleryRow[] {
  const rows: GalleryRow[] = [];

  for (let index = 0; index < media.length; index += 1) {
    const orientation = orientations[index];

    if (orientation !== "portrait") {
      rows.push({
        type: "single",
        images: [{ ...media[index], index }],
      });
      continue;
    }

    let end = index;
    while (orientations[end] === "portrait" && end < media.length) {
      end += 1;
    }

    const portraitSequence = media
      .slice(index, end)
      .map((item, portraitIndex) => ({ ...item, index: index + portraitIndex }));

    let pointer = 0;
    while (pointer < portraitSequence.length) {
      const remaining = portraitSequence.length - pointer;
      const groupSize = allowTriplePortraitRows
        ? getPortraitGroupSize(remaining)
        : Math.min(2, remaining);

      rows.push({
        type: groupSize > 1 ? "portrait-group" : "single",
        images: portraitSequence.slice(pointer, pointer + groupSize),
      });

      pointer += groupSize;
    }

    index = end - 1;
  }

  return rows;
}

export function ProjectMediaGallery({
  projectSlug,
  projectTitle,
  media,
}: ProjectMediaGalleryProps) {
  const galleryRef = useRef<HTMLElement | null>(null);
  const [orientations, setOrientations] = useState<Array<ImageOrientation | null>>(
    () =>
      media.map((item) =>
        item.width && item.height ? getOrientation(item.width, item.height) : null,
      ),
  );

  const [allowTriplePortraitRows, setAllowTriplePortraitRows] = useState(false);
  const rows = useMemo(
    () => buildRows(media, orientations, allowTriplePortraitRows),
    [allowTriplePortraitRows, media, orientations],
  );

  useEffect(() => {
    const node = galleryRef.current;
    if (!node) return;

    const update = () => {
      setAllowTriplePortraitRows(node.clientWidth >= 1120);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={galleryRef}
      className="project-gallery"
      aria-label="Project beelden"
    >
      {rows.map((row, rowIndex) => {
        const count = row.images.length;
        const rowClassName =
          row.type === "portrait-group"
            ? `project-media-row project-media-row-portraits project-media-row-portraits-${count}`
            : "project-media-row project-media-row-single";

        return (
          <div
            key={`${projectSlug}-row-${rowIndex}-${row.images.map(({ src }) => src).join("|")}`}
            className={rowClassName}
          >
            {row.images.map(({ src, alt, width, height, index }) => (
              <div key={`${projectSlug}-${index}`} className="project-media-card">
                <figure className="project-media-figure">
                  <div className="project-media-frame">
                    <Image
                      src={src}
                      alt={alt || `${projectTitle} beeld ${index + 1}`}
                      width={width ?? 1600}
                      height={height ?? 1200}
                      className="project-media-image"
                      priority={rowIndex < 2}
                      quality={90}
                      sizes={
                        count === 3
                          ? "(max-width: 900px) 100vw, 24vw"
                          : count === 2
                            ? "(max-width: 900px) 100vw, 36vw"
                            : "(max-width: 900px) 100vw, 72vw"
                      }
                      onLoad={(event) => {
                        const nextOrientation = getOrientation(
                          event.currentTarget.naturalWidth,
                          event.currentTarget.naturalHeight,
                        );

                        setOrientations((current) => {
                          if (current[index] === nextOrientation) return current;

                          const next = [...current];
                          next[index] = nextOrientation;
                          return next;
                        });
                      }}
                    />
                  </div>
                </figure>
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
}
