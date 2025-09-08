import * as React from "react";

import { cn } from "@/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-fg-primary text-fg-secondary/50 placeholder:text-fg-muted dark:placeholder:text-fg-muted/70 bg-pill-bg border-pill-border flex h-[2.53125rem] w-full min-w-0 rounded-full border px-5 py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:h-[3.125rem]",
        "focus-visible:border-fg-primary focus-visible:ring-fg-primary focus-visible:ring-[1px]",
        "aria-invalid:ring-destructive/50 dark:aria-invalid:ring-destructive/50 aria-invalid:border-destructive/50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
