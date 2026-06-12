"use client";

import { useMemo, useState } from "react";
import type { HkuMediaGroup } from "@/lib/hkuMedia";
import { splitMediaGroupsBySection } from "@/lib/hkuMedia";
import { HkuProcessViewer } from "@/components/hku/HkuProcessViewer";

type HkuProjectMediaProps = {
  projectId: string;
  projectTitle: string;
  mediaGroups: HkuMediaGroup[];
};

type ActiveSection = "process" | "final";

export function HkuProjectMedia({
  projectId,
  projectTitle,
  mediaGroups,
}: HkuProjectMediaProps) {
  const { process, final } = useMemo(
    () => splitMediaGroupsBySection(mediaGroups),
    [mediaGroups],
  );

  const hasProcess = process.length > 0;
  const hasFinal = final.length > 0;
  const [activeSection, setActiveSection] = useState<ActiveSection>(
    hasProcess ? "process" : "final",
  );

  if (!hasProcess && !hasFinal) return null;

  const showTabs = hasProcess && hasFinal;
  const activeGroups = activeSection === "final" ? final : process;
  const sectionLabel = activeSection === "final" ? "FINAL" : "PROCESS";

  return (
    <div className="hku-project-media-shell">
      {showTabs ? (
        <nav className="hku-section-jump" aria-label={`Media secties ${projectTitle}`}>
          <button
            type="button"
            className={`hku-section-jump-btn${activeSection === "process" ? " is-active" : ""}`}
            onClick={() => setActiveSection("process")}
            aria-current={activeSection === "process" ? "true" : undefined}
          >
            <span className="hku-section-jump-kicker">Proces / voorwerk</span>
            <span className="hku-section-jump-label">PROCESS</span>
          </button>
          <button
            type="button"
            className={`hku-section-jump-btn${activeSection === "final" ? " is-active" : ""}`}
            onClick={() => setActiveSection("final")}
            aria-current={activeSection === "final" ? "true" : undefined}
          >
            <span className="hku-section-jump-kicker">Eindproduct / final</span>
            <span className="hku-section-jump-label">FINAL</span>
          </button>
        </nav>
      ) : null}

      <div
        id={`${projectId}-${activeSection}`}
        className="hku-project-media-panel"
      >
        <HkuProcessViewer
          key={activeSection}
          projectTitle={projectTitle}
          mediaGroups={activeGroups}
          sectionLabel={sectionLabel}
        />
      </div>

      {showTabs ? (
        <p className="hku-section-jump-hint">
          Wissel tussen proces en eindproduct zonder door alle beelden te scrollen.
        </p>
      ) : null}
    </div>
  );
}
