"use client";

import { cn, toKebabCase } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useId } from "react";

type SectionTitleProps = {
  title: string;
  number: number;
};

const SECTION_TITLE_ITEM_CLASS = "section-title-item";
const SECTION_TITLE_CONTAINER_CLASS = "section-title-container";

const SectionTitle = ({ title, number }: SectionTitleProps) => {
  const formattedTitle = toKebabCase(title);
  const containerClass = `${SECTION_TITLE_CONTAINER_CLASS}-${formattedTitle}`;
  const id = useId();
  const itemClass = `${SECTION_TITLE_ITEM_CLASS}-${formattedTitle}-${id}`;

  useGSAP(() => {
    gsap.to(`.${itemClass}`, {
      left: 0,
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: `.${containerClass}`,
        start: "top 70%",
      },
    });
  });

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-16 md:gap-24 lg:gap-56",
        containerClass
      )}
    >
      <div className="flex flex-col gap-3">
        <span
          className={cn(
            "font-oswald text-light-gray-300 dark:text-dark-gray-700 from-right-sm text-5xl font-black md:text-6xl",
            itemClass
          )}
        >
          {String(number).padStart(2, "0")}
        </span>
        <h2
          className={cn(
            "font-montserrat text-accent from-right-sm w-[8.75rem] text-3xl font-black whitespace-nowrap md:text-4xl",
            itemClass
          )}
        >
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "text-decor from-right-sm text-9xl select-none md:text-[10rem]",
          itemClass
        )}
      >
        {title.slice(0, 10)}
      </div>
    </div>
  );
};

export default SectionTitle;
