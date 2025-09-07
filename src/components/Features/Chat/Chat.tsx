"use client";

import { useChat } from "@/providers/ChatProvider";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Conversation from "./components/ConversationInterface";
import EmptyQueryState from "./components/EmptyQueryState";

const Chat = () => {
  const { messages, setMessages, error } = useChat();

  useEffect(() => {
    if (!error) return;
    setMessages((m) => [
      ...m,
      {
        id: uuidv4(),
        parts: [{ type: "text", text: `Error: ${error.message}` }],
        role: "assistant",
      },
    ]);
  }, [error]);

  if (messages.length === 0) {
    return <EmptyQueryState />;
  }

  return <Conversation />;
};

export default Chat;
