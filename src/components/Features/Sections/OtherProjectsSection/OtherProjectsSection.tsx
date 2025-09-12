import ContentContainer from "@/components/UI/Containers/ContentContainer";
import ProjectsGrid from "@/components/UI/ProjectsGrid";
import SectionTitle from "@/components/UI/SectionTitle";
import { PROJECTS, ProjectSlug } from "@/data/projects";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type OtherProjectsSectionProps = {
  className?: string;
  currentProject: ProjectSlug;
};

const OtherProjectsSection = ({
  className,
  currentProject,
}: OtherProjectsSectionProps) => {
  const t = useTranslations("otherProjectsSection");

  const otherProjects = PROJECTS.filter(
    (project) => project.slug !== currentProject
  );

  return (
    <ContentContainer
      sectionId="other-projects"
      className={cn(className, "flex flex-col gap-9 md:gap-12")}
    >
      <SectionTitle title={t("title")} number={2} />
      <ProjectsGrid projects={otherProjects} />
    </ContentContainer>
  );
};

export default OtherProjectsSection;
