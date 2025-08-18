import audiophile from "@/assets/projects/audiophile.png";
import kanban from "@/assets/projects/kanban.png";
import pomodoro from "@/assets/projects/pomodoro.png";

export const PROJECTS = [
  {
    title: "Kanban Web App",
    slug: "kanban",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: kanban.src,
    description:
      "Kanban is a project management tool that helps you manage your projects and tasks.",
  },
  {
    title: "Audiophile E-commerce Website",
    slug: "audiophile",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: audiophile.src,
    description:
      "Audiophile is a project management tool that helps you manage your projects and tasks.",
  },
  {
    title: "FEM Pomodoro App",
    slug: "pomodoro",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
    image: pomodoro.src,
    description:
      "Pomodoro is a project management tool that helps you manage your projects and tasks.",
  },
];
