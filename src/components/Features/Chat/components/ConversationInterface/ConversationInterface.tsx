"use client";

import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import AIChatForm from "../AIChatForm";
import CollapsibleQuickQuestions from "./componentts/CollapsibleQuickQuestions";
import Conversation from "./componentts/Conversation";

const ConversationInterface = () => {
  return (
    <>
      <Conversation />
      <ChatContentContainer className="fixed bottom-0 left-1/2 flex w-full -translate-x-1/2 flex-col items-center gap-1 pt-5 pb-3">
        <div className="to-bg-primary absolute inset-0 -z-9 bg-gradient-to-b from-transparent to-15%" />
        <CollapsibleQuickQuestions />
        <AIChatForm />
        <p className="text-[0.75rem]">AI-generated, for reference only</p>
      </ChatContentContainer>
    </>
  );
};

export default ConversationInterface;
