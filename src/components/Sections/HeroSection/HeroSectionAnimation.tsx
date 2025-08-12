"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  HERO_SECTION_CONTENT_ITEM_CLASS,
  HERO_SECTION_IMAGE_CLASS,
  HERO_SECTION_IMAGE_CONTAINER_CLASS,
  HERO_SECTION_TEXT_DECOR_ITEM_CLASS,
} from "./constants";

const HeaderSectionAnimation = () => {
  useGSAP(() => {
    gsap.to(`.${HERO_SECTION_CONTENT_ITEM_CLASS}`, {
      top: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 2,
      ease: "power4.out",
    });

    gsap.to(`.${HERO_SECTION_TEXT_DECOR_ITEM_CLASS}`, {
      top: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${HERO_SECTION_IMAGE_CONTAINER_CLASS}`,
        start: "top 70%",
      },
    });

    gsap.to(`.${HERO_SECTION_IMAGE_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${HERO_SECTION_IMAGE_CONTAINER_CLASS}`,
        start: "top 70%",
      },
    });
  });

  return null;
};

export default HeaderSectionAnimation;
