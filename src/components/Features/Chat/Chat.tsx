"use client";

import ConversationInterface from "./components/ConversationInterface";
import EmptyQueryState from "./components/EmptyQueryState";
import useChatNavigation from "./hooks/useChatNavigation";

const Chat = () => {
  const { currentQuery, hasQuery } = useChatNavigation();

  if (!hasQuery) {
    return <EmptyQueryState />;
  }

  return <ConversationInterface query={currentQuery!} />;
};

export default Chat;
