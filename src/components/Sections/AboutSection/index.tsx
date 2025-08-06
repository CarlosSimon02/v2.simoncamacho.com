import ContentContainer from "@/components/Containers/ContentContainer";
import SectionTitle from "@/components/SectionTitle";
import { TECHNOLOGIES } from "@/constants/technologies";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import AboutSectionAnimation from "./AboutSectionAnimation";
import { MY_JOURNEY_STYLE, MY_SKILLS_STYLE } from "./constants";
import Cubes from "./Cubes";
import styles from "./index.module.css";

const SubHeader = ({ children }: { children: React.ReactNode }) => (
  <h3 className={styles.aboutSectionSubHeader}>{children}</h3>
);

type AboutSectionProps = {
  className?: string;
};

const AboutSection = ({ className }: AboutSectionProps) => {
  const t = useTranslations("aboutSection");

  return (
    <>
      <AboutSectionAnimation />
      <ContentContainer
        sectionId="about"
        className={cn(className, styles.aboutSectionContainer)}
      >
        <SectionTitle title={t("title") as string} number={1} />
        <div className={styles.aboutSectionMain}>
          <div className={cn(styles.aboutSectionTextCol, MY_JOURNEY_STYLE)}>
            <SubHeader>{t("journeyHeader")}</SubHeader>
            <p>
              {t.rich("journey", {
                br: () => <br />,
              })}
            </p>
          </div>
          <Cubes />
        </div>
        <div className={cn(styles.aboutSectionSkills, MY_SKILLS_STYLE)}>
          <SubHeader>{t("skillsHeader")}</SubHeader>
          <div className={styles.aboutSectionSkillsGrid}>
            {TECHNOLOGIES.map((technology) => (
              <div
                key={technology.name}
                className={styles.aboutSectionSkillCard}
              >
                <div
                  className={cn(
                    styles.aboutSectionSkillIcon,
                    technology.color === "system" &&
                      "bg-black/5 dark:bg-white/5"
                  )}
                  style={{
                    backgroundColor:
                      technology.color !== "system"
                        ? technology.color + "20"
                        : undefined,
                  }}
                >
                  <technology.icon className="size-6" />
                </div>
                <p className={styles.aboutSectionSkillName}>
                  {technology.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default AboutSection;
