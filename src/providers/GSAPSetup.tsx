"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/ScrollTrigger";

export const GSAPSetup = () => {
  gsap.registerPlugin(useGSAP, GSAPScrollTrigger, CustomEase);

  return null;
};
