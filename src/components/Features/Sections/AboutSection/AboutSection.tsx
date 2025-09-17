import InlineLink from "@/components/UI/Buttons/InlineLink";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Cubes from "./components/Cubes";
import MySkills from "./components/MySkills";

type AboutSectionProps = {
  className?: string;
};

const AboutSection = ({ className }: AboutSectionProps) => {
  const t = useTranslations("aboutSection");

  return (
    <ContentContainer
      sectionId="about"
      className={cn("flex flex-col gap-9 md:gap-12", className)}
    >
      <SectionTitle title={t("title") as string} number={1} />
      <div className="flex flex-col gap-4 md:mb-12 md:flex-row-reverse md:items-center">
        <div
          className={cn(
            "flex max-w-[60ch] flex-col md:flex-1 md:flex-shrink-1 md:flex-grow-4"
          )}
        >
          <h3 className="subheading mb-4 md:mb-5">{t("journeyHeader")}</h3>
          <p>
            {t.rich("journey", {
              br: () => <br />,
              tetrisLink: (chunks) => (
                <InlineLink href="https://www.youtube.com/watch?v=zH_omFPqMO4">
                  {chunks}
                </InlineLink>
              ),
            })}
          </p>
        </div>
        <Cubes />
      </div>
      <MySkills />
    </ContentContainer>
  );
};

export default AboutSection;
