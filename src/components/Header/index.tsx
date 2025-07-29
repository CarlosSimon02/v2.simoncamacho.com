"use client";

import BaseContainer from "@/components/Containers/BaseContainer";
import { cn } from "@/utils";
import styles from "./index.module.css";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <BaseContainer></BaseContainer>
    </header>
  );
};

export default Header;
