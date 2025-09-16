import Decorations from "@/components/Features/Decorations";
import Footer from "@/components/Features/Footer/Footer";
import MessageMeSection from "@/components/Features/Sections/MessageMeSection";
import OtherProjectsSection from "@/components/Features/Sections/OtherProjectsSection/OtherProjectsSection";
import ProjectInsightsSection from "@/components/Features/Sections/ProjectInsightsSection";
import ProjectOverviewSection from "@/components/Features/Sections/ProjectOverviewSection";
import { PROJECTS, ProjectSlug } from "@/data/projects";
import { Locale } from "@/types/locale";
import { loadProjectMDX } from "@/utils/mdxLoader";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { generateMetadata as _generateMetadata } from "./metadata";

export const generateMetadata = _generateMetadata;

type ProjectPageProps = {
  params: Promise<{
    project: ProjectSlug;
    locale: Locale;
  }>;
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { project, locale } = await params;
  const projectInfo = PROJECTS.find((p) => p.slug === project);
  const t = await getTranslations(`projectsSection.projects.${project}`);

  if (!project || !projectInfo) {
    notFound();
  }

  // Load the MDX content for the current project and locale
  const mdxContent = await loadProjectMDX(project, locale);

  const projectPageSections = [
    {
      id: "project-overview",
      title: "Project Overview",
      href: "#project-overview",
    },
    {
      id: "insights",
      title: "Insights",
      href: "#insights",
    },
    {
      id: "other-projects",
      title: "Other Projects",
      href: "#other-projects",
    },
    {
      id: "message-me",
      title: "Message Me",
      href: "#message-me",
    },
  ];

  return (
    <>
      <Decorations sections={projectPageSections} />
      <ProjectOverviewSection
        projectName={t("title")}
        description={t("description")}
        codeLink={projectInfo.codeLink}
        previewLink={projectInfo.previewLink}
        image={projectInfo.image}
        imageAlt={t("title")}
        logo={projectInfo.logo}
        href={projectInfo.slug}
        logoAlt={t("title")}
        technologies={projectInfo.technologies}
        stackAndExplanation={t.rich("stackAndExplanation", {
          br: () => <br />,
        })}
      />
      <ProjectInsightsSection mdxContent={mdxContent} />
      <OtherProjectsSection currentProject={project} />
      <MessageMeSection />
      <Footer />
    </>
  );
};

export default ProjectPage;
