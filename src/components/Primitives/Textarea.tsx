import { cn } from "@/utils";
import * as React from "react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "text-fg-secondary/50 placeholder:text-fg-muted dark:placeholder:text-fg-muted/70",
        "bg-pill-bg border-pill-border",
        "flex w-full min-w-0 rounded-3xl border px-5 shadow-xs",
        "transition-[color,box-shadow] outline-none",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-fg-primary focus-visible:ring-fg-primary focus-visible:ring-[1px]",
        "aria-invalid:ring-destructive/50 dark:aria-invalid:ring-destructive/50 aria-invalid:border-destructive/50",
        "field-sizing-content min-h-24 py-3",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
