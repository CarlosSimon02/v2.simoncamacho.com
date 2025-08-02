import styles from "./index.module.css";

const VerticalLines = () => {
  return (
    <div className={styles.verticalLines}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className={styles.line} />
      ))}
    </div>
  );
};

export default VerticalLines;
