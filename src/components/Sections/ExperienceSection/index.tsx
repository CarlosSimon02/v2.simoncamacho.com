import ContentContainer from "@/components/Containers/ContentContainer";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/utils";
import ExperienceSectionAnimation from "./ExperienceSectionAnimation";
import Timeline from "./Timeline";
import { EXPERIENCE_TIMELINE_STYLE } from "./constants";
import styles from "./index.module.css";

type ExperienceSectionProps = {
  className?: string;
};

const ExperienceSection = ({ className }: ExperienceSectionProps) => {
  return (
    <>
      <ExperienceSectionAnimation />
      <ContentContainer
        sectionId="experience"
        className={cn(className, styles.experienceSectionContainer)}
      >
        <SectionTitle title="Experience" number={2} />
        <div
          className={cn(
            styles.experienceTimelineWrapper,
            EXPERIENCE_TIMELINE_STYLE
          )}
        >
          <Timeline />
        </div>
      </ContentContainer>
    </>
  );
};

export default ExperienceSection;
