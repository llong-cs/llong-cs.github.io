export interface Advisor {
  name: string;
  link?: string;
}

export interface Experience {
  logo: string;
  organization: string;
  role: string;
  advisors: Advisor[];
  period: string;
}

export const researchExperiences: Experience[] = [
  {
    logo: "/images/antgroup-logo.jpeg",
    organization: "Inclusion AI, Ant Group",
    role: "Research intern. Working on unified multimodal models and robot learning with egocentric human videos.",
    advisors: [
      { name: "Junbo \"Jake\" Zhao", link: "https://jzhao2024.github.io/" }
    ],
    period: "2026.02-2026.08"
  },
  {
    logo: "/images/uw-madison-logo.png",
    organization: "University of Wisconsin-Madison",
    role: "Visiting scholar at the Department of Computer Sciences.",
    advisors: [
      { name: "Sharon Li" }
    ],
    period: "2025.06-2026.01"
  },
  {
    logo: "/images/bytedance-logo.png",
    organization: "ByteDance Seed",
    role: "Research intern. Working on multimodal agent.",
    advisors: [
      { name: "Yuan Lin" },
      { name: "Hang Li" }
    ],
    period: "2024.12-2025.06"
  }
];

export const educationExperiences: Experience[] = [
  {
    logo: "/images/jhu-logo.png",
    organization: "Johns Hopkins University",
    role: "Ph.D. in Computer Science, Whiting School of Engineering.",
    advisors: [
      { name: "Jaemin Cho", link: "https://j-min.io/" }
    ],
    period: "2026-Present"
  },
  {
    logo: "/images/zju-logo.png",
    organization: "Zhejiang University",
    role: "M.S. in Computer Science, College of Computer Science and Technology.",
    advisors: [
      { name: "Junbo \"Jake\" Zhao", link: "https://jzhao2024.github.io/" },
      { name: "Haobo Wang" }
    ],
    period: "2024-2026 (dropped out)"
  },
  {
    logo: "/images/zju-logo.png",
    organization: "Zhejiang University",
    role: "B.E. in Software Engineering, College of Computer Science and Technology.",
    advisors: [
      { name: "Junbo \"Jake\" Zhao", link: "https://jzhao2024.github.io/" },
      { name: "Haobo Wang" }
    ],
    period: "2020-2024"
  }
];
