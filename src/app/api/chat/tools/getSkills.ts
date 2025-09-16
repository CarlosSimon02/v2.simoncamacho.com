import { COMMON_DATA } from "@/data/common";
import { tool } from "ai";
import { z } from "zod";

export const getSkills = tool({
  description: `This tool show a list of ${COMMON_DATA.owner}'s skills.`,
  inputSchema: z.object({}),
  execute: async () => {
    return "You can see all my skills above.";
  },
});
