# Heirloom Scents — Website POC

A polished, responsive, production-minded website POC for Heirloom Scents — a luxury mobile perfume bar in the Dallas–Fort Worth area.

## Quick Start

```bash
# 1. Clone the repository
git clone <repository-url>
cd heirloom-scents

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env.local

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands

| Command                 | Description              |
| ----------------------- | ------------------------ |
| `npm run dev`           | Start development server |
| `npm run build`         | Production build         |
| `npm start`             | Start production server  |
| `npm run lint`          | Run ESLint               |
| `npm run format`        | Run Prettier             |
| `npm run typecheck`     | TypeScript type check    |
| `npm test`              | Run unit tests (Vitest)  |
| `npm run test:coverage` | Run tests with coverage  |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** CSS + Design Tokens (CSS Custom Properties)
- **Fonts:** Bodoni Moda + Italiana + DM Sans (Google), Amoresa + Mon Nicolette Grande (self-hosted brand faces)
- **Validation:** Zod (shared client schemas)
- **Testing:** Vitest + React Testing Library

## Project Structure

```
heirloom-scents/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header + Footer)
│   ├── page.tsx            # Home page
│   ├── experience/         # Experience & Events page
│   ├── about/              # About page
│   ├── gallery/            # Gallery page
│   ├── inquire/            # Book / Inquire page
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   └── manifest.ts         # PWA web manifest
├── components/             # Reusable components
│   ├── layout/             # Header, Footer, MobileNav
│   ├── forms/              # InquiryForm
│   └── ui/                 # Button, Container, Logo, SectionHeading
├── content/                # Typed content files
├── fonts/                  # Self-hosted brand fonts (Amoresa, Mon Nicolette)
├── lib/                    # Utilities (validation, security headers)
├── styles/                 # CSS (tokens, globals, components)
├── public/images/          # Static images and favicons
├── tests/                  # Unit tests
└── docs/                   # Spec, ADRs, deployment notes
```

## Pages

| Route         | Description                                |
| ------------- | ------------------------------------------ |
| `/`           | Home — hero, value props, event types, CTA |
| `/experience` | Experience & Events — event type details   |
| `/about`      | About — brand story and philosophy         |
| `/gallery`    | Gallery — responsive image grid            |
| `/inquire`    | Book / Inquire — contact form              |

## Inquiry Form

The inquiry form includes:

- Client-side validation (Zod schema)
- Honeypot spam control (Web3Forms `botcheck`)
- Success and error states

The form submits **directly from the browser** to Web3Forms — their free plan
only accepts client-side calls (server-side proxying returns a 403). The access
key is public by design and is inlined into the client bundle via
`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. Web3Forms applies its own IP-based rate
limiting and spam filtering.

## Environment Variables

See `.env.example` for all available variables.

```bash
# Required for the inquiry form (site runs without it — form shows a friendly message)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=   # Web3Forms access key (public by design)

# Optional (default shown)
NEXT_PUBLIC_SITE_URL=https://heirloom-scents.vercel.app
```

## Accessibility

This site is designed to meet WCAG 2.1 AA standards:

- Semantic HTML with proper heading hierarchy
- Keyboard navigation support
- Visible focus states
- Color contrast ≥ 4.5:1
- Reduced motion support
- Screen reader friendly

## Security

- Security headers configured (CSP, HSTS, X-Frame-Options)
- Zod validation on the inquiry form
- Honeypot spam control
- No secrets in source code (the Web3Forms key is public by Web3Forms design)
- `NEXT_PUBLIC_SITE_URL` used for canonical/OG URLs

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

This is a standard Next.js application. It can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- AWS Amplify
- Docker

## Client Dependencies

Before production launch, the following assets are required from the client:

- Logo files (SVG/PNG)
- Brand colors and fonts
- Photography
- Approved copy
- Contact details and social links
- Inquiry form field confirmation
- Submission destination

See `docs/client-dependencies.md` for the full tracker.

## License

Proprietary — Heirloom Scents / Autom8x
