import Chat from "@/components/Features/Chat";
import Decorations from "@/components/Features/Decorations";

const HomePage = async () => {
  return (
    <>
      <Decorations />
      <main id="main" className="flex flex-1">
        <Chat />
      </main>
    </>
  );
};

export default HomePage;
