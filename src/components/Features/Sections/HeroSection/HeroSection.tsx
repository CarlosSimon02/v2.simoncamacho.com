import ContentContainer from "@/components/UI/Containers/ContentContainer";
import { cn } from "@/utils";
import Content from "./components/Content";
import Hero from "./components/Hero";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <ContentContainer
      sectionId="home"
      className={cn(
        "flex flex-col items-center justify-between gap-16 max-md:justify-center md:flex-row md:gap-12 lg:gap-16",
        className
      )}
    >
      <Content />
      <Hero />
    </ContentContainer>
  );
};

export default HeroSection;
