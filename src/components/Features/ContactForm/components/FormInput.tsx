import { Input } from "@/components/Primitives/Input";
import { Label } from "@/components/Primitives/Label";
import { Textarea } from "@/components/Primitives/Textarea";
import { cn } from "@/utils";
import type React from "react";
import { forwardRef } from "react";

interface FormInputProps {
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  error?: string;
  className?: string;
  id: string;
}

/**
 * Reusable form input component that handles label, input, and error display
 * Ensures proper accessibility with aria-describedby for error messages
 */
export const FormInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormInputProps &
    React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
>(
  (
    { label, type = "text", placeholder, error, className, id, ...props },
    ref
  ) => {
    const errorId = error ? `${id}-error` : undefined;

    return (
      <div className="space-y-2">
        <Label htmlFor={id} className="text-sm font-medium">
          {label}
        </Label>
        {type === "textarea" ? (
          <Textarea
            id={id}
            placeholder={placeholder}
            className={cn(
              "min-h-[100px] resize-none",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            aria-describedby={errorId}
            aria-invalid={!!error}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            className={cn(
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            aria-describedby={errorId}
            aria-invalid={!!error}
            ref={ref as React.Ref<HTMLInputElement>}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && (
          <p
            id={errorId}
            className="text-destructive text-sm"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
