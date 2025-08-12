import ContentContainer from "@/components/Containers/ContentContainer";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/utils";
import Timeline from "./Timeline";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <ContentContainer
      sectionId="experience"
      className={cn(className, "flex flex-col gap-9")}
    >
      <SectionTitle title="Experience" number={2} />
      <div className="flex flex-col gap-4 md:mb-12">
        <Timeline />
      </div>
    </ContentContainer>
  );
};

export default HeroSection;
