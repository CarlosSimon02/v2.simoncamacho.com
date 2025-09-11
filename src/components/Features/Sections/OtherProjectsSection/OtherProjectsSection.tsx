import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type OtherProjectsSectionProps = {
  className?: string;
};

const OtherProjectsSection = ({ className }: OtherProjectsSectionProps) => {
  const t = useTranslations("otherProjectsSection");

  return (
    <>
      <ContentContainer
        sectionId="otherProjects"
        className={cn(className, "flex flex-col gap-9 md:gap-12")}
      >
        <SectionTitle title={t("title")} number={2} />
      </ContentContainer>
    </>
  );
};

export default OtherProjectsSection;
