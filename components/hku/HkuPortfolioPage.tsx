import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { hkuPortfolio } from "@/data/hkuPortfolio";
import { HkuProjectSection } from "@/components/hku/HkuProjectSection";
import {
  HkuEindproductenIndex,
  HkuPortfolioSubnav,
} from "@/components/hku/HkuPortfolioSubnav";
import type { SiteSettings } from "@/data/siteContent";

type HkuPortfolioPageProps = {
  siteSettings: SiteSettings;
};

function getInstagramHref(instagram: string) {
  if (instagram.startsWith("http")) {
    return instagram;
  }

  return `https://instagram.com/${instagram.replace(/^@/, "")}`;
}

export function HkuPortfolioPage({ siteSettings }: HkuPortfolioPageProps) {
  const { intro, projects, cv } = hkuPortfolio;

  return (
    <main className="hku-page">
      <HkuPortfolioSubnav />

      <section className="container hku-hero" id="intro">
        <ScrollReveal>
          <p className="section-kicker">{intro.kicker}</p>
          <h1 className="hku-hero-title">{intro.name}</h1>
          <p className="hku-hero-degree">{intro.degree}</p>
        </ScrollReveal>

        <ScrollReveal className="hku-hero-copy">
          <p className="large-copy">{intro.summary}</p>
        </ScrollReveal>

        <ScrollReveal className="hku-focus-list">
          {intro.focus.map((item) => (
            <span key={item} className="hku-focus-item">
              {item}
            </span>
          ))}
        </ScrollReveal>
      </section>

      <HkuEindproductenIndex projects={projects} />

      <nav
        className="container hku-index"
        id="projecten"
        aria-label="Projecten"
      >
        <ScrollReveal>
          <p className="section-kicker">Index</p>
          <ul className="hku-index-list">
            {projects.map((project, index) => (
              <li key={project.id}>
                <a href={`#${project.id}`} className="hku-index-link">
                  <span className="hku-index-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="hku-index-title">{project.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </nav>

      <div className="hku-projects">
        {projects.map((project, index) => (
          <HkuProjectSection
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      <section className="container hku-cv" id="cv">
        <ScrollReveal>
          <p className="section-kicker">Ondersteunend</p>
          <h2 className="editorial-heading">{cv.title}</h2>
          <p className="body-copy hku-cv-summary">{cv.summary}</p>
        </ScrollReveal>

        <ScrollReveal className="hku-cv-download">
          <a
            href={cv.pdfHref}
            className="hku-pdf-link hku-cv-pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hku-pdf-label">{cv.pdfLabel}</span>
            <span className="hku-pdf-meta">PDF - openen in nieuw tabblad</span>
          </a>
        </ScrollReveal>

        <div className="cv-list hku-cv-list">
          {cv.highlights.map((item) => (
            <ScrollReveal key={`${item.year}-${item.title}`} className="cv-row">
              <span className="cv-year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="hku-contact">
          <p className="section-kicker">Contact</p>
          <ul className="contact-list">
            <li>
              <span>Mail</span>
              <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
            </li>
            <li>
              <span>Instagram</span>
              <a href={getInstagramHref(siteSettings.instagram)}>
                {siteSettings.instagram}
              </a>
            </li>
            <li>
              <span>Locatie</span>
              <span>{siteSettings.location}</span>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal className="back-link-wrap">
          <p>
            <Link href="/" className="back-link">
              Terug naar tientenengedrukt.nl
            </Link>
          </p>
        </ScrollReveal>
      </section>
    </main>
  );
}
