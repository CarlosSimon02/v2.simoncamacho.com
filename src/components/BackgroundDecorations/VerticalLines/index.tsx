"use client";

import { cn } from "@/utils";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

const VerticalLines = () => {
  const [positions, setPositions] = useState<number[]>([]);

  useEffect(() => {
    // Initialize random positions
    setPositions(Array.from({ length: 3 }, () => Math.random() * 100));

    // Update positions every second
    const interval = setInterval(() => {
      setPositions((prev) => prev.map(() => Math.random() * 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.verticalLines}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={cn(
            styles.lineContainer,
            "max-sm:invisible max-sm:last:visible"
          )}
        >
          <div className={styles.line} />
          {positions.length > 0 && (
            <div
              className={styles.gizmo}
              style={{ top: `${positions[index]}%` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalLines;
