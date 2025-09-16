import { COMMON_DATA } from "@/data/common";
import { tool } from "ai";
import { z } from "zod";

export const getSports = tool({
  description: `This tool will show some of ${COMMON_DATA.owner}'s sports`,
  inputSchema: z.object({}),
  execute: async () => {
    return `**${COMMON_DATA.owner}'s favorite sports** 🏀♟️  
    - **Chess** — big fan of the King's Gambit and Scandinavian Defense.  
    - **Basketball** — he's 5'10", usually plays center but secretly a shooter at heart.  

    G ka to guess which one he enjoys more? 😉`;
  },
});
