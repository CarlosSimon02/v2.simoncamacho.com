import { DEFAULT_LANG_CODE, LANGUAGES } from "@/constants/languages";
import { env } from "@/env";
import { getTranslations } from "next-intl/server";

const siteUrl = env.NEXT_PUBLIC_SITE_URL;

type GenerateMetadataProps = {
  params: Promise<{ locale?: string }>;
};

export const generateMetadata = async ({ params }: GenerateMetadataProps) => {
  const { locale } = await params;

  const normalizedLocale = LANGUAGES.some((lang) => lang.code === locale)
    ? locale
    : DEFAULT_LANG_CODE;

  const currentLang = LANGUAGES.find((lang) => lang.code === normalizedLocale)!;

  const t = await getTranslations({
    locale: normalizedLocale || DEFAULT_LANG_CODE,
    namespace: "info",
  });

  return {
    title: {
      default: t("name"),
      template: `%s | ${t("name")}`,
    },
    description: t("description"),
    generator: "Next.js",
    applicationName: "Simon Camacho",
    keywords: [
      "Simon Camacho",
      "web developer portfolio",
      "web developer",
      "front-end development",
      "back-end development",
      "full-stack development",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "web design",
      "responsive design",
      "UX/UI",
      "web projects",
      "programming",
      "coding",
      "software development",
      "JavaScript frameworks",
      "portfolio projects",
      "web applications",
      "web development skills",
      "coding portfolio",
      "developer portfolio",
      "web developer Simon Camacho",
      "Simon Camacho projects",
      "Simon Camacho web developer",
      "Simon Camacho portfolio",
    ],
    authors: [{ name: "Simon Camacho", url: siteUrl }],
    creator: "Simon Camacho",
    formatDetection: {
      email: true,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: t("name"),
      description: t("description"),
      url: `${siteUrl}/${currentLang.code}`,
      siteName: t("name"),
      locale: currentLang.ogCode,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("name"),
      description: t("description"),
      creator: "@CarlosSimonCam1",
    },
    alternates: {
      canonical: `${siteUrl}`,
      languages: LANGUAGES.reduce<Record<string, string>>((acc, lang) => {
        acc[lang.altCode] = `${siteUrl}/${lang.code}`;
        return acc;
      }, {}),
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: null,
    },
  };
};
