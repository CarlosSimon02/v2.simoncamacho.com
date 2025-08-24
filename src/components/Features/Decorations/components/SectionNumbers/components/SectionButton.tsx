import SectionLinkButton from "@/components/UI/Buttons/SectionLinkButton";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type SectionButtonProps = {
  index: number;
  title: string;
  isActive: boolean;
  isLast: boolean;
  id: string;
  href: string;
};

const SectionButton = ({
  index,
  title,
  isActive,
  isLast,
  href,
  id,
}: SectionButtonProps) => {
  const t = useTranslations();

  return (
    <SectionLinkButton
      className={cn(
        "font-oswald flex items-center justify-center text-xl font-bold",
        isLast ? "flex-col-reverse" : "flex-col"
      )}
      color={isActive ? "primary" : "subtle"}
      hoverDirection="right"
      href={href}
      id={id}
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
    </SectionLinkButton>
  );
};

export default SectionButton;
