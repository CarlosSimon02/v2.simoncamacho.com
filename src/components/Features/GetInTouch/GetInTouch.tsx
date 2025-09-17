"use client";

import { CubeDecoration } from "@/components/UI/Effects/Cube";
import { CONDITIONAL_BREAKPOINTS } from "@/constants/breakpoints";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import ContactFormWrapper from "./components/ContactFormWrapper";

const GET_IN_TOUCH_CONTAINER_CLASS = "get-in-touch";
const GET_IN_TOUCH_CUBES_CLASS = "get-in-touch-cubes";

const GetInTouch = () => {
  const t = useTranslations("connectSection.getInTouch");

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMd: CONDITIONAL_BREAKPOINTS.isMd,
        isMaxMd: CONDITIONAL_BREAKPOINTS.isMaxMd,
      },
      (context) => {
        const { isMd } = context.conditions as gsap.Conditions;

        if (!isMd) return;

        gsap.to(`.${GET_IN_TOUCH_CUBES_CLASS}`, {
          top: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out",
          stagger: 0.3,
          delay: 1.2,
          scrollTrigger: {
            trigger: `.${GET_IN_TOUCH_CONTAINER_CLASS}`,
            start: "top 70%",
          },
        });
      }
    );
  });

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-stretch gap-[2rem] md:flex-row md:gap-16",
        GET_IN_TOUCH_CONTAINER_CLASS
      )}
    >
      <div className={cn("relative basis-1/2")}>
        <div className="absolute -top-30 right-10">
          <CubeDecoration
            size={100}
            angle={{ x: 80, y: 10 }}
            className={cn(GET_IN_TOUCH_CUBES_CLASS, "from-bottom-sm")}
            positionClass="max-md:!hidden"
          />
        </div>
        <h3 className="subheading mb-4 md:mb-5">{t("title")}</h3>
        <p>{t("description")}</p>

        <div className="absolute -bottom-30 left-0 mt-14 ml-8">
          <CubeDecoration
            size={60}
            angle={{ x: 10, y: 180 }}
            className={cn(GET_IN_TOUCH_CUBES_CLASS, "from-bottom-sm")}
            positionClass="max-md:!hidden"
          />
        </div>
      </div>
      <ContactFormWrapper />
    </div>
  );
};

export default GetInTouch;
