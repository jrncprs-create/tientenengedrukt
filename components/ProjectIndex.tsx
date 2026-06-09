import { ScrollReveal } from "./ScrollReveal";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectIndexProps = {
  projects: Project[];
};

export function ProjectIndex({ projects }: ProjectIndexProps) {
  return (
    <section className="project-index" aria-labelledby="selected-work-title">
      <ScrollReveal className="section-title-wrap">
        <h2 id="selected-work-title" className="section-title">
          Selected work
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
