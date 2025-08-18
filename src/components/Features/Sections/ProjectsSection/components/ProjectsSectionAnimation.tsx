"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PROJECT_ITEM_CLASS } from "../constants";

const ProjectsSectionAnimation = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray(`.${PROJECT_ITEM_CLASS}`);
    items.forEach((item) => {
      gsap.to(item as Element, {
        top: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: item as Element,
          start: "top 80%",
        },
      });
    });
  });

  return null;
};

export default ProjectsSectionAnimation;
