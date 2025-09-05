import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import SkillsGrid from "@/components/UI/SkillsGrid";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import AboutSectionAnimation from "./components/AboutSectionAnimation";
import Cubes from "./components/Cubes";
import { MY_JOURNEY_STYLE, MY_SKILLS_STYLE } from "./constants";

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
        className={cn("flex flex-col gap-9 md:gap-12", className)}
      >
        <SectionTitle title={t("title") as string} number={1} />
        <div className="flex flex-col gap-4 md:mb-12 md:flex-row-reverse md:items-center">
          <div
            className={cn(
              "flex max-w-[60ch] flex-col md:flex-1 md:flex-shrink-1 md:flex-grow-4",
              MY_JOURNEY_STYLE
            )}
          >
            <h3 className="subheading mb-5 md:mb-7">{t("journeyHeader")}</h3>
            <p>
              {t.rich("journey", {
                br: () => <br />,
              })}
            </p>
          </div>
          <Cubes />
        </div>
        <div className={cn("flex flex-col gap-4", MY_SKILLS_STYLE)}>
          <h3 className="subheading mb-5 md:mb-7">{t("skillsHeader")}</h3>
          <SkillsGrid />
        </div>
      </ContentContainer>
    </>
  );
};

export default AboutSection;
