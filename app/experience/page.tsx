import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { experienceContent } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience & Events",
  description:
    "Discover the Heirloom Scents perfume bar experience — weddings, bridal showers, private events in Dallas–Fort Worth.",
  openGraph: {
    title: "Experience & Events | Heirloom Scents",
    description:
      "The Heirloom Scents perfume bar experience — weddings, bridal showers, and private events in Dallas–Fort Worth.",
  },
  twitter: {
    title: "Experience & Events | Heirloom Scents",
    description:
      "The Heirloom Scents perfume bar experience — weddings, bridal showers, and private events in Dallas–Fort Worth.",
  },
};

export default function ExperiencePage() {
  const { page, events } = experienceContent;

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

      {/* Event Blocks */}
      <section className="section section--white fade-in-up">
        <Container>
          {events.map((event, index) => (
            <div key={event.slug} id={event.slug} className="event-block">
              <div className="grid-2" style={index % 2 === 1 ? { direction: "rtl" } : {}}>
                <div
                  style={{
                    direction: "ltr",
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    width={600}
                    height={400}
                    priority={index === 0}
                    sizes="(max-width: 768px) 90vw, 50vw"
                  />
                </div>
                <div className="event-block__content" style={{ direction: "ltr" }}>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <ul className="event-block__list">
                    {event.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {event.ctaLabel && event.ctaHref && (
                    <div style={{ marginTop: "var(--space-6)" }}>
                      <Button href={event.ctaHref} variant="outline">
                        {event.ctaLabel}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}
