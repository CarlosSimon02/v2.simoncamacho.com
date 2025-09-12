import staMonica from "@/assets/companyLogos/staMonica.png";
import supafaya from "@/assets/companyLogos/supafaya.png";

export const EXPERIENCES = [
  {
    key: "supafaya",
    company: {
      url: "https://www.linkedin.com/company/supafaya/posts/?feedView=all",
      logo: supafaya.src,
    },
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "NestJS",
      "Firebase",
      "Stripe",
      "Xendit",
      "Redis",
      "Figma",
    ],
  },
  {
    key: "staMonica",
    company: {
      url: "https://www.facebook.com/profile.php?id=100063827855620",
      logo: staMonica.src,
    },
    technologies: ["VBA", "Microsoft Access", "Phyton", "SQL"],
  },
];
