import Decorations from "@/components/Features/Decorations";
import Footer from "@/components/Features/Footer/Footer";
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
      <Footer />
    </>
  );
};

export default ProjectPage;
