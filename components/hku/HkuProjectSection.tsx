import { ScrollReveal } from "@/components/ScrollReveal";
import type { HkuProject } from "@/data/hkuPortfolio";
import { HkuMediaSequence } from "@/components/hku/HkuMediaSequence";
import { HkuProcessBlock } from "@/components/hku/HkuProcessBlock";

type HkuProjectSectionProps = {
  project: HkuProject;
  index: number;
};

export function HkuProjectSection({
  project,
  index,
}: HkuProjectSectionProps) {
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <section className="hku-project" id={project.id} aria-labelledby={`${project.id}-title`}>
      <ScrollReveal className="hku-project-header">
        <p className="hku-project-index">{indexLabel}</p>
        <h2 className="hku-project-title" id={`${project.id}-title`}>
          {project.title}
        </h2>
        <p className="hku-project-type">{project.type}</p>
      </ScrollReveal>

      <div className="hku-project-body">
        <HkuProcessBlock label="Context" text={project.context} />
        <HkuProcessBlock label="Mijn rol" text={project.role} />
        <HkuProcessBlock label="Proces & onderzoek" text={project.process} />
        <HkuProcessBlock label="Eindresultaat" text={project.outcome} />
        <HkuProcessBlock label="Reflectie" text={project.reflection} />
      </div>

      <div className="hku-project-media">
        {project.mediaGroups.map((group) => (
          <HkuMediaSequence
            key={`${project.id}-${group.title}`}
            group={group}
          />
        ))}
      </div>
    </section>
  );
}
