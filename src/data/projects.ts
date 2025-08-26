import audiophile from "@/assets/projects/audiophile.png";
import kanban from "@/assets/projects/kanban.png";
import pomodoro from "@/assets/projects/pomodoro.png";
import pomodoroLogo from "@/assets/projects/pomodoroLogo.png";

export const PROJECTS = [
  {
    slug: "kanban",
    logo: pomodoroLogo.src,
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: kanban.src,
  },
  {
    slug: "audiophile",
    logo: pomodoroLogo.src,
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: audiophile.src,
  },
  {
    slug: "pomodoro",
    logo: pomodoroLogo.src,
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: pomodoro.src,
  },
];
