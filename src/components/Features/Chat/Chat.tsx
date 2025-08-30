"use client";

import jackImage from "@/assets/heroes/jack.png";
import { Input } from "@/components/Primitives/Input";
import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import { useChat } from "@ai-sdk/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const inputId = "chat-message-input";

const Chat = () => {
  const { messages, status, sendMessage } = useChat({
    onData: (dataPart) => {
      console.log(dataPart);
    },
  });

  const onSubmit = async () => {
    sendMessage({
      role: "user" as const,
      parts: [{ type: "text", text: "Hello, how are you?" }],
    });
  };

  return (
    <ChatContentContainer className="flex flex-col items-center justify-center gap-6 py-12">
      {messages.map((message) => (
        <div key={message.id}>
          <strong>{`${message.role}: `}</strong>
          {message.parts.map((part, index) => {
            switch (part.type) {
              case "text":
                return <span key={index}>{part.text}</span>;

              // other cases can handle images, tool calls, etc
            }
          })}
        </div>
      ))}
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
      <form className="relative w-full" onSubmit={onSubmit}>
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
    </ChatContentContainer>
  );
};

export default Chat;
