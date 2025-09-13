import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import type React from "react";

type PillButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "accent" | "outline";
  asChild?: boolean;
};

const PillButton = ({
  className,
  children,
  variant = "primary",
  asChild = false,
  ...props
}: PillButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "font-oswald rounded-full px-6 py-2 text-center font-semibold uppercase md:px-8 md:py-3",
        "relative transition-all duration-150 ease-in-out",
        "translate-y-0 transform",
        "hover:-translate-y-1",
        variant === "primary" && ["bg-fg-secondary text-bg-secondary"],
        variant === "accent" && [
          "border-accent text-accent border-[0.0625rem]",
        ],
        variant === "outline" && ["border-fg-primary text-fg-primary border"],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default PillButton;
