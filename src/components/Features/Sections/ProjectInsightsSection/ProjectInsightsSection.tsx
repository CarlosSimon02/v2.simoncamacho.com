import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type ProjectInsightsSectionProps = {
  className?: string;
};

const ProjectInsightsSection = ({ className }: ProjectInsightsSectionProps) => {
  const t = useTranslations("projectInsightsSection");

  return (
    <>
      <ContentContainer
        sectionId="insights"
        className={cn(className, "flex flex-col gap-9 md:gap-12")}
      >
        <SectionTitle title={t("title")} number={1} />
      </ContentContainer>
    </>
  );
};

export default ProjectInsightsSection;
