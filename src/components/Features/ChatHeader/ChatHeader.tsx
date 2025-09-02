"use client";

import BackButton from "@/components/UI/Buttons/BackButton";
import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import HeaderContainer from "@/components/UI/Containers/HeaderContainer";
import LanguageDropdown from "@/components/UI/LanguageDropdown";
import LogoLink from "@/components/UI/LogoLink";
import ThemeToggle from "@/components/UI/ThemeToggle";
import { cn } from "@/utils";
import { CHAT_HEADER_ITEM_CLASS } from "./constants";
import useChatHeaderAnimation from "./hooks/useChatHeaderAnimation";

type ChatHeaderProps = {
  className?: string;
};

const ChatHeader = ({ className }: ChatHeaderProps) => {
  const { headerRef } = useChatHeaderAnimation();

  return (
    <HeaderContainer
      className={className}
      ref={headerRef}
      hasScrollDetection={false}
    >
      <ChatContentContainer className="relative flex h-full items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <BackButton className={cn("from-top-md", CHAT_HEADER_ITEM_CLASS)} />
          <LogoLink className={cn("from-top-md", CHAT_HEADER_ITEM_CLASS)} />
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <LanguageDropdown
            className={cn("from-top-md", CHAT_HEADER_ITEM_CLASS)}
          />
          <ThemeToggle className={cn("from-top-md", CHAT_HEADER_ITEM_CLASS)} />
        </div>
      </ChatContentContainer>
    </HeaderContainer>
  );
};

export default ChatHeader;
