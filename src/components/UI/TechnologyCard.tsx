import { TECHNOLOGIES } from "@/data/technologies";
import { cn } from "@/utils";

type TechnologyCardProps = {
  className?: string;
  technology: (typeof TECHNOLOGIES)[number];
  variant?: "default" | "small";
};

const TechnologyCard = ({
  className,
  variant = "default",
  technology,
}: TechnologyCardProps) => {
  return (
    <div
      key={technology.name}
      className={cn(
        "bg-bg-card flex items-center gap-4 rounded-xl",
        variant === "default" && " p-2",
        variant === "small" && "gap-2 rounded-lg p-1",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-lg",
          variant === "default" && "p-2 text-black dark:text-white",
          variant === "small" && "p-1 text-xs text-black/80 dark:text-white/80",
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
  );
};

export default TechnologyCard;
