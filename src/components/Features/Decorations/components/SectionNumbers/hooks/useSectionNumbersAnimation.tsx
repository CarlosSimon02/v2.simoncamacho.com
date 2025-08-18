import { CONDITIONAL_BREAKPOINTS } from "@/constants/breakpoints";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { SECTION_NUMBER_CLASS } from "../constants";

type UseSectionNumbersAnimationProps = {
  onComplete?: gsap.Callback;
};

const useSectionNumbersAnimation = ({
  onComplete,
}: UseSectionNumbersAnimationProps = {}) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const sectionNumbersRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isXl: CONDITIONAL_BREAKPOINTS.isXl,
          isMaxXl: CONDITIONAL_BREAKPOINTS.isMaxXl,
        },
        (context) => {
          const { isXl } = context.conditions as gsap.Conditions;

          if (!isXl) return;

          gsap.to(`.${SECTION_NUMBER_CLASS}`, {
            right: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
            onComplete() {
              setIsAnimationComplete(true);
              onComplete?.();
            },
          });
        }
      );
    },
    { scope: sectionNumbersRef }
  );

  return { sectionNumbersRef, isAnimationComplete };
};

export default useSectionNumbersAnimation;
