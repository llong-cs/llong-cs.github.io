export interface BlogPost {
  title: string;
  subtitle: string;
  authors: string;
  publishedAt: string;
  dateLabel: string;
  description: string;
  tags: string[];
  link: string;
  codeLink: string;
}

export const blogs: BlogPost[] = [
  {
    title: "Astra in Robot Control",
    subtitle: "From capabilities, agent design, to future possibilities.",
    authors: "Lin Long, Jaemin Cho",
    publishedAt: "2026-10-08",
    dateLabel: "Oct 8, 2026",
    description: "We introduce Ditto-Bench and study Astra's robot-control capabilities, agent design choices, behavioral patterns, and collaboration with vision-language-action policies.",
    tags: ["Robot Learning", "LLM Agents", "Benchmark"],
    link: "https://llong-cs.github.io/llms-for-robot-control/",
    codeLink: "https://github.com/llong-cs/llms-for-robot-control"
  }
];
