import { tool } from "ai";
import { z } from "zod";

export const getCats = tool({
  description: "This tool shows information about Simon Camacho's cats.",
  inputSchema: z.object({}),
  execute: async () => {
    return "Their names are Kenzy and Coco. Technically, they’re not Simon’s cats — they belong to his roommate, but he’s around them a lot.";
  },
});
