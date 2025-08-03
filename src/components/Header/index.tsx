"use client";

import BaseContainer from "@/components/Containers/BaseContainer";
import LanguageDropdown from "@/components/LanguageDropdown";
import LogoLink from "@/components/LogoLink";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { CONDITIONAL_BREAKPOINTS } from "@/constants/breakpoints";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import styles from "./index.module.css";
import NavMenu from "./NavMenu";
import useScrollDetection from "./useScrollDetection";

type HeaderProps = {
  className?: string;
};

const SCROLL_THRESHOLD_PX = 64;

gsap.registerPlugin(useGSAP);

export const headerItemStyle = (showsOnMobile: boolean) => {
  return cn(
    "header-item header-item-desktop relative bottom-[12.5rem] opacity-0",
    showsOnMobile && "mobile"
  );
};

const Header = ({ className }: HeaderProps) => {
  const headerRef = useRef(null);
  const hasScrolled = useScrollDetection(SCROLL_THRESHOLD_PX);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMd: CONDITIONAL_BREAKPOINTS.isMd,
          isMaxd: CONDITIONAL_BREAKPOINTS.isMaxMd,
        },
        (context) => {
          const { isMd } = context.conditions as gsap.Conditions;
          const target = isMd ? ".header-item" : ".header-item.mobile";

          gsap.to(target, {
            bottom: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
          });
        }
      );
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className={cn(styles.header, hasScrolled && styles.scrolled, className)}
    >
      <BaseContainer className={styles.baseContainer}>
        <LogoLink className={headerItemStyle(true)} />
        <NavMenu className={cn(styles.navMenu)} />
        <div className="flex items-center gap-4 md:gap-6 ">
          <LanguageDropdown className={headerItemStyle(true)} />
          <ThemeToggle className={headerItemStyle(true)} />
          <MobileMenu className={cn("md:hidden", headerItemStyle(true))} />
        </div>
      </BaseContainer>
    </header>
  );
};

export default Header;
