"use client";

import GhostButton from "@/components/Buttons/GhostButton";
import { useCurrentSectionStore } from "@/stores/useCurrentSectionStore";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { NUMBER_SECTION_STYLE } from "./constants";
import styles from "./index.module.css";
import { Section } from "./types";
import useSectionNumbersAnimation from "./useSectionNumbersAnimation";

type SectionNumbersProps = {
  className?: string;
  sections: Section[];
};

const SectionNumbers = ({ className, sections }: SectionNumbersProps) => {
  const t = useTranslations();
  const [activeSection, setActiveSection] = React.useState<string>("");
  const { currentSection, setCurrentSection } = useCurrentSectionStore();
  const { sectionNumbersRef, isAnimationComplete } =
    useSectionNumbersAnimation();

  useEffect(() => {
    if (isAnimationComplete) setActiveSection(currentSection);
  }, [isAnimationComplete, currentSection]);

  return (
    <ul
      className={cn(styles.sectionNumbersList, className)}
      ref={sectionNumbersRef}
    >
      {sections.map(({ id, title }, index) => {
        const isActive = id === activeSection;
        const isLast = index === sections.length - 1;

        return (
          <li key={index} className={cn(NUMBER_SECTION_STYLE)}>
            <GhostButton
              className={cn(
                styles.sectionButton,
                isLast ? styles.sectionButtonLast : styles.sectionButtonNormal
              )}
              color={isActive ? "secondary" : "subtle"}
              hoverDirection="right"
              onClick={() => setCurrentSection(id)}
            >
              <div aria-hidden="true">{String(index).padStart(2, "0")}</div>
              <div
                data-state={isActive ? "active" : "inactive"}
                data-last={isLast ? "true" : "false"}
                className={styles.sectionDivider}
              />
              <div className="sr-only">
                {t("common.navigateToSection", { section: title })}
              </div>
            </GhostButton>
          </li>
        );
      })}
    </ul>
  );
};

export default SectionNumbers;
