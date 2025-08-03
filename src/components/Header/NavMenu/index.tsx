"use client";

import GhostButton from "@/components/Buttons/GhostButton";
import { NAV_ITEMS } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import { headerItemStyle } from "..";
import styles from "./index.module.css";

type NavMenuProps = {
  className?: string;
};

const NavMenu = ({ className }: NavMenuProps) => {
  const t = useTranslations();

  return (
    <nav className={cn(className)} aria-label={t("common.mainNavigation")}>
      <ul className={styles.itemList}>
        {NAV_ITEMS.map(({ href, id }) => (
          <li key={id} className={cn(headerItemStyle(false), styles.item)}>
            <GhostButton asChild color="secondary">
              <Link href={href}>
                <span>{t(`containers.navBar.links.${id}`)}</span>
              </Link>
            </GhostButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
