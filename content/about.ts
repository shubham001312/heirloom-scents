export const aboutContent = {
  page: {
    eyebrow: "About",
    title: "The story behind the scent.",
    subtitle:
      "Heirloom Scents was born from the idea that a fragrance can hold a memory — and a memory can last forever.",
  },
  story: {
    title: "Our Story",
    image: "/images/hero.jpg",
    imageAlt: "Heirloom Scents luxury event setup",
    image2: "/images/occ-wedding.jpg",
    image2Alt: "Guests blending custom fragrances at a wedding",
    paragraphs: [
      "Heirloom Scents is a luxury mobile perfume bar based in the Dallas–Fort Worth area. We bring an interactive, guided fragrance experience directly to your event — weddings, bridal showers, corporate gatherings, and private celebrations.",
      "What makes us different isn't just the perfume. It's the experience. Every guest becomes the perfumer, guided by our fragrance hosts through a curated selection of notes to create something entirely their own.",
    ],
  },
  stats: [
    { value: "100%", label: "oil-based fragrances" },
    { value: "40–300+", label: "guests per event" },
    { value: "4", label: "signature blends" },
    { value: "DFW", label: "serving Dallas–Fort Worth" },
  ],
  philosophy: {
    title: "Our Philosophy",
    items: [
      {
        title: "Craftsmanship",
        description:
          "Every blend is made with premium, oil-based fragrances — not synthetic shortcuts.",
      },
      {
        title: "Connection",
        description:
          "The scent bar is an icebreaker, a conversation starter, a shared moment.",
      },
      {
        title: "Memory",
        description:
          "A fragrance tied to a specific day becomes an heirloom — something you carry with you.",
      },
    ],
  },
  inAction: {
    eyebrow: "In action",
    title: "The bar, in motion.",
    images: [
      { image: "/images/event_wedding.jpg", alt: "Wedding perfume bar in full swing" },
      { image: "/images/event_showers.jpg", alt: "Bridal shower blending activity" },
      { image: "/images/event_private.jpg", alt: "Private event scent bar setup" },
    ],
  },
  cta: {
    title: "Let's create something memorable.",
    ctaLabel: "Start Your Inquiry",
    ctaHref: "/inquire",
  },
} as const;
