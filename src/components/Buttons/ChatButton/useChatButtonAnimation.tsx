import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const useChatButtonAnimation = () => {
  const chatButtonRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(chatButtonRef.current, {
        left: 0,
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "power4.out",
      });
    },
    { scope: chatButtonRef }
  );

  return { chatButtonRef };
};

export default useChatButtonAnimation;
