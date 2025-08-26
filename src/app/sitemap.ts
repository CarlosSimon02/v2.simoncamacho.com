import { PROJECTS } from "@/data/projects";
import { env } from "@/env";
import type { MetadataRoute } from "next";

const siteUrl = env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/chat`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...PROJECTS.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
