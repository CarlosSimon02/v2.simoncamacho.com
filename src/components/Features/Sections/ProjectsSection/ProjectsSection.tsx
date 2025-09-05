import ContentContainer from "@/components/UI/Containers/ContentContainer";
import ProjectsGrid from "@/components/UI/ProjectsGrid";
import SectionTitle from "@/components/UI/SectionTitle";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import ProjectsSectionAnimation from "./components/ProjectsSectionAnimation";
import { PROJECT_ITEM_CLASS } from "./constants";

type ProjectsSectionProps = {
  className?: string;
};

const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  const t = useTranslations("projectsSection");

  return (
    <>
      <ProjectsSectionAnimation />
      <ContentContainer
        sectionId="projects"
        className={cn(className, "flex flex-col gap-9 md:gap-12")}
      >
        <SectionTitle title={t("title")} number={3} />
        <ProjectsGrid
          projects={PROJECTS}
          cardClassName={cn(PROJECT_ITEM_CLASS, "from-bottom-xs")}
        />
      </ContentContainer>
    </>
  );
};

export default ProjectsSection;
