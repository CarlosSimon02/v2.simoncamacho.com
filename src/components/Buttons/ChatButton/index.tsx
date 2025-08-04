"use client";

import { cn } from "@/utils";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { CHAT_BUTTON_STYLE } from "./constants";
import useChatButtonAnimation from "./useChatButtonAnimation";

type ChatButtonProps = {
  className?: string;
};

const ChatButton = ({ className }: ChatButtonProps) => {
  const { chatButtonRef } = useChatButtonAnimation();

  return (
    <div className={className}>
      <button
        ref={chatButtonRef}
        className={cn(
          "bg-accent rounded-full p-3 text-white shadow-lg",
          CHAT_BUTTON_STYLE
        )}
      >
        <ChatBubbleBottomCenterIcon className="size-6 fill-white md:size-7" />
      </button>
    </div>
  );
};

export default ChatButton;
