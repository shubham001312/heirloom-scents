export const aboutContent = {
  page: {
    eyebrow: "About",
    title: "The story behind the scent.",
    subtitle:
      "Heirloom Scents was born from the idea that a fragrance can hold a memory, and a memory can last forever.",
  },
  story: {
    title: "Our Story",
    image: "/images/about-main.jpg",
    imageAlt: "Luxury perfume bottle still life in white and gold",
    image2: "/images/about-accent.jpg",
    image2Alt: "Hands labeling a custom amber fragrance bottle",
    quote:
      "Every guest becomes the perfumer, guided yet never rushed, to a scent that is unmistakably theirs.",
    paragraphs: [
      "Heirloom Scents is a luxury mobile perfume bar based in the Dallas–Fort Worth area. We bring an interactive, guided fragrance experience to weddings, bridal showers, corporate gatherings, and private celebrations.",
      "What makes us different isn't just the perfume. It's the experience. Every guest becomes the perfumer, guided by our fragrance hosts through a curated selection of notes to create something entirely their own.",
    ],
  },
  brandQuote: {
    text: "A fragrance made by your own hand becomes an heirloom.",
    mark: "The Heirloom ritual",
  },
  stats: [
    { value: "100%", label: "oil-based fragrances" },
    { value: "40–300+", label: "guests per event" },
    { value: "4", label: "signature blends" },
    { value: "DFW", label: "serving Dallas–Fort Worth" },
  ],
  ritual: {
    kicker: "The ritual",
    titleLine1: "How the experience",
    titleLine2: "unfolds.",
    steps: [
      {
        number: "01",
        title: "Choose your notes",
        description:
          "Guests browse a curated palette of premium, oil-based notes, from florals and woods to citruses and musks, with our fragrance hosts guiding the way.",
      },
      {
        number: "02",
        title: "Create your blend",
        description:
          "Layered and balanced on the spot, each blend is tuned to the guest's own taste until it feels unmistakably theirs.",
      },
      {
        number: "03",
        title: "Bottle your fragrance",
        description:
          "The blend is bottled, sealed, and hand-finished at the bar, ready to wear or gift that same evening.",
      },
      {
        number: "04",
        title: "Take the memory home",
        description:
          "Every guest leaves with a labeled bottle and the memory of the moment it was made, an heirloom in the making.",
      },
    ],
  },
  cta: {
    title: "Let's create something memorable.",
    ctaLabel: "Start Your Inquiry",
    ctaHref: "/inquire",
  },
} as const;
