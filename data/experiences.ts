export interface Experience {
  logo: string;
  organization: string;
  role: string;
  advisors: string;
  period: string;
}

export const researchExperiences: Experience[] = [
  {
    logo: "/images/antgroup-logo.jpeg",
    organization: "Inclusion AI, Ant Group",
    role: "Research intern. Working on unified multimodal models.",
    advisors: "Junbo \"Jake\" Zhao",
    period: "2026-Present"
  },
  {
    logo: "/images/uw-madison-logo.png",
    organization: "University of Wisconsin-Madison",
    role: "Visiting scholar at the Department of Computer Sciences.",
    advisors: "Sharon Li",
    period: "2025-2026"
  },
  {
    logo: "/images/bytedance-logo.png",
    organization: "ByteDance Seed",
    role: "Research intern. Working on multimodal agent.",
    advisors: "Yuan Lin, Hang Li",
    period: "2024-2025"
  }
];

export const educationExperiences: Experience[] = [
  {
    logo: "/images/zju-logo.png",
    organization: "Zhejiang University",
    role: "M.S. in Computer Science, College of Computer Science and Technology.",
    advisors: "Junbo \"Jake\" Zhao, Haobo Wang",
    period: "2024-2026"
  },
  {
    logo: "/images/zju-logo.png",
    organization: "Zhejiang University",
    role: "B.E. in Software Engineering, College of Computer Science and Technology.",
    advisors: "Junbo \"Jake\" Zhao, Haobo Wang",
    period: "2020-2024"
  }
];
