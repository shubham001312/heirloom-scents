import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Brand wordmark fonts (commercial — see fonts/README note in tokens.css)
const amoresa = localFont({
  src: "../fonts/Amoresa-Regular.ttf",
  variable: "--font-script",
  display: "swap",
});

const monNicolette = localFont({
  src: "../fonts/MonNicoletteGrande-Regular.ttf",
  variable: "--font-monogram",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomscents.com"),
  title: {
    default: "Heirloom Scents — Signature Scent Experiences",
    template: "%s | Heirloom Scents",
  },
  description:
    "A guided perfume bar experience for celebrations — guests blend, bottle, and take home a fragrance made for that day only.",
  keywords: [
    "perfume bar",
    "event experience",
    "weddings",
    "bridal showers",
    "private events",
    "fragrance",
    "scent bar",
    "Dallas",
    "DFW",
  ],
  authors: [{ name: "Heirloom Scents" }],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      // To change the brand icon, edit app/icon.svg
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heirloomscents.com",
    siteName: "Heirloom Scents",
    title: "Heirloom Scents — Signature Scent Experiences",
    description:
      "A guided perfume bar experience for celebrations — guests blend, bottle, and take home a fragrance made for that day only.",
    images: [
      {
        url: "/images/logo-instagram.jpg",
        width: 150,
        height: 150,
        alt: "Heirloom Scents Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heirloom Scents — Signature Scent Experiences",
    description:
      "A guided perfume bar experience for celebrations — guests blend, bottle, and take home a fragrance made for that day only.",
    images: ["/images/logo-instagram.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#3a090e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${amoresa.variable} ${monNicolette.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <div className="grain-overlay" aria-hidden="true"></div>
      </body>
    </html>
  );
}
