"use client";

import { Input } from "@/components/Primitives/Input";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { cn } from "@/utils";
import { PaperAirplaneIcon, StopCircleIcon } from "@heroicons/react/24/outline";
import type { ChatStatus } from "ai";
import { useTranslations } from "next-intl";
import type { HTMLAttributes, KeyboardEventHandler } from "react";

const inputId = "chat-message-input";

export type PromptInputProps = HTMLAttributes<HTMLFormElement>;

export const PromptInput = ({ className, ...props }: PromptInputProps) => (
  <form className={cn("w-full overflow-hidden", className)} {...props} />
);

export type PromptInputTextInputProps = React.ComponentProps<"input">;

export const PromptInputTextInput = ({
  onChange,
  className,
  placeholder,
  ...props
}: PromptInputTextInputProps) => {
  const t = useTranslations("chat.form");

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      // Don't submit if IME composition is in progress
      if (e.nativeEvent.isComposing) {
        return;
      }

      if (e.shiftKey) {
        // Allow newline
        return;
      }

      // Submit on Enter (without Shift)
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <>
      <label htmlFor={inputId} className="sr-only">
        {t("messageLabel")}
      </label>
      <Input
        className={cn(
          "w-full pr-[2.53125rem] ring-0 outline-none focus-visible:ring-0 md:pr-[3.125rem]",
          className
        )}
        name="message"
        autoComplete="off"
        onChange={(e) => {
          onChange?.(e);
        }}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

export type PromptInputSubmitProps = React.ComponentProps<"button"> & {
  status?: ChatStatus;
};

export const PromptInputSubmit = ({
  className,
  status,
  children,
  ...props
}: PromptInputSubmitProps) => {
  let Icon = <PaperAirplaneIcon className="size-5 md:size-6" />;

  if (status === "submitted") {
    Icon = <LoadingSpinner />;
  } else if (status === "streaming") {
    Icon = <StopCircleIcon className="size-5 md:size-6" />;
  }

  return (
    <button
      className={cn(
        "text-accent absolute top-0 right-0 flex size-[2.53125rem] items-center justify-center opacity-100 transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 md:size-[3.125rem]",
        className
      )}
      type={
        status === "streaming" || status === "submitted" ? "button" : "submit"
      }
      {...props}
    >
      {children ?? Icon}
    </button>
  );
};
