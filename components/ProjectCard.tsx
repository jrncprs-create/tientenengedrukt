import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ScrollReveal } from "./ScrollReveal";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const previewImage = project.images[0];

  return (
    <ScrollReveal className="project-row">
      <Link href={`/work/${project.slug}`} className="project-link">
        <span className="project-line">
          <span className="project-title">{project.title}</span>
          <span className="project-meta">
            {project.category} / {project.year}
          </span>
        </span>
        <span className="project-preview" aria-hidden="true">
          <Image src={previewImage} alt="" width={1600} height={420} />
        </span>
      </Link>
    </ScrollReveal>
  );
}
