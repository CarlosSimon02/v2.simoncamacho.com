"use client";

import GhostButton from "@/components/Buttons/GhostButton";
import { useCurrentSectionStore } from "@/stores/useCurrentSectionStore";
import { cn } from "@/utils";
import React, { useEffect } from "react";
import { Section } from "./types";
import useSectionNumbersAnimation from "./useSectionNumbersAnimation";
import { numberSectionStyle } from "./utils";

type SectionNumbersProps = {
  className?: string;
  sections: Section[];
};

const SectionNumbers = ({ className, sections }: SectionNumbersProps) => {
  const [activeSection, setActiveSection] = React.useState<string>("");
  const { currentSection, setCurrentSection } = useCurrentSectionStore();
  const { sectionNumbersRef, isAnimationComplete } =
    useSectionNumbersAnimation();

  useEffect(() => {
    if (isAnimationComplete) setActiveSection(currentSection);
  }, [isAnimationComplete, currentSection]);

  return (
    <ul
      className={cn("pointer-events-auto flex flex-col gap-4", className)}
      ref={sectionNumbersRef}
    >
      {sections.map(({ id, title }, index) => {
        const isActive = id === activeSection;
        const isLast = index === sections.length - 1;

        return (
          <li
            key={index}
            className={cn("section-number-item", numberSectionStyle)}
          >
            <GhostButton
              className={cn(
                "font-oswald text-foreground-2 flex items-center justify-center text-xl font-bold",
                isLast ? "flex-col-reverse" : "flex-col"
              )}
              color={isActive ? "secondary" : "subtle"}
              hoverDirection="right"
              onClick={() => setCurrentSection(id)}
            >
              <div>{String(index).padStart(2, "0")}</div>
              <div
                data-state={isActive ? "active" : "inactive"}
                data-last={isLast ? "true" : "false"}
                className={cn(
                  "!static mt-0 mb-0 w-[0.0625rem] bg-current ![transition:height_0.5s_ease-out] data-[state=active]:h-20 data-[state=active]:data-[last=false]:mt-4 data-[state=active]:data-[last=true]:mb-4 data-[state=inactive]:h-0"
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
