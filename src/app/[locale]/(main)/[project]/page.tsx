import Decorations from "@/components/Features/Decorations";
import Footer from "@/components/Features/Footer/Footer";
import MessageMeSection from "@/components/Features/Sections/MessageMeSection";
import OtherProjectsSection from "@/components/Features/Sections/OtherProjectsSection/OtherProjectsSection";
import ProjectInsightsSection from "@/components/Features/Sections/ProjectInsightsSection";
import ProjectOverviewSection from "@/components/Features/Sections/ProjectOverviewSection";

type ProjectPageProps = {
  params: Promise<{
    project: string;
  }>;
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { project } = await params;
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
        projectName={"Project name"}
        description={"Project description"}
      />
      <ProjectInsightsSection />
      <OtherProjectsSection />
      <MessageMeSection />
      <Footer />
    </>
  );
};

export default ProjectPage;
