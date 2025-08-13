import ContentContainer from "@/components/Containers/ContentContainer";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/utils";
import Timeline from "./Timeline";
import styles from "./index.module.css";

type ExperienceSectionProps = {
  className?: string;
};

const ExperienceSection = ({ className }: ExperienceSectionProps) => {
  return (
    <>
      <ContentContainer
        sectionId="experience"
        className={cn(className, styles.experienceSectionContainer)}
      >
        <SectionTitle title="Experience" number={2} />
        <div className={cn(styles.experienceTimelineWrapper)}>
          <Timeline />
        </div>
      </ContentContainer>
    </>
  );
};

export default ExperienceSection;
