import Image from "next/image";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { LinkCta } from "@/components/ui/LinkCta";

/** Minimalist line icons for the four ritual steps (gold, stroke-based). */
const STEP_ICONS = [
  // 01 Choose your notes — a single leaf
  <path
    key="notes"
    d="M12 3c4.5 0 7.5 3 7.5 7.5S16.5 18 12 18 4.5 15 4.5 10.5 7.5 3 12 3zM12 18v3"
  />,
  // 02 Create your blend — a mixing flask
  <path key="blend" d="M9 3h6M10 3v3h4V3M7.5 6h9M9 6l-2 6a5 5 0 0 0 10 0l-2-6" />,
  // 03 Bottle your fragrance — a perfume bottle
  <path key="bottle" d="M10 2h4v2h2v5a6 6 0 0 1-8 0V4h2V2zM10 9h4" />,
  // 04 Take the memory home — a keepsake heart
  <path
    key="keepsake"
    d="M12 20S5 15.5 5 11a3.5 3.5 0 0 1 7-1 3.5 3.5 0 0 1 7 1c0 4.5-7 9-7 9z"
  />,
];

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
          <Button variant="outline" href="/inquire">
            Book your experience <span aria-hidden="true">→</span>
          </Button>
        </div>
        <div className="ritual-steps">
          {intro.steps.map((step, index) => (
            <div key={step.number} className={`ritual-step step-${index + 1}`}>
              <svg
                className="step-icon"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {STEP_ICONS[index]}
              </svg>
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
                  width={585}
                  height={780}
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
