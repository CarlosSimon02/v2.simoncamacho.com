"use client";

import GhostButton from "@/components/UI/Buttons/GhostButton";
import { cn } from "@/utils";
import { SunIcon } from "@heroicons/react/24/outline";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const t = useTranslations("common.themeToggle");
  const { setTheme, theme } = useTheme();

  return (
    <GhostButton
      onClick={() => {
        document.body.classList.add("no-transition");
        setTimeout(() => document.body.classList.remove("no-transition"), 20);

        if (!document.startViewTransition) {
          setTheme(theme === "dark" ? "light" : "dark");
        } else {
          document.startViewTransition(() => {
            setTheme(theme === "dark" ? "light" : "dark");
          });
        }
      }}
      className={cn("relative size-6", className)}
      color="secondary"
    >
      <div className="size-full">
        <MoonIcon
          className={cn(
            "absolute top-0 left-0 size-full transition-all duration-300",
            "rotate-180 opacity-0 dark:rotate-0 dark:opacity-100"
          )}
        />
        <SunIcon
          className={cn(
            "absolute top-0 left-0 size-full transition-all duration-300",
            "rotate-0 opacity-100 dark:-rotate-180 dark:opacity-0"
          )}
        />
        <span className="sr-only block dark:hidden">{t("darkMode")}</span>
        <span className="sr-only hidden dark:block">{t("lightMode")}</span>
      </div>
    </GhostButton>
  );
};

export default ThemeToggle;
