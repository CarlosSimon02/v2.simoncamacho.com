"use client";

import { Cube } from "@/components/Effects";
import useBreakpoint from "@/hooks/useBreakpoints";
import { cn } from "@/utils";
import { CUBE_ITEM_STYLE, CUBES_CONTAINER_CLASS } from "./constants";
import styles from "./index.module.css";
import useCubesAnimation from "./useCubesAnimation";

const Cubes = () => {
  const isMd = useBreakpoint("md");
  useCubesAnimation();

  return (
    <div className={cn(styles.cubesContainer, CUBES_CONTAINER_CLASS)}>
      <Cube
        cubeSize={isMd ? 150 : 110}
        defaultAngle={{ x: 80, y: 10 }}
        autoRotate={true}
        className={cn("w-fit max-md:order-2 max-md:self-end", CUBE_ITEM_STYLE)}
      />
      <Cube
        cubeSize={isMd ? 110 : 80}
        defaultAngle={{ x: 50, y: 50 }}
        autoRotate={true}
        className={cn(
          "max-md:order-3 max-md:self-start md:self-start",
          CUBE_ITEM_STYLE
        )}
      />
      <Cube
        cubeSize={isMd ? 70 : 80}
        defaultAngle={{ x: 100, y: 20 }}
        autoRotate={true}
        className={cn("max-md:order-1", CUBE_ITEM_STYLE)}
      />
    </div>
  );
};

export default Cubes;
