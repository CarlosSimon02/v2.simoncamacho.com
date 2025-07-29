import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

import styles from "./index.module.css";

const hoverDirectionMap = {
  up: "[&>*]:bottom-0 [&>*]:group-hover:bottom-1",
  bottom: "[&>*]:top-0 [&>*]:group-hover:top-1",
  left: "[&>*]:right-0 [&>*]:group-hover:right-1",
  right: "[&>*]:left-0 [&>*]:group-hover:left-1",
} as const;

const hoverColorMap = {
  accent: "[&>*]:group-hover:text-accent",
} as const;

const colorMap = {
  primary: "[&>*]:text-foreground",
  secondary: "[&>*]:text-foreground-2",
  accent: "[&>*]:text-accent",
} as const;

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
