import { env } from "@/env";

export const projectPageCommonMetadata = {
  "@context": "https://schema.org",
  "@type": "Article",
  author: {
    "@type": "Person",
    name: "Simon Camacho",
    url: env.NEXT_PUBLIC_SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    logo: {
      "@type": "ImageObject",
      url: `${env.NEXT_PUBLIC_SITE_URL}/icon`,
    },
    name: "Simon Camacho",
  },
};
