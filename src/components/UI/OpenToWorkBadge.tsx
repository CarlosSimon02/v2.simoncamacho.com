"use client";

import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type OpenToWorkBadgeProps = {
  className?: string;
};

const OpenToWorkBadge = ({ className }: OpenToWorkBadgeProps) => {
  const t = useTranslations("common");

  return (
    <div
      className={cn(
        "border-pill-border bg-pill-bg text-fg-secondary flex items-center gap-2 overflow-hidden rounded-full border px-4 py-1 text-sm",
        className
      )}
    >
      <div className={cn("size-2 shrink-0 rounded-full bg-green-500")} />
      <span className={cn("text-nowrap")}>{t("openToWork")}</span>
    </div>
  );
};

export default OpenToWorkBadge;
