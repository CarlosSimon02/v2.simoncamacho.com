import { COMMON_DATA } from "@/data/common";
import { tool } from "ai";
import { z } from "zod";

export const getPresentation = tool({
  description: `It is used to answer the question "Who is ${COMMON_DATA.owner}?"`,
  inputSchema: z.object({}),
  execute: async () => {
    return {
      presentation: `${COMMON_DATA.owner} is a 23-year-old full-stack developer from Pampanga, Philippines, with a strong focus on Next.js. He loves building smooth, user-friendly web experiences and is always eager to learn and push his skills further in web development`,
    };
  },
});
