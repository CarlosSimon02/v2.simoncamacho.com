import { tool } from "ai";
import { z } from "zod";

export const getContact = tool({
  description: "This tool shows Simon Camacho's contact information.",
  inputSchema: z.object({}),
  execute: async () => {
    return "Feel free to get in touch anytime — he’d be happy to chat! 😉";
  },
});
