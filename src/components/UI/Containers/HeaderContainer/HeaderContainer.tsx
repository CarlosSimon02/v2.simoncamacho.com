"use client";

import { cn } from "@/utils";
import { SCROLL_THRESHOLD_PX } from "./constants";
import useScrollDetection from "./hooks/useScrollDetection";

type HeaderContainerProps = {
  className?: string;
  ref?: React.Ref<HTMLElement>;
  children?: React.ReactNode;
  hasScrollDetection?: boolean;
};

const HeaderContainer = ({
  className,
  ref,
  children,
  hasScrollDetection = true,
}: HeaderContainerProps) => {
  const hasScrolled = useScrollDetection(SCROLL_THRESHOLD_PX);

  return (
    <header
      ref={ref}
      className={cn(
        "bg-bg-primary border-border sticky top-0 z-40  h-[var(--header-height)] border-b",
        !hasScrolled &&
          hasScrollDetection &&
          "border-transparent bg-transparent",
        className
      )}
    >
      {children}
    </header>
  );
};

export default HeaderContainer;
