"use client";

import ConversationInterface from "./components/ConversationInterface/ConversationInterface";
import EmptyQueryState from "./components/EmptyQueryState";
import { useChatContext } from "./providers/ChatProvider";

const Chat = () => {
  const { messages } = useChatContext();

  if (messages.length === 0) {
    return <EmptyQueryState />;
  }

  return <ConversationInterface />;
};

export default Chat;
