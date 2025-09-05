import { tool } from "ai";
import { z } from "zod";

export const getResume = tool({
  description:
    "Provides access to Simon Camacho’s resume with a helpful message.",
  inputSchema: z.object({}),
  execute: async () => {
    return `Feel free to open Simon Camacho’s resume 📄 whenever you’d like. It highlights his skills, work experience, and projects in a clear and professional way, making it easy to get a quick overview of his background. The resume is designed to give you both a snapshot of his qualifications and deeper insights into his journey as a developer.`;
  },
});
