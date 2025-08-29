import ChatHeader from "@/components/Features/ChatHeader";

type ChatLayoutProps = {
  children?: React.ReactNode;
};

const ChatLayout = ({ children }: ChatLayoutProps) => {
  return (
    <>
      <ChatHeader />
      {children}
    </>
  );
};

export default ChatLayout;
