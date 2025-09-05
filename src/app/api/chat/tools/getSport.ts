import { tool } from "ai";
import { z } from "zod";

export const getSports = tool({
  description: "This tool will show some of Simon Camacho's favorite sports",
  inputSchema: z.object({}),
  execute: async () => {
    return `**Simon Camacho's favorite sports** 🏀♟️  
    - **Chess** — big fan of the King's Gambit and Scandinavian Defense.  
    - **Basketball** — he's 5'10", usually plays center but secretly a shooter at heart.  

    G ka to guess which one he enjoys more? 😉`;
  },
});
