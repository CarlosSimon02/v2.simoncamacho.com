import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Simon Camacho",
    template: "%s | Simon Camacho",
  },
  description:
    "I am a developer who enjoys learning and expanding knowledge in the field of web. I am also determined to create solutions that provide excellent online experiences. Explore my portfolio to see my growing skills and dedication to quality development.",
  generator: "Next.js",
  applicationName: "Simon Camacho",
  keywords: [
    "Simon Camacho",
    "web developer portfolio",
    "web developer",
    "front-end development",
    "back-end development",
    "full-stack development",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "web design",
    "responsive design",
    "UX/UI",
    "web projects",
    "programming",
    "coding",
    "software development",
    "JavaScript frameworks",
    "portfolio projects",
    "web applications",
    "web development skills",
    "coding portfolio",
    "developer portfolio",
    "web developer Simon Camacho",
    "Simon Camacho projects",
    "Simon Camacho web developer",
    "Simon Camacho portfolio",
  ],
  authors: [{ name: "Simon Camacho", url: "https://simoncamacho.com" }],
  creator: "Simon Camacho",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://simoncamacho.com"),
  openGraph: {
    title: "Simon Camacho",
    description:
      "I am a developer who enjoys learning and expanding knowledge in the field of web. I am also determined to create solutions that provide excellent online experiences. Explore my portfolio to see my growing skills and dedication to quality development.",
    url: "https://simoncamacho.com",
    siteName: "Simon Camacho Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simon Camacho Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Camacho",
    description:
      "I am a developer who enjoys learning and expanding knowledge in the field of web. I am also determined to create solutions that provide excellent online experiences. Explore my portfolio to see my growing skills and dedication to quality development.",
    images: ["/og-image.png"],
    creator: "@yoursocialhandle",
  },
  alternates: {
    canonical: "https://simoncamacho.com",
    languages: {
      en: "https://simoncamacho.com/en",
      fi: "https://simoncamacho.com/fil",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: null,
  },
};
