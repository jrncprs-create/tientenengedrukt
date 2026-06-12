"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { HkuMediaGroup } from "@/lib/hkuMedia";
import { flattenMediaGroups, getHkuPhaseDisplay } from "@/lib/hkuMedia";
import { HkuMediaFrame } from "@/components/hku/HkuMediaFrame";
import { HkuProcessTimeline } from "@/components/hku/HkuProcessTimeline";

type HkuProcessViewerProps = {
  projectTitle: string;
  mediaGroups: HkuMediaGroup[];
  sectionLabel?: string;
  hideTimeline?: boolean;
};

function formatCounter(current: number, total: number) {
  const pad = String(total).length;
  return `${String(current).padStart(pad, "0")} / ${total}`;
}

export function HkuProcessViewer({
  projectTitle,
  mediaGroups,
  sectionLabel,
  hideTimeline = false,
}: HkuProcessViewerProps) {
  const slides = useMemo(() => flattenMediaGroups(mediaGroups), [mediaGroups]);
  const groupStarts = useMemo(
    () =>
      mediaGroups.map((_, groupIndex) =>
        slides.findIndex((slide) => slide.groupIndex === groupIndex),
      ),
    [mediaGroups, slides],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const viewerRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const isActiveRef = useRef(false);

  const total = slides.length;
  const currentSlide = slides[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      setActiveIndex(Math.max(0, Math.min(index, total - 1)));
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  const goToGroup = useCallback(
    (groupIndex: number) => {
      const start = groupStarts[groupIndex];
      if (start >= 0) goTo(start);
    },
    [groupStarts, goTo],
  );

  useEffect(() => {
    const node = viewerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isActiveRef.current = entry.isIntersecting && entry.intersectionRatio > 0.3;
      },
      { threshold: [0, 0.3, 0.5] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!isActiveRef.current) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  if (!currentSlide || total === 0) return null;

  const caption = currentSlide.item.label ?? currentSlide.item.alt;
  const phaseDisplay =
    sectionLabel ?? getHkuPhaseDisplay(currentSlide.groupTitle);
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < total - 1;

  return (
    <section
      ref={viewerRef}
      className="hku-process-viewer"
      aria-label={`Media viewer ${projectTitle}`}
      tabIndex={-1}
    >
      <header className="hku-viewer-header">
        <div className="hku-viewer-meta">
          <p className="hku-viewer-phase">{phaseDisplay}</p>
          <p className="hku-viewer-group">{currentSlide.groupTitle}</p>
        </div>
        <p className="hku-viewer-counter" aria-live="polite">
          {formatCounter(activeIndex + 1, total)}
        </p>
      </header>

      {hideTimeline ? null : (
        <HkuProcessTimeline
          groups={mediaGroups}
          activeGroupIndex={currentSlide.groupIndex}
          activeSlideIndex={activeIndex}
          totalSlides={total}
          groupStarts={groupStarts}
          onSelectGroup={goToGroup}
        />
      )}

      <div
        className="hku-viewer-stage-wrap"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchStartX.current;
          const end = event.changedTouches[0]?.clientX;
          touchStartX.current = null;
          if (start === null || end === undefined) return;

          const delta = start - end;
          if (Math.abs(delta) < 48) return;
          if (delta > 0) goNext();
          else goPrev();
        }}
      >
        <button
          type="button"
          className="hku-viewer-nav hku-viewer-nav-prev"
          onClick={goPrev}
          disabled={!canGoPrev}
          aria-label="Previous"
        >
          Previous
        </button>

        <div className="hku-viewer-stage" key={currentSlide.item.src}>
          <HkuMediaFrame
            item={currentSlide.item}
            caption={caption}
            priority={activeIndex === 0}
          />
        </div>

        <button
          type="button"
          className="hku-viewer-nav hku-viewer-nav-next"
          onClick={goNext}
          disabled={!canGoNext}
          aria-label="Next"
        >
          Next
        </button>
      </div>

      <p className="hku-viewer-hint">
        Previous / Next, arrow keys, or swipe
      </p>
    </section>
  );
}
