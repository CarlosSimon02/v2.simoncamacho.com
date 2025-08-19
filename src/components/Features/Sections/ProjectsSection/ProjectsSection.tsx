import ContentContainer from "@/components/UI/Containers/ContentContainer";
import { InteractiveGridPattern } from "@/components/UI/Effects/InteractiveGridPattern";
import SectionTitle from "@/components/UI/SectionTitle";
import { PROJECTS } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import Image from "next/image";
import ProjectsSectionAnimation from "./components/ProjectsSectionAnimation";
import { PROJECT_ITEM_HIDDEN_STYLE } from "./constants";

type ProjectsSectionProps = {
  className?: string;
};

const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  return (
    <>
      <ProjectsSectionAnimation />
      <ContentContainer
        sectionId="projects"
        className={cn(className, "flex flex-col gap-9 md:gap-12")}
      >
        <SectionTitle title="Projects" number={3} />
        <div
          className={cn(
            "grid gap-9 overflow-hidden md:gap-12",
            "md:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]"
          )}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              className={cn(
                "flex flex-col gap-5 md:gap-8",
                PROJECT_ITEM_HIDDEN_STYLE
              )}
            >
              <div className="bg-light-gray-200 dark:bg-dark-gray-700 relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                <InteractiveGridPattern
                  className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                  )}
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="subheading mb-1 md:mb-2">{project.title}</h3>
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
                  {project.description}
                </p>
                <Link
                  href={project.slug}
                  className={cn(
                    "text-accent font-oswald flex w-fit cursor-pointer items-center justify-start gap-2 text-lg",
                    "before:bg-accent before:h-[0.0625rem] before:w-12 before:transition-all before:duration-700 hover:before:w-20 before:hover:duration-150"
                  )}
                >
                  Explore
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
