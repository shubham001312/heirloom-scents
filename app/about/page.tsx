import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/content/about";
import { RitualWalkthrough } from "@/components/about/RitualWalkthrough";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Heirloom Scents — a luxury mobile perfume bar creating signature fragrance experiences in Dallas–Fort Worth.",
};

export default function AboutPage() {
  const { page, story, ritual, stats, brandQuote, philosophy, cta } = aboutContent;

  return (
    <main id="main-content">
      {/* Page Header */}
      <section className="section section--light fade-in-up" style={{ paddingBottom: 0 }}>
        <Container>
          <SectionHeading
            level="h1"
            eyebrow={page.eyebrow}
            title={page.title}
            subtitle={page.subtitle}
          />
        </Container>
      </section>

      {/* Brand Story */}
      <section className="section section--white fade-in-up">
        <Container>
          <div className="grid-2 about-story">
            <div>
              <SectionHeading title={story.title} centered={false} />
              {story.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="about-paragraph"
                  style={{ marginBottom: "var(--space-5)" }}
                >
                  {paragraph}
                </p>
              ))}
              <blockquote className="story-quote">
                <p>{story.quote}</p>
              </blockquote>
            </div>
            <div className="about-collage">
              <Image
                src={story.image}
                alt={story.imageAlt}
                className="about-collage__main"
                width={500}
                height={625}
                priority
                sizes="(max-width: 768px) 90vw, 45vw"
              />
              <Image
                src={story.image2}
                alt={story.image2Alt}
                className="about-collage__accent"
                width={400}
                height={500}
                sizes="(max-width: 768px) 48vw, 24vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Stats band — royal maroon strip */}
      <section className="about-stats fade-in-up">
        <Container>
          <dl className="about-stats__row">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <dt className="about-stat__value">{stat.value}</dt>
                <dd className="about-stat__label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="section section--white fade-in-up">
        <Container>
          <SectionHeading title={philosophy.title} />
          <div className="philosophy-grid">
            {philosophy.items.map((item, index) => (
              <div key={item.title} className="philosophy-item">
                <span className="philosophy-numeral" aria-hidden="true">
                  {["I", "II", "III"][index]}
                </span>
                <h3 className="philosophy-title">{item.title}</h3>
                <p className="philosophy-text">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The ritual — interactive walkthrough */}
      <section className="section section--light fade-in-up">
        <Container>
          <div className="section-head">
            <div className="kicker">{ritual.kicker}</div>
            <h2>
              {ritual.titleLine1}
              <br />
              {ritual.titleLine2}
            </h2>
          </div>
          <RitualWalkthrough steps={ritual.steps} />
        </Container>
      </section>

      {/* Signature quote — engraved panel */}
      <section className="section section--stone fade-in-up">
        <Container>
          <figure className="signature-quote">
            <span className="signature-quote__mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>
              <p>{brandQuote.text}</p>
            </blockquote>
            <div className="signature-quote__rule" aria-hidden="true" />
            <figcaption className="signature-quote__signature">
              {brandQuote.mark}
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner fade-in-up">
        <Container>
          <h2 className="cta-banner__title">{cta.title}</h2>
          <Button variant="outline-light" href={cta.ctaHref}>
            {cta.ctaLabel}
          </Button>
        </Container>
      </section>
    </main>
  );
}
