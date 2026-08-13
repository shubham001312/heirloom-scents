# Content Replacement Guide — Heirloom Scents POC

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
    eyebrow: "Weddings · Bridal Showers · Private Events",
    title: "A signature scent, poured for the moment.",
    subtitle: "...",
    ctaLabel: "Inquire About Your Event",
    ctaHref: "/inquire",
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

1. Add approved photos to `public/images/` (note: `fragrance-blending.jpg` is currently a placeholder copy of `archive.jpg`)
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

These locations currently use placeholders and need real content:

| Location                  | Placeholder                                     | Replace With            |
| ------------------------- | ----------------------------------------------- | ----------------------- |
| `app/page.tsx`            | "Client photography — perfume bar in use"       | Real event photo        |
| `app/experience/page.tsx` | "Client photography — [event] setup"            | Real event photos       |
| `app/about/page.tsx`      | "Client photography — brand or founder imagery" | Brand/founder photo     |
| `app/gallery/page.tsx`    | "gallery-item" placeholders                     | Real gallery photos     |
| Footer                    | "hello@heirloomscents.com"                      | Confirmed contact email |

## Adding New Pages

1. Create `app/[page]/page.tsx`
2. Create `content/[page].ts` with typed content
3. Import content in the page component
4. Add navigation link in `components/layout/Header.tsx`

## Notes

- All content is TypeScript — changes require rebuild
- Content types are enforced — adding a field to a type requires updating all consumers
- Placeholder images use a gold gradient to match the brand palette
- The gallery grid uses CSS columns for masonry layout
