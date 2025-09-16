import { COMMON_DATA } from "@/data/common";
import { tool } from "ai";
import { z } from "zod";

export const getResume = tool({
  description: `This tool will ${COMMON_DATA.owner}’s resume.`,
  inputSchema: z.object({}),
  execute: async () => {
    return `Feel free to open ${COMMON_DATA.owner}’s resume 📄 whenever you’d like. It highlights his skills, work experience, and projects in a clear and professional way, making it easy to get a quick overview of his background. The resume is designed to give you both a snapshot of his qualifications and deeper insights into his journey as a developer.`;
  },
});
