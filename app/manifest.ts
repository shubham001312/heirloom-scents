import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Heirloom Scents",
    short_name: "Heirloom",
    description:
      "A guided perfume bar experience for celebrations where guests blend, bottle, and take home a fragrance made for that day only.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f2",
    theme_color: "#3a090e",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
