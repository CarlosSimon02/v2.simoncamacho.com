"use client";

import { useChat } from "@/providers/ChatProvider";
import Conversation from "./components/ConversationInterface";
import EmptyQueryState from "./components/EmptyQueryState";

const Chat = () => {
  const { messages } = useChat();

  if (messages.length === 0) {
    return <EmptyQueryState />;
  }

  return <Conversation />;
};

export default Chat;
