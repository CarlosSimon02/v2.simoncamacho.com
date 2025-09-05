import { Project } from "@/types/project";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../Primitives/Skeleton";
import { InteractiveGridPattern } from "./Effects/InteractiveGridPattern";

export const ProjectsGridLoading = ({ className }: { className?: string }) => {
  // Show e.g. 3–4 skeleton cards while loading
  const fakeCards = Array.from({ length: 4 });

  return (
    <div
      className={cn(
        "grid gap-9 md:gap-12",
        "md:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(23rem,1fr))]",
        className
      )}
    >
      {fakeCards.map((_, i) => (
        <div key={i} className="flex flex-col gap-5 md:gap-8">
          {/* Thumbnail */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Skeleton className="h-full w-full" />
            <Skeleton className="absolute top-4 left-4 h-6 w-6 rounded" />
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-3">
            {/* Title */}
            <Skeleton className="h-6 w-32 md:h-7 md:w-40" />

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-12 rounded-full" />
            </div>

            {/* Description */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />

            {/* Explore link */}
            <Skeleton className="h-5 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
};

type ProjectsGridProps = {
  className?: string;
  projects: Project[];
  cardClassName?: string;
};

const ProjectsGrid = ({
  className,
  projects,
  cardClassName,
}: ProjectsGridProps) => {
  const t = useTranslations("projectsSection");

  return (
    <div
      className={cn(
        "grid gap-9  md:gap-12",
        "md:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(23rem,1fr))]",
        className
      )}
    >
      {projects.map((project) => (
        <div
          key={project.slug}
          className={cn("flex flex-col gap-5 md:gap-8", cardClassName)}
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
                  className="border-foreground-2 text-foreground-2 rounded-full border px-2 py-1"
                >
                  {technology.name}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground">
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
  );
};

export default ProjectsGrid;
