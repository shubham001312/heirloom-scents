import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryContent } from "@/content/gallery";
import { GalleryFilter } from "@/components/gallery/GalleryFilter";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See the Heirloom Scents perfume bar experience in action — weddings, bridal showers, and private events in Dallas–Fort Worth.",
};

export default function GalleryPage() {
  const { page, categories, items } = galleryContent;

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

      {/* Gallery Grid + Filters */}
      <section className="section section--white">
        <Container>
          <GalleryFilter categories={categories} items={items} />
        </Container>
      </section>
    </main>
  );
}
