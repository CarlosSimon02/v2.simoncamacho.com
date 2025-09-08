"use client";

import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";

type OpenToWorkBadgeProps = {
  className?: string;
};

const OpenToWorkBadge = ({ className }: OpenToWorkBadgeProps) => {
  const t = useTranslations("common");

  useGSAP(() => {
    let tl = gsap.timeline({ delay: 2.2 });

    tl.to(".work-badge", { height: 30, duration: 0.6 });
    tl.to(".work-badge", { width: 30, duration: 0.6 }, "<");
    tl.to(".work-badge", { opacity: 1, duration: 0.6 }, "<");
    tl.to(".work-badge", { marginBottom: 8, duration: 0.6 }, "<");
    tl.to(".work-badge", { width: 141.267, duration: 0.6 });
    tl.to(".work-text", { opacity: 1, duration: 1 }, "<");
    tl.to(".work-wrapper", { paddingLeft: 19, duration: 0.6 }, "<");
  });

  return (
    <div
      className={cn(
        "work-badge mb-0 h-0 w-0 opacity-0",
        "border-pill-border bg-pill-bg text-fg-secondary flex items-center gap-2 overflow-hidden rounded-full border text-sm",
        className
      )}
    >
      <div
        className={cn(
          "work-wrapper -ml-1 pl-[15px]",
          "flex items-center gap-2"
        )}
      >
        <div
          className={cn(
            "work-dot",
            "size-2 shrink-0 rounded-full bg-green-500"
          )}
        />
        <span className={cn("work-text opacity-0", "text-nowrap")}>
          {t("openToWork")}
        </span>
      </div>
    </div>
  );
};

export default OpenToWorkBadge;
