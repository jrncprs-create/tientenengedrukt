import Image from "next/image";
import type { HkuMediaGroup, HkuMediaItem } from "@/lib/hkuMedia";

type HkuMediaSequenceProps = {
  group: HkuMediaGroup;
};

function MediaItem({ item }: { item: HkuMediaItem }) {
  if (item.type === "pdf") {
    return (
      <a
        href={item.src}
        className="hku-pdf-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hku-pdf-label">{item.label ?? item.alt}</span>
        <span className="hku-pdf-meta">PDF - openen in nieuw tabblad</span>
      </a>
    );
  }

  if (item.type === "video") {
    return (
      <figure className="hku-media-item hku-media-video">
        <video controls preload="metadata" playsInline>
          <source src={item.src} type="video/mp4" />
        </video>
        {item.label ? (
          <figcaption className="hku-media-caption">{item.label}</figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className="hku-media-item hku-media-image">
      <Image
        src={item.src}
        alt={item.alt}
        width={1800}
        height={1200}
        sizes="(max-width: 900px) 100vw, min(1440px, 100vw - 3rem)"
        style={{ width: "100%", height: "auto" }}
      />
      {item.label ? (
        <figcaption className="hku-media-caption">{item.label}</figcaption>
      ) : null}
    </figure>
  );
}

export function HkuMediaSequence({ group }: HkuMediaSequenceProps) {
  if (group.items.length === 0) return null;

  return (
    <section className="hku-media-group" aria-label={group.title}>
      <h4 className="hku-media-group-title">{group.title}</h4>
      <div className="hku-media-sequence">
        {group.items.map((item) => (
          <MediaItem key={item.src} item={item} />
        ))}
      </div>
    </section>
  );
}
