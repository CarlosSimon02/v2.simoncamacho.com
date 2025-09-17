"use client";

import heroImage from "@/assets/heroes/main.png";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HERO_SECTION_IMAGE_CLASS = "hero-section-image";
export const HERO_SECTION_IMAGE_CONTAINER_CLASS =
  "hero-section-image-container";

const Hero = () => {
  const t = useTranslations();

  useGSAP(() => {
    gsap.to(`.${HERO_SECTION_IMAGE_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${HERO_SECTION_IMAGE_CONTAINER_CLASS}`,
        start: "top 70%",
      },
    });
  });

  return (
    <div
      className={cn(
        "relative max-w-[31.25rem] md:flex-1",
        HERO_SECTION_IMAGE_CONTAINER_CLASS
      )}
    >
      <div className="absolute bottom-16 -z-10 text-9xl max-md:left-1/2 max-md:-translate-x-1/2 max-md:text-center md:text-[10rem]">
        <div
          className={cn("text-decor from-bottom-sm", HERO_SECTION_IMAGE_CLASS)}
        >
          {t("heroSection.backgroundCarlos")}
        </div>
        <span
          className={cn(
            "text-decor from-bottom-sm text-[10rem] md:text-[12rem]",
            HERO_SECTION_IMAGE_CLASS
          )}
        >
          {t("heroSection.backgroundSimon")}
        </span>
      </div>
      <div
        className={cn(
          "from-bottom-sm relative mx-auto aspect-[384/490] w-64 max-w-96 md:w-full",
          HERO_SECTION_IMAGE_CLASS
        )}
      >
        <Image
          src={heroImage.src}
          alt={t("heroSection.heroImageAlt")}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Hero;
