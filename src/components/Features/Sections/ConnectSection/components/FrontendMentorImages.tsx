"use client";

import articlePreviewComponent from "@/assets/femProjects/articlePreviewComponent.png";
import bmiCalculator from "@/assets/femProjects/bmiCalculator.png";
import skilledLandingPageDesktop from "@/assets/femProjects/skilledLandingPageDesktop.png";
import skilledLandingPageMobile from "@/assets/femProjects/skilledLandingPageMobile.png";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FRONTEND_MENTOR_IMAGES_CLASS = "frontend-mentor-image";
const FRONTEND_MENTOR_IMAGES_CONTAINER_CLASS =
  "frontend-mentor-images-container";

type MediaImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

const MediaImage = ({
  src,
  alt,
  className,
  width = 400,
  height = 400,
}: MediaImageProps) => (
  <Image
    src={typeof src === "string" ? src : (src as any).src}
    alt={alt}
    className={cn(className)}
    width={width}
    height={height}
  />
);

const FrontendMentorImages = () => {
  const t = useTranslations("connectSection.onFrontendMentor.screenshotsAlt");

  useGSAP(() => {
    gsap.to(`.${FRONTEND_MENTOR_IMAGES_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: `.${FRONTEND_MENTOR_IMAGES_CONTAINER_CLASS}`,
        start: "top 70%",
      },
    });
  });

  return (
    <div
      className={cn(
        "grid basis-[60%] gap-3 max-md:max-w-xl min-[30em]:grid-cols-3 min-[30em]:grid-rows-2",
        FRONTEND_MENTOR_IMAGES_CONTAINER_CLASS
      )}
    >
      <MediaImage
        src={skilledLandingPageMobile.src}
        alt={t("skilledELearningLandingPage")}
        className={cn(
          "from-bottom-sm row-span-2 aspect-[15/20] h-full rounded-2xl object-cover max-[30em]:hidden",
          FRONTEND_MENTOR_IMAGES_CLASS
        )}
      />
      <MediaImage
        src={articlePreviewComponent.src}
        alt={t("articlePreviewComponent")}
        className={cn(
          "from-bottom-sm col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:h-full",
          FRONTEND_MENTOR_IMAGES_CLASS
        )}
      />
      <MediaImage
        src={bmiCalculator.src}
        alt={t("bmiCalculator")}
        className={cn(
          "from-bottom-sm col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:h-full",
          FRONTEND_MENTOR_IMAGES_CLASS
        )}
      />
      <MediaImage
        src={skilledLandingPageDesktop.src}
        alt={t("skilledELearningLandingPage")}
        className={cn(
          "from-bottom-sm col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:hidden min-[30em]:h-full",
          FRONTEND_MENTOR_IMAGES_CLASS
        )}
      />
    </div>
  );
};

export default FrontendMentorImages;
