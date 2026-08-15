export const galleryContent = {
  page: {
    eyebrow: "Gallery",
    title: "Moments worth remembering.",
    subtitle:
      "A glimpse into the Heirloom Scents experience, from setup to the final blend.",
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
  // The four signature scents — a dedicated section at the bottom of the page
  signatures: {
    kicker: "The scent archive",
    titleLine1: "Four signatures.",
    titleLine2: "Endless memories.",
    scents: [
      {
        slug: "memoire",
        title: "Memoire",
        notes: "soft · floral · musky",
        image: "/images/scent-memoire.jpg",
        imageAlt: "Memoire fragrance",
        education:
          "Soft white musk and Grasse jasmine evoke quiet elegance for moonlit evenings. A delicate, skin-close scent that lingers gently.",
      },
      {
        slug: "velvet-hour",
        title: "Velvet Hour",
        notes: "amber · warm · vanilla",
        image: "/images/scent-velvet.jpg",
        imageAlt: "Velvet Hour fragrance",
        education:
          "Ethiopian amber and Madagascar vanilla bring comforting warmth for golden hours. A soft, enveloping blend for cool evenings.",
      },
      {
        slug: "noir-bloom",
        title: "Noir Bloom",
        notes: "woody · spicy · rich",
        image: "/images/scent-noir.jpg",
        imageAlt: "Noir Bloom fragrance",
        education:
          "Deep oud and spicy cardamom feel rich and grounding for intimate soirées. A bold, lingering trail for after-dark events.",
      },
      {
        slug: "silk-veil",
        title: "Silk Veil",
        notes: "citrus · fresh · green",
        image: "/images/scent-silk.jpg",
        imageAlt: "Silk Veil fragrance",
        education:
          "Sicilian bergamot and fresh mint capture the first breath of spring mornings. Bright and airy, perfect for daytime celebrations.",
      },
    ],
  },
} as const;
