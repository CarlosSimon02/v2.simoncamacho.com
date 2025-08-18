import { CONDITIONAL_BREAKPOINTS } from "@/constants/breakpoints";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { HEADER_ITEM_CLASS, HEADER_ITEM_MOBILE_CLASS } from "../constants";

const useHeaderAnimation = () => {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMd: CONDITIONAL_BREAKPOINTS.isMd,
          isMaxd: CONDITIONAL_BREAKPOINTS.isMaxMd,
        },
        (context) => {
          const { isMd } = context.conditions as gsap.Conditions;
          const target = isMd
            ? `.${HEADER_ITEM_CLASS}`
            : `.${HEADER_ITEM_MOBILE_CLASS}`;

          gsap.to(target, {
            bottom: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
          });
        }
      );
    },
    { scope: headerRef }
  );

  return { headerRef };
};

export default useHeaderAnimation;
