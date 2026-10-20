import Header from "@/components/Header";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <Header variant="light" />
      <main className="page">
        <h1 className="pageTitle">About</h1>
        <p className="prose">
          {site.name} is a styling, design and visual maker based in the
          Netherlands. Work spans editorial styling, poster design and visual
          direction — always minimal, intentional and image-led.
        </p>
        <p className="prose" style={{ marginTop: "1.5rem", opacity: 0.6 }}>
          Placeholder bio — vervang met definitieve tekst en portretfoto.
        </p>
      </main>
    </>
  );
}
