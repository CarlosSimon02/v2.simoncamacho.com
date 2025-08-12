import { cn } from "@/utils";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

type TimelineProps = {
  className?: string;
};

const experiences = [
  {
    title: "Software Engineer",
    company: "Supafaya",
    date: "July 2024 – Present",
    descriptions: [
      "Develop full-stack features for e-commerce, event ticketing, and paid voting platforms across multiple projects",
      "Build and maintain systems such as product listings, payment integrations (Stripe, Xendit), and admin dashboards",
      "Lead CMS development for the Amora e-commerce site and payment-secured voting system for The House of Collab",
      "Integrate public APIs with external platforms like WordPress (Zumafest) and manage third-party services (ImageKit, Algolia, Firebase, Wix CMS)",
      "Collaborate with remote teams using Zulip and maintain clear communication with designers, developers, and product managers",
    ],
  },
  {
    title: "IT Staff",
    company: "Brgy Hall Sta. Monica",
    date: "July 2020 – May 2022",
    descriptions: [
      "Designed and developed a resident management system using Microsoft Access and VBA to streamline data handling and request tracking",
      "Automated report generation and data entry, significantly reducing manual workload",
      "Produced and maintained key reports for community initiatives and administrative processes",
      "Handled the full process for resident ID requests, from data collection to coordination with ID producers",
      "Assisted with resident concerns and provided tech support for data-driven conflict resolution",
      "Maintained structured databases while enforcing best practices in data management and integrity",
    ],
  },
];

const Timeline = ({ className }: TimelineProps) => {
  return (
    <div className={cn(className, "flex flex-col")}>
      {experiences.map((experience) => (
        <div key={experience.title} className="relative pb-15 last:pb-0">
          <div className="border-light-gray-900 dark:border-medium-gray-500 absolute top-6 left-1 h-full w-0.5 border border-r-0 border-l border-dashed" />
          <span className="relative top-6 -left-0.25 flex size-3">
            <span className="bg-light-gray-900 dark:bg-medium-gray-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-light-gray-900 dark:bg-medium-gray-500 relative inline-flex size-3 rounded-full"></span>
          </span>
          <div className="mt-[0.375rem] ml-6 flex justify-between gap-10 max-md:flex-col md:ml-10">
            <div className="flex w-[15.625rem] shrink-0 flex-col gap-2">
              <div className="mb-3">{experience.date}</div>
              <h3 className="font-oswald text-foreground text-dark-gray-50 text-2xl font-black md:text-3xl dark:text-white">
                {experience.title}
              </h3>
              <h4 className="font-oswald text-lg font-black md:text-xl ">
                @ {experience.company}
              </h4>
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
        </div>
      ))}
    </div>
  );
};

export default Timeline;
