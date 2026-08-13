import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Heirloom Scents — a luxury mobile perfume bar creating signature fragrance experiences in Dallas–Fort Worth.",
};

export default function AboutPage() {
  const { page, story, philosophy, cta } = aboutContent;

  return (
    <main id="main-content">
      {/* Page Header */}
      <section className="section section--light" style={{ paddingBottom: 0 }}>
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
      <section className="section section--white">
        <Container>
          <div className="grid-2">
            <div>
              <SectionHeading title={story.title} centered={false} />
              {story.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight: "var(--leading-relaxed)",
                    marginBottom: "var(--space-4)",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden" }}>
              <Image
                src={story.image}
                alt={story.imageAlt}
                width={500}
                height={600}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="section section--light">
        <Container>
          <SectionHeading title={philosophy.title} />
          <div className="grid-3">
            {philosophy.items.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <Container>
          <h2 className="cta-banner__title">{cta.title}</h2>
          <Button href={cta.ctaHref}>{cta.ctaLabel}</Button>
        </Container>
      </section>
    </main>
  );
}
