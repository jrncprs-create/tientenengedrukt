import { Header } from "@/components/Header";
import { ProjectIndex } from "@/components/ProjectIndex";
import { ScrollReveal } from "@/components/ScrollReveal";
import { fallbackCapabilities } from "@/data/siteContent";
import { getProjectsWithFallback } from "@/lib/projects";
import {
  getCvItemsWithFallback,
  getSiteSettingsWithFallback,
} from "@/lib/siteContent";

export const revalidate = 60;

function getInstagramHref(instagram: string) {
  if (instagram.startsWith("http")) {
    return instagram;
  }

  return `https://instagram.com/${instagram.replace(/^@/, "")}`;
}

export default async function Home() {
  const [projects, siteSettings, cvItems] = await Promise.all([
    getProjectsWithFallback(),
    getSiteSettingsWithFallback(),
    getCvItemsWithFallback(),
  ]);

  return (
    <main>
      <Header
        kicker={siteSettings.heroKicker}
        title={siteSettings.heroTitle}
        subtitle={siteSettings.heroSubtitle}
        note={siteSettings.heroNote}
      />

      <section className="container home-section home-statement" id="statement">
        <ScrollReveal>
          <p className="section-kicker">{siteSettings.statementKicker}</p>
          <h2 className="statement-heading">{siteSettings.statementTitle}</h2>
        </ScrollReveal>

        <div className="statement-grid">
          <ScrollReveal>
            <p className="large-copy">{siteSettings.statementIntro}</p>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body-copy">{siteSettings.statementBody}</p>
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
          {fallbackCapabilities.map((item) => (
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
          <h2 className="contact-heading">{siteSettings.contactHeading}</h2>
        </ScrollReveal>

        <div className="contact-grid">
          <ScrollReveal>
            <p className="large-copy">{siteSettings.contactText}</p>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="contact-list">
              <li>
                <span>Mail</span>
                <a href={`mailto:${siteSettings.email}`}>
                  {siteSettings.email}
                </a>
              </li>
              <li>
                <span>Instagram</span>
                <a href={getInstagramHref(siteSettings.instagram)}>
                  {siteSettings.instagram}
                </a>
              </li>
              <li>
                <span>Location</span>
                <span>{siteSettings.location}</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
