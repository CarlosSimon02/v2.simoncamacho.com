"use client";

import ChatButton from "@/components/UI/Buttons/ChatButton";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type AnimatedChatButtonProps = {
  className?: string;
};

const CHAT_BUTTON_CLASS = "chat-button";

const AnimatedChatButton = ({ className }: AnimatedChatButtonProps) => {
  useGSAP(() => {
    gsap.to(`.${CHAT_BUTTON_CLASS}`, {
      left: 0,
      opacity: 1,
      duration: 1,
      delay: 1.5,
      ease: "power4.out",
    });
  });

  return (
    <div className={className}>
      <ChatButton className={cn(CHAT_BUTTON_CLASS, "from-right-sm")} />
    </div>
  );
};

export default AnimatedChatButton;
