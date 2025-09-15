import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import { ComponentType } from "react";

type ProjectInsightsSectionProps = {
  className?: string;
  mdxContent?: ComponentType;
};

const ProjectInsightsSection = ({
  className,
  mdxContent: MDXContent,
}: ProjectInsightsSectionProps) => {
  const t = useTranslations("projectInsightsSection");

  return (
    <>
      <ContentContainer
        sectionId="insights"
        className={cn(className, "flex flex-col gap-9 md:gap-12")}
      >
        <SectionTitle title={t("title")} number={1} />
        {MDXContent && (
          <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
            <MDXContent />
          </div>
        )}
      </ContentContainer>
    </>
  );
};

export default ProjectInsightsSection;
