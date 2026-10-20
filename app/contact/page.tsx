import Header from "@/components/Header";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <Header variant="light" />
      <main className="page">
        <h1 className="pageTitle">Contact</h1>
        <div className="contactBlock">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <a href={site.socials.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={site.socials.youtube} target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.socials.soundcloud} target="_blank" rel="noreferrer">
            SoundCloud
          </a>
        </div>
      </main>
    </>
  );
}
