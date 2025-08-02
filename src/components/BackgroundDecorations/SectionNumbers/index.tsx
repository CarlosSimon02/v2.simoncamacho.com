"use client";

import GhostButton from "@/components/Buttons/GhostButton";
import { cn } from "@/utils";
import React from "react";

type SectionNumbersProps = {
  className?: string;
};

const SectionNumbers = ({ className }: SectionNumbersProps) => {
  const [activeSection, setActiveSection] = React.useState(0);

  return (
    <ul className={cn("pointer-events-auto flex flex-col gap-4", className)}>
      {Array.from({ length: 5 }).map((_, index) => {
        const isActive = index === activeSection;
        const isLast = index === 4;

        return (
          <li key={index}>
            <GhostButton
              className={cn(
                "font-oswald text-foreground-2 flex items-center justify-center text-xl font-bold",
                isLast ? "flex-col-reverse" : "flex-col"
              )}
              color={isActive ? "primary" : "subtle"}
              hoverDirection="right"
              onClick={() => setActiveSection(index)}
            >
              <div>{String(index).padStart(2, "0")}</div>
              <div
                data-state={isActive ? "active" : "inactive"}
                data-last={isLast ? "true" : "false"}
                className={cn(
                  "!static mt-0 mb-0 w-[0.0625rem] bg-current data-[state=active]:h-20 data-[state=active]:data-[last=false]:mt-4 data-[state=active]:data-[last=true]:mb-4 data-[state=inactive]:h-0"
                )}
              />
            </GhostButton>
          </li>
        );
      })}
    </ul>
  );
};

export default SectionNumbers;
