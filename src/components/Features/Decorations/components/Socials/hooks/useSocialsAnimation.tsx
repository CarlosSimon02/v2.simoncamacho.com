import { CONDITIONAL_BREAKPOINTS } from "@/constants/breakpoints";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SOCIAL_ITEM_CLASS } from "../constants";

const useSocialsAnimation = () => {
  const socialsRef = useRef(null);

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

          gsap.to(`.${SOCIAL_ITEM_CLASS}`, {
            left: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
          });
        }
      );
    },
    { scope: socialsRef }
  );

  return { socialsRef };
};

export default useSocialsAnimation;
