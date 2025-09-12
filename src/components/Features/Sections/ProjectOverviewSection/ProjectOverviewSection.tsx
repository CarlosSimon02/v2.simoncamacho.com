import PillButton from "@/components/UI/Buttons/PillButton";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import ImageWithGridBg from "@/components/UI/ImageWithGridBg";
import TechnologyCard from "@/components/UI/TechnologyCard";
import { TECHNOLOGIES, TechnologyName } from "@/data/technologies";
import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import { getTranslations } from "next-intl/server";
import React from "react";

type ProjectOverviewSectionProps = {
  className?: string;
  projectName: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  logo: string;
  href: string;
  logoAlt: string;
  codeLink: string;
  previewLink: string;
  stackAndExplanation: React.ReactNode;
  technologies: TechnologyName[];
};

const ProjectOverviewSection = async ({
  className,
  projectName,
  description,
  image,
  imageAlt,
  logo,
  href,
  logoAlt,
  codeLink,
  previewLink,
  stackAndExplanation,
  technologies,
}: ProjectOverviewSectionProps) => {
  const t = await getTranslations("projectOverviewSection");

  const techObjects = technologies
    .map((name) => TECHNOLOGIES.find((t) => t.name === name))
    .filter((t): t is (typeof TECHNOLOGIES)[number] => Boolean(t));

  return (
    <ContentContainer
      sectionId="project-overview"
      className={cn("flex flex-col gap-16 md:gap-24", className)}
    >
      <h1 className="font-montserrat text-accent flex-1 text-center text-3xl leading-none font-black md:text-4xl lg:text-5xl">
        {projectName}
      </h1>

      <div className="flex items-center gap-16 max-md:flex-col md:gap-12">
        <div className="flex max-w-md flex-1 flex-col gap-5 max-md:w-full md:gap-6">
          <ImageWithGridBg
            href={href}
            alt={imageAlt}
            image={image}
            logo={logo}
            logoAlt={logoAlt}
          />
          <div className="flex flex-wrap items-stretch gap-4">
            <PillButton
              variant="outline"
              className="flex-1 text-nowrap sm:min-w-[10.3125rem]"
              asChild
            >
              <Link href={codeLink}>{t("viewCode")}</Link>
            </PillButton>
            <PillButton
              variant="accent"
              className="flex-1 text-nowrap max-sm:w-full"
            >
              <Link href={previewLink}>{t("previewProject")}</Link>
            </PillButton>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 md:gap-5">
          <h2 className="subheading">{t("description")}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-8 max-md:flex-col md:gap-12">
        <div className="flex flex-col gap-4 md:flex-[60%] md:gap-5">
          <h2 className="subheading">{t("webStackAndExplanation")}</h2>
          <div className="flex flex-col gap-4">
            <div className="flex w-full flex-wrap items-stretch justify-center gap-3 md:hidden">
              {techObjects.map((technology) => (
                <TechnologyCard
                  key={technology.name}
                  technology={technology}
                  className="w-full max-w-[10rem]"
                />
              ))}
            </div>
            <p className="flex-2/3">{stackAndExplanation}</p>
          </div>
        </div>

        <div className="flex w-full flex-[40%] flex-wrap items-stretch justify-center gap-3 max-md:hidden">
          {techObjects.map((technology) => (
            <TechnologyCard
              key={technology.name}
              technology={technology}
              className="w-full max-w-[12rem]"
            />
          ))}
        </div>
      </div>
    </ContentContainer>
  );
};

export default ProjectOverviewSection;
