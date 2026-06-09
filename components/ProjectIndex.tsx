import { ScrollReveal } from "./ScrollReveal";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectIndexProps = {
  projects: Project[];
};

export function ProjectIndex({ projects }: ProjectIndexProps) {
  return (
    <section className="project-index" aria-labelledby="selected-work-title">
      <ScrollReveal className="section-title-wrap">
        <p className="section-kicker">Selected work</p>
        <h2 id="selected-work-title" className="project-index-title">
          Work that moves between image, space and production.
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
