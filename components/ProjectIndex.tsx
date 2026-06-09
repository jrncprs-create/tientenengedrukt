import { ScrollReveal } from "./ScrollReveal";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectIndexProps = {
  projects: Project[];
  kicker?: string;
  title?: string;
};

export function ProjectIndex({
  projects,
  kicker = "Selected work",
  title = "Work that moves between image, space and production.",
}: ProjectIndexProps) {
  return (
    <section className="project-index" aria-labelledby="selected-work-title">
      <ScrollReveal className="section-title-wrap">
        <p className="section-kicker">{kicker}</p>
        <h2 id="selected-work-title" className="project-index-title">
          {title}
        </h2>
      </ScrollReveal>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
