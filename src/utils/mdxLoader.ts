import { ProjectSlug } from "@/data/projects";
import { Locale } from "@/types/locale";

export const loadProjectMDX = async (project: ProjectSlug, locale: Locale) => {
  try {
    // Dynamic import based on project and locale
    const mdxModule = await import(
      `@/content/projects/${locale}/${project}.mdx`
    );
    return mdxModule.default;
  } catch (error) {
    console.error(
      `Failed to load MDX for project: ${project}, locale: ${locale}`,
      error
    );
    return null;
  }
};
