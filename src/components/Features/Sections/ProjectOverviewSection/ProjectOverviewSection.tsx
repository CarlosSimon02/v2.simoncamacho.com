import pomodoro from "@/assets/projects/pomodoro.png";
import pomodoroLogo from "@/assets/projects/pomodoroLogo.png";
import PillButton from "@/components/UI/Buttons/PillButton";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import ImageWithGridBg from "@/components/UI/ImageWithGridBg";
import { cn } from "@/utils";

type ProjectOverviewSectionProps = {
  className?: string;
  projectName: string;
  description: string;
};

const ProjectOverviewSection = ({
  className,
  projectName,
  description,
}: ProjectOverviewSectionProps) => {
  return (
    <ContentContainer
      sectionId="project-overview"
      className={cn("flex flex-col gap-9 md:gap-12", className)}
    >
      <h1 className="font-montserrat text-accent flex-1 text-3xl leading-none font-black md:text-4xl lg:text-5xl">
        {projectName}
      </h1>
      <div className="flex items-center gap-8 max-md:flex-col md:gap-12">
        <ImageWithGridBg
          href="/"
          alt=""
          image={pomodoro.src}
          logo={pomodoroLogo.src}
          logoAlt=""
          className="flex-1"
        />
        <div className="flex flex-1 flex-col gap-4 md:gap-5">
          <h2 className="subheading">Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>
          <div className="mt-2 flex flex-wrap items-stretch gap-4">
            <PillButton
              variant="primary"
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
      </div>
    </ContentContainer>
  );
};

export default ProjectOverviewSection;
