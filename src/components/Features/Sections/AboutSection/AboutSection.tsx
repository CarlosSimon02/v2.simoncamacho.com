import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { TECHNOLOGIES } from "@/data/technologies";
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
          <div className="grid grid-cols-1 gap-3 min-[22.5em]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {TECHNOLOGIES.map((technology) => (
              <div
                key={technology.name}
                className="bg-light-gray-200 dark:bg-dark-gray-800 flex items-center gap-4 rounded-xl p-2"
              >
                <div
                  className={cn(
                    "flex items-center justify-center rounded-lg p-2 text-black dark:text-white",
                    technology.color === "system" &&
                      "bg-black/5 dark:bg-white/5"
                  )}
                  style={{
                    backgroundColor:
                      technology.color !== "system"
                        ? technology.color + "30"
                        : undefined,
                  }}
                >
                  <technology.icon className="size-6" />
                </div>
                <p className="text-medium-gray-50 dark:text-light-gray-950">
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
