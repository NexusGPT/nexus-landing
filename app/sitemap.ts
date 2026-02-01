import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agent.nexus";

  return [
    {
      url: baseUrl,
      lastModified: new Date(), // Dynamic content, updated frequently
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2023-12-31"), // Last updated December 31, 2023
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date("2023-12-31"), // Last updated December 31, 2023
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
