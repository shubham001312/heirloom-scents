import Image from "next/image";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { LinkCta } from "@/components/ui/LinkCta";
import { ScrollEffects } from "@/components/home/ScrollEffects";

export default function Home() {
  const { hero, intro, events, archive, cta } = homeContent;

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="home-hero">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="home-hero__overlay" />
        <div className="home-hero__copy">
          <div className="kicker">{hero.eyebrow}</div>
          <h1 className="home-hero__title">
            <span className="home-hero__display">{hero.titleDisplay}</span>
            <span className="home-hero__small">{hero.titleSmall}</span>
          </h1>
          <div className="home-hero__tag">{hero.tagline}</div>
          <div className="rule" />
          <Button variant="outline-light" href={hero.ctaHref}>
            {hero.ctaLabel} <span aria-hidden="true">→</span>
          </Button>
        </div>
        <div className="home-hero__scroll" aria-hidden="true">
          Scroll
        </div>
      </section>

      {/* Intro + Steps */}
      <section className="section ritual-section">
        <div className="ritual-sticky">
          <div>
            <div className="kicker">{intro.kicker}</div>
            <h2>
              {intro.titleLine1}
              <br />
              <em>{intro.titleLine2}</em>
            </h2>
          </div>
          <p>{intro.description}</p>
        </div>
        <div className="ritual-steps">
          {intro.steps.map((step, index) => (
            <div key={step.number} className={`ritual-step step-${index + 1}`}>
              <div className="step-no">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="section cream fade-in-up">
        <div className="section-head">
          <div className="kicker">{events.kicker}</div>
          <h2>
            {events.titleLine1}
            <br />
            {events.titleLine2}
          </h2>
          <div className="rule" />
        </div>
        <div className="occasion-grid">
          {events.items.map((item, index) => {
            // Map each event to its corresponding occasion card class
            const occasionClass =
              index === 0 ? "wedding" : index === 1 ? "showers" : "private";
            return (
              <article key={item.name} className={`occasion-card ${occasionClass}`}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  className="portrait-image"
                  width={600}
                  height={462}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
                <div className="meta">
                  <h3>{item.name}</h3>
                  <p>{item.tagline}</p>
                  <LinkCta href={item.href}>
                    Explore <span aria-hidden="true">→</span>
                  </LinkCta>
                </div>
              </article>
            );
          })}
        </div>
        <div className="center" style={{ marginTop: "60px" }}>
          <Button variant="primary" href="/experience">
            View all events <span aria-hidden="true">→</span>
          </Button>
        </div>
      </section>

      {/* Scent Archive */}
      <section className="section archive fade-in-up">
        <div className="section-head">
          <div className="kicker">{archive.kicker}</div>
          <h2>
            {archive.titleLine1}
            <br />
            {archive.titleLine2}
          </h2>
          <div className="rule" />
        </div>
        <div className="archive-grid">
          {archive.scents.map((scent) => (
            <article key={scent.name} className="scent">
              <Image
                src={scent.image}
                alt={scent.imageAlt}
                width={400}
                height={280}
                style={{ width: "100%", height: "210px", objectFit: "cover" }}
              />
              <h3>{scent.name}</h3>
              <p>{scent.notes}</p>
              <p className="scent-education">{scent.education}</p>
              <LinkCta href="/experience">
                Discover <span aria-hidden="true">→</span>
              </LinkCta>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta fade-in-up">
        <Image
          src={cta.image}
          alt={cta.imageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
        <div className="cta-copy">
          <div className="kicker">{cta.kicker}</div>
          <h2>
            {cta.titleLine1}
            <br />
            <em>{cta.titleLine2}</em>
          </h2>
          <Button variant="outline-light" href={cta.ctaHref}>
            {cta.ctaLabel} <span aria-hidden="true">→</span>
          </Button>
        </div>
      </section>
      <ScrollEffects />
    </main>
  );
}
