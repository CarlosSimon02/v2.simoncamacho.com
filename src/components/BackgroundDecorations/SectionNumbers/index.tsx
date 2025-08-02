import GhostButton from "@/components/Buttons/GhostButton";
import { cn } from "@/utils";

type SectionNumberBarbequeProps = {
  className?: string;
};

const SectionNumberBarbeque = ({ className }: SectionNumberBarbequeProps) => {
  return (
    <ul className={cn("pointer-events-auto flex flex-col gap-4", className)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index}>
          <GhostButton
            className="font-oswald text-foreground-2 text-xl font-bold"
            color="subtle"
            hoverDirection="left"
          >
            <div>{String(index).padStart(2, "0")}</div>
          </GhostButton>
        </li>
      ))}
    </ul>
  );
};

export default SectionNumberBarbeque;
