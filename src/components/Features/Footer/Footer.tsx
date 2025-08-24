import ContentContainer from "@/components/UI/Containers/ContentContainer";
import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import { GitBranchIcon, StarIcon } from "@primer/octicons-react";
import { getTranslations } from "next-intl/server";
import GhostButton from "../../UI/Buttons/GhostButton";
import Cubes from "./components/Cubes";

type AboutSectionProps = {
  className?: string;
};

type GitHubStats = {
  stargazersCount: number;
  forksCount: number;
};

const AboutSection = async ({ className }: AboutSectionProps) => {
  const t = await getTranslations("footer");

  let stats: GitHubStats | null = null;

  try {
    const response = await fetch(
      "https://api.github.com/repos/CarlosSimon02/v2.simoncamacho.com"
    );

    if (response.ok) {
      const data = await response.json();
      stats = {
        stargazersCount: data.stargazers_count,
        forksCount: data.forks_count,
      };
    }
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);
  }

  return (
    <ContentContainer
      sectionId="about"
      className={cn(
        "grid justify-center gap-8 !pt-32 !pb-12 text-center",
        className
      )}
      as="footer"
    >
      <Cubes className="md:hidden" />
      <GhostButton color="secondary" asChild>
        <Link href="https://github.com/CarlosSimon02/v2.simoncamacho.com">
          <div className="gap font-oswald grid gap-3 transition-transform group-hover:translate-y-1 md:text-xl">
            <div>{t("attribution")}</div>
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <StarIcon size={24} />
                <span aria-hidden>{stats ? stats.stargazersCount : "..."}</span>
                <span className="sr-only">
                  {t("starsCount", { stars: stats?.stargazersCount ?? 0 })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranchIcon size={24} />
                <span className="forks-count">
                  <span aria-hidden>{stats ? stats.forksCount : "..."}</span>
                  <span className="sr-only">
                    {t("forksCount", { forks: stats?.forksCount ?? 0 })}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </GhostButton>
    </ContentContainer>
  );
};

export default AboutSection;
