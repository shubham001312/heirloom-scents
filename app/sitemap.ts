import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomscents.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/experience", "/about", "/gallery", "/inquire"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
