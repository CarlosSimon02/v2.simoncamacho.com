"use client";

import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import AIChatAvatar from "./components/ConversationInterface/componentts/AIChatAvatar";
import { SkillsToolLoading } from "./components/ConversationInterface/componentts/ToolUIs/SkillsTool";

const TestTool = () => {
  return (
    <ChatContentContainer>
      <div className="flex items-start gap-3 py-10 md:gap-6">
        <AIChatAvatar />
        {/* <PresentationToolLoading /> */}
        <SkillsToolLoading />
      </div>
    </ChatContentContainer>
  );
};

const Chat = () => {
  // const { messages } = useChat();

  // if (messages.length === 0) {
  //   return <EmptyQueryState />;
  // }

  // return <Conversation />;
  return <TestTool />;
};

export default Chat;
