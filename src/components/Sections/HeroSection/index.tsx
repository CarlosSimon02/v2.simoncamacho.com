import heroImage from "@/assets/heroes/main.png";
import PillButton from "@/components/Buttons/PillButton";
import ContentContainer from "@/components/Containers/ContentContainer";
import { cn } from "@/utils";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import styles from "./index.module.css";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = async ({ className }: HeroSectionProps) => {
  const t = await getTranslations("heroSection");
  return (
    <ContentContainer
      sectionId="home"
      className={cn(className, styles.heroSectionContainer)}
    >
      <div className={styles.heroContent}>
        <div className={styles.heroHeader}>
          <div className={styles.heroLocation}>
            <MapPinIcon className="stroke-foreground-2 size-5" />
            <span>{t("location")}</span>
          </div>
          <h1 className={styles.heroName}>{t("name")}</h1>
          <h2 className={styles.heroTitle}>{t("title")}</h2>
        </div>
        <p className={styles.heroDescription}>{t("description")}</p>
        <div className={styles.heroButtons}>
          <PillButton className={styles.heroButton}>{t("contact")}</PillButton>
          <PillButton variant="accent" className={styles.heroButton}>
            {t("resume")}
          </PillButton>
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <div className={styles.heroImageWrapper}>
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
          <div>{t("backgroundCarlos")}</div>
          <span className={styles.heroTextDecorSimon}>
            {t("backgroundSimon")}
          </span>
        </div>
      </div>
    </ContentContainer>
  );
};

export default HeroSection;
