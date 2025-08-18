"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MY_JOURNEY_CLASS, MY_SKILLS_CLASS } from "../constants";

const AboutSectionAnimation = () => {
  useGSAP(() => {
    gsap.to(`.${MY_JOURNEY_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${MY_JOURNEY_CLASS}`,
        start: "top 70%",
      },
    });

    gsap.to(`.${MY_SKILLS_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${MY_SKILLS_CLASS}`,
        start: "top 70%",
      },
    });
  });

  return null;
};

export default AboutSectionAnimation;
