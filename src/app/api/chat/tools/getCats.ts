import { COMMON_DATA } from "@/data/common";
import { tool } from "ai";
import { z } from "zod";

export const getCats = tool({
  description: `This tool shows information about ${COMMON_DATA.owner}'s cats.`,
  inputSchema: z.object({}),
  execute: async () => {
    return "Their names are Kenzy and Coco. Technically, they’re not Simon’s cats — they belong to his roommate, but he’s around them a lot.";
  },
});
