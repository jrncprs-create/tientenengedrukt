import Image from "next/image";
import type { HkuMediaItem } from "@/lib/hkuMedia";

type HkuMediaFrameProps = {
  items: HkuMediaItem[];
  caption?: string;
  priority?: boolean;
};

export function HkuMediaFrame({
  items,
  caption,
  priority = false,
}: HkuMediaFrameProps) {
  const [item] = items;

  if (!item) return null;

  if (items.length > 1) {
    return (
      <figure className="hku-media-frame hku-media-frame-image hku-media-frame-spread">
        <div className="hku-media-frame-stage hku-media-frame-stage-spread">
          {items.map((spreadItem, index) => (
            <div key={spreadItem.src} className="hku-media-frame-pane">
              <Image
                src={spreadItem.src}
                alt={spreadItem.alt}
                width={2200}
                height={1600}
                priority={priority && index === 0}
                className="hku-media-frame-img"
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
          ))}
        </div>
        {caption ? (
          <figcaption className="hku-viewer-caption">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  if (item.type === "pdf") {
    return (
      <figure className="hku-media-frame hku-media-frame-pdf">
        <a
          href={item.src}
          className="hku-pdf-link hku-pdf-link-viewer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hku-pdf-label">{item.label ?? item.alt}</span>
          <span className="hku-pdf-meta">PDF - openen in nieuw tabblad</span>
        </a>
        {caption ? (
          <figcaption className="hku-viewer-caption">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  if (item.type === "video") {
    return (
      <figure className="hku-media-frame hku-media-frame-video">
        <div className="hku-media-frame-stage">
          <video controls preload="metadata" playsInline className="hku-media-frame-video">
            <source src={item.src} type="video/mp4" />
          </video>
        </div>
        {caption ? (
          <figcaption className="hku-viewer-caption">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className="hku-media-frame hku-media-frame-image">
      <div className="hku-media-frame-stage">
        <Image
          src={item.src}
          alt={item.alt}
          width={2200}
          height={1600}
          priority={priority}
          className="hku-media-frame-img"
          sizes="(max-width: 900px) 100vw, min(1440px, 100vw - 3rem)"
        />
      </div>
      {caption ? (
        <figcaption className="hku-viewer-caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
