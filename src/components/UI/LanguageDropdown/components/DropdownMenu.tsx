"use client";

import { cn } from "@/utils";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      data-slot="dropdown-menu-content"
      sideOffset={sideOffset}
      className={cn(
        "font-oswald z-50 min-w-[8.5rem] overflow-hidden rounded-md border",
        "text-fg-primary border-border bg-bg-primary",
        "max-h-[var(--radix-dropdown-menu-content-available-height)]",
        "origin-[var(--radix-dropdown-menu-content-transform-origin)]",
        "p-1.5 shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-bottom-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
  }
>(({ className, inset, variant = "default", ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    data-slot="dropdown-menu-item"
    className={cn(
      "relative flex cursor-pointer items-center gap-2 rounded-sm select-none",
      "px-2 py-1.5 transition-colors outline-none",
      "focus:bg-light-gray-100 focus:text-accent",
      "dark:focus:bg-dark-gray-800 dark:focus:text-accent",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[inset]:pl-8",
      "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      variant === "destructive" &&
        "text-red-500 focus:text-red-600 dark:focus:text-red-400",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
};
