"use client";

import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import { useChat } from "@/providers/ChatProvider";
import { StickToBottom } from "use-stick-to-bottom";
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

const Conversation = () => {
  return (
    <div className="flex h-[calc(100dvh-var(--header-height))] flex-1 self-stretch overflow-hidden">
      <StickToBottom
        initial="smooth"
        resize="smooth"
        role="log"
        className="relative w-full"
      >
        <ConversationContent />
      </StickToBottom>
    </div>
  );
};

export default Conversation;
