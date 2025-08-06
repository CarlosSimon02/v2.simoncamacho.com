"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  SECTION_TITLE_CONTAINER_CLASS,
  SECTION_TITLE_ITEM_CLASS,
} from "./constants";

const SectionTitleAnimation = () => {
  useGSAP(() => {
    gsap.to(`.${SECTION_TITLE_ITEM_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${SECTION_TITLE_CONTAINER_CLASS}`,
        start: "top 80%",
      },
    });
  });

  return null;
};

export default SectionTitleAnimation;
