"use client";

import GhostButton from "@/components/UI/Buttons/GhostButton";
import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import { useChat } from "@/providers/ChatProvider";
import { cn } from "@/utils";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { StickToBottom, useStickToBottomContext } from "use-stick-to-bottom";
import AIChatForm from "../AIChatForm";
import AIChatBubble from "./componentts/AIChatBubble";
import CollapsibleQuickQuestions from "./componentts/CollapsibleQuickQuestions";
import UserChatBubble from "./componentts/UserChatBubble";
import { useIsQuickQuestionsOpenStore } from "./stores/useIsQuickQuestionsOpenStore";

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
  const { isAtBottom, scrollToBottom, state } = useStickToBottomContext();

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
  return (
    <div className="pointer-events-none flex h-[calc(100dvh-var(--header-height))] flex-1 self-stretch overflow-hidden">
      <StickToBottom
        initial="smooth"
        resize="smooth"
        role="log"
        className="pointer-events-auto w-full"
      >
        <ConversationContent />
        <ChatContentContainer className="pointer-events-none fixed bottom-0 left-1/2 flex w-full -translate-x-1/2 flex-col">
          <ScrollToBottomButton className="pointer-events-auto self-center" />
          <div className="pointer-events-auto relative flex flex-col items-center gap-1 pt-5 pb-2">
            <div className="to-bg-primary absolute inset-0 -z-9 bg-gradient-to-b from-transparent to-15%" />
            <CollapsibleQuickQuestions />
            <AIChatForm />
            <p className="text-[0.75rem]">AI-generated, for reference only</p>
          </div>
        </ChatContentContainer>
      </StickToBottom>
    </div>
  );
};

export default Conversation;
