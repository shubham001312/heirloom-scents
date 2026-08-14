# Content Replacement Guide — Heirloom Scents

This guide explains how to replace placeholder content with approved client assets.

## Content Files

All page content lives in the `content/` directory:

```
content/
├── home.ts          # Home page text and structure
├── experience.ts    # Experience & Events page content
├── about.ts         # About page content
├── gallery.ts       # Gallery items and categories
└── inquire.ts       # Form labels and event types
```

## How Content Works

Content is separated from page components. Each file exports a typed object:

```typescript
// Example: content/home.ts
export const homeContent = {
  hero: {
    eyebrow: "Bespoke perfume experiences",
    titleDisplay: "Heirloom", // script wordmark (Amoresa)
    titleSmall: "SCENTS", // monogram caps (Mon Nicolette Grande)
    tagline: "Memory, bottled.",
    ctaLabel: "Discover the experience",
    ctaHref: "/experience",
    image: "/images/hero-photo.jpg",
    imageAlt: "Heirloom perfume bar experience",
  },
  // ...
} as const;
```

Pages import and render this content:

```typescript
// Example: app/page.tsx
import { homeContent } from "@/content/home";

export default function Home() {
  const { hero } = homeContent;
  return <h1>{hero.title}</h1>;
}
```

## Replacing Content

### 1. Text Changes

Edit the relevant content file. All text is in one place — no need to search through components.

**Files to edit:**

- Home page text → `content/home.ts`
- Experience descriptions → `content/experience.ts`
- About story → `content/about.ts`
- Form labels → `content/inquire.ts`

### 2. Photography

Replace placeholder photography with approved photos:

1. Add approved photos to `public/images/`
2. Update the image paths in the content files (`content/home.ts`, `content/experience.ts`, `content/about.ts`, `content/gallery.ts`)

```typescript
import Image from "next/image";

<Image
  src="/images/wedding-setup.jpg"
  alt="Perfume bar setup at a wedding reception"
  width={600}
  height={400}
  priority
/>
```

### 3. Social Links

Edit `components/layout/Footer.tsx`:

```typescript
const socialLinks = [
  { href: "https://www.instagram.com/heirloomscents/", label: "Instagram" },
  { href: "https://facebook.com/...", label: "Facebook" }, // Add when confirmed
];
```

### 4. Contact Details

Edit `components/layout/Footer.tsx`:

```typescript
<a href="mailto:hello@heirloomscents.com">hello@heirloomscents.com</a>
```

### 5. Event Types

Edit `content/inquire.ts` to update form dropdown options:

```typescript
eventTypes: [
  { value: "", label: "Select an event type" },
  { value: "wedding", label: "Wedding" },
  // Add or remove as needed
],
```

## Placeholder Locations

All placeholder photography has been replaced with the client's real photos
(imported from the client's Instagram archive). The images below are the
current set — swap any of them by replacing the file in `public/images/`
and keeping the same filename, or update the path in the content file.

| Image file                      | Used on                                    |
| ------------------------------- | ------------------------------------------ |
| `public/images/hero-photo.jpg`  | Home hero (perfume bar in action)          |
| `public/images/occ-*.jpg`       | Home occasion cards (wedding / shower / private) |
| `public/images/scent-*.jpg`     | Gallery signature-scent cards (bottle shots) |
| `public/images/event_*.jpg`     | Experience page event blocks               |
| `public/images/about-*.jpg`     | About page story collage                   |
| `public/images/gallery-*.jpg`   | Gallery grid items                         |

## Adding New Pages

1. Create `app/[page]/page.tsx`
2. Create `content/[page].ts` with typed content
3. Import content in the page component
4. Add navigation link in `components/layout/Header.tsx`

## Notes

- All content is TypeScript — changes require rebuild
- Content types are enforced — adding a field to a type requires updating all consumers
- The gallery grid uses CSS columns (`column-count`) for masonry layout
- The brand wordmark fonts are self-hosted via `next/font/local` — see `app/layout.tsx`
- To change the header/favicon monogram, replace `public/logo.svg` (or the `d` path inside it) — no code changes needed
