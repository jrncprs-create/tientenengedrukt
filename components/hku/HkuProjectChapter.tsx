import { ScrollReveal } from "@/components/ScrollReveal";
import type { HkuChapter } from "@/data/hkuPortfolio";
import { HkuChapterScroller } from "@/components/hku/HkuChapterScroller";

type HkuProjectChapterProps = {
  projectId: string;
  projectTitle: string;
  chapter: HkuChapter;
};

export function HkuProjectChapter({
  projectId,
  projectTitle,
  chapter,
}: HkuProjectChapterProps) {
  const hasMedia = chapter.mediaGroups && chapter.mediaGroups.length > 0;
  const isScrollerChapter =
    hasMedia && (chapter.type === "process" || chapter.type === "final");

  return (
    <article
      className={`hku-chapter hku-chapter-${chapter.type}${chapter.type === "final" ? " hku-chapter-final" : ""}`}
      id={`${projectId}-${chapter.id}`}
      aria-labelledby={`${projectId}-${chapter.id}-title`}
    >
      <ScrollReveal className="hku-chapter-header">
        {chapter.label ? (
          <p className="hku-chapter-label">{chapter.label}</p>
        ) : null}
        <h3 className="hku-chapter-title" id={`${projectId}-${chapter.id}-title`}>
          {chapter.title}
        </h3>
        <p className="hku-chapter-text">{chapter.text}</p>
      </ScrollReveal>

      {isScrollerChapter ? (
        <HkuChapterScroller
          projectTitle={projectTitle}
          chapterTitle={chapter.title}
          chapterType={chapter.type as "process" | "final"}
          mediaGroups={chapter.mediaGroups!}
        />
      ) : null}

      {chapter.type === "sources" && hasMedia ? (
        <ScrollReveal className="hku-chapter-sources">
          <p className="hku-sources-kicker">Bronbestanden</p>
          <ul className="hku-sources-list">
            {chapter.mediaGroups!.flatMap((group) =>
              group.items.map((item) => (
                <li key={item.src}>
                  <a
                    href={item.src}
                    className="hku-source-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label ?? item.alt}
                  </a>
                </li>
              )),
            )}
          </ul>
        </ScrollReveal>
      ) : null}
    </article>
  );
}
