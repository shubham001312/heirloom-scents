import type { GalleryItem } from "@/components/gallery/GalleryGrid";

/** Filter gallery items by category slug. `"all"` returns everything. */
export function filterGalleryItems(
  items: readonly GalleryItem[],
  category: string
): GalleryItem[] {
  if (category === "all") return [...items];
  return items.filter((item) => item.category === category);
}
