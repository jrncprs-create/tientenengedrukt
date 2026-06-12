"use client";

import type { HkuMediaGroup } from "@/lib/hkuMedia";
import { HkuProcessViewer } from "@/components/hku/HkuProcessViewer";

type HkuChapterScrollerProps = {
  projectTitle: string;
  chapterTitle: string;
  chapterType: "process" | "final";
  mediaGroups: HkuMediaGroup[];
};

export function HkuChapterScroller({
  projectTitle,
  chapterTitle,
  chapterType,
  mediaGroups,
}: HkuChapterScrollerProps) {
  const sectionLabel = chapterType === "final" ? "FINAL" : "PROCESS";

  return (
    <div className="hku-chapter-scroller">
      <HkuProcessViewer
        projectTitle={`${projectTitle} — ${chapterTitle}`}
        mediaGroups={mediaGroups}
        sectionLabel={sectionLabel}
        hideTimeline={mediaGroups.length <= 1}
      />
    </div>
  );
}
