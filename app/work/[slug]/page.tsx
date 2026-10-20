import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { getProjectBySlug, projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header variant="light" />
      <article className="projectDetail">
        <h1 className="projectDetailTitle">{project.title}</h1>
        <p className="projectDetailMeta">
          {project.year} · {project.category}
        </p>
        <p className="projectDetailDescription">{project.description}</p>
        <Image
          className="projectDetailImage"
          src={project.image}
          alt={project.title}
          width={1600}
          height={1000}
          sizes="(max-width: 1200px) 100vw, 72rem"
          priority
        />
        <Link className="projectDetailBack" href="/work">
          ← Back to Work
        </Link>
      </article>
    </>
  );
}
