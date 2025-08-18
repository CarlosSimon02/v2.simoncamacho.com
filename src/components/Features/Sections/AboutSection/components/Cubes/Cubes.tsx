"use client";

import Cube from "@/components/UI/Effects/Cube";
import useBreakpoint from "@/hooks/useBreakpoints";
import { cn } from "@/utils";
import { CUBE_ITEM_STYLE, CUBES_CONTAINER_CLASS } from "./constants";
import useCubesAnimation from "./hooks/useCubesAnimation";

const Cubes = () => {
  const isMd = useBreakpoint("md");
  useCubesAnimation();

  return (
    <div
      className={cn(
        "flex h-72 w-full items-center justify-center gap-16 py-12 opacity-60",
        "md:h-fit md:flex-1 md:flex-shrink-1 md:flex-grow-2 md:flex-col md:gap-24 md:px-14",
        CUBES_CONTAINER_CLASS
      )}
    >
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
