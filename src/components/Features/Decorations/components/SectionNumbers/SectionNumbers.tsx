"use client";

import { useCurrentSectionStore } from "@/stores/useCurrentSectionStore";
import { cn } from "@/utils";
import { useEffect, useState } from "react";
import SectionButton from "./components/SectionButton";
import { SECTION_NUMBER_CLASS } from "./constants";
import useSectionNumbersAnimation from "./hooks/useSectionNumbersAnimation";
import { Section } from "./types";

type SectionNumbersProps = {
  className?: string;
  sections: Section[];
};

const SectionNumbers = ({ className, sections }: SectionNumbersProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
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
      {sections.map(({ id, title }, index) => (
        <li key={index} className={cn("from-left-xs", SECTION_NUMBER_CLASS)}>
          <SectionButton
            index={index}
            title={title}
            isActive={id === activeSection}
            isLast={index === sections.length - 1}
            onClick={() => setCurrentSection(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default SectionNumbers;
