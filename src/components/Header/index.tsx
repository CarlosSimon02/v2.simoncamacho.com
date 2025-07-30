"use client";

import BaseContainer from "@/components/Containers/BaseContainer";
import LogoLink from "@/components/LogoLink";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/utils";
import styles from "./index.module.css";
import NavMenu from "./NavMenu";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <BaseContainer className={styles.baseContainer}>
        <LogoLink />
        <NavMenu className={cn(styles.navMenu)} />
        <div className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />
        </div>
      </BaseContainer>
    </header>
  );
};

export default Header;
