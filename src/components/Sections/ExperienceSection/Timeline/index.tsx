import { EXPERIENCES } from "@/constants/experiences";
import { cn } from "@/utils";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

type TimelineProps = {
  className?: string;
};

const Timeline = ({ className }: TimelineProps) => {
  return (
    <div className={cn(className, "flex flex-col")}>
      {EXPERIENCES.map((experience) => (
        <div key={experience.title} className="relative pb-15 last:pb-0">
          <div className="border-light-gray-900 dark:border-medium-gray-500 absolute top-6 left-1 h-full w-0.5 border border-r-0 border-l border-dashed" />
          <span className="relative top-6 -left-0.25 flex size-3">
            <span className="bg-light-gray-900 dark:bg-medium-gray-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-light-gray-900 dark:bg-medium-gray-500 relative inline-flex size-3 rounded-full"></span>
          </span>
          <div className="mt-[0.375rem] ml-6 flex justify-between gap-x-10 max-md:flex-col md:ml-10">
            <div className="flex shrink-0 flex-col gap-2 max-md:hidden md:w-[15.625rem]">
              <div className="font-oswald mb-3 text-lg font-semibold md:text-xl">
                {experience.date}
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex flex-wrap-reverse items-end gap-5 max-md:justify-between md:flex-row-reverse md:items-center md:justify-end">
                <div className="flex min-w-[11.25rem] flex-col gap-1">
                  <h3 className="font-oswald text-foreground text-dark-gray-50 text-2xl font-black md:text-3xl dark:text-white">
                    {experience.title}
                  </h3>
                  <div className="font-oswald text-lg font-semibold md:hidden md:text-xl">
                    {experience.date}
                  </div>
                  <div className="font-oswald text-lg font-black md:text-xl ">
                    @ {experience.company.name}
                  </div>
                </div>
                <div className="bg-dark-gray-500 size-fit rounded-xl p-3 md:p-4">
                  <experience.company.logo className="size-10 fill-white md:size-10" />
                </div>
              </div>
              <ul className="flex max-w-3xl flex-col gap-2 md:gap-3">
                {experience.descriptions.map((description) => (
                  <li key={description} className="flex items-start gap-2">
                    <PaperAirplaneIcon className="stroke-accent size-5 flex-shrink-0 pt-1 sm:size-6" />
                    <span>{description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
