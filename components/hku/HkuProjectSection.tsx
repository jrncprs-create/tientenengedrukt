import { ScrollReveal } from "@/components/ScrollReveal";
import type { HkuProject } from "@/data/hkuPortfolio";
import { HkuProjectChapter } from "@/components/hku/HkuProjectChapter";

type HkuProjectSectionProps = {
  project: HkuProject;
  index: number;
};

function getChapterAnchor(project: HkuProject, type: HkuProject["chapters"][number]["type"]) {
  return project.chapters.find((chapter) => chapter.type === type)?.id;
}

export function HkuProjectSection({ project, index }: HkuProjectSectionProps) {
  const indexLabel = String(index + 1).padStart(2, "0");
  const introChapter = project.chapters.find((chapter) => chapter.type === "intro");
  const processId = getChapterAnchor(project, "process");
  const finalId = getChapterAnchor(project, "final");
  const reflectionId = getChapterAnchor(project, "reflection");

  return (
    <section
      className="hku-project"
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      <ScrollReveal className="hku-project-header">
        <p className="hku-project-index">{indexLabel}</p>
        <h2 className="hku-project-title" id={`${project.id}-title`}>
          {project.title}
        </h2>
        <p className="hku-project-type">{project.type}</p>
        {project.role ? (
          <p className="hku-project-role">{project.role}</p>
        ) : null}
      </ScrollReveal>

      <nav className="hku-project-jump" aria-label={`Navigatie ${project.title}`}>
        {processId ? (
          <a href={`#${project.id}-${processId}`} className="hku-project-jump-link">
            Proces
          </a>
        ) : null}
        {finalId ? (
          <a href={`#${project.id}-${finalId}`} className="hku-project-jump-link">
            Eindproduct
          </a>
        ) : null}
        {reflectionId ? (
          <a href={`#${project.id}-${reflectionId}`} className="hku-project-jump-link">
            Reflectie
          </a>
        ) : null}
      </nav>

      {introChapter ? (
        <div className="container hku-project-intro" id={`${project.id}-intro`}>
          <p className="hku-project-intro-text">{introChapter.text}</p>
        </div>
      ) : null}

      <div className="hku-project-chapters">
        {project.chapters
          .filter((chapter) => chapter.type !== "intro")
          .map((chapter) => (
            <HkuProjectChapter
              key={chapter.id}
              projectId={project.id}
              projectTitle={project.title}
              chapter={chapter}
            />
          ))}
      </div>
    </section>
  );
}
