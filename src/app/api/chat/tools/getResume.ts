import { tool } from "ai";
import { z } from "zod";

export const getResume = tool({
  description: "This tool show Simon Camacho's resume.",
  inputSchema: z.object({}),
  execute: async () => {
    return "You can download his resume by clicking on the link above.";
  },
});
