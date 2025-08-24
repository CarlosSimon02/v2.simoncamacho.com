"use client";

import Cube from "@/components/UI/Effects/Cube";
import { cn } from "@/utils";
import {
  FOOTER_CUBE_ITEM_STYLE,
  FOOTER_CUBES_CONTAINER_CLASS,
} from "../constants";
import useCubesAnimation from "../hooks/useCubesAnimation";

type CubesProps = {
  className?: string;
};

const Cubes = ({ className }: CubesProps) => {
  useCubesAnimation();

  return (
    <div
      className={cn(
        "flex h-72 w-full items-center justify-center gap-18 py-12 opacity-60",
        FOOTER_CUBES_CONTAINER_CLASS,
        className
      )}
    >
      <Cube
        cubeSize={110}
        defaultAngle={{ x: 80, y: 10 }}
        autoRotate={true}
        className={cn("order-2 w-fit self-start", FOOTER_CUBE_ITEM_STYLE)}
      />
      <Cube
        cubeSize={80}
        defaultAngle={{ x: 50, y: 50 }}
        autoRotate={true}
        className={cn("order-3 self-end", FOOTER_CUBE_ITEM_STYLE)}
      />
      <Cube
        cubeSize={80}
        defaultAngle={{ x: 100, y: 20 }}
        autoRotate={true}
        className={cn("order-1", FOOTER_CUBE_ITEM_STYLE)}
      />
    </div>
  );
};

export default Cubes;
