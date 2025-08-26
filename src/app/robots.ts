import { env } from "@/env";
import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/", "/static/"],
    },
    sitemap: `${env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
};

export default robots;
