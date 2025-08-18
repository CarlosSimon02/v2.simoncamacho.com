"use client";

import { useEffect, useState } from "react";
import VerticalLine from "./components/VerticalLine";
import { ANIMATION_INTERVAL_MS, LINE_COUNT } from "./constants";

const VerticalLines = ({ lineCount = LINE_COUNT }: { lineCount?: number }) => {
  const [positions, setPositions] = useState<number[]>([]);

  useEffect(() => {
    const updatePositions = () =>
      setPositions(
        Array.from({ length: lineCount }, () => Math.random() * 100)
      );

    updatePositions();
    const interval = setInterval(updatePositions, ANIMATION_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [lineCount]);

  if (positions.length !== lineCount) return null;

  return (
    <div className="flex h-full w-full justify-between px-8 sm:px-12 md:px-16">
      {positions.map((position, index) => (
        <VerticalLine key={index} position={position} />
      ))}
    </div>
  );
};

export default VerticalLines;
