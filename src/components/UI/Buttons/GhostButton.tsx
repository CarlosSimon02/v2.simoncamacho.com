import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

const hoverDirectionMap = {
  up: "[&>*]:bottom-0 [&>*]:group-hover:bottom-1",
  bottom: "[&>*]:top-0 [&>*]:group-hover:top-1",
  left: "[&>*]:right-0 [&>*]:group-hover:right-1",
  right: "[&>*]:left-0 [&>*]:group-hover:left-1",
} as const;

const hoverColorMap = {
  accent: "[&>*]:group-hover:text-accent",
  secondary: "[&>*]:group-hover:text-fg-secondary",
} as const;

const colorMap = {
  primary: "[&>*]:text-fg-primary",
  secondary: "[&>*]:text-fg-secondary",
  subtle: "[&>*]:text-fg-subtle",
  accent: "[&>*]:text-accent",
} as const;

export type GhostButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
  hoverDirection?: keyof typeof hoverDirectionMap;
  hoverColor?: keyof typeof hoverColorMap;
  color?: keyof typeof colorMap;
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
        "group cursor-pointer",
        hoverDirectionMap[hoverDirection],
        hoverColorMap[hoverColor],
        colorMap[color],
        "[&>*:not(.sr-only)]:relative [&>*:not(.sr-only)]:transition-all [&>*:not(.sr-only)]:duration-300",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default GhostButton;
