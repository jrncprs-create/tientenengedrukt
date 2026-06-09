import { Header } from "@/components/Header";
import { ProjectIndex } from "@/components/ProjectIndex";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

const capabilities = [
  "Art direction",
  "Campaign visuals",
  "Event identities",
  "Spatial styling",
  "Production design",
  "Graphic systems",
  "Image editing",
  "On-site visual support",
];

const cvItems = [
  {
    year: "2025",
    title: "Freelance art direction and visual production",
    text: "Visual concepts, campaign roll-outs and production support for cultural and commercial projects.",
  },
  {
    year: "2024",
    title: "Campaign and event identity projects",
    text: "Graphic systems, artist assets and adaptable visual directions for temporary cultural spaces.",
  },
  {
    year: "2023",
    title: "Spatial and graphic systems for cultural events",
    text: "Identity work translated into signage, stage moments, screens, print and on-site details.",
  },
  {
    year: "2022",
    title: "Artist visuals and production support",
    text: "Image direction, layout, styling references and practical production for music-led projects.",
  },
  {
    year: "2021",
    title: "Graphic design, layout and image direction",
    text: "Editorial tests, printed matter, visual research and portfolio-based design work.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="container home-section home-statement" id="statement">
        <ScrollReveal>
          <p className="section-kicker">Practice</p>
          <h2 className="statement-heading">
            Designing visual systems for temporary worlds.
          </h2>
        </ScrollReveal>

        <div className="statement-grid">
          <ScrollReveal>
            <p className="large-copy">
              Joep Cuypers develops visual identities, campaign images and
              production-ready concepts for events, artists, agencies and
              cultural spaces.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body-copy">
              His work moves between graphic design, styling, set logic and
              hands-on making. The result is visual direction that can live as a
              poster, a stage cue, a social asset, a spatial detail or a full
              event language.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container home-section" id="work">
        <ProjectIndex projects={projects} />
      </section>

      <section className="container home-section split-section">
        <ScrollReveal className="split-heading">
          <p className="section-kicker">Approach</p>
          <h2 className="editorial-heading">
            From visual direction to buildable detail.
          </h2>
        </ScrollReveal>

        <div className="split-copy">
          <ScrollReveal>
            <p className="body-copy">
              A strong image is only useful when it survives production. The
              work combines mood, typography, material choices, planning and
              practical execution.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body-copy">
              Each project starts with a clear visual rhythm: what should feel
              loud, what should stay quiet, and where the audience meets the
              work first.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container home-section capabilities-section">
        <ScrollReveal>
          <p className="section-kicker">Capabilities</p>
          <h2 className="editorial-heading">What I do</h2>
        </ScrollReveal>

        <div className="capability-list">
          {capabilities.map((item) => (
            <ScrollReveal key={item} className="capability-item">
              <span>{item}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container home-section cv-section" id="cv">
        <ScrollReveal>
          <p className="section-kicker">CV</p>
          <h2 className="editorial-heading">Experience</h2>
        </ScrollReveal>

        <div className="cv-list">
          {cvItems.map((item) => (
            <ScrollReveal key={`${item.year}-${item.title}`} className="cv-row">
              <span className="cv-year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="skills-line">
          <p>
            <span>Skills</span> Art direction / Layout / Typography / Image
            research / Styling / Production / Adobe CC / Web direction
          </p>
        </ScrollReveal>
      </section>

      <section className="container home-section contact-section" id="contact">
        <ScrollReveal>
          <p className="section-kicker">Contact</p>
          <h2 className="contact-heading">Let’s make the image work.</h2>
        </ScrollReveal>

        <div className="contact-grid">
          <ScrollReveal>
            <p className="large-copy">
              For collaborations, campaign visuals, event identities or
              production-based art direction.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="contact-list">
              <li>
                <span>Mail</span>
                <a href="mailto:hello@joepcuypers.nl">hello@joepcuypers.nl</a>
              </li>
              <li>
                <span>Instagram</span>
                <a href="https://instagram.com/joepcuypers">@joepcuypers</a>
              </li>
              <li>
                <span>Location</span>
                <span>Amsterdam / available for projects</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
