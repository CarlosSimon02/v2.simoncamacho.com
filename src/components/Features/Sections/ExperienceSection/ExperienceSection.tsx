import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { cn } from "@/utils";
import Timeline from "./components/Timeline";

type ExperienceSectionProps = {
  className?: string;
};

const ExperienceSection = ({ className }: ExperienceSectionProps) => {
  return (
    <ContentContainer
      sectionId="experience"
      className={cn("flex flex-col gap-12", className)}
    >
      <SectionTitle title="Experience" number={2} />
      <div className="mx-auto flex flex-col gap-4 md:mb-12">
        <Timeline />
      </div>
    </ContentContainer>
  );
};

export default ExperienceSection;
