"use client";

import BaseContainer from "@/components/Containers/BaseContainer";
import LogoLink from "@/components/LogoLink";
import { cn } from "@/utils";
import styles from "./index.module.css";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <BaseContainer className={styles.baseContainer}>
        <LogoLink />
      </BaseContainer>
    </header>
  );
};

export default Header;
