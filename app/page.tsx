import { Header } from "@/components/Header";
import { ProjectIndex } from "@/components/ProjectIndex";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getProjectsWithFallback } from "@/lib/projects";
import {
  getCvItemsWithFallback,
  getHomePageWithFallback,
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
  const [projects, homePage, siteSettings, cvItems] = await Promise.all([
    getProjectsWithFallback(),
    getHomePageWithFallback(),
    getSiteSettingsWithFallback(),
    getCvItemsWithFallback(),
  ]);

  return (
    <main>
      <Header
        kicker={homePage.heroKicker}
        title={homePage.heroTitle}
        subtitle={homePage.heroSubtitle}
        note={homePage.heroNote}
        heroImage={homePage.heroImage}
      />

      <section className="container home-section home-statement" id="statement">
        <ScrollReveal>
          <p className="section-kicker">{homePage.statementKicker}</p>
          <h2 className="statement-heading">{homePage.statementTitle}</h2>
        </ScrollReveal>

        <div className="statement-grid">
          <ScrollReveal>
            <p className="large-copy">{homePage.statementIntro}</p>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body-copy">{homePage.statementBody}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container home-section" id="work">
        <ProjectIndex
          projects={projects}
          kicker={homePage.workKicker}
          title={homePage.workTitle}
        />
      </section>

      <section className="container home-section split-section">
        <ScrollReveal className="split-heading">
          <p className="section-kicker">{homePage.approachKicker}</p>
          <h2 className="editorial-heading">{homePage.approachTitle}</h2>
        </ScrollReveal>

        <div className="split-copy">
          <ScrollReveal>
            <p className="body-copy">{homePage.approachIntro}</p>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body-copy">{homePage.approachBody}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container home-section capabilities-section">
        <ScrollReveal>
          <p className="section-kicker">{homePage.capabilitiesKicker}</p>
          <h2 className="editorial-heading">{homePage.capabilitiesTitle}</h2>
        </ScrollReveal>

        <div className="capability-list">
          {homePage.capabilities.map((item) => (
            <ScrollReveal key={item} className="capability-item">
              <span>{item}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container home-section cv-section" id="cv">
        <ScrollReveal>
          <p className="section-kicker">{homePage.cvKicker}</p>
          <h2 className="editorial-heading">{homePage.cvTitle}</h2>
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
            <span>{homePage.skillsLabel}</span> {homePage.skillsText}
          </p>
        </ScrollReveal>
      </section>

      <section className="container home-section contact-section" id="contact">
        <ScrollReveal>
          <p className="section-kicker">{homePage.contactKicker}</p>
          <h2 className="contact-heading">{homePage.contactHeading}</h2>
        </ScrollReveal>

        <div className="contact-grid">
          <ScrollReveal>
            <p className="large-copy">{homePage.contactText}</p>
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
