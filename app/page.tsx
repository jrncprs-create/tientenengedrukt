import { Header } from "@/components/Header";
import { ProjectIndex } from "@/components/ProjectIndex";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <ProjectIndex projects={projects} />
    </main>
  );
}
