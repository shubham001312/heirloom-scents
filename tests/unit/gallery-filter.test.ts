import { describe, it, expect } from "vitest";
import { filterGalleryItems } from "@/lib/gallery/filter";
import type { GalleryItem } from "@/components/gallery/GalleryGrid";

const items: GalleryItem[] = [
  { id: 1, category: "weddings", alt: "Wedding setup", image: "/images/gallery-1.jpg" },
  { id: 2, category: "weddings", alt: "Wedding toasts", image: "/images/gallery-2.jpg" },
  { id: 3, category: "showers", alt: "Shower table", image: "/images/gallery-3.jpg" },
  { id: 4, category: "private", alt: "Private event", image: "/images/gallery-4.jpg" },
  { id: 5, category: "events", alt: "Corporate event", image: "/images/gallery-5.jpg" },
];

describe("filterGalleryItems", () => {
  it('returns all items for "all"', () => {
    const result = filterGalleryItems(items, "all");
    expect(result).toHaveLength(items.length);
  });

  it("returns a new array (does not mutate input)", () => {
    const result = filterGalleryItems(items, "all");
    expect(result).not.toBe(items);
  });

  it("filters by a single category", () => {
    const result = filterGalleryItems(items, "weddings");
    expect(result).toHaveLength(2);
    expect(result.every((i) => i.category === "weddings")).toBe(true);
  });

  it("returns only matching items in original order", () => {
    const result = filterGalleryItems(items, "private");
    expect(result.map((i) => i.id)).toEqual([4]);
  });

  it("returns an empty array for a category with no matches", () => {
    expect(filterGalleryItems(items, "nonexistent")).toEqual([]);
  });

  it("handles an empty item list", () => {
    expect(filterGalleryItems([], "all")).toEqual([]);
    expect(filterGalleryItems([], "weddings")).toEqual([]);
  });

  it("preserves full item objects", () => {
    const [first] = filterGalleryItems(items, "showers");
    expect(first).toEqual(items[2]);
  });
});
