import { cn } from "@/utils";
import {
  SECTION_TITLE_CONTAINER_CLASS,
  SECTION_TITLE_ITEM_STYLE,
} from "./constants";
import styles from "./index.module.css";
import SectionTitleAnimation from "./SectionTitleAnimation";

type SectionTitleProps = {
  title: string;
  number: number;
};

const SectionTitle = ({ title, number }: SectionTitleProps) => {
  return (
    <>
      <SectionTitleAnimation />
      <div
        className={cn(
          styles.sectionTitleContainer,
          SECTION_TITLE_CONTAINER_CLASS
        )}
      >
        <div className={styles.sectionTitleText}>
          <span
            className={cn(styles.sectionTitleNumber, SECTION_TITLE_ITEM_STYLE)}
          >
            {String(number).padStart(2, "0")}
          </span>
          <h2
            className={cn(styles.sectionTitleHeading, SECTION_TITLE_ITEM_STYLE)}
          >
            {title}
          </h2>
        </div>
        <div className={cn(styles.sectionTitleDecor, SECTION_TITLE_ITEM_STYLE)}>
          {title}
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
