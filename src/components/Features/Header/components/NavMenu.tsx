"use client";

import GhostButton from "@/components/UI/Buttons/GhostButton";
import { NAV_ITEMS } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import { HEADER_ITEM_CLASS } from "../constants";

type NavMenuProps = {
  className?: string;
};

const NavMenu = ({ className }: NavMenuProps) => {
  const t = useTranslations();

  return (
    <nav className={cn(className)} aria-label={t("common.mainNavigation")}>
      <ul className="flex items-center gap-3 md:gap-4 md:text-lg lg:gap-6">
        {NAV_ITEMS.map(({ href, id }) => (
          <li key={id} className={cn("from-top-md", HEADER_ITEM_CLASS)}>
            <GhostButton asChild color="primary">
              <Link href={href}>
                <span className="font-oswald">
                  {t(`containers.navBar.links.${id}`)}
                </span>
              </Link>
            </GhostButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
