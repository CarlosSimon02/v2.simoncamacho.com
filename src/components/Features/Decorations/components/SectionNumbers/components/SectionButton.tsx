import GhostButton from "@/components/UI/Buttons/GhostButton";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type SectionButtonProps = {
  index: number;
  title: string;
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
};

const SectionButton = ({
  index,
  title,
  isActive,
  isLast,
  onClick,
}: SectionButtonProps) => {
  const t = useTranslations();

  return (
    <GhostButton
      className={cn(
        "font-oswald flex items-center justify-center text-xl font-bold",
        isLast ? "flex-col-reverse" : "flex-col"
      )}
      color={isActive ? "primary" : "subtle"}
      hoverDirection="right"
      onClick={onClick}
    >
      <div aria-hidden="true">{String(index).padStart(2, "0")}</div>
      <div
        data-state={isActive ? "active" : "inactive"}
        data-last={isLast.toString()}
        className={cn(
          "static mt-0 mb-0 w-[0.0625rem] bg-current transition-all !duration-800 ease-out",
          isActive ? "h-20" : "h-0",
          isActive && !isLast && "mt-4",
          isActive && isLast && "mb-4",
          "group-hover:!left-0"
        )}
      />
      <div className="sr-only">
        {t("common.navigateToSection", { section: title })}
      </div>
    </GhostButton>
  );
};

export default SectionButton;
