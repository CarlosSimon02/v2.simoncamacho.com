import Chat from "@/components/Features/Chat";
import { ChatProvider } from "@/components/Features/Chat/providers/ChatProvider";
import Decorations from "@/components/Features/Decorations";

const HomePage = async () => {
  return (
    <>
      <Decorations />
      <main id="main" className="flex flex-1">
        <ChatProvider>
          <Chat />
        </ChatProvider>
      </main>
    </>
  );
};

export default HomePage;
