import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SECTION_NUMBER_CLASS } from "./constants";

const useSectionNumbersAnimation = () => {
  const sectionNumbersRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(`.${SECTION_NUMBER_CLASS}`, {
        right: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });
    },
    { scope: sectionNumbersRef }
  );

  return { sectionNumbersRef };
};

export default useSectionNumbersAnimation;
