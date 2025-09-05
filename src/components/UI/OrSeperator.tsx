"use client";

import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type OrSeperatorProps = {
  className?: string;
};

const OrSeperator = ({ className }: OrSeperatorProps) => {
  const t = useTranslations();

  return (
    <div
      className={cn(
        "font-oswald text-fg-muted flex items-center gap-5 uppercase",
        "before:h-[0.0625rem] before:w-full before:flex-1 before:bg-current",
        "after:h-[0.0625rem] after:w-full after:flex-1 after:bg-current",
        className
      )}
    >
      {t("common.or")}
    </div>
  );
};

export default OrSeperator;
