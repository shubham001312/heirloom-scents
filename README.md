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
- **Fonts:** Fraunces (serif) + Inter (sans-serif)
- **Validation:** Zod (shared client/server schemas)
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
│   └── api/inquiry/        # Inquiry form API endpoint
├── components/             # Reusable components
│   ├── layout/             # Header, Footer, MobileNav
│   ├── forms/              # InquiryForm
│   └── ui/                 # Button, Container, Logo, SectionHeading
├── content/                # Typed content files
├── lib/                    # Utilities (validation, security)
├── styles/                 # CSS (tokens, globals, components)
├── public/images/          # Static images and favicons
├── tests/                  # Unit and integration tests
└── docs/                   # Spec, ADRs, client dependencies
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
- Server-side validation (independent of client)
- Honeypot spam control
- Rate limiting (configurable via environment)
- Success and error states

**Note:** The API route currently logs submissions. Configure the approved submission destination in `.env.local`.

## Environment Variables

See `.env.example` for all available variables.

```bash
# Required for production
INQUIRY_DESTINATION=       # Email or webhook URL
INQUIRY_API_KEY=           # API key for destination service
CSRF_SECRET=               # Random string for CSRF protection

# Optional (defaults shown)
RATE_LIMIT_MAX=5           # Max submissions per IP per window
RATE_LIMIT_WINDOW_MS=900000  # Rate limit window (15 minutes)
NEXT_PUBLIC_SITE_URL=https://heirloomscents.com
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
- Input validation at API boundaries
- Rate limiting on inquiry endpoint
- Honeypot spam control
- No secrets in source code

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
