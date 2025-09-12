import { TechnologyName } from "@/data/technologies";
import { cn } from "@/utils";

type TechnologiesListProps = {
  technologies: TechnologyName[];
  className?: string;
};

const TechnologiesList = ({
  technologies,
  className,
}: TechnologiesListProps) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {technologies.map((name, i) => (
        <span
          key={`${name}-${i}`}
          className="border-pill-border text-foreground-2 bg-pill-bg rounded-full border px-3 py-1 text-sm"
        >
          {name}
        </span>
      ))}
    </div>
  );
};

export default TechnologiesList;
