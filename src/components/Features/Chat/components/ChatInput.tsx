import { Input } from "@/components/Primitives/Input";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const inputId = "chat-message-input";

const ChatInput = () => {
  return (
    <form className="relative w-full">
      <label htmlFor={inputId} className="sr-only">
        Message Jack
      </label>
      <Input
        id={inputId}
        placeholder="Message Jack"
        className="pr-[2.53125rem] md:pr-[3.125rem]"
      />
      <button
        aria-label="Send message"
        className="absolute top-0 right-0 flex size-[2.53125rem] items-center justify-center md:size-[3.125rem]"
        type="submit"
      >
        <PaperAirplaneIcon className="text-accent size-5 md:size-6" />
      </button>
    </form>
  );
};

export default ChatInput;
