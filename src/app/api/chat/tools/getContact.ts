import { COMMON_DATA } from "@/data/common";
import { tool } from "ai";
import { z } from "zod";

export const getContact = tool({
  description: `This tool shows ${COMMON_DATA.owner}'s contact information.`,
  inputSchema: z.object({}),
  execute: async () => {
    return "Don’t be shy — drop a message, share your thoughts, or just say hi. He's always up for a good convo! 😉";
  },
});
