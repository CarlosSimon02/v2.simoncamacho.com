import { TECHNOLOGIES } from "@/data/technologies";
import { cn } from "@/utils";
import { Skeleton } from "../Primitives/Skeleton";

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
  variant?: "default" | "small";
};

const SkillsGrid = ({ className, variant = "default" }: SkillsGridProps) => {
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
        <div
          key={technology.name}
          className={cn(
            "bg-bg-card flex items-center gap-4 rounded-xl",
            variant === "default" && " p-2",
            variant === "small" && "gap-2 rounded-lg p-1"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-center rounded-lg",
              variant === "default" && "p-2 text-black dark:text-white",
              variant === "small" &&
                "p-1 text-xs text-black/80 dark:text-white/80",
              technology.color === "system" && "bg-black/5 dark:bg-white/5"
            )}
            style={{
              backgroundColor:
                technology.color !== "system"
                  ? technology.color + (variant === "default" ? "30" : "20")
                  : undefined,
            }}
          >
            <technology.icon
              className={cn(
                variant === "default" && "size-6",
                variant === "small" && "size-4"
              )}
            />
          </div>
          <p
            className={cn(
              "text-medium-gray-50 dark:text-light-gray-950",
              variant === "small" && "text-sm"
            )}
          >
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
