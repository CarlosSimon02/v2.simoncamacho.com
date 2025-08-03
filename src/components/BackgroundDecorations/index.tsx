import BaseContainer from "@/components/Containers/BaseContainer";
import styles from "./index.module.css";
import SectionNumbers from "./SectionNumbers";
import { Section } from "./SectionNumbers/types";
import Socials from "./Socials";
import VerticalLines from "./VerticalLines";

type DecorationsProps = {
  sections: Section[];
};

const Decorations = ({ sections }: DecorationsProps) => {
  return (
    <>
      <BaseContainer className={styles.verticalLinesContainer}>
        <VerticalLines />
      </BaseContainer>
      <BaseContainer className={styles.socialsAndSectionNumbers}>
        <SectionNumbers sections={sections} />
        <Socials />
      </BaseContainer>
    </>
  );
};

export default Decorations;
