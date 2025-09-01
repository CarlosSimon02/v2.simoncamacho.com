"use client";

import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import { useChat } from "@/providers/ChatProvider";
import AIChatForm from "../AIChatForm";
import AIChatBubble from "./componentts/AIChatBubble";
import CollapsibleQuickQuestions from "./componentts/CollapsibleQuickQuestions";
import UserChatBubble from "./componentts/UserChatBubble";

const ConversationInterface = () => {
  const { messages } = useChat();

  return (
    <>
      <ChatContentContainer className="flex self-stretch">
        <div className="h-[1024px] w-full py-10">
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
        </div>
      </ChatContentContainer>
      <ChatContentContainer className="fixed bottom-0 left-1/2 flex w-full -translate-x-1/2 flex-col items-center gap-1 py-3">
        <CollapsibleQuickQuestions />
        <AIChatForm />
        <p className="text-[0.75rem]">AI-generated, for reference only</p>
      </ChatContentContainer>
    </>
  );
};

export default ConversationInterface;
