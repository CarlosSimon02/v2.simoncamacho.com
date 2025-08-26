import ContentContainer from "@/components/UI/Containers/ContentContainer";
import { InteractiveGridPattern } from "@/components/UI/Effects/InteractiveGridPattern";
import SectionTitle from "@/components/UI/SectionTitle";
import { PROJECTS } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ProjectsSectionAnimation from "./components/ProjectsSectionAnimation";
import { PROJECT_ITEM_CLASS } from "./constants";

type ProjectsSectionProps = {
  className?: string;
};

const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  const t = useTranslations("projectsSection");

  return (
    <>
      <ProjectsSectionAnimation />
      <ContentContainer
        sectionId="projects"
        className={cn(className, "flex flex-col gap-9 md:gap-12")}
      >
        <SectionTitle title={t("title")} number={3} />
        <div
          className={cn(
            "grid gap-9  md:gap-12",
            "md:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]"
          )}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              className={cn(
                "from-bottom-xs flex flex-col gap-5 md:gap-8",
                PROJECT_ITEM_CLASS
              )}
            >
              <Link
                tabIndex={-1}
                href={project.slug}
                className="bg-light-gray-200 dark:bg-dark-gray-700 group relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-lg"
              >
                <InteractiveGridPattern
                  className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                  )}
                />
                <Image
                  src={project.image}
                  alt={t(`projects.${project.slug}.title`)}
                  width={1000}
                  height={1000}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-[scale] duration-5000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <Image
                  src={project.logo}
                  alt={t(`projects.${project.slug}.title`)}
                  width={100}
                  height={100}
                  className="absolute top-4 left-4 size-6"
                />
              </Link>
              <div className="flex flex-col gap-3">
                <h3 className="subheading mb-1 md:mb-2">
                  {t(`projects.${project.slug}.title`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology.name}
                      className="border-foreground-2 text-foreground-2 rounded-full border px-2 py-1 text-sm"
                    >
                      {technology.name}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  {t(`projects.${project.slug}.description`)}
                </p>
                <Link
                  href={project.slug}
                  className={cn(
                    "text-accent font-oswald flex w-fit cursor-pointer items-center justify-start gap-2 text-lg",
                    "before:bg-accent before:h-[0.0625rem] before:w-12 before:transition-all before:duration-700 hover:before:w-20 before:hover:duration-150"
                  )}
                >
                  {t("explore")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>
    </>
  );
};

export default ProjectsSection;
