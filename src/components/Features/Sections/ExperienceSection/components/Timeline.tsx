"use client";

import { EXPERIENCES } from "@/data/experiences";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { EXPERIENCE_TIMELINE_ITEM_CLASS } from "../constants";

type TimelineProps = {
  className?: string;
};

const Timeline = ({ className }: TimelineProps) => {
  useGSAP(() => {
    const items = gsap.utils.toArray(`.${EXPERIENCE_TIMELINE_ITEM_CLASS}`);
    items.forEach((item) => {
      gsap.to(item as Element, {
        top: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: item as Element,
          start: "top 80%",
        },
      });
    });
  });

  return (
    <ol className={cn("flex flex-col", className)}>
      {EXPERIENCES.map((experience) => (
        <li
          key={experience.title}
          className={cn(
            EXPERIENCE_TIMELINE_ITEM_CLASS,
            "group from-bottom-xs flex gap-10"
          )}
        >
          <div className="flex shrink-0 flex-col max-md:hidden md:w-[9rem]">
            <div className="font-oswald self-end text-lg font-semibold  md:text-xl">
              {experience.date}
            </div>
          </div>
          <div className="relative flex flex-col gap-7 pb-12 pl-7 group-last:pb-0 md:pl-10">
            <div className="border-light-gray-900 dark:border-medium-gray-500 absolute top-3 left-1 h-full w-0.5 border border-r-0 border-l border-dashed" />
            <span className="absolute top-3 -left-0.25 flex size-3">
              <span className="bg-light-gray-900 dark:bg-medium-gray-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-light-gray-900 dark:bg-medium-gray-500 relative inline-flex size-3 rounded-full"></span>
            </span>
            <div className="flex flex-wrap-reverse items-end gap-5 max-md:justify-between md:flex-row-reverse md:items-center md:justify-end">
              <div className="flex min-w-[11.25rem] flex-col md:gap-1">
                <h3 className="subheading max-md:mb-1">{experience.title}</h3>
                <div className="font-oswald text-lg font-semibold md:hidden md:text-xl">
                  {experience.date}
                </div>
                <div className="font-oswald text-lg font-black md:text-xl">
                  @ {experience.company.name}
                </div>
              </div>
              <div className="bg-light-gray-300 dark:bg-dark-gray-500 size-fit rounded-xl p-3 md:p-4">
                <experience.company.logo className="fill-dark-gray-50 size-10 md:size-10 dark:fill-white" />
              </div>
            </div>
            <ul className="flex max-w-2xl flex-col gap-2 md:gap-3">
              {experience.descriptions.map((description) => (
                <li key={description} className="flex items-start gap-2">
                  <PaperAirplaneIcon className="stroke-accent size-5 flex-shrink-0 pt-1 sm:size-6" />
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
