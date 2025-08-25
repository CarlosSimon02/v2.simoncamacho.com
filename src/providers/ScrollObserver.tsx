"use client";

import { useCurrentSectionStore } from "@/stores/useCurrentSectionStore";
import { useEffect, useRef } from "react";

export const ScrollObserver = () => {
  const { setCurrentSection } = useCurrentSectionStore();
  const timeoutRef = useRef<number>(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const getHeaderHeight = () => header.getBoundingClientRect().height;
    const getViewportHeight = () => window.innerHeight;

    const createObserver = () => {
      const headerHeight = getHeaderHeight();
      const viewportHeight = getViewportHeight();

      return new IntersectionObserver(
        (entries) => {
          clearTimeout(timeoutRef.current);

          timeoutRef.current = window.setTimeout(() => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const sectionName = entry.target.getAttribute("id");
                if (sectionName) {
                  setCurrentSection(sectionName);
                }
              }
            });
          }, 800);
        },
        {
          root: null,
          rootMargin: `-${headerHeight}px 0px -${viewportHeight - headerHeight}px 0px`,
          threshold: 0,
        }
      );
    };

    let observer = createObserver();
    const sections = document.querySelectorAll("section");
    sections.forEach((s) => observer.observe(s));

    const handleResize = () => {
      observer.disconnect();
      observer = createObserver();
      sections.forEach((s) => observer.observe(s));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutRef.current);
    };
  }, [setCurrentSection]);

  return null;
};
