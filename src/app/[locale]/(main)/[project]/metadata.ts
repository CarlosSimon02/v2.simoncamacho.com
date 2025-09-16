import { DEFAULT_LANG_CODE, LANGUAGES } from "@/constants/languages";
import { COMMON_DATA } from "@/data/common";
import { PROJECTS, ProjectSlug } from "@/data/projects";
import { env } from "@/env";
import { Locale } from "@/types/locale";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

const siteUrl = env.NEXT_PUBLIC_SITE_URL;

type GenerateMetadataProps = {
  params: Promise<{ locale: Locale; project: ProjectSlug }>;
};

export const generateMetadata = async ({
  params,
}: GenerateMetadataProps): Promise<Metadata> => {
  const { locale, project } = await params;
  const projectInfo = PROJECTS.find((p) => p.slug === project);
  const normalizedLocale = LANGUAGES.some((lang) => lang.code === locale)
    ? locale
    : DEFAULT_LANG_CODE;

  if (!project || !projectInfo) {
    notFound();
  }

  const currentLang = LANGUAGES.find((lang) => lang.code === normalizedLocale)!;

  const tProject = await getTranslations({
    locale: normalizedLocale || DEFAULT_LANG_CODE,
    namespace: `projectsSection.projects.${project}`,
  });

  const projectUrl = `${siteUrl}/${currentLang.code}/${project}`;

  return {
    title: tProject("title"),
    description: tProject("description"),
    keywords: projectInfo.keywords,
    openGraph: {
      title: tProject("title"),
      description: tProject("description"),
      url: projectUrl,
      siteName: COMMON_DATA.owner,
      images: projectInfo.ogImage,
      locale: currentLang.ogCode,
      type: projectInfo.type,
      authors: [COMMON_DATA.owner],
      publishedTime: projectInfo.datePublished,
      modifiedTime: projectInfo.dateModified,
    },
    twitter: {
      card: "summary_large_image",
      title: tProject("title"),
      description: tProject("description"),
      creator: COMMON_DATA.twitterHandle,
    },
    alternates: {
      canonical: `${siteUrl}/${project}`,
      languages: LANGUAGES.reduce<Record<string, string>>((acc, lang) => {
        acc[lang.altCode] = `${siteUrl}/${lang.code}/${project}`;
        return acc;
      }, {}),
    },
  };
};
