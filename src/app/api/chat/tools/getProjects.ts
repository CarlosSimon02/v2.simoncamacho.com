import { COMMON_DATA } from "@/data/common";
import { SOCIALS } from "@/data/socials";
import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description: `This tool will show a list of all projects made by ${COMMON_DATA.owner}`,
  inputSchema: z.object({}),
  execute: async () => {
    const githubLink = SOCIALS.find((s) => s.id === "github")?.href;

    return `Simon has worked on a variety of projects — from web applications and portfolio showcases to interactive tools and experiments. Each project highlights his skills in frontend development, problem-solving, and building user-friendly experiences. If you’d like to explore all of his work in detail, including source code and contributions, you can visit his GitHub profile here: ${githubLink}`;
  },
});
