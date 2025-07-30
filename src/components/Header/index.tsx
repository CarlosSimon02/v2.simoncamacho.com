"use client";

import BaseContainer from "@/components/Containers/BaseContainer";
import LogoLink from "@/components/LogoLink";
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
      </BaseContainer>
    </header>
  );
};

export default Header;
