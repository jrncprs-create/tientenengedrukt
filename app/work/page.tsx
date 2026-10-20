import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <>
      <Header variant="light" />
      <main className="page">
        <h1 className="pageTitle">Work</h1>
        <ProjectList projects={projects} />
      </main>
    </>
  );
}
