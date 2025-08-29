import jackImage from "@/assets/heroes/jack.png";
import { Input } from "@/components/Primitives/Input";
import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const inputId = "chat-message-input";

const Chat = () => {
  return (
    <ChatContentContainer className="flex flex-col items-center justify-center gap-6 py-12">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:items-end md:gap-8">
          <Image
            height={200}
            width={200}
            src={jackImage.src}
            alt="Jack"
            className="size-24"
          />
          <h1 className="font-montserrat text-accent text-3xl font-black md:text-4xl">
            Hi, I'm Jack.
          </h1>
        </div>
        <p>I'm Simon Camacho's AI assistant. How can I help you today?</p>
      </div>
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
        >
          <PaperAirplaneIcon className="text-accent size-5 md:size-6" />
        </button>
      </form>
    </ChatContentContainer>
  );
};

export default Chat;
