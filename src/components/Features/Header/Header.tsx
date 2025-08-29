"use client";

import MobileMenu from "@/components/Features/MobileMenu";
import BaseContainer from "@/components/UI/Containers/BaseContainer";
import HeaderContainer from "@/components/UI/Containers/HeaderContainer";
import LanguageDropdown from "@/components/UI/LanguageDropdown";
import LogoLink from "@/components/UI/LogoLink";
import ThemeToggle from "@/components/UI/ThemeToggle";
import { cn } from "@/utils";
import NavMenu from "./components/NavMenu";
import { HEADER_ITEM_CLASS, HEADER_ITEM_MOBILE_CLASS } from "./constants";
import useHeaderAnimation from "./hooks/useHeaderAnimation";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const { headerRef } = useHeaderAnimation();

  return (
    <HeaderContainer className={className} ref={headerRef}>
      <BaseContainer className="relative flex h-full items-center justify-between">
        <LogoLink
          className={cn(
            "from-top-md",
            HEADER_ITEM_CLASS,
            HEADER_ITEM_MOBILE_CLASS
          )}
        />
        <NavMenu className="absolute hidden md:left-28 md:block lg:left-36 xl:left-[var(--content-padding-x)]" />
        <div className="flex items-center gap-4 md:gap-6">
          <LanguageDropdown
            className={cn(
              "from-top-md",
              HEADER_ITEM_CLASS,
              HEADER_ITEM_MOBILE_CLASS
            )}
          />
          <ThemeToggle
            className={cn(
              "from-top-md",
              HEADER_ITEM_CLASS,
              HEADER_ITEM_MOBILE_CLASS
            )}
          />
          <MobileMenu
            className={cn("from-top-md md:hidden", HEADER_ITEM_MOBILE_CLASS)}
          />
        </div>
      </BaseContainer>
    </HeaderContainer>
  );
};

export default Header;
