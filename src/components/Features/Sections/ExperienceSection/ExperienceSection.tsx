import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Timeline from "./components/Timeline";

type ExperienceSectionProps = {
  className?: string;
};

const ExperienceSection = ({ className }: ExperienceSectionProps) => {
  const t = useTranslations("experienceSection");

  return (
    <ContentContainer
      sectionId="experience"
      className={cn("flex flex-col gap-12", className)}
    >
      <SectionTitle title={t("title")} number={2} />
      <div className="flex flex-col gap-4 md:mb-12">
        <Timeline />
      </div>
    </ContentContainer>
  );
};

export default ExperienceSection;
