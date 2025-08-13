"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { EXPERIENCE_TIMELINE_CLASS } from "./constants";

const ExperienceSectionAnimation = () => {
  useGSAP(() => {
    gsap.to(`.${EXPERIENCE_TIMELINE_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${EXPERIENCE_TIMELINE_CLASS}`,
        start: "top 70%",
      },
    });
  });

  return null;
};

export default ExperienceSectionAnimation;
