import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkCta } from "@/components/ui/LinkCta";
import { galleryContent } from "@/content/gallery";
import { GalleryFilter } from "@/components/gallery/GalleryFilter";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See the Heirloom Scents perfume bar experience in action — weddings, bridal showers, and private events in Dallas–Fort Worth.",
};

export default function GalleryPage() {
  const { page, categories, items, signatures } = galleryContent;

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

      {/* Scent Archive */}
      <section className="section section--light">
        <Container>
          <div className="section-head">
            <div className="kicker">{signatures.kicker}</div>
            <h2>
              {signatures.titleLine1}
              <br />
              {signatures.titleLine2}
            </h2>
            <div className="rule" />
          </div>
          <div className="archive-grid">
            {signatures.scents.map((scent) => (
              <article key={scent.title} className="scent">
                <Image src={scent.image} alt={scent.imageAlt} width={400} height={280} />
                <h3>{scent.title}</h3>
                <p>{scent.notes}</p>
                <p className="scent-education">{scent.education}</p>
                <LinkCta href={scent.href}>
                  Discover <span aria-hidden="true">→</span>
                </LinkCta>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
