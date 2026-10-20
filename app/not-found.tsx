import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header variant="light" />
      <main className="page">
        <h1 className="pageTitle">Not found</h1>
        <p className="prose">
          <Link href="/">Terug naar home</Link>
        </p>
      </main>
    </>
  );
}
