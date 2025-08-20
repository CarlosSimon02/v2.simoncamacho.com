"use client";

import { cn } from "@/utils";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

const Sheet = ({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) => {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
};

const SheetTrigger = ({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) => {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
};

const SheetClose = ({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) => {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
};

const SheetPortal = ({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) => {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
};

const SheetOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) => {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 transition-all duration-300",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-xs",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:backdrop-blur-none",
        className
      )}
      {...props}
    />
  );
};

const SheetContent = ({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) => {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col gap-4 shadow-lg/80 transition ease-in-out",
          "bg-bg-secondary",
          "data-[state=open]:animate-in data-[state=open]:duration-500",
          "data-[state=closed]:animate-out data-[state=closed]:duration-300",
          side === "right" && [
            "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm",
            "data-[state=open]:slide-in-from-right",
            "data-[state=closed]:slide-out-to-right",
          ],
          side === "left" && [
            "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm",
            "data-[state=open]:slide-in-from-left",
            "data-[state=closed]:slide-out-to-left",
          ],
          side === "top" && [
            "inset-x-0 top-0 h-auto",
            "data-[state=open]:slide-in-from-top",
            "data-[state=closed]:slide-out-to-top",
          ],
          side === "bottom" && [
            "inset-x-0 bottom-0 h-auto",
            "data-[state=open]:slide-in-from-bottom",
            "data-[state=closed]:slide-out-to-bottom",
          ],
          className
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
};

const SheetHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div data-slot="sheet-header" className={className} {...props} />;
};

const SheetFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "sticky right-0 bottom-0 left-0 z-10 mt-auto flex flex-col gap-2 border-t p-6 shadow-md backdrop-blur-md",
        "bg-bg-primary border-border",
        className
      )}
      {...props}
    />
  );
};

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={className}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={className}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
