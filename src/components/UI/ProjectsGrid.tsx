import { Project } from "@/types/project";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import { Skeleton } from "../Primitives/Skeleton";
import TailedButton from "./Buttons/TailedButton";
import ImageWithGridBg from "./ImageWithGridBg";

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
          <ImageWithGridBg
            href={project.slug}
            image={project.image}
            logo={project.logo}
            logoAlt={t(`projects.${project.slug}.title`)}
            alt={t(`projects.${project.slug}.title`)}
          />
          <div className="flex flex-col gap-3">
            <h3 className="subheading mb-1 md:mb-2">
              {t(`projects.${project.slug}.title`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology.name}
                  className="border-pill-border text-foreground-2 bg-pill-bg rounded-full border px-3 py-1 text-sm"
                >
                  {technology.name}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground">
              {t(`projects.${project.slug}.description`)}
            </p>
            <TailedButton href={project.slug} label={t("explore")} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
