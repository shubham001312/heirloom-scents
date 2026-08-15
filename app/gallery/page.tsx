import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryContent } from "@/content/gallery";
import { GalleryFilter } from "@/components/gallery/GalleryFilter";
import { ScentCard } from "@/components/gallery/ScentCard";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See the Heirloom Scents perfume bar experience in action at weddings, bridal showers, and private events in Dallas–Fort Worth.",
};

export default function GalleryPage() {
  const { page, categories, items, signatures } = galleryContent;

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

      {/* Gallery Grid + Filters — the event photos, first */}
      <section className="section section--white section--first fade-in-up">
        <Container>
          <GalleryFilter categories={categories} items={items} />
        </Container>
      </section>

      {/* Scent Archive — the signature blends, at the bottom */}
      <section className="section section--light fade-in-up">
        <Container>
          <div className="section-head">
            <div className="kicker">{signatures.kicker}</div>
            <h2>
              {signatures.titleLine1}
              <br />
              {signatures.titleLine2}
            </h2>
          </div>
          <div className="archive-grid">
            {signatures.scents.map((scent) => (
              <ScentCard key={scent.slug} scent={scent} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
