import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextInput,
} from "@/components/Features/Chat/components/PromptInput";
import { useChat } from "@/providers/ChatProvider";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { getErrorCode } from "../utils";

type AIChatFormProps = {
  className?: string;
  onSend?: () => void;
};

const AIChatForm = ({ className, onSend }: AIChatFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendMessage, status, stop, error } = useChat();
  const t = useTranslations("chat.form");
  const errorCode = getErrorCode(error?.message ?? "");

  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    switch (status) {
      case "streaming":
        break;
      case "submitted":
        break;
      case "ready":
      case "error":
        e.preventDefault();
        const text = inputRef.current?.value ?? "";
        if (!text.trim()) return;
        sendMessage({ text });
        onSend?.();
        break;
    }

    if (inputRef.current) inputRef.current.value = "";
    setValue("");
  };

  const isEmpty = !value.trim();
  const isDisabled = isEmpty || status === "submitted" || errorCode === 429;

  return (
    <PromptInput onSubmit={handleSubmit} className={cn("relative", className)}>
      <PromptInputTextInput
        ref={inputRef}
        className="pr-[2.53125rem] md:pr-[3.125rem]"
        placeholder={t("placeholder")}
        disabled={status === "submitted" || errorCode === 429}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <PromptInputSubmit
        aria-label={t("sendButton")}
        className="absolute top-0 right-0"
        status={status}
        disabled={isDisabled}
        onClick={() => {
          status === "streaming" && stop();
        }}
      />
    </PromptInput>
  );
};

export default AIChatForm;
