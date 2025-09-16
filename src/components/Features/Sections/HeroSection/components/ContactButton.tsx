"use client";

import PillButton from "@/components/UI/Buttons/PillButton";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type ContactButtonProps = {
  className?: string;
};

const ContactButton = ({ className }: ContactButtonProps) => {
  const t = useTranslations("heroSection");

  return (
    <PillButton
      className={cn("w-fit shrink-1 basis-[10rem] text-nowrap", className)}
      onClick={() => {
        const nameInput = document.querySelector(
          "[name='name']"
        ) as HTMLElement;

        if (!nameInput) return;
        nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
        nameInput.focus({ preventScroll: true });
      }}
    >
      {t("contact")}
    </PillButton>
  );
};

export default ContactButton;
