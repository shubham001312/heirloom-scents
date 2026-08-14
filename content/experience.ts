import type { EventExperience } from "./home";

export const experienceContent = {
  page: {
    eyebrow: "Experience & Events",
    title: "One scent bar, built for every event.",
    subtitle:
      "The same guided blending experience, tailored to how each celebration actually runs.",
  },
  events: [
    {
      slug: "weddings",
      title: "Weddings",
      description:
        'A cocktail-hour centerpiece guests talk about long after the toast. Blend a signature scent solo, or create a shared "his & hers" pairing with your partner.',
      highlights: [
        "Best for: 40–250 guests",
        "Typical placement: cocktail hour or reception",
        "Add-on: custom label with names + date",
      ],
      image: "/images/event_wedding.jpg",
      imageAlt: "Luxury wedding perfume bar experience",
      ctaLabel: "Inquire About Your Wedding",
      ctaHref: "/inquire",
      // Featured past-event example
      pastEvent: {
        image: "/images/wedding.jpg",
        imageAlt: "Sarah & Michael's Dallas Wedding - Spring 2026",
        result:
          "Featured notes of white tea, bergamot, and vetiver created a fresh, elegant scent that guests wore throughout the celebration.",
      },
    },
    {
      slug: "bridal-showers",
      title: "Bridal Showers",
      description:
        "An interactive activity that doubles as the party favor — every guest leaves with their own bottle instead of a generic gift bag.",
      highlights: [
        "Best for: 10–60 guests",
        "Typical placement: main activity, seated or standing",
        'Add-on: bride\'s custom blend featured as the "house scent"',
      ],
      image: "/images/event_showers.jpg",
      imageAlt: "Bridal shower fragrance activity with perfume bottles",
      ctaLabel: "Plan Your Shower",
      ctaHref: "/inquire",
      // Featured past-event example
      pastEvent: {
        image: "/images/showers.jpg",
        imageAlt: "Jessica's Bridal Shower - Fort Worth, Summer 2026",
        result:
          "Guests created personalized fragrances with notes of peony, lychee, and warm vanilla to take home as favors.",
      },
    },
    {
      slug: "private-events",
      title: "Private & Brand Events",
      description:
        "Milestone birthdays, corporate gifting, and brand activations — the format flexes to the room, from an intimate table setup to a full lounge installation.",
      highlights: [
        "Best for: 10–300+ guests",
        "Typical placement: flexible, scoped per event",
        "Add-on: branded packaging on request",
      ],
      image: "/images/event_private.jpg",
      imageAlt: "Private event fragrance blending experience",
      ctaLabel: "Check Availability",
      ctaHref: "/inquire",
      // Featured past-event example
      pastEvent: {
        image: "/images/private.jpg",
        imageAlt: "Tech Company Product Launch - Dallas Arts District, Fall 2026",
        result:
          "Custom citrus-herb fragrance blended with notes of rosemary, grapefruit, and cedar to match brand identity.",
      },
    },
  ] satisfies EventExperience[],
  cta: {
    title: "Tell us about your event.",
    ctaLabel: "Check Availability",
    ctaHref: "/inquire",
  },
} as const;
