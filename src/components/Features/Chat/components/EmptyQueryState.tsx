"use client";

import jackImage from "@/assets/heroes/jack.png";
import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import Image from "next/image";
import useChatNavigation from "../hooks/useChatNavigation";
import ChatInput from "./ChatInput";

const EmptyQueryState = () => {
  const { navigateWithQuery } = useChatNavigation();

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
      <ChatInput onSubmit={navigateWithQuery} />
    </ChatContentContainer>
  );
};

export default EmptyQueryState;
