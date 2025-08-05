import styles from "./index.module.css";

type SectionTitleProps = {
  title: string;
  number: number;
};

const SectionTitle = ({ title, number }: SectionTitleProps) => {
  return (
    <div className={styles.sectionTitleContainer}>
      <div className={styles.sectionTitleText}>
        <span className={styles.sectionTitleNumber}>
          {String(number).padStart(2, "0")}
        </span>
        <h2 className={styles.sectionTitleHeading}>{title}</h2>
      </div>
      <div className={styles.sectionTitleDecor}>{title}</div>
    </div>
  );
};

export default SectionTitle;
