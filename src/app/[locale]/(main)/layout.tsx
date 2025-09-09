import AnimatedChatButton from "@/components/Features/AnimatedChatButton";
import Header from "@/components/Features/Header";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <AnimatedChatButton className="fixed right-5 bottom-5 z-10 md:right-10 md:bottom-10 lg:right-16 lg:bottom-16 " />
    </>
  );
};

export default MainLayout;
