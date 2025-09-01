"use client";

import { useChat } from "@/providers/ChatProvider";
import ConversationInterface from "./components/ConversationInterface/ConversationInterface";
import EmptyQueryState from "./components/EmptyQueryState";

const Chat = () => {
  const { messages } = useChat();

  if (messages.length === 0) {
    return <EmptyQueryState />;
  }

  return <ConversationInterface />;
};

export default Chat;
