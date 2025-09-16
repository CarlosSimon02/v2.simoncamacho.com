import { DEFAULT_LANG_CODE, LANGUAGES } from "@/constants/languages";
import { COMMON_DATA } from "@/data/common";
import { env } from "@/env";
import { Locale } from "@/types/locale";
import { getTranslations } from "next-intl/server";

const siteUrl = env.NEXT_PUBLIC_SITE_URL;

type GenerateMetadataProps = {
  params: Promise<{ locale?: Locale }>;
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
      default: COMMON_DATA.owner,
      template: `%s | ${COMMON_DATA.owner}`,
    },
    description: t("description"),
    generator: "Next.js",
    applicationName: COMMON_DATA.owner,
    keywords: [
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
    ],
    authors: [{ name: COMMON_DATA.owner, url: siteUrl }],
    creator: COMMON_DATA.owner,
    formatDetection: {
      email: true,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: COMMON_DATA.owner,
      description: t("description"),
      url: `${siteUrl}/${currentLang.code}`,
      siteName: COMMON_DATA.owner,
      locale: currentLang.ogCode,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: COMMON_DATA.owner,
      description: t("description"),
      creator: COMMON_DATA.twitterHandle,
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
