import Image from "next/image";

interface GalleryItem {
  id: number;
  category: string;
  alt: string;
  image: string;
}

interface GalleryGridProps {
  items: readonly GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
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
        </div>
      ))}
    </div>
  );
}
