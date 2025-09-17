"use client";

import { CONDITIONAL_BREAKPOINTS } from "@/constants/breakpoints";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GET_IN_TOUCH_CLASS, GET_IN_TOUCH_CUBES_CLASS } from "../constants";

const GetInTouchAnimation = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMd: CONDITIONAL_BREAKPOINTS.isMd,
        isMaxMd: CONDITIONAL_BREAKPOINTS.isMaxMd,
      },
      (context) => {
        const { isMd } = context.conditions as gsap.Conditions;

        if (!isMd) return;

        // Get in touch cubes with stagger effect
        const getInTouchCubes = gsap.utils.toArray(
          `.${GET_IN_TOUCH_CUBES_CLASS}`
        );
        gsap.to(getInTouchCubes, {
          top: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out",
          stagger: 0.3,
          delay: 0.5, // Delay to avoid overlapping with section animation
          scrollTrigger: {
            trigger: `.${GET_IN_TOUCH_CLASS}`,
            start: "top 70%",
          },
        });
      }
    );
  });

  return null;
};

export default GetInTouchAnimation;
