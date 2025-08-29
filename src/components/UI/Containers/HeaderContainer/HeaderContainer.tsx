"use client";

import { cn } from "@/utils";
import { SCROLL_THRESHOLD_PX } from "./constants";
import useScrollDetection from "./hooks/useScrollDetection";

type HeaderContainerProps = {
  className?: string;
  ref?: React.Ref<HTMLElement>;
  children?: React.ReactNode;
};

const HeaderContainer = ({
  className,
  ref,
  children,
}: HeaderContainerProps) => {
  const hasScrolled = useScrollDetection(SCROLL_THRESHOLD_PX);

  return (
    <header
      ref={ref}
      className={cn(
        "sticky top-0 z-40 h-[var(--header-height)] border-b border-transparent",
        hasScrolled && "bg-bg-primary border-border",
        className
      )}
    >
      {children}
    </header>
  );
};

export default HeaderContainer;
