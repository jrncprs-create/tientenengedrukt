import { ScrollReveal } from "./ScrollReveal";

export function Header() {
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
            <p className="site-kicker">Portfolio 2026</p>
            <h1 className="site-title">JOEP CUYPERS</h1>
            <div className="site-intro-grid">
              <p className="site-subtitle">
                Art direction, visual concepts and production for events,
                campaigns and branded spaces.
              </p>
              <p className="site-note">
                From first visual direction to on-site production, Joep works
                where graphic design, spatial rhythm and cultural events meet.
              </p>
            </div>
          </header>
        </ScrollReveal>
      </div>
    </section>
  );
}
