"use client";

import OpenToWorkBadge from "@/components/UI/OpenToWorkBadge";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import ContactButton from "./ContactButton";
import ResumeButton from "./ResumeButton";

const HERO_SECTION_CONTENT_ITEM_CLASS = "hero-section-content-item";

const Content = () => {
  const t = useTranslations();

  useGSAP(() => {
    gsap.to(`.${HERO_SECTION_CONTENT_ITEM_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 3,
      stagger: 0.1,
      ease: "power4.out",
    });
  });

  return (
    <div className="flex flex-col gap-5 md:gap-7 lg:gap-9">
      <div className="after:bg-accent flex flex-col gap-2 md:gap-3">
        <div
          className={cn(
            "from-bottom-sm flex items-center gap-1",
            HERO_SECTION_CONTENT_ITEM_CLASS
          )}
        >
          <MapPinIcon className="stroke-foreground-2 size-5" />
          <span>{t("info.location")}</span>
        </div>
        <h1
          className={cn(
            "from-bottom-sm font-montserrat text-accent text-[2.25rem] leading-none font-black md:text-5xl lg:text-6xl",
            HERO_SECTION_CONTENT_ITEM_CLASS
          )}
        >
          {t("info.name")}
        </h1>
        <h2
          className={cn(
            "subheading from-bottom-sm",
            HERO_SECTION_CONTENT_ITEM_CLASS
          )}
        >
          {t("info.title")}
        </h2>
        <div
          className={cn(
            "bg-accent from-bottom-sm mt-2 h-1 w-12 rounded-full",
            HERO_SECTION_CONTENT_ITEM_CLASS
          )}
        ></div>
      </div>
      <div className="flex flex-col">
        <OpenToWorkBadge
          className={cn(
            "from-bottom-sm mb-2 w-fit",
            HERO_SECTION_CONTENT_ITEM_CLASS
          )}
        />
        <p
          className={cn(
            "from-bottom-sm max-w-[70ch] md:max-w-[40ch] lg:max-w-[50ch]",
            HERO_SECTION_CONTENT_ITEM_CLASS
          )}
        >
          {t("info.description")}
        </p>
      </div>
      <div
        className={cn(
          "from-bottom-sm flex flex-wrap gap-4",
          HERO_SECTION_CONTENT_ITEM_CLASS
        )}
      >
        <ContactButton />
        <ResumeButton />
      </div>
    </div>
  );
};

export default Content;
