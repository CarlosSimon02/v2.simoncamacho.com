import { tool } from "ai";
import { z } from "zod";

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Simon Camacho. It is used to answer the question "Who is Simon Camacho?" or "Tell me about Simon Camacho"',
  inputSchema: z.object({}),
  execute: async () => {
    return {
      presentation:
        "Simon Camacho is a 23-year-old full-stack developer from Pampanga, Philippines, with a strong focus on Next.js. He loves building smooth, user-friendly web experiences and is always eager to learn and push his skills further in web development",
    };
  },
});
