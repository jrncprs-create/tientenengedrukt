"use client";

import type * as React from "react";
import { registerComponent as registerHostComponent } from "@plasmicapp/host";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

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
