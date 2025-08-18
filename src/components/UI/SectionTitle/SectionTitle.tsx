import { cn, toKebabCase } from "@/utils";
import SectionTitleAnimation from "./components/SectionTitleAnimation";
import { getSectionTitleContainerStyle } from "./utils";

type SectionTitleProps = {
  title: string;
  number: number;
};

const SectionTitle = ({ title, number }: SectionTitleProps) => {
  const formattedTitle = toKebabCase(title);
  const containerStyle = getSectionTitleContainerStyle(formattedTitle);

  return (
    <>
      <SectionTitleAnimation id={formattedTitle} />
      <div
        className={cn(
          "flex items-center justify-between gap-16 md:gap-24 lg:gap-56",
          containerStyle
        )}
      >
        <div className="flex flex-col gap-3">
          <span className="font-oswald text-light-gray-300 dark:text-dark-gray-700 text-5xl font-black md:text-6xl">
            {String(number).padStart(2, "0")}
          </span>
          <h2 className="font-montserrat text-accent text-3xl font-black whitespace-nowrap md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="text-decor text-9xl select-none md:text-[10rem]">
          {title}
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
