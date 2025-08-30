"use client";

import jackImage from "@/assets/heroes/jack.png";
import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ChatInput from "./components/ChatInput";
import EmptyQueryState from "./components/EmptyQueryState";

const Chat = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  if (!query || query.trim() === "") {
    return <EmptyQueryState />;
  }

  return (
    <>
      <ChatContentContainer className="flex self-stretch">
        <div className="h-[1024px] w-full py-10">
          <div className="flex w-full justify-end pb-10">
            <p className="bg-bg-user-chat text-fg-secondary ml-10 max-w-2xl rounded-3xl rounded-br-none px-5 py-3 text-sm">
              Hello, how are you doing today?
            </p>
          </div>
          <div className="flex items-start gap-3 !text-sm md:gap-6">
            <Image
              height={100}
              width={100}
              src={jackImage.src}
              alt="Jack"
              className="size-9 md:size-12"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </ChatContentContainer>
      <ChatContentContainer className="fixed bottom-0 left-1/2 flex w-full -translate-x-1/2 flex-col items-center gap-1 py-3">
        <ChatInput />
        <p className="text-[0.75rem]">AI-generated, for reference only</p>
      </ChatContentContainer>
    </>
  );
};

export default Chat;
