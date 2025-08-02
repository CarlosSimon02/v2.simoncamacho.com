import heroImage from "@/assets/heroes/main.png";
import PillButton from "@/components/Buttons/PillButton";
import ContentContainer from "@/components/Containers/ContentContainer";
import { cn } from "@/utils";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "./index.module.css";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <ContentContainer
      sectionId="home"
      className={cn(
        className,
        "flex flex-col items-center justify-between gap-16 max-md:justify-center md:flex-row md:gap-12 lg:gap-16"
      )}
    >
      <div className={cn("flex flex-col gap-5 md:gap-7 lg:gap-9")}>
        <div
          className={cn(
            "flex flex-col gap-3",
            "after:bg-accent after:-bottom-4 after:h-1 after:w-12 after:rounded-full lg:after:mt-2"
          )}
        >
          <div className=" flex items-center gap-1">
            <MapPinIcon className="stroke-foreground-2 size-5" />
            <span>Pampanga, Philippines</span>
          </div>
          <h1 className="font-montserrat text-accent text-[2.375rem] leading-none font-black md:text-5xl lg:text-6xl">
            Simon Camacho
          </h1>
          <h2 className="font-oswald text-dark-gray-50 text-xl font-bold md:text-2xl lg:text-3xl dark:text-white">
            Software Engineer
          </h2>
        </div>
        <p className="max-w-[70ch] leading-[1.7] md:max-w-[40ch] md:leading-[1.9] lg:max-w-[50ch]">
          I am a developer who enjoys learning and expanding knowledge in the
          field of web. I am also determined to create solutions that provide
          excellent online experiences. Explore my portfolio to see my growing
          skills and dedication to quality development.
        </p>
        <div className="flex gap-4">
          <PillButton className="w-full max-w-36">Contact</PillButton>
          <PillButton variant="accent" className="w-full max-w-36">
            Resume
          </PillButton>
        </div>
      </div>
      <div className="relative max-w-[31.25rem] md:flex-1">
        <div className="relative mx-auto w-64 max-w-96 md:w-full">
          <Image
            src={heroImage.src}
            alt="Hero Image"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div
          className={cn(
            "font-oswald class-text-decor dark:text-dark-gray-800 text-light-gray-100 absolute bottom-16 -z-10 text-9xl font-bold uppercase max-md:left-1/2 max-md:-translate-x-1/2 max-md:text-center md:text-[10rem]",
            styles.textDecor
          )}
        >
          <div>Carlos</div>
          <span className="text-[10rem] md:text-[12rem]">Simon</span>
        </div>
      </div>
    </ContentContainer>
  );
};

export default HeroSection;
