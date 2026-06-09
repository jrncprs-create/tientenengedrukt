import { ScrollReveal } from "./ScrollReveal";

export function Header() {
  return (
    <ScrollReveal className="site-header">
      <header>
        <p className="site-kicker">Portfolio 2026</p>
        <h1 className="site-title">JOEP CUYPERS</h1>
        <div className="site-intro-grid">
          <p className="site-subtitle">
            Art direction, vormgeving en productie voor evenementen en branding
          </p>
          <p className="site-note">
            Selected work translated from a graphic portfolio into a living web
            structure: typographic, image-led and easy to update.
          </p>
        </div>
      </header>
    </ScrollReveal>
  );
}
