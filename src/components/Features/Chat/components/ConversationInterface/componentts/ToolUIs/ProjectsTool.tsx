"use client";

import { Skeleton } from "@/components/Primitives/Skeleton";
import ProjectsGrid, {
  ProjectsGridLoading,
} from "@/components/UI/ProjectsGrid";
import { PROJECTS } from "@/data/projects";
import { useTranslations } from "next-intl";

export const ProjectsToolLoading = () => {
  return (
    <div className="flex w-full min-w-0 flex-col gap-6 md:gap-8">
      <div className="flex w-full flex-col gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-5 w-full rounded-md" />
        ))}
      </div>
      <ProjectsGridLoading />
    </div>
  );
};

const ProjectsTool = () => {
  const t = useTranslations("chat.tools.projects");

  return (
    <div className="flex w-full min-w-0 flex-col gap-6 md:gap-8">
      <p>{t("description")}</p>
      <ProjectsGrid projects={PROJECTS} />
    </div>
  );
};

export default ProjectsTool;
