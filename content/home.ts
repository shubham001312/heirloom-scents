export const homeContent = {
  hero: {
    eyebrow: "Bespoke perfume experiences",
    titleDisplay: "Heirloom",
    titleSmall: "SCENTS",
    tagline: "Memory, bottled.",
    ctaLabel: "Discover the experience",
    ctaHref: "/experience",
    image: "/images/hero-photo.jpg",
    imageAlt: "Heirloom perfume bar experience",
  },
  intro: {
    kicker: "The Heirloom Scent Experience",
    titleLine1: "Craft a scent.",
    titleLine2: "Keep the memory.",
    description:
      "A private fragrance ritual designed for celebrations worth remembering.",
    steps: [
      { number: "01", title: "Choose your notes", text: "Explore the scent palette." },
      { number: "02", title: "Create your blend", text: "Make it unmistakably yours." },
      { number: "03", title: "Bottle your fragrance", text: "Hand-finished with care." },
      { number: "04", title: "Take the memory home", text: "A keepsake from the day." },
    ],
  },
  events: {
    kicker: "The occasions",
    titleLine1: "Made for moments",
    titleLine2: "that matter.",
    items: [
      {
        name: "Weddings",
        tagline: "A scent to remember.",
        image: "/images/event_wedding.jpg",
        imageAlt: "Wedding fragrance experience",
        href: "/experience",
      },
      {
        name: "Bridal Showers",
        tagline: "A signature blend for the celebration.",
        image: "/images/event_showers.jpg",
        imageAlt: "Bridal shower fragrance experience",
        href: "/experience",
      },
      {
        name: "Private Events",
        tagline: "From intimate to unforgettable.",
        image: "/images/event_private.jpg",
        imageAlt: "Private event fragrance experience",
        href: "/experience",
      },
    ],
  },
  archive: {
    kicker: "The scent archive",
    titleLine1: "Four signatures.",
    titleLine2: "Endless memories.",
    scents: [
      {
        name: "Memoire",
        notes: "soft · floral · musky",
        image: "/images/archive.jpg",
        imageAlt: "Memoire fragrance",
      },
      {
        name: "Velvet Hour",
        notes: "amber · warm · vanilla",
        image: "/images/events.jpg",
        imageAlt: "Velvet Hour fragrance",
      },
      {
        name: "Noir Bloom",
        notes: "woody · spicy · rich",
        image: "/images/private.jpg",
        imageAlt: "Noir Bloom fragrance",
      },
      {
        name: "Silk Veil",
        notes: "citrus · fresh · green",
        image: "/images/cta-photo.jpg",
        imageAlt: "Silk Veil fragrance",
      },
    ],
  },
  cta: {
    kicker: "Ready when you are",
    titleLine1: "Let’s create a scent",
    titleLine2: "they’ll never forget.",
    ctaLabel: "Start your inquiry",
    ctaHref: "/inquire",
    image: "/images/cta.jpg",
    imageAlt: "Heirloom scent keepsake",
  },
} as const;

export type EventExperience = {
  slug: string;
  title: string;
  eyebrow?: string;
  description: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
};
