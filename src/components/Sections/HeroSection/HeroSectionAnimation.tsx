"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HERO_SECTION_CONTENT_ITEM_CLASS } from "./constants";

const HeaderSectionAnimation = () => {
  useGSAP(() => {
    gsap.to(`.${HERO_SECTION_CONTENT_ITEM_CLASS}`, {
      top: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
    });
  });

  return null;
};

export default HeaderSectionAnimation;
