export const galleryContent = {
  page: {
    eyebrow: "Gallery",
    title: "Moments worth remembering.",
    subtitle:
      "A glimpse into the Heirloom Scents experience — from setup to the final blend.",
  },
  categories: [
    { slug: "all", label: "All" },
    { slug: "weddings", label: "Weddings" },
    { slug: "showers", label: "Showers" },
    { slug: "events", label: "Events" },
  ],
  items: [
    {
      id: 1,
      category: "weddings",
      alt: "Wedding perfume bar setup",
      image: "/images/event_wedding.jpg",
    },
    {
      id: 2,
      category: "showers",
      alt: "Bridal shower fragrance activity",
      image: "/images/event_showers.jpg",
    },
    {
      id: 3,
      category: "events",
      alt: "Corporate event scent bar",
      image: "/images/hero-clean.jpg",
    },
    {
      id: 4,
      category: "weddings",
      alt: "Custom labeled perfume bottles",
      image: "/images/wedding.jpg",
    },
    {
      id: 5,
      category: "showers",
      alt: "Fragrance blending experience",
      image: "/images/showers.jpg",
    },
    { id: 6, category: "events", alt: "Perfume bar setup", image: "/images/private.jpg" },
    {
      id: 7,
      category: "weddings",
      alt: "Wedding venue with fragrance station",
      image: "/images/hero.jpg",
    },
    {
      id: 8,
      category: "events",
      alt: "Luxury event fragrance experience",
      image: "/images/cta-photo.jpg",
    },
  ],
} as const;
