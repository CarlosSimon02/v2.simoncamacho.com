import { CONDITIONAL_BREAKPOINTS } from "@/constants/breakpoints";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  FOOTER_CUBE_ITEM_CLASS,
  FOOTER_CUBES_CONTAINER_CLASS,
} from "../constants";

const useCubesAnimation = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMd: CONDITIONAL_BREAKPOINTS.isMd,
        isMaxMd: CONDITIONAL_BREAKPOINTS.isMaxMd,
      },
      (context) => {
        const { isMaxMd } = context.conditions as gsap.Conditions;

        if (!isMaxMd) return;

        gsap.to(`.${FOOTER_CUBE_ITEM_CLASS}`, {
          top: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1,
          ease: "back.out",
          scrollTrigger: {
            trigger: `.${FOOTER_CUBES_CONTAINER_CLASS}`,
            start: "top 60%",
          },
        });
      }
    );
  });
};

export default useCubesAnimation;
