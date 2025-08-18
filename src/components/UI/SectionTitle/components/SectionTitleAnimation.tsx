"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SECTION_TITLE_CONTAINER_CLASS } from "../constants";

type SectionTitleAnimationProps = {
  id: string;
};

const SectionTitleAnimation = ({ id }: SectionTitleAnimationProps) => {
  useGSAP(() => {
    gsap.to(`.${SECTION_TITLE_CONTAINER_CLASS}-${id}`, {
      top: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: `.${SECTION_TITLE_CONTAINER_CLASS}-${id}`,
        start: "top 70%",
      },
    });
  });

  return null;
};

export default SectionTitleAnimation;
