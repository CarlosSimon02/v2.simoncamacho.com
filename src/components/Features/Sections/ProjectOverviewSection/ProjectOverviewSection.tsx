import pomodoro from "@/assets/projects/pomodoro.png";
import pomodoroLogo from "@/assets/projects/pomodoroLogo.png";
import PillButton from "@/components/UI/Buttons/PillButton";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import { CssIcon, HtmlIcon, SassIcon } from "@/components/UI/Icons/Techs";
import ImageWithGridBg from "@/components/UI/ImageWithGridBg";
import TechnologyCard from "@/components/UI/TechnologyCard";
import { cn } from "@/utils";

type ProjectOverviewSectionProps = {
  className?: string;
  projectName: string;
  description: string;
};

const sampleTechnologies = [
  {
    name: "HTML",
    icon: HtmlIcon,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: CssIcon,
    color: "#1572B6",
  },
  {
    name: "Sass",
    icon: SassIcon,
    color: "#CC6699",
  },
];

const ProjectOverviewSection = ({
  className,
  projectName,
  description,
}: ProjectOverviewSectionProps) => {
  return (
    <ContentContainer
      sectionId="project-overview"
      className={cn("flex flex-col gap-16 md:gap-24", className)}
    >
      <h1 className="font-montserrat text-accent flex-1 text-3xl leading-none font-black md:text-4xl lg:text-5xl">
        {projectName}
      </h1>
      <div className="flex items-center gap-8 max-md:flex-col md:gap-12">
        <div className="flex max-w-md flex-1 flex-col gap-5 max-md:w-full md:gap-6">
          <ImageWithGridBg
            href="/"
            alt=""
            image={pomodoro.src}
            logo={pomodoroLogo.src}
            logoAlt=""
            className=""
          />
          <div className="flex flex-wrap items-stretch gap-4">
            <PillButton
              variant="outline"
              className="flex-1 text-nowrap sm:min-w-[10.3125rem]"
            >
              View Code
            </PillButton>
            <PillButton
              variant="accent"
              className="flex-1 text-nowrap max-sm:w-full"
            >
              Preview Project
            </PillButton>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 md:gap-5">
          <h2 className="subheading">Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-8 max-md:flex-col md:gap-12">
        <div className="flex flex-col gap-4 md:flex-[60%] md:gap-5">
          <h2 className="subheading">Web Stack and Technologies</h2>
          <div className="flex flex-col gap-4">
            <div className="flex w-full flex-wrap items-stretch justify-center gap-3 md:hidden">
              {sampleTechnologies.map((technology) => (
                <TechnologyCard
                  key={technology.name}
                  technology={technology}
                  className="w-full max-w-[10rem]"
                />
              ))}
            </div>
            <p className="flex-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-[40%] flex-wrap items-stretch justify-center gap-3 max-md:hidden">
          {sampleTechnologies.map((technology) => (
            <TechnologyCard
              key={technology.name}
              technology={technology}
              className="w-full max-w-[12rem]"
            />
          ))}
        </div>
      </div>
    </ContentContainer>
  );
};

export default ProjectOverviewSection;
