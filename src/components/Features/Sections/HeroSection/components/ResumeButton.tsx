import PillButton from "@/components/UI/Buttons/PillButton";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type ResumeButtonProps = {
  className?: string;
};

const ResumeButton = ({ className }: ResumeButtonProps) => {
  const t = useTranslations();

  return (
    <PillButton
      variant="accent"
      className={cn(
        "flex w-fit shrink-1 basis-[10rem] items-center justify-center text-nowrap",
        className
      )}
      asChild
    >
      <a href="/simon_camacho_cv.pdf">{t("heroSection.resume")}</a>
    </PillButton>
  );
};

export default ResumeButton;
