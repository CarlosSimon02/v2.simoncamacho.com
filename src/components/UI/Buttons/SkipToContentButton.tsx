import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import PillButton from "./PillButton";

type SkipToContentButtonProps = {
  className?: string;
  href?: string;
};

const SkipToContentButton = ({
  className,
  href = "#main",
}: SkipToContentButtonProps) => {
  const t = useTranslations("common.skipToContentButton");

  return (
    <PillButton variant="primary" className={cn(className)} asChild>
      <a href={href} className={cn(className)}>
        {t("open")}
      </a>
    </PillButton>
  );
};

export default SkipToContentButton;
