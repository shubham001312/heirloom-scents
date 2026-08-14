import Image from "next/image";

export interface GalleryItem {
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
              // First row only is eager — the rest load one-by-one as you
              // scroll, each showing its shimmer skeleton (smoother on slow
              // networks than bursting all 9 at once)
              loading={index < 3 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 90vw, 30vw"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
