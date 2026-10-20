import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import styles from "./SelectedWorks.module.css";

type SelectedWorksProps = {
  projects: Project[];
};

function getPreviewSrc(project: Project): string {
  return project.previewImage || project.image;
}

export default function SelectedWorks({ projects }: SelectedWorksProps) {
  return (
    <section className={styles.section} aria-labelledby="selected-work-heading">
      <p id="selected-work-heading" className={styles.label}>
        Selected work:
      </p>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.slug} className={styles.item}>
            <Link className={styles.link} href={`/work/${project.slug}`}>
              {project.title}
            </Link>
            <Link
              className={styles.preview}
              href={`/work/${project.slug}`}
              aria-label={project.title}
              tabIndex={-1}
            >
              <div className={styles.previewInner}>
                <Image
                  className={styles.previewImage}
                  src={getPreviewSrc(project)}
                  alt=""
                  fill
                  sizes="100vw"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
