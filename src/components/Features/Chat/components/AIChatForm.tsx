import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextInput,
} from "@/components/UI/AIElements/PromptInput";
import { useRef } from "react";

type AIChatFormProps = {
  onSubmit: (message: string) => void;
};

const AIChatForm = ({ onSubmit }: AIChatFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value ?? "";
    if (!value.trim()) return;
    onSubmit(value);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <PromptInput onSubmit={handleSubmit} className="relative mt-4">
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
