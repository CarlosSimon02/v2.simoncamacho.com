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
      title: "Project Overview",
      href: "#project-overview",
    },
    {
      id: "other-projects",
      title: "Project Overview",
      href: "#project-overview",
    },
    {
      id: "Message",
      title: "Message",
      href: "#message",
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
      <div className="h-[1000px]"></div>
      <Footer />
    </>
  );
};

export default ProjectPage;
