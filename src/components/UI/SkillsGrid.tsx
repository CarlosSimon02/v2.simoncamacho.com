import { TECHNOLOGIES } from "@/data/technologies";
import { cn } from "@/utils";
import { Skeleton } from "../Primitives/Skeleton";
import TechnologyCard from "./TechnologyCard";

type SkillsGridLoadingProps = {
  className?: string;
  variant?: "default" | "small";
};

export const SkillsGridLoading = ({
  className,
  variant = "default",
}: SkillsGridLoadingProps) => {
  const placeholders = Array.from({ length: 10 });

  return (
    <div
      className={cn(
        "grid grid-cols-1 min-[22.5em]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
        variant === "small" && "gap-2",
        variant === "default" && "gap-3",
        className
      )}
    >
      {placeholders.map((_, i) => (
        <div
          key={i}
          className={cn(
            "bg-bg-card flex items-center gap-4 rounded-xl",
            variant === "default" && "p-2",
            variant === "small" && "gap-2 rounded-lg p-1"
          )}
        >
          <Skeleton
            className={cn(
              "rounded-lg",
              variant === "default" && "h-10 w-10",
              variant === "small" && "h-6 w-6"
            )}
          />
          <Skeleton
            className={cn(
              "rounded-md",
              variant === "default" && "h-4 w-24",
              variant === "small" && "h-3 w-16"
            )}
          />
        </div>
      ))}
    </div>
  );
};

type SkillsGridProps = {
  className?: string;
  cardClassName?: string;
  variant?: "default" | "small";
};

const SkillsGrid = ({
  className,
  variant = "default",
  cardClassName,
}: SkillsGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 min-[22.5em]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
        variant === "small" && "gap-2",
        variant === "default" && "gap-3",
        className
      )}
    >
      {TECHNOLOGIES.map((technology) => (
        <TechnologyCard
          key={technology.name}
          technology={technology}
          variant={variant}
          className={cn(cardClassName)}
        />
      ))}
    </div>
  );
};

export default SkillsGrid;
