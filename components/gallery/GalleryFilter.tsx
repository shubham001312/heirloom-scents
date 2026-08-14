"use client";

import { useState } from "react";
import { GalleryGrid, type GalleryItem } from "./GalleryGrid";
import { filterGalleryItems } from "@/lib/gallery/filter";

interface GalleryCategory {
  slug: string;
  label: string;
}

interface GalleryFilterProps {
  categories: readonly GalleryCategory[];
  items: readonly GalleryItem[];
}

export function GalleryFilter({ categories, items }: GalleryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems = filterGalleryItems(items, activeCategory);

  return (
    <>
      <div
        className="gallery-filters"
        role="group"
        aria-label="Filter gallery by category"
      >
        {categories.map((cat) => {
          const isActive = cat.slug === activeCategory;
          return (
            <button
              key={cat.slug}
              type="button"
              className={`filter-chip${isActive ? " filter-chip--active" : ""}`}
              aria-pressed={isActive}
              onClick={() => setActiveCategory(cat.slug)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
      <GalleryGrid items={filteredItems} />
    </>
  );
}
