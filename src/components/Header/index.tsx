"use client";

import BaseContainer from "@/components/Containers/BaseContainer";
import LanguageDropdown from "@/components/LanguageDropdown";
import LogoLink from "@/components/LogoLink";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/utils";
import styles from "./index.module.css";
import NavMenu from "./NavMenu";
import useHeaderAnimation from "./useHeaderAnimation";
import useScrollDetection from "./useScrollDetection";
import { headerItemStyle } from "./utils";

type HeaderProps = {
  className?: string;
};

const SCROLL_THRESHOLD_PX = 32;

const Header = ({ className }: HeaderProps) => {
  const hasScrolled = useScrollDetection(SCROLL_THRESHOLD_PX);
  const { headerRef } = useHeaderAnimation();

  return (
    <header
      ref={headerRef}
      className={cn(styles.header, hasScrolled && styles.scrolled, className)}
    >
      <div
        data-scrolled={hasScrolled}
        className={cn(styles.headerBackground)}
      />
      <BaseContainer className={styles.baseContainer}>
        <LogoLink className={headerItemStyle(true)} />
        <NavMenu className={cn(styles.navMenu)} />
        <div className="flex items-center gap-4 md:gap-6 ">
          <div className={headerItemStyle(true)}>
            <LanguageDropdown />
          </div>
          <div className={headerItemStyle(true)}>
            <ThemeToggle />
          </div>
          <div className={headerItemStyle(true)}>
            <MobileMenu className={cn("md:hidden")} />
          </div>
        </div>
      </BaseContainer>
    </header>
  );
};

export default Header;
