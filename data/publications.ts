export interface Publication {
  venue: string;
  title: string;
  authors: string;
  link: string;
}

export const publications: Publication[] = [
  {
    venue: "ICLR 2026",
    title: "Understanding Language Prior of LVLMs by Contrasting Chain-of-Embedding",
    authors: "<span class='italic font-bold'>Lin Long*</span>, Changdae Oh*, Seongheon Park, Sharon Li",
    link: "https://arxiv.org/abs/2509.23050"
  },
  {
    venue: "ICLR 2026",
    title: "Seeing, Listening, Remembering, and Reasoning: A Multimodal Agent with Long-Term Memory",
    authors: "<span class='italic font-bold'>Lin Long*</span>, Yichen He*, Wentao Ye, Yiyuan Pan, Yuan Lin, Hang Li, Junbo Zhao, Wei Li",
    link: "https://arxiv.org/abs/2508.09736"
  },
  {
    venue: "arXiv",
    title: "TableGPT2: A Large Multimodal Model with Tabular Data Integration",
    authors: "TableGPT Team (as <span class='italic font-bold'>directional lead of table encoder</span>)",
    link: "https://arxiv.org/abs/2411.02059"
  },
  {
    venue: "ICLR 2025",
    title: "Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL",
    authors: "<span class='italic font-bold'>Lin Long*</span>, Xijun Gu*, Xinjie Sun, Wentao Ye, Haobo Wang, Sai Wu, Gang Chen, Junbo Zhao",
    link: "https://openreview.net/forum?id=qmsX2R19p9"
  },
  {
    venue: "ACL 2024 Findings",
    title: "On LLMs-Driven Synthetic Data Generation, Curation and Evaluation: A Survey",
    authors: "<span class='italic font-bold'>Lin Long</span>, Rui Wang, Ruixuan Xiao, Junbo Zhao, Xiao Ding, Gang Chen, Haobo Wang",
    link: "https://aclanthology.org/2024.findings-acl.658/"
  },
  {
    venue: "CVPR 2024",
    title: "Positive-Unlabeled Learning by Latent Group-Aware Meta Disambiguation",
    authors: "<span class='italic font-bold'>Lin Long*</span>, Haobo Wang*, Zhijie Jiang, Lei Feng, Chang Yao, Gang Chen, Junbo Zhao",
    link: "https://openaccess.thecvf.com/content/CVPR2024/papers/Long_Positive-Unlabeled_Learning_by_Latent_Group-Aware_Meta_Disambiguation_CVPR_2024_paper.pdf"
  },
  {
    venue: "USENIX Security '24 Fall",
    title: "Property Existence Inference against Generative Models",
    authors: "Lijin Wang, Jingjing Wang, Jie Wan, <span class='italic font-bold'>Lin Long</span>, Ziqi Yang, Zhan Qin",
    link: "https://www.usenix.org/conference/usenixsecurity24/presentation/wang-lijin"
  }
];
