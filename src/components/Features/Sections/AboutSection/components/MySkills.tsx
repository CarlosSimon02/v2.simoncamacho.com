"use client";

import SkillsGrid from "@/components/UI/SkillsGrid";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

const MySkills = () => {
  const t = useTranslations("aboutSection");

  return (
    <div className={cn("flex flex-col gap-2")}>
      <h3 className="subheading mb-4 md:mb-5">{t("skillsHeader")}</h3>
      <SkillsGrid />
    </div>
  );
};

export default MySkills;
