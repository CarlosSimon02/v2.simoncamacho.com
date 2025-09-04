import { tool } from "ai";
import { z } from "zod";

export const getWorkExperience = tool({
  description:
    "Provides Simon Camacho’s professional work experience. Use this tool when the user asks about his job history, past roles, or relevant work background.",
  inputSchema: z.object({}),
  execute: async () => {
    return `Here’s my work experience 👇

- 💻 **Supafaya (Full-stack Developer, 2024–Present)**  
  - Built and maintained product listings, payment integrations (Stripe, Xendit), admin dashboards, and event/ticketing systems.  
  - Worked on projects like **Amora e-commerce site** and a **payment-secured voting system** for *The House of Collab*.  
  - Integrated APIs with platforms like WordPress (Zumafest), and managed 3rd-party services (ImageKit, Algolia, Firebase, Wix CMS).

- 🏢 **Barangay Sta. Monica (Office Staff, 2021)**  
  - Developed a **Resident Management System (RMS)** using Microsoft Access, VBA, and SQL.  
  - Created and managed community reports, assisted with Barangay ID requests, handled resident data entry, and organized local meetings.

- 🎮 **Independent Projects**  
  - Built C++ games (Chess, Tetris, Flappy Bat).  
  - Created multiple web apps and e-commerce sites through **Frontend Mentor challenges**.  

I’m always eager to take on projects where I can sharpen my skills, learn fast, and deliver clean, user-friendly solutions 🚀
    `;
  },
});
