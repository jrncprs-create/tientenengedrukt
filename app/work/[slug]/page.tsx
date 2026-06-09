import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getProjectsWithFallback } from "@/lib/projects";

export const revalidate = 60;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjectsWithFallback();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projects = await getProjectsWithFallback();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container project-page">
      <ScrollReveal className="project-header">
        <header>
          <h1 className="project-heading">{project.title}</h1>
          <p className="project-details">
            <span>{project.year}</span>
            <span>{project.category}</span>
          </p>
          <p className="project-summary">{project.summary}</p>
        </header>
      </ScrollReveal>

      <section className="project-grid" aria-label="Project beelden">
        {project.images.map((src, index) => (
          <ScrollReveal key={`${project.slug}-${index}`} className="grid-item">
            <Image
              src={src}
              alt={`${project.title} placeholder ${index + 1}`}
              width={1600}
              height={1000}
            />
          </ScrollReveal>
        ))}
      </section>

      <ScrollReveal className="back-link-wrap">
        <p>
          <Link href="/" className="back-link">
            Terug naar homepage
          </Link>
        </p>
      </ScrollReveal>
    </main>
  );
}
