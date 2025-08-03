import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SOCIAL_CLASS } from "./constants";

const useSocialsAnimation = () => {
  const socialsRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(`.${SOCIAL_CLASS}`, {
        left: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });
    },
    { scope: socialsRef }
  );

  return { socialsRef };
};

export default useSocialsAnimation;
