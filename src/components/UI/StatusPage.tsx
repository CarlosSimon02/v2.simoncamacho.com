"use client";

import Decorations from "@/components/Features/Decorations";
import BaseContainer from "@/components/UI/Containers/BaseContainer";
import Cube from "@/components/UI/Effects/Cube";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type StatusPageProps = {
  code: string | number;
  subtitle: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

const StatusPage = ({
  code,
  subtitle,
  description,
  actions,
  className,
}: StatusPageProps) => {
  return (
    <>
      <Decorations />
      <main
        className={cn(
          "flex flex-1 flex-col items-center justify-center gap-4 px-3 text-center md:px-12",
          className
        )}
      >
        <BaseContainer className="relative">
          {/* Decorative animated cubes */}
          <div className="pointer-events-none absolute top-0 right-0 -z-2 max-md:hidden lg:right-30 xl:right-60">
            <Cube
              cubeSize={110}
              defaultAngle={{ x: 80, y: 10 }}
              autoRotate
              className="opacity-70"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-20 left-8 -z-2 mt-14 ml-8 max-md:hidden lg:left-20 xl:left-50">
            <Cube
              cubeSize={80}
              defaultAngle={{ x: 10, y: 180 }}
              autoRotate
              className="opacity-70"
            />
          </div>
          <div>
            <div className="relative -z-10 flex flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-decor text-center text-[12rem] leading-tight select-none md:text-[16rem]">
                {code}
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <h2 className="font-montserrat text-accent text-3xl font-black md:text-4xl">
                  {subtitle}
                </h2>
                {description ? <p>{description}</p> : null}
              </div>
              {actions}
            </div>
          </div>
        </BaseContainer>
      </main>
    </>
  );
};

export default StatusPage;
