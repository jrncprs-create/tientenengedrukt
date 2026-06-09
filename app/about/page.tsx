import { ScrollReveal } from "@/components/ScrollReveal";

const contexts = [
  "Music campaigns",
  "Club nights",
  "Cultural festivals",
  "Brand activations",
  "Artist visuals",
  "Independent productions",
];

export default function AboutPage() {
  return (
    <main className="container page-shell about-page">
      <ScrollReveal className="page-hero">
        <p className="section-kicker">About</p>
        <h1 className="page-title">About Joep</h1>
      </ScrollReveal>

      <section className="about-intro">
        <ScrollReveal>
          <p className="large-copy">
            Joep Cuypers is a graphic designer and art director working across
            visual identity, events, campaigns and production.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-copy">
            His practice is shaped by music culture, printed matter, temporary
            architecture and the practical reality of making things happen. The
            work often begins as a graphic idea and ends as something physical,
            social or spatial.
          </p>
        </ScrollReveal>
      </section>

      <section className="about-block">
        <ScrollReveal>
          <p className="section-kicker">Profile</p>
          <h2 className="editorial-heading">Graphic thinking for live contexts.</h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-copy">
            Joep works where image, typography, rhythm and production meet. His
            portfolio moves between campaign work, visual systems, styling,
            stage-related identity and event-based communication.
          </p>
        </ScrollReveal>
      </section>

      <section className="about-block">
        <ScrollReveal>
          <p className="section-kicker">Method</p>
          <h2 className="editorial-heading">
            Clear mood, strong layout, practical execution.
          </h2>
        </ScrollReveal>
        <div className="method-grid">
          <ScrollReveal>
            <p>
              <span>01</span>
              Read the context: artist, space, audience, timing and constraints.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              <span>02</span>
              Build a visual direction that can stretch across screen, print,
              object and space.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              <span>03</span>
              Keep the design sharp enough to feel authored and practical enough
              to be produced.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="about-block">
        <ScrollReveal>
          <p className="section-kicker">Selected clients / contexts</p>
        </ScrollReveal>
        <div className="context-list">
          {contexts.map((context) => (
            <ScrollReveal key={context} className="context-item">
              <span>{context}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
