"use client";

import type { HkuMediaGroup } from "@/lib/hkuMedia";
import { getHkuPhaseDisplay } from "@/lib/hkuMedia";

type HkuProcessTimelineProps = {
  groups: HkuMediaGroup[];
  activeGroupIndex: number;
  activeSlideIndex: number;
  totalSlides: number;
  groupStarts: number[];
  onSelectGroup: (groupIndex: number) => void;
};

export function HkuProcessTimeline({
  groups,
  activeGroupIndex,
  activeSlideIndex,
  totalSlides,
  groupStarts,
  onSelectGroup,
}: HkuProcessTimelineProps) {
  const progress = totalSlides > 1 ? (activeSlideIndex / (totalSlides - 1)) * 100 : 100;
  const slideIndexWithinGroup =
    groupStarts[activeGroupIndex] !== undefined
      ? activeSlideIndex - groupStarts[activeGroupIndex] + 1
      : null;

  return (
    <div className="hku-timeline" aria-label="Proceslijn">
      <div className="hku-timeline-track" aria-hidden="true">
        <span className="hku-timeline-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="hku-timeline-groups">
        {groups.map((group, index) => {
          const isActive = index === activeGroupIndex;
          const phase = getHkuPhaseDisplay(group.title);

          return (
            <button
              key={`${group.title}-${index}`}
              type="button"
              className={`hku-timeline-segment${isActive ? " is-active" : ""}`}
              onClick={() => onSelectGroup(index)}
              aria-current={isActive ? "step" : undefined}
              aria-label={`${group.title}, ${group.items.length} items`}
            >
              <span className="hku-timeline-phase">{phase}</span>
              <span className="hku-timeline-label">{group.title}</span>
            </button>
          );
        })}
      </div>

      <p className="hku-timeline-meta" aria-live="polite">
        {groups[activeGroupIndex]?.title ?? ""}
        {slideIndexWithinGroup !== null ? ` - slide ${slideIndexWithinGroup}` : ""}
      </p>
    </div>
  );
}
