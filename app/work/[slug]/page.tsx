import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectMediaGallery } from "@/components/ProjectMediaGallery";
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
      <section className="project-layout">
        <aside className="project-sidebar-shell">
          <div className="project-sidebar">
            <ScrollReveal className="project-sidebar-copy">
              <header className="project-header">
                <h1 className="project-heading">{project.title}</h1>
                <p className="project-details">
                  <span>{project.year}</span>
                  <span>{project.category}</span>
                </p>
                <p className="project-summary">{project.summary}</p>
              </header>
            </ScrollReveal>

            <ScrollReveal className="back-link-wrap project-back-link">
              <p>
                <Link href="/" className="back-link">
                  Terug naar homepage
                </Link>
              </p>
            </ScrollReveal>
          </div>
        </aside>

        <ProjectMediaGallery
          key={project.slug}
          projectSlug={project.slug}
          projectTitle={project.title}
          media={project.media}
        />
      </section>
    </main>
  );
}
