"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/ScrollTrigger";

export const GSAPSetup = () => {
  gsap.registerPlugin(useGSAP, GSAPScrollTrigger);

  return null;
};
