"use client";

import SectionLinkButton from "@/components/UI/Buttons/SectionLinkButton";
import { NAV_ITEMS } from "@/constants/navigation";
import { useCurrentSectionStore } from "@/stores/useCurrentSectionStore";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import { HEADER_ITEM_CLASS } from "../constants";

type NavMenuProps = {
  className?: string;
};

const NavMenu = ({ className }: NavMenuProps) => {
  const t = useTranslations();
  const { currentSection } = useCurrentSectionStore();

  return (
    <nav className={cn(className)} aria-label={t("common.mainNavigation")}>
      <ul className="flex items-center gap-3 md:gap-4 md:text-lg lg:gap-6">
        {NAV_ITEMS.map(({ href, id }) => (
          <li key={id} className={cn("from-top-md", HEADER_ITEM_CLASS)}>
            <SectionLinkButton
              href={`/${href}`}
              id={id}
              color={currentSection === id ? "secondary" : "primary"}
            >
              <span className="font-oswald">
                {t(`containers.navBar.links.${id}`)}
              </span>
            </SectionLinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
