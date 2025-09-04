import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Simon Camacho",
  inputSchema: z.object({}),
  execute: async () => {
    return "Here are all the projects made by Simon Camcho (above)! Don't hesitate to ask me more about them!";
  },
});
