"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  CHESS_BOARD_CLASS,
  CONTACT_FORM_CLASS,
  FRONTEND_MENTOR_CLASS,
  FRONTEND_MENTOR_IMAGES_CLASS,
  GET_IN_TOUCH_CLASS,
  PLAY_CHESS_CLASS,
} from "../constants";

const ConnectSectionAnimation = () => {
  useGSAP(() => {
    // Get in touch section animation
    gsap.to(`.${GET_IN_TOUCH_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${GET_IN_TOUCH_CLASS}`,
        start: "top 70%",
      },
    });

    // Contact form animation
    gsap.to(`.${CONTACT_FORM_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${CONTACT_FORM_CLASS}`,
        start: "top 70%",
      },
    });

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
  });

  return null;
};

export default ConnectSectionAnimation;
