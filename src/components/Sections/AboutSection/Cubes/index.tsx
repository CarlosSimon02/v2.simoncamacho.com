"use client";

import { Cube } from "@/components/Effects";
import useBreakpoint from "@/hooks/useBreakpoints";

const Cubes = () => {
  const isMd = useBreakpoint("md");

  return (
    <>
      <Cube
        cubeSize={isMd ? 150 : 110}
        defaultAngle={{ x: 80, y: 10 }}
        autoRotate={true}
        className="w-fit max-md:order-2 max-md:self-end"
      />
      <Cube
        cubeSize={isMd ? 110 : 80}
        defaultAngle={{ x: 50, y: 50 }}
        autoRotate={true}
        className="max-md:order-3 max-md:self-start md:self-start"
      />
      <Cube
        cubeSize={isMd ? 70 : 80}
        defaultAngle={{ x: 100, y: 20 }}
        autoRotate={true}
        className="max-md:order-1"
      />
    </>
  );
};

export default Cubes;
