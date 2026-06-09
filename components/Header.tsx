import { ScrollReveal } from "./ScrollReveal";

type HeaderProps = {
  kicker: string;
  title: string;
  subtitle: string;
  note: string;
};

export function Header({ kicker, title, subtitle, note }: HeaderProps) {
  return (
    <section className="hero">
      <div className="hero-video-placeholder" aria-hidden="true">
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
