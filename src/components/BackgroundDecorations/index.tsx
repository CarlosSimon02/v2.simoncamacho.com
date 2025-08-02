import BaseContainer from "@/components/Containers/BaseContainer";
import SectionNumbers from "./SectionNumbers";
import Socials from "./Socials";
import VerticalLines from "./VerticalLines";
import styles from "./index.module.css";

const Decorations = () => {
  return (
    <>
      <BaseContainer className={styles.verticalLinesContainer}>
        <VerticalLines />
      </BaseContainer>
      <BaseContainer className={styles.socialsAndSectionNumbers}>
        <Socials />
        <SectionNumbers />
      </BaseContainer>
    </>
  );
};

export default Decorations;
