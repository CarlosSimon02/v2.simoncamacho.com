"use client";

import GhostButton from "@/components/Buttons/GhostButton";
import { cn } from "@/utils";
import { SunIcon } from "@heroicons/react/24/outline";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import styles from "./index.module.css";

const ThemeToggle = () => {
  const t = useTranslations("common.themeToggle");
  const { setTheme, theme } = useTheme();

  return (
    <GhostButton
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={styles.button}
    >
      <div className="size-full">
        <MoonIcon className={cn(styles.icon, styles.moonIcon)} />
        <SunIcon className={cn(styles.icon, styles.sunIcon)} />
        <span className="sr-only block dark:hidden">{t("darkMode")}</span>
        <span className="sr-only hidden dark:block">{t("lightMode")}</span>
      </div>
    </GhostButton>
  );
};

export default ThemeToggle;
