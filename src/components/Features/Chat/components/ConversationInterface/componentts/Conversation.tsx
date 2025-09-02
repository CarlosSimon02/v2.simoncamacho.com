"use client";

import GhostButton from "@/components/UI/Buttons/GhostButton";
import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import { useChat } from "@/providers/ChatProvider";
import { cn } from "@/utils";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { StickToBottom, useStickToBottomContext } from "use-stick-to-bottom";
import { useIsQuickQuestionsOpenStore } from "../stores/useIsQuickQuestionsOpenStore";
import AIChatBubble from "./AIChatBubble";
import UserChatBubble from "./UserChatBubble";

const ConversationContent = () => {
  const { messages } = useChat();
  const { isOpen } = useIsQuickQuestionsOpenStore();

  return (
    <StickToBottom.Content
      data-state={isOpen ? "open" : "closed"}
      className="pt-6 pb-36 transition-[padding-bottom] data-[state=open]:pb-56 md:pt-10"
    >
      <ChatContentContainer>
        {messages.map((message) => {
          switch (message.role) {
            case "user":
              return (
                <UserChatBubble
                  key={message.id}
                  parts={message.parts}
                  className="pb-10 last:pb-0"
                />
              );
            case "assistant":
              return (
                <AIChatBubble
                  key={message.id}
                  parts={message.parts}
                  className="pb-10 last:pb-0"
                />
              );
          }
        })}
      </ChatContentContainer>
    </StickToBottom.Content>
  );
};

type ScrollToBottomButtonProps = Omit<
  React.ComponentProps<typeof GhostButton>,
  "children"
>;

const ScrollToBottomButton = ({
  className,
  ...props
}: ScrollToBottomButtonProps) => {
  const { isAtBottom, scrollToBottom } = useStickToBottomContext();

  return (
    <GhostButton
      onClick={() => scrollToBottom()}
      color="primary"
      className={cn(isAtBottom && "hidden", className)}
      {...props}
    >
      <div className="bg-bg-primary flex size-7 items-center justify-center rounded-full border border-current md:size-8">
        <ArrowDownIcon className="size-4 rounded-full md:size-5" />
      </div>
    </GhostButton>
  );
};

const Conversation = () => {
  const { isOpen } = useIsQuickQuestionsOpenStore();

  return (
    <div className="flex h-[calc(100dvh-var(--header-height))] flex-1 self-stretch overflow-hidden">
      <StickToBottom
        initial="smooth"
        resize="smooth"
        role="log"
        className="relative w-full"
      >
        <ConversationContent />
        <ScrollToBottomButton
          data-state={isOpen ? "open" : "closed"}
          className="absolute bottom-32 left-[50%] translate-x-[-50%] rounded-full transition-[bottom] data-[state=open]:bottom-46"
        />
      </StickToBottom>
    </div>
  );
};

export default Conversation;
