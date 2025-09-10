import { cn } from "@/utils";

type TechnologiesListProps = {
  technologies: { name: string }[];
  className?: string;
};

const TechnologiesList = ({
  technologies,
  className,
}: TechnologiesListProps) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {technologies.map((technology) => (
        <span
          key={technology.name}
          className="border-pill-border text-foreground-2 bg-pill-bg rounded-full border px-3 py-1 text-sm"
        >
          {technology.name}
        </span>
      ))}
    </div>
  );
};

export default TechnologiesList;
