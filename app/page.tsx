import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";

export default function Home() {
  const { hero, intro, events, archive, about, gallery, cta } = homeContent;

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
          <Link className="text-link" href={hero.ctaHref}>
            {hero.ctaLabel} <span>→</span>
          </Link>
        </div>
        <div className="home-hero__scroll" aria-hidden="true">
          Scroll
        </div>
      </section>

      {/* Intro + Steps */}
      <section className="section">
        <div className="intro">
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
        <div className="steps">
          {intro.steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-no">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="section cream">
        <div className="section-head">
          <div className="kicker">{events.kicker}</div>
          <h2>
            {events.titleLine1}
            <br />
            {events.titleLine2}
          </h2>
          <div className="rule" />
        </div>
        <div className="events-grid">
          {events.items.map((item) => (
            <article key={item.name} className="event">
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={600}
                height={462}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <div className="meta">
                <h3>{item.name}</h3>
                <p>{item.tagline}</p>
                <Link className="text-link" href={item.href}>
                  Explore <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="center" style={{ marginTop: "60px" }}>
          <Link className="text-link" href="/experience">
            View all events <span>→</span>
          </Link>
        </div>
      </section>

      {/* Scent Archive */}
      <section className="section archive">
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
              <Link href="/experience">Discover →</Link>
            </article>
          ))}
        </div>
      </section>

      {/* About (maroon strip) */}
      <section className="wine">
        <div className="about-intro">
          <div className="kicker">{about.kicker}</div>
          <h2>{about.title}</h2>
          <div className="rule" />
          <p className="sub">{about.description}</p>
          <Link className="text-link" href={about.ctaHref}>
            {about.ctaLabel} <span>→</span>
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="section-head">
          <div className="kicker">{gallery.kicker}</div>
          <h2>
            {gallery.titleLine1}
            <br />
            {gallery.titleLine2}
          </h2>
        </div>
        <div className="home-gallery">
          {gallery.images.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className={
                "tall" in img && img.tall
                  ? "tall"
                  : "wide" in img && img.wide
                    ? "wide"
                    : ""
              }
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ))}
        </div>
        <div className="center" style={{ marginTop: "50px" }}>
          <Link className="text-link" href={gallery.ctaHref}>
            {gallery.ctaLabel} <span>→</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <Image
          src={cta.image}
          alt={cta.imageAlt}
          width={700}
          height={430}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="cta-copy">
          <div className="kicker">{cta.kicker}</div>
          <h2>
            {cta.titleLine1}
            <br />
            <em>{cta.titleLine2}</em>
          </h2>
          <Link className="text-link" href={cta.ctaHref}>
            {cta.ctaLabel} <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
