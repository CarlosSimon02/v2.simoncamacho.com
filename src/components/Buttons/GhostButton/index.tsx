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

type GhostButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
  hoverDirection?: keyof typeof hoverDirectionMap;
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
      data-slot="button"
      className={cn(
        "group",
        styles.button,
        styles[hoverColor],
        styles[color],
        hoverDirectionMap[hoverDirection],
        className
      )}
      {...props}
    >
      {asChild ? <span>{children}</span> : children}
    </Comp>
  );
};

export default GhostButton;
