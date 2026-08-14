export const galleryContent = {
  page: {
    eyebrow: "Gallery",
    title: "Moments worth remembering.",
    subtitle:
      "A glimpse into the Heirloom Scents experience — from setup to the final blend.",
  },
  categories: [
    { slug: "all", label: "All" },
    { slug: "signatures", label: "Signatures" },
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
    // The four signature scents (moved from the home archive section)
    {
      id: 9,
      category: "signatures",
      alt: "Memoire fragrance",
      image: "/images/archive.jpg",
      title: "Memoire",
      notes: "soft · floral · musky",
      education:
        "Soft white musk blended with hand-picked Grasse jasmine and violet leaf. Inspired by moonlit gardens, it evokes quiet elegance and tender memories. Pairs beautifully with cashmere and pearl accents.",
      href: "/inquire",
    },
    {
      id: 10,
      category: "signatures",
      alt: "Velvet Hour fragrance",
      image: "/images/events.jpg",
      title: "Velvet Hour",
      notes: "amber · warm · vanilla",
      education:
        "Warm amber resin sourced from Ethiopian frankincense groves, smoothed with Madagascar vanilla bean and a touch of labdanum. Inspired by golden hour gatherings, it wraps you in comforting warmth. Pairs well with a single note of rose or amber candlelight.",
      href: "/inquire",
    },
    {
      id: 11,
      category: "signatures",
      alt: "Noir Bloom fragrance",
      image: "/images/private.jpg",
      title: "Noir Bloom",
      notes: "woody · spicy · rich",
      education:
        "Deep oud wood from sustainable Assam forests meets spicy cardamom and black pepper, grounded by vetiver and patchouli. Created for intimate soirées where conversations linger. Pairs well with aged bourbon or dark chocolate.",
      href: "/inquire",
    },
    {
      id: 12,
      category: "signatures",
      alt: "Silk Veil fragrance",
      image: "/images/cta-photo.jpg",
      title: "Silk Veil",
      notes: "citrus · fresh · green",
      education:
        "Sunlit Sicilian bergamot and grapefruit zest crushed with fresh-cut grass and crushed mint leaves, resting on a base of white cedar. Captures the first breath of spring mornings. Pairs excellently with linen fabrics and green tea.",
      href: "/inquire",
    },
  ],
} as const;
