import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

import styles from "./index.module.css";

type GhostButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
  hoverDirection?: "up" | "bottom" | "left" | "right";
  hoverColor?: "accent";
  color?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
};

const GhostButton = ({
  className,
  asChild = false,
  hoverDirection = "bottom",
  hoverColor = "accent",
  color = "primary",
  children,
  ...props
}: GhostButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        styles.button,
        styles[hoverColor],
        styles[color],
        className
      )}
      {...props}
    >
      <div className={styles[hoverDirection]}>
        {asChild ? <span>{children}</span> : children}
      </div>
    </Comp>
  );
};

export default GhostButton;
