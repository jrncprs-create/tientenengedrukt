"use client";

import type * as React from "react";
import { registerComponent as registerHostComponent } from "@plasmicapp/host";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";
import {
  fallbackCapabilities,
  fallbackCvItems,
  fallbackSiteSettings,
} from "@/data/siteContent";

type EditorialHeroProps = {
  kicker: string;
  title: string;
  intro: string;
  note: string;
};

type EditorialStatementProps = {
  label: string;
  text: string;
};

type EditorialTextBlockProps = {
  eyebrow: string;
  title: string;
  body: string;
};

type EditorialContactBlockProps = {
  title: string;
  email: string;
  location: string;
  text: string;
};

type EditorialProjectIndexProps = {
  heading: string;
  intro: string;
};

type EditorialHomepageTemplateProps = {
  heroKicker: string;
  heroTitle: string;
  heroIntro: string;
  contactEmail: string;
  contactText: string;
};

type PlasmicLoaderLike = {
  registerComponent: unknown;
};

let loaderRegistered = false;
let hostRegistered = false;

export function EditorialHero({
  kicker,
  title,
  intro,
  note,
}: EditorialHeroProps) {
  return <Header kicker={kicker} title={title} subtitle={intro} note={note} />;
}

export function EditorialStatement({ label, text }: EditorialStatementProps) {
  return (
    <section className="container home-section home-statement">
      <ScrollReveal>
        <p className="section-kicker">{label}</p>
        <h2 className="statement-heading">{text}</h2>
      </ScrollReveal>
    </section>
  );
}

