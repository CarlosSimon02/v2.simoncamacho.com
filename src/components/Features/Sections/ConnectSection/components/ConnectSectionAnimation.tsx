"use client";

import { CONDITIONAL_BREAKPOINTS } from "@/constants/breakpoints";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  CHESS_BOARD_CLASS,
  FRONTEND_MENTOR_CLASS,
  FRONTEND_MENTOR_CUBE_CLASS,
  FRONTEND_MENTOR_IMAGES_CLASS,
  PLAY_CHESS_CLASS,
  PLAY_CHESS_CUBE_CLASS,
} from "../constants";

const ConnectSectionAnimation = () => {
  useGSAP(() => {
    // Get in touch section animation

    // Frontend Mentor section animation
    gsap.to(`.${FRONTEND_MENTOR_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${FRONTEND_MENTOR_CLASS}`,
        start: "top 70%",
      },
    });

    // Frontend Mentor images animation with stagger effect
    const images = gsap.utils.toArray(`.${FRONTEND_MENTOR_IMAGES_CLASS} img`);
    gsap.to(images, {
      top: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2, // 0.2 second delay between each image
      scrollTrigger: {
        trigger: `.${FRONTEND_MENTOR_IMAGES_CLASS}`,
        start: "top 70%",
      },
    });

    // Play Chess section animation
    gsap.to(`.${PLAY_CHESS_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${PLAY_CHESS_CLASS}`,
        start: "top 70%",
      },
    });

    // Chess board animation
    gsap.to(`.${CHESS_BOARD_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${CHESS_BOARD_CLASS}`,
        start: "top 70%",
      },
    });

    // Cube animations with delays to avoid overlapping
    // Only animate cubes on medium breakpoints and above where they are visible
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMd: CONDITIONAL_BREAKPOINTS.isMd,
        isMaxMd: CONDITIONAL_BREAKPOINTS.isMaxMd,
      },
      (context) => {
        const { isMd } = context.conditions as gsap.Conditions;

        if (!isMd) return;

        // Frontend Mentor cube
        gsap.to(`.${FRONTEND_MENTOR_CUBE_CLASS}`, {
          top: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out",
          delay: 0.8, // Delay to avoid overlapping with section animation
          scrollTrigger: {
            trigger: `.${FRONTEND_MENTOR_CLASS}`,
            start: "top 70%",
          },
        });

        // Play Chess cube
        gsap.to(`.${PLAY_CHESS_CUBE_CLASS}`, {
          top: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out",
          delay: 0.6, // Delay to avoid overlapping with section animation
          scrollTrigger: {
            trigger: `.${PLAY_CHESS_CLASS}`,
            start: "top 70%",
          },
        });
      }
    );
  });

  return null;
};

export default ConnectSectionAnimation;
