import { cn } from "@/utils";
import styles from "./index.module.css";

const VerticalLines = () => {
  return (
    <div className={styles.verticalLines}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={cn(styles.line, "max-sm:invisible max-sm:last:visible")}
        />
      ))}
    </div>
  );
};

export default VerticalLines;
