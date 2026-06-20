import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://svtattoo.mx",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}