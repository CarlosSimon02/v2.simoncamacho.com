import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextInput,
} from "@/components/UI/AIElements/PromptInput";
import { useChat } from "@/providers/ChatProvider";
import { useRef } from "react";

const AIChatForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendMessage } = useChat();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value ?? "";
    if (!value.trim()) return;
    sendMessage({ text: value });
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <PromptInput onSubmit={handleSubmit} className="relative">
      <PromptInputTextInput
        ref={inputRef}
        className="pr-[2.53125rem] md:pr-[3.125rem]"
        placeholder="Message Jack"
      />
      <PromptInputSubmit
        aria-label="Send message"
        className="absolute top-0 right-0"
        status="ready"
      />
    </PromptInput>
  );
};

export default AIChatForm;
