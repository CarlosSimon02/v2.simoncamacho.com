import { cn, toKebabCase } from "@/utils";
import styles from "./index.module.css";
import SectionTitleAnimation from "./SectionTitleAnimation";
import { getSectionTitleContainerStyle } from "./utils";

type SectionTitleProps = {
  title: string;
  number: number;
};

const SectionTitle = ({ title, number }: SectionTitleProps) => {
  const formattedTitle = toKebabCase(title);
  return (
    <>
      <SectionTitleAnimation id={formattedTitle} />
      <div
        className={cn(
          styles.sectionTitleContainer,
          getSectionTitleContainerStyle(formattedTitle)
        )}
      >
        <div className={styles.sectionTitleText}>
          <span className={cn(styles.sectionTitleNumber)}>
            {String(number).padStart(2, "0")}
          </span>
          <h2 className={cn(styles.sectionTitleHeading)}>{title}</h2>
        </div>
        <div className={cn(styles.sectionTitleDecor)}>{title}</div>
      </div>
    </>
  );
};

export default SectionTitle;
