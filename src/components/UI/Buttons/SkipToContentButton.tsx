import { Link } from "@/i18n/navigation";
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
      <Link href={href} className={cn(className)}>
        {t("open")}
      </Link>
    </PillButton>
  );
};

export default SkipToContentButton;
