"use client";

import { cn } from "@/utils";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

const VerticalLines = () => {
  const [positions, setPositions] = useState<number[]>([]);

  useEffect(() => {
    setPositions(Array.from({ length: 3 }, () => Math.random() * 100));

    const interval = setInterval(() => {
      setPositions((prev) => prev.map(() => Math.random() * 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.verticalLines}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className={cn(styles.lineContainer)}>
          <div className={styles.line} />
          {positions.length > 0 && (
            <div
              className={styles.gizmoContainer}
              style={{ top: `${positions[index]}%` }}
            >
              <div className={styles.gizmo} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalLines;
