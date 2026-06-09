import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

type HeaderProps = {
  kicker: string;
  title: string;
  subtitle: string;
  note: string;
  heroMediaType?: "image" | "video";
  heroImage?: string | null;
  heroVideo?: string | null;
  heroVideoPoster?: string | null;
};

export function Header({
  kicker,
  title,
  subtitle,
  note,
  heroMediaType = "image",
  heroImage,
  heroVideo,
  heroVideoPoster,
}: HeaderProps) {
  const shouldShowVideo = heroMediaType === "video" && heroVideo;
  const shouldShowImage = !shouldShowVideo && heroImage;

  return (
    <section className="hero">
      <div className="hero-video-placeholder" aria-hidden="true">
        {shouldShowVideo ? (
          <video
            className="hero-background-video"
            src={heroVideo}
            poster={heroVideoPoster ?? heroImage ?? undefined}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : null}
        {shouldShowImage ? (
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-background-image"
          />
        ) : null}
        <span className="video-shape video-shape-one" />
        <span className="video-shape video-shape-two" />
        <span className="video-shape video-shape-three" />
      </div>

      <div className="container hero-inner">
        <ScrollReveal className="site-header">
          <header>
            <p className="site-kicker">{kicker}</p>
            <h1 className="site-title">{title}</h1>
            <div className="site-intro-grid">
              <p className="site-subtitle">{subtitle}</p>
              <p className="site-note">{note}</p>
            </div>
          </header>
        </ScrollReveal>
      </div>
    </section>
  );
}
