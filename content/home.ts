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
        image: "/images/occ-wedding.jpg",
        imageAlt: "Wedding fragrance experience",
        href: "/experience#weddings",
      },
      {
        name: "Bridal Showers",
        tagline: "A signature blend for the celebration.",
        image: "/images/occ-shower.jpg",
        imageAlt: "Bridal shower fragrance experience",
        href: "/experience#bridal-showers",
      },
      {
        name: "Private Events",
        tagline: "From intimate to unforgettable.",
        image: "/images/occ-private.jpg",
        imageAlt: "Private event fragrance experience",
        href: "/experience#private-events",
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
