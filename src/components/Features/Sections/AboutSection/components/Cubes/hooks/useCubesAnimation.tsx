import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CUBE_ITEM_CLASS, CUBES_CONTAINER_CLASS } from "../constants";

const useCubesAnimation = () => {
  useGSAP(() => {
    gsap.to(`.${CUBE_ITEM_CLASS}`, {
      top: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: `.${CUBES_CONTAINER_CLASS}`,
        start: "top 60%",
      },
    });
  });
};

export default useCubesAnimation;
