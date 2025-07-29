import { env } from "process";
import styles from "./index.module.css";

const TailwindScreenIndicator = () => {
  if (env.NODE_ENV === "production") return null;

  return (
    <div className={styles.circleContainer}>
      <div className={styles.xsLabel}>xs</div>
      <div className={styles.smLabel}>sm</div>
      <div className={styles.mdLabel}>md</div>
      <div className={styles.lgLabel}>lg</div>
      <div className={styles.xlLabel}>xl</div>
      <div className={styles.xl2Label}>2xl</div>
    </div>
  );
};

export default TailwindScreenIndicator;
