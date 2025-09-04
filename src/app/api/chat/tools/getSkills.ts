import { tool } from "ai";
import { z } from "zod";

export const getSkills = tool({
  description: "This tool show a list of Simon Camacho's skills.",
  inputSchema: z.object({}),
  execute: async () => {
    return "You can see all my skills above.";
  },
});
