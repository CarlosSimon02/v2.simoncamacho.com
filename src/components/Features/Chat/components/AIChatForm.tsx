import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextInput,
} from "@/components/Features/Chat/components/PromptInput";
import { useChat } from "@/providers/ChatProvider";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { getErrorCode } from "../utils";

type AIChatFormProps = {
  className?: string;
};

const AIChatForm = ({ className }: AIChatFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendMessage, status, stop, error } = useChat();
  const t = useTranslations("chat.form");
  const errorCode = getErrorCode(error?.message ?? "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    switch (status) {
      case "streaming":
        break;
      case "submitted":
        break;
      case "ready":
      case "error":
        e.preventDefault();
        const value = inputRef.current?.value ?? "";
        if (!value.trim()) return;
        sendMessage({ text: value });
        break;
    }

    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <PromptInput onSubmit={handleSubmit} className={cn("relative", className)}>
      <PromptInputTextInput
        ref={inputRef}
        className="pr-[2.53125rem] md:pr-[3.125rem]"
        placeholder={t("placeholder")}
        disabled={status === "submitted" || errorCode === 429}
      />
      <PromptInputSubmit
        aria-label={t("sendButton")}
        className="absolute top-0 right-0"
        status={status}
        disabled={status === "submitted" || errorCode === 429}
        onClick={() => {
          status === "streaming" && stop();
        }}
      />
    </PromptInput>
  );
};

export default AIChatForm;
