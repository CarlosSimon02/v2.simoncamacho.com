"use client";

import { cn } from "@/utils";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import GhostButton from "./GhostButton";

type BackButtonProps = {
  className?: string;
};

const BackButton = ({ className }: BackButtonProps) => {
  const t = useTranslations();
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <GhostButton
      color="secondary"
      className={cn("font-oswald flex items-center gap-2", className)}
      aria-label={t("common.backButtonLabel")}
      onClick={handleBack}
    >
      <ArrowLeftIcon className="size-6" />
    </GhostButton>
  );
};

export default BackButton;
