import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import styles from "./ProjectList.module.css";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className={styles.list}>
      {projects.map((project) => (
        <li key={project.slug} className={styles.item}>
          <Link className={styles.link} href={`/work/${project.slug}`}>
            <div>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.meta}>
                {project.year} · {project.category}
              </p>
            </div>
            <Image
              className={styles.thumb}
              src={project.image}
              alt={project.title}
              width={960}
              height={540}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
