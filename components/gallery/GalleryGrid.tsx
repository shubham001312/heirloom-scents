import Image from "next/image";
import { LinkCta } from "@/components/ui/LinkCta";

export interface GalleryItem {
  id: number;
  category: string;
  alt: string;
  image: string;
  /** Present on signature-scent items — renders a scent card instead of a bare photo */
  title?: string;
  notes?: string;
  education?: string;
  href?: string;
}

interface GalleryGridProps {
  items: readonly GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const scentItems = items.filter((item) => item.title);

  // Signatures-only view → dedicated 4-up scent card grid
  if (scentItems.length > 0 && scentItems.length === items.length) {
    return (
      <div className="archive-grid">
        {scentItems.map((scent) => (
          <article key={scent.id} className="scent">
            <Image
              src={scent.image}
              alt={scent.alt}
              width={400}
              height={280}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <h3>{scent.title}</h3>
            <p>{scent.notes}</p>
            <p className="scent-education">{scent.education}</p>
            <LinkCta href={scent.href}>
              Discover <span aria-hidden="true">→</span>
            </LinkCta>
          </article>
        ))}
      </div>
    );
  }

  // Photo masonry (the All view includes scent cards inline)
  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <div key={item.id} className="gallery-item">
          <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden" }}>
            <Image
              src={item.image}
              alt={item.alt}
              width={400}
              height={300}
              // First rows are above the fold (3-col masonry ≈ 9 visible) —
              // eager keeps them out of the LCP path
              loading={index < 9 ? "eager" : "lazy"}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          {item.title && (
            <div className="gallery-scent-meta">
              <h3>{item.title}</h3>
              <p>{item.notes}</p>
              <p className="scent-education">{item.education}</p>
              <LinkCta href={item.href}>
                Discover <span aria-hidden="true">→</span>
              </LinkCta>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
