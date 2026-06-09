import Link from "next/link";
import type { Project } from "@/data/projects";
import { ScrollReveal } from "./ScrollReveal";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <ScrollReveal className="project-row">
      <Link href={`/work/${project.slug}`} className="project-link">
        <span className="project-title">{project.title}</span>
        <span className="project-meta">
          {project.category} - {project.year}
        </span>
      </Link>
    </ScrollReveal>
  );
}
