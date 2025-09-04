import { tool } from "ai";
import { z } from "zod";

export const getSports = tool({
  description: "This tool will show some of Simon Camacho favorite sports",
  inputSchema: z.object({}),
  execute: async () => {
    return "Here my best and favourite sports!";
  },
});
