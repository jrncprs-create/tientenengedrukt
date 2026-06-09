import { ScrollReveal } from "@/components/ScrollReveal";
import { getAboutPageWithFallback } from "@/lib/siteContent";

export const revalidate = 60;

export default async function AboutPage() {
  const about = await getAboutPageWithFallback();

  return (
    <main className="container page-shell about-page">
      <ScrollReveal className="page-hero">
        <p className="section-kicker">About</p>
        <h1 className="page-title">{about.title}</h1>
      </ScrollReveal>

      <section className="about-intro">
        <ScrollReveal>
          <p className="large-copy">{about.intro}</p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-copy">{about.body}</p>
        </ScrollReveal>
      </section>

      <section className="about-block">
        <ScrollReveal>
          <p className="section-kicker">Profile</p>
          <h2 className="editorial-heading">{about.profileTitle}</h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="body-copy">{about.profileText}</p>
        </ScrollReveal>
      </section>

      <section className="about-block">
        <ScrollReveal>
          <p className="section-kicker">Method</p>
          <h2 className="editorial-heading">{about.methodTitle}</h2>
        </ScrollReveal>
        <div className="method-grid">
          {about.methodItems.map((item) => (
            <ScrollReveal key={`${item.number}-${item.text}`}>
              <p>
                <span>{item.number}</span>
                {item.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="about-block">
        <ScrollReveal>
          <p className="section-kicker">Selected clients / contexts</p>
        </ScrollReveal>
        <div className="context-list">
          {about.contexts.map((context) => (
            <ScrollReveal key={context} className="context-item">
              <span>{context}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
