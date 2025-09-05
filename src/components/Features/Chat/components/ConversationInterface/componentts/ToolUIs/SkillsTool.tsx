import SkillsGrid, { SkillsGridLoading } from "@/components/UI/SkillsGrid";

export const SkillsToolLoading = () => {
  return <SkillsGridLoading variant="small" className="w-full" />;
};

const SkillsTool = () => {
  return <SkillsGrid variant="small" className="w-full" />;
};

export default SkillsTool;
