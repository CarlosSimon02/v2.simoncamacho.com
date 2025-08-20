"use client";

import GhostButton from "@/components/UI/Buttons/GhostButton";
import { LANGUAGES } from "@/constants/languages";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/utils";
import { CheckIcon, LanguageIcon } from "@heroicons/react/24/outline";
import { Locale, useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/DropdownMenu";

type LanguageDropdownProps = {
  className?: string;
};

const LanguageDropdown = ({ className }: LanguageDropdownProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common.languageDropdown");
  const [, startTransition] = useTransition();
  const locale = useLocale();

  const handleLanguageChange = (nextLocale: Locale) => {
    startTransition(() => {
      router.push(pathname, { locale: nextLocale });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <GhostButton
          aria-label={t("label")}
          className={className}
          color="secondary"
        >
          <LanguageIcon className="size-6" />
        </GhostButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        {LANGUAGES.map((language) => {
          const isActive = locale === language.code;
          return (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={cn(
                "flex items-center justify-between",
                isActive && "text-fg-secondary"
              )}
            >
              <div className={cn("flex w-full items-center gap-2")}>
                <language.icon className="size-4" />
                <span>{language.name}</span>
              </div>
              {isActive && <CheckIcon className="size-4" aria-hidden="true" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
