export interface Event {
  date: string;
  content: string;
}

export const events: Event[] = [
  {
    date: "2025.01",
    content: "One paper accepted to ICLR 2025, which delves into table-text multimodal learning, one of the core parts of TableGPT2! Stay tuned for the upcoming camera-ready paper and source code!"
  },
  {
    date: "2024.12",
    content: "I am joining the ByteDance Research AI-Lab as a research intern! Looking forward to building something cool on multimodal agents with the team! 🤩"
  },
  {
    date: "2024.11",
    content: "We release TableGPT2, an open-source table expert that excels in table-centric tasks while maintaining strong general language and coding abilities! Try out our brand new 7B model on 🤗HuggingFace!"
  },
  {
    date: "2024.05",
    content: "One paper accpeted to ACL 2024 Findings! (Which also marks my personal milestone in the field of NLP! Let's keep going! 🤩)"
  },
  {
    date: "2024.02",
    content: "My FIRST paper as the FIRST author, Positive-Unlabeled Learning by Latent Group-Aware Meta Disambiguation, was accepted by CVPR 2024! That's just the beginning!"
  },
  {
    date: "2024.02",
    content: "A paper that I have contributed to, Property Existence Inference against Generative Models, was accepted by USENIX Security '24 Fall."
  }
];
