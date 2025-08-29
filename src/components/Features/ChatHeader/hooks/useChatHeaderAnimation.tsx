import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { CHAT_HEADER_ITEM_CLASS } from "../constants";

const useChatHeaderAnimation = () => {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(`.${CHAT_HEADER_ITEM_CLASS}`, {
        bottom: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });
    },
    { scope: headerRef }
  );

  return { headerRef };
};

export default useChatHeaderAnimation;
