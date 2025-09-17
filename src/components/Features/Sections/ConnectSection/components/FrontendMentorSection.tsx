"use client";

import InlineLink from "@/components/UI/Buttons/InlineLink";
import { CubeDecoration } from "@/components/UI/Effects/Cube";
import { CONDITIONAL_BREAKPOINTS } from "@/constants/breakpoints";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import FrontendMentorImages from "./FrontendMentorImages";

export const FRONTEND_MENTOR_CONTAINER_CLASS = "frontend-mentor";
const FRONTEND_MENTOR_CUBE_CLASS = "frontend-mentor-cube";

const FrontendMentorSection = () => {
  const t = useTranslations("connectSection.onFrontendMentor");

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

        gsap.to(`.${FRONTEND_MENTOR_CUBE_CLASS}`, {
          top: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out",
          delay: 0.8,
          scrollTrigger: {
            trigger: `.${FRONTEND_MENTOR_CONTAINER_CLASS}`,
            start: "top 70%",
          },
        });
      }
    );
  });

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-[2rem] md:flex-row-reverse md:gap-12",
        FRONTEND_MENTOR_CONTAINER_CLASS
      )}
    >
      <div className={cn("relative grid basis-[40%] gap-3 md:gap-8")}>
        <div>
          <h3 className="subheading mb-4 md:mb-5">{t("title")}</h3>
          <p>
            {t.rich("description", {
              femLink: (chunks) => (
                <InlineLink href="https://www.frontendmentor.io/profile/CarlosSimon02">
                  {chunks}
                </InlineLink>
              ),
            })}
          </p>
          <div className="absolute -top-30 right-10">
            <CubeDecoration
              size={70}
              angle={{ x: 50, y: 90 }}
              className={cn(FRONTEND_MENTOR_CUBE_CLASS, "from-bottom-sm")}
              positionClass="max-lg:!hidden"
            />
          </div>
        </div>
      </div>
      <FrontendMentorImages />
    </div>
  );
};

export default FrontendMentorSection;
