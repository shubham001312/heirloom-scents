"use client";

import { useState } from "react";
import { GalleryGrid, type GalleryItem } from "./GalleryGrid";

/** Tiles shown before the "View all" control — keeps the first view tidy. */
const INITIAL_VISIBLE = 6;

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
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const shownItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > shownItems.length;

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
              onClick={() => {
                setActiveCategory(cat.slug);
                setVisibleCount(INITIAL_VISIBLE);
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <GalleryGrid items={shownItems} />

      {hasMore && (
        <div className="center" style={{ marginTop: "var(--space-10)" }}>
          <button
            type="button"
            className="gallery-more"
            onClick={() => setVisibleCount(filteredItems.length)}
          >
            View all photos <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </>
  );
}
