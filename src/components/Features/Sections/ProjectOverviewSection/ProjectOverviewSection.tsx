"use client";

import PillButton from "@/components/UI/Buttons/PillButton";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import ImageWithGridBg from "@/components/UI/ImageWithGridBg";
import TechnologyCard from "@/components/UI/TechnologyCard";
import { CONDITIONAL_BREAKPOINTS } from "@/constants/breakpoints";
import { TECHNOLOGIES, TechnologyName } from "@/data/technologies";
import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import React from "react";

const PROJECT_OVERVIEW_ITEM_CLASS = "project-overview-item";
const TECHNOLOGY_ITEM_CLASS = "technology-items";

type ProjectOverviewSectionProps = {
  className?: string;
  projectName: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  logo: string | React.ReactNode;
  href: string;
  logoAlt: string;
  codeLink: string;
  previewLink: string;
  stackAndExplanation: React.ReactNode;
  technologies: TechnologyName[];
};

const ProjectOverviewSection = ({
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
  const t = useTranslations("projectOverviewSection");

  useGSAP(() => {
    gsap.to(`.${PROJECT_OVERVIEW_ITEM_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.1,
      ease: "power4.out",
    });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMd: CONDITIONAL_BREAKPOINTS.isMd,
        isMaxMd: CONDITIONAL_BREAKPOINTS.isMaxMd,
      },
      (context) => {
        const { isMd } = context.conditions as gsap.Conditions;

        if (!isMd) return;

        gsap.to(`.${TECHNOLOGY_ITEM_CLASS}`, {
          top: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: `.${TECHNOLOGY_ITEM_CLASS}`,
            start: "top 70%",
          },
        });
      }
    );
  });

  const techObjects = technologies
    .map((name) => TECHNOLOGIES.find((t) => t.name === name))
    .filter((t): t is (typeof TECHNOLOGIES)[number] => Boolean(t));

  return (
    <ContentContainer
      sectionId="project-overview"
      className={cn("flex flex-col gap-12 md:gap-20", className)}
    >
      <h1
        className={cn(
          "font-montserrat text-accent from-bottom-sm flex-1 text-center text-3xl leading-none font-black md:text-4xl lg:text-5xl",
          PROJECT_OVERVIEW_ITEM_CLASS
        )}
      >
        {projectName}
      </h1>

      <div className="flex items-center gap-16 max-md:flex-col md:gap-12">
        <div className="flex flex-1 flex-col gap-5 max-md:w-full md:gap-6">
          <ImageWithGridBg
            href={href}
            alt={imageAlt}
            image={image}
            logo={logo}
            logoAlt={logoAlt}
            className={cn(PROJECT_OVERVIEW_ITEM_CLASS, "from-bottom-sm")}
          />
          <div className="flex flex-wrap items-stretch gap-4">
            <PillButton
              variant="outline"
              className={cn(
                "from-bottom-sm flex-1 text-nowrap sm:min-w-[10.3125rem]",
                PROJECT_OVERVIEW_ITEM_CLASS
              )}
              asChild
            >
              <Link href={codeLink}>{t("viewCode")}</Link>
            </PillButton>
            <PillButton
              variant="accent"
              className={cn(
                "from-bottom-sm flex-1 text-nowrap max-sm:w-full",
                PROJECT_OVERVIEW_ITEM_CLASS
              )}
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

        <div
          className={cn(
            "from-bottom-sm flex w-full flex-[40%] flex-wrap items-stretch justify-center gap-3 max-md:hidden",
            TECHNOLOGY_ITEM_CLASS
          )}
        >
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
