import heroImage from "@/assets/heroes/main.png";
import PillButton from "@/components/Buttons/PillButton";
import ContentContainer from "@/components/Containers/ContentContainer";
import { cn } from "@/utils";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import {
  HERO_SECTION_CLASS,
  HERO_SECTION_CONTENT_ITEM_STYLE,
  HERO_SECTION_IMAGE_CONTAINER_CLASS,
  HERO_SECTION_IMAGE_STYLE,
  HERO_SECTION_TEXT_DECOR_ITEM_STYLE,
} from "./constants";
import HeroSectionAnimation from "./HeroSectionAnimation";
import styles from "./index.module.css";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = async ({ className }: HeroSectionProps) => {
  const t = await getTranslations("heroSection");
  return (
    <>
      <HeroSectionAnimation />
      <ContentContainer
        sectionId="home"
        className={cn(
          className,
          styles.heroSectionContainer,
          HERO_SECTION_CLASS
        )}
      >
        <div className={styles.heroContent}>
          <div className={styles.heroHeader}>
            <div
              className={cn(
                styles.heroLocation,
                HERO_SECTION_CONTENT_ITEM_STYLE
              )}
            >
              <MapPinIcon className="stroke-foreground-2 size-5" />
              <span>{t("location")}</span>
            </div>
            <h1
              className={cn(styles.heroName, HERO_SECTION_CONTENT_ITEM_STYLE)}
            >
              {t("name")}
            </h1>
            <h2
              className={cn(styles.heroTitle, HERO_SECTION_CONTENT_ITEM_STYLE)}
            >
              {t("title")}
            </h2>
            <div
              className={cn(
                styles.heroHeaderLine,
                HERO_SECTION_CONTENT_ITEM_STYLE
              )}
            ></div>
          </div>
          <p
            className={cn(
              styles.heroDescription,
              HERO_SECTION_CONTENT_ITEM_STYLE
            )}
          >
            {t("description")}
          </p>
          <div
            className={cn(styles.heroButtons, HERO_SECTION_CONTENT_ITEM_STYLE)}
          >
            <PillButton className={styles.heroButton}>
              {t("contact")}
            </PillButton>
            <PillButton variant="accent" className={styles.heroButton}>
              {t("resume")}
            </PillButton>
          </div>
        </div>
        <div
          className={cn(
            styles.heroImageContainer,
            HERO_SECTION_IMAGE_CONTAINER_CLASS
          )}
        >
          <div
            className={cn(styles.heroImageWrapper, HERO_SECTION_IMAGE_STYLE)}
          >
            <Image
              src={heroImage.src}
              alt={t("heroImageAlt")}
              width={1000}
              height={1000}
              className={styles.heroImage}
              priority
            />
          </div>
          <div className={cn(styles.heroTextDecor, styles.textDecor)}>
            <div className={HERO_SECTION_TEXT_DECOR_ITEM_STYLE}>
              {t("backgroundCarlos")}
            </div>
            <span
              className={cn(
                styles.heroTextDecorSimon,
                HERO_SECTION_TEXT_DECOR_ITEM_STYLE
              )}
            >
              {t("backgroundSimon")}
            </span>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default HeroSection;
