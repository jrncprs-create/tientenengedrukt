import type { HkuProject } from "@/data/hkuPortfolio";

type HkuPortfolioSubnavProps = {
  projects: HkuProject[];
};

function getFinalChapterId(project: HkuProject) {
  return project.chapters.find((chapter) => chapter.type === "final")?.id;
}

export function HkuPortfolioSubnav() {
  return (
    <nav className="hku-subnav" aria-label="Portfolio navigatie">
      <div className="container hku-subnav-inner">
        <a href="#intro" className="hku-subnav-link">
          Intro
        </a>
        <a href="#eindproducten" className="hku-subnav-link">
          Eindproducten
        </a>
        <a href="#projecten" className="hku-subnav-link">
          Projecten
        </a>
        <a href="#cv" className="hku-subnav-link">
          CV
        </a>
        <a href="#intro" className="hku-subnav-link hku-subnav-top">
          Terug naar boven
        </a>
      </div>
    </nav>
  );
}

export function HkuEindproductenIndex({ projects }: HkuPortfolioSubnavProps) {
  const entries = projects
    .map((project) => {
      const finalId = getFinalChapterId(project);
      if (!finalId) return null;
      const finalChapter = project.chapters.find((chapter) => chapter.id === finalId);
      return {
        projectId: project.id,
        title: project.title,
        finalId,
        chapterTitle: finalChapter?.title ?? "Eindproduct",
      };
    })
    .filter(Boolean) as {
    projectId: string;
    title: string;
    finalId: string;
    chapterTitle: string;
  }[];

  if (entries.length === 0) return null;

  return (
    <nav
      className="container hku-eindproducten"
      id="eindproducten"
      aria-label="Eindproducten"
    >
      <p className="section-kicker">Eindproducten</p>
      <ul className="hku-eindproducten-list">
        {entries.map((entry) => (
          <li key={entry.projectId}>
            <a
              href={`#${entry.projectId}-${entry.finalId}`}
              className="hku-eindproducten-link"
            >
              <span className="hku-eindproducten-title">{entry.title}</span>
              <span className="hku-eindproducten-chapter">{entry.chapterTitle}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
