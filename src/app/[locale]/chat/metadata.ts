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
    namespace: "chat.info",
  });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteUrl}/${currentLang.code}/chat`,
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
      canonical: `${siteUrl}/chat`,
      languages: LANGUAGES.reduce<Record<string, string>>((acc, lang) => {
        acc[lang.altCode] = `${siteUrl}/${lang.code}/chat`;
        return acc;
      }, {}),
    },
  };
};