export function EditorialTextBlock({
  eyebrow,
  title,
  body,
}: EditorialTextBlockProps) {
  return (
    <section className="container home-section split-section">
      <ScrollReveal className="split-heading">
        <p className="section-kicker">{eyebrow}</p>
        <h2 className="editorial-heading">{title}</h2>
      </ScrollReveal>

      <div className="split-copy">
        <ScrollReveal>
          <p className="body-copy">{body}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function EditorialContactBlock({
  title,
  email,
  location,
  text,
}: EditorialContactBlockProps) {
  return (
    <section className="container home-section contact-section">
      <ScrollReveal>
        <p className="section-kicker">Contact</p>
        <h2 className="contact-heading">{title}</h2>
      </ScrollReveal>

      <div className="contact-grid">
        <ScrollReveal>
          <p className="large-copy">{text}</p>
        </ScrollReveal>

        <ScrollReveal>
          <ul className="contact-list">
            <li>
              <span>Mail</span>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <span>Location</span>
              <span>{location}</span>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function EditorialProjectIndex({
  heading,
  intro,
}: EditorialProjectIndexProps) {
  return (
    <section className="container home-section">
      <section className="project-index" aria-labelledby="plasmic-work-title">
        <ScrollReveal className="section-title-wrap">
          <p className="section-kicker">{heading}</p>
          <h2 id="plasmic-work-title" className="project-index-title">
            {intro}
          </h2>
        </ScrollReveal>

        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </section>
  );
}

export function EditorialHomepageTemplate({
  heroKicker,
  heroTitle,
  heroIntro,
  contactEmail,
  contactText,
}: EditorialHomepageTemplateProps) {
  return (
    <main className="plasmic-home-template">
      <section className="plasmic-template-hero">
        <div className="hero-video-placeholder" aria-hidden="true">
          <span className="video-shape video-shape-one" />
          <span className="video-shape video-shape-two" />
          <span className="video-shape video-shape-three" />
        </div>

        <div className="container plasmic-template-hero-inner">
          <div className="site-header">
            <header>
              <p className="site-kicker">{heroKicker}</p>
              <h1 className="site-title">{heroTitle}</h1>
              <div className="site-intro-grid">
                <p className="site-subtitle">{heroIntro}</p>
                <p className="site-note">{fallbackSiteSettings.heroNote}</p>
              </div>
            </header>
          </div>
        </div>
      </section>

      <section className="container home-section home-statement">
        <ScrollReveal>
          <p className="section-kicker">{fallbackSiteSettings.statementKicker}</p>
          <h2 className="statement-heading">
            {fallbackSiteSettings.statementTitle}
          </h2>
        </ScrollReveal>

        <div className="statement-grid">
          <ScrollReveal>
            <p className="large-copy">{fallbackSiteSettings.statementIntro}</p>
          </ScrollReveal>
          <ScrollReveal>
            <p className="body-copy">{fallbackSiteSettings.statementBody}</p>
          </ScrollReveal>
        </div>
      </section>

      <EditorialProjectIndex
        heading="Selected work"
        intro="Work that moves between image, space and production."
      />

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

      <section className="container home-section cv-section">
        <ScrollReveal>
          <p className="section-kicker">CV</p>
          <h2 className="editorial-heading">Experience</h2>
        </ScrollReveal>

        <div className="cv-list">
          {fallbackCvItems.map((item) => (
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

      <EditorialContactBlock
        title={fallbackSiteSettings.contactHeading}
        email={contactEmail}
        location={fallbackSiteSettings.location}
        text={contactText}
      />
    </main>
  );
}

type RegisterComponent = (
  component: React.ComponentType<unknown>,
  meta: Record<string, unknown>,
) => void;

function registerAll(registerComponent: RegisterComponent) {
  registerComponent(
    EditorialHero as React.ComponentType<unknown>,
    {
      name: "EditorialHero",
      displayName: "Editorial Hero",
      importPath: "@/components/plasmic/PlasmicEditorialBlocks",
      props: {
        kicker: { type: "string", defaultValue: "Portfolio 2026" },
        title: { type: "string", defaultValue: "JOEP CUYPERS" },
        intro: {
          type: "string",
          defaultValue:
            "Art direction, visual concepts and production for events, campaigns and branded spaces.",
        },
        note: {
          type: "string",
          defaultValue:
            "From first visual direction to on-site production, Joep works where graphic design, spatial rhythm and cultural events meet.",
        },
      },
    },
  );

  registerComponent(
    EditorialStatement as React.ComponentType<unknown>,
    {
      name: "EditorialStatement",
      displayName: "Editorial Statement",
      importPath: "@/components/plasmic/PlasmicEditorialBlocks",
      props: {
        label: { type: "string", defaultValue: "Practice" },
        text: {
          type: "string",
          defaultValue: "Designing visual systems for temporary worlds.",
        },
      },
    },
  );

  registerComponent(
    EditorialTextBlock as React.ComponentType<unknown>,
    {
      name: "EditorialTextBlock",
      displayName: "Editorial Text Block",
      importPath: "@/components/plasmic/PlasmicEditorialBlocks",
      props: {
        eyebrow: { type: "string", defaultValue: "Approach" },
        title: {
          type: "string",
          defaultValue: "From visual direction to buildable detail.",
        },
        body: {
          type: "string",
          defaultValue:
            "A strong image is only useful when it survives production. The work combines mood, typography, material choices, planning and practical execution.",
        },
      },
    },
  );

  registerComponent(
    EditorialContactBlock as React.ComponentType<unknown>,
    {
      name: "EditorialContactBlock",
      displayName: "Editorial Contact Block",
      importPath: "@/components/plasmic/PlasmicEditorialBlocks",
      props: {
        title: { type: "string", defaultValue: "Let's make the image work." },
        email: { type: "string", defaultValue: "hello@joepcuypers.nl" },
        location: {
          type: "string",
          defaultValue: "Amsterdam / available for projects",
        },
        text: {
          type: "string",
          defaultValue:
            "For collaborations, campaign visuals, event identities or production-based art direction.",
        },
      },
    },
  );

  registerComponent(
    EditorialProjectIndex as React.ComponentType<unknown>,
    {
      name: "EditorialProjectIndex",
      displayName: "Editorial Project Index",
      importPath: "@/components/plasmic/PlasmicEditorialBlocks",
      props: {
        heading: { type: "string", defaultValue: "Selected work" },
        intro: {
          type: "string",
          defaultValue:
            "Work that moves between image, space and production.",
        },
      },
    },
  );

  registerComponent(
    EditorialHomepageTemplate as React.ComponentType<unknown>,
    {
      name: "EditorialHomepageTemplate",
      displayName: "Editorial Homepage Template",
      importPath: "@/components/plasmic/PlasmicEditorialBlocks",
      props: {
        heroKicker: {
          type: "string",
          defaultValue: fallbackSiteSettings.heroKicker,
        },
        heroTitle: {
          type: "string",
          defaultValue: fallbackSiteSettings.heroTitle,
        },
        heroIntro: {
          type: "string",
          defaultValue: fallbackSiteSettings.heroSubtitle,
        },
        contactEmail: {
          type: "string",
          defaultValue: fallbackSiteSettings.email,
        },
        contactText: {
          type: "string",
          defaultValue: fallbackSiteSettings.contactText,
        },
      },
    },
  );
}

export function registerEditorialPlasmicComponents(loader: PlasmicLoaderLike) {
  if (loaderRegistered) {
    return;
  }

  loaderRegistered = true;
  registerAll(
    (loader.registerComponent as RegisterComponent).bind(loader),
  );
}

export function registerEditorialPlasmicHostComponents() {
  if (hostRegistered) {
    return;
  }

  hostRegistered = true;
  registerAll(
    registerHostComponent as unknown as (
    component: React.ComponentType<unknown>,
    meta: Record<string, unknown>,
    ) => void,
  );
}
