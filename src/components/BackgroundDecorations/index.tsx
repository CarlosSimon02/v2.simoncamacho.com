import BaseContainer from "@/components/Containers/BaseContainer";
import { cn } from "@/utils";
import SectionNumbers from "./SectionNumbers";
import Socials from "./Socials";
import VerticalLines from "./VerticalLines";
import styles from "./index.module.css";

type DecorationsProps = {
  className?: string;
};

const Decorations = ({ className }: DecorationsProps) => {
  return (
    <BaseContainer className={cn(styles.baseContainer, className)}>
      <VerticalLines />
      <div className={styles.socialsAndSectionNumbers}>
        <Socials />
        <SectionNumbers />
      </div>
    </BaseContainer>
  );
};

export default Decorations;
