import heroImage from "@/assets/heroes/main.png";
import PillButton from "@/components/UI/Buttons/PillButton";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import { cn } from "@/utils";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import ContactButton from "./components/ContactButton";
import HeroSectionAnimation from "./components/HeroSectionAnimation";
import {
  HERO_SECTION_CLASS,
  HERO_SECTION_CONTENT_ITEM_STYLE,
  HERO_SECTION_IMAGE_CONTAINER_CLASS,
  HERO_SECTION_IMAGE_STYLE,
  HERO_SECTION_TEXT_DECOR_ITEM_STYLE,
} from "./constants";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = async ({ className }: HeroSectionProps) => {
  const t = await getTranslations();

  return (
    <>
      <HeroSectionAnimation />
      <ContentContainer
        sectionId="home"
        className={cn(
          "flex flex-col items-center justify-between gap-16 max-md:justify-center md:flex-row md:gap-12 lg:gap-16",
          HERO_SECTION_CLASS,
          className
        )}
      >
        <div className="flex flex-col gap-5 md:gap-7 lg:gap-9">
          <div className="after:bg-accent flex flex-col gap-2 md:gap-3">
            <div
              className={cn(
                "flex items-center gap-1",
                HERO_SECTION_CONTENT_ITEM_STYLE
              )}
            >
              <MapPinIcon className="stroke-foreground-2 size-5" />
              <span>{t("info.location")}</span>
            </div>
            <h1
              className={cn(
                "font-montserrat text-accent text-[2.25rem] leading-none font-black md:text-5xl lg:text-6xl",
                HERO_SECTION_CONTENT_ITEM_STYLE
              )}
            >
              {t("info.name")}
            </h1>
            <h2 className={cn("subheading", HERO_SECTION_CONTENT_ITEM_STYLE)}>
              {t("info.title")}
            </h2>
            <div
              className={cn(
                "bg-accent mt-2 h-1 w-12 rounded-full",
                HERO_SECTION_CONTENT_ITEM_STYLE
              )}
            ></div>
          </div>
          <div className="flex flex-col">
            {/* <OpenToWorkBadge
              className={cn("mb-2 w-fit", HERO_SECTION_CONTENT_ITEM_STYLE)}
            /> */}
            <p
              className={cn(
                "max-w-[70ch] md:max-w-[40ch] lg:max-w-[50ch]",
                HERO_SECTION_CONTENT_ITEM_STYLE
              )}
            >
              {t("info.description")}
            </p>
          </div>
          <div
            className={cn(
              "flex flex-wrap gap-4",
              HERO_SECTION_CONTENT_ITEM_STYLE
            )}
          >
            <ContactButton />
            <PillButton
              variant="accent"
              className="flex w-fit shrink-1 basis-[10rem] items-center justify-center text-nowrap"
              asChild
            >
              <a href="/simon_camacho_cv.pdf">{t("heroSection.resume")}</a>
            </PillButton>
          </div>
        </div>
        <div
          className={cn(
            "relative max-w-[31.25rem] md:flex-1",
            HERO_SECTION_IMAGE_CONTAINER_CLASS
          )}
        >
          <div
            className={cn(
              "relative mx-auto aspect-[384/490] w-64 max-w-96 md:w-full",
              HERO_SECTION_IMAGE_STYLE
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
          <div className="absolute bottom-16 -z-10 text-9xl max-md:left-1/2 max-md:-translate-x-1/2 max-md:text-center md:text-[10rem]">
            <div
              className={cn("text-decor", HERO_SECTION_TEXT_DECOR_ITEM_STYLE)}
            >
              {t("heroSection.backgroundCarlos")}
            </div>
            <span
              className={cn(
                "text-decor text-[10rem] md:text-[12rem]",
                HERO_SECTION_TEXT_DECOR_ITEM_STYLE
              )}
            >
              {t("heroSection.backgroundSimon")}
            </span>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default HeroSection;
