import BaseContainer from "@/components/UI/Containers/BaseContainer";
import SectionNumbers, { Section } from "./components/SectionNumbers";
import Socials from "./components/Socials";
import VerticalLines from "./components/VerticalLines";

type DecorationsProps = {
  sections?: Section[];
};

const Decorations = ({ sections }: DecorationsProps) => {
  return (
    <>
      <BaseContainer className="pointer-events-none fixed top-0 left-1/2 -z-10 h-screen -translate-x-1/2">
        <VerticalLines />
      </BaseContainer>
      {sections && (
        <BaseContainer className="pointer-events-none fixed top-[var(--header-height)] bottom-0 left-1/2 z-10 flex -translate-x-1/2 items-center justify-between px-4 max-xl:hidden sm:px-8 lg:px-12">
          <SectionNumbers sections={sections} />
          <Socials />
        </BaseContainer>
      )}
    </>
  );
};

export default Decorations;
