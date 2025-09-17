"use client";

import Cube from "@/components/UI/Effects/Cube";
import useBreakpoint from "@/hooks/useBreakpoints";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const CUBE_ITEM_CLASS = "cube-item";
export const CUBES_CONTAINER_CLASS = "cubes-container";

const Cubes = () => {
  const isMd = useBreakpoint("md");

  useGSAP(() => {
    gsap.to(`.${CUBE_ITEM_CLASS}`, {
      top: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: `.${CUBES_CONTAINER_CLASS}`,
        start: "top 60%",
      },
    });
  });

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
        className={cn(
          "from-bottom-md w-fit max-md:order-2 max-md:self-end",
          CUBE_ITEM_CLASS
        )}
      />
      <Cube
        cubeSize={isMd ? 110 : 80}
        defaultAngle={{ x: 50, y: 50 }}
        autoRotate={true}
        className={cn(
          "from-bottom-md max-md:order-3 max-md:self-start md:self-start",
          CUBE_ITEM_CLASS
        )}
      />
      <Cube
        cubeSize={isMd ? 70 : 80}
        defaultAngle={{ x: 100, y: 20 }}
        autoRotate={true}
        className={cn("from-bottom-md max-md:order-1", CUBE_ITEM_CLASS)}
      />
    </div>
  );
};

export default Cubes;
