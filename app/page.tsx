import Image from "next/image";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { LinkCta } from "@/components/ui/LinkCta";

export default function Home() {
  const { hero, intro, events } = homeContent;

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
          <Button variant="outline" href="/inquire">
            Book your experience <span aria-hidden="true">→</span>
          </Button>
        </div>
        <div className="ritual-steps">
          {intro.steps.map((step, index) => (
            <div key={step.number} className={`ritual-step step-${index + 1}`}>
              <div className="step-no">{step.number}</div>
              <h3>{step.title}</h3>
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
                  className="occasion-image"
                  width={600}
                  height={400}
                  sizes="(max-width: 900px) 90vw, 30vw"
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
      </section>
    </main>
  );
}
