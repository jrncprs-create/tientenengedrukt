import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <main className="homePage">
      <Hero />
      <SelectedWorks projects={featured} />
    </main>
  );
}
