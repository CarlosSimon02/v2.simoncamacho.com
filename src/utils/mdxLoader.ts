import { ProjectSlug } from "@/data/projects";
import { Locale } from "@/types/locale";

/**
 * Dynamically imports MDX content for a specific project and locale
 */
export async function loadProjectMDX(project: ProjectSlug, locale: Locale) {
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
}

/**
 * Gets the available locales for a specific project
 */
export function getAvailableLocales(project: ProjectSlug): Locale[] {
  // This could be made dynamic by checking the filesystem
  // For now, we'll return the known locales
  return ["en", "fil"];
}
