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
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "NestJS" },
      { name: "Firebase" },
      { name: "Stripe" },
      { name: "Xendit" },
      { name: "Redis" },
      { name: "Figma" },
    ],
  },
  {
    key: "staMonica",
    company: {
      url: "https://www.facebook.com/profile.php?id=100063827855620",
      logo: staMonica.src,
    },
    technologies: [
      { name: "VBA" },
      { name: "Microsoft Access" },
      { name: "Phyton" },
      { name: "SQL" },
    ],
  },
];
