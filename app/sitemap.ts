import { MetadataRoute } from "next";

const baseUrl = "https://designandweb.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/pl`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];
}
