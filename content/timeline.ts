import type { TimelineItem } from "@/lib/types";

/**
 * The "builder arc" — trajectory, not résumé. Dates follow the public
 * LinkedIn record; refine as you choose to disclose more detail.
 */
export const timeline: TimelineItem[] = [
  {
    title: "Computer engineering foundation",
    subtitle: "Fort Lewis College · minors in mathematics and business",
    description:
      "Core curriculum across circuits, embedded systems, digital design, and software — with math and business minors picked up deliberately alongside it.",
    dateLabel: "2022 – 2027",
    isPlaceholder: false,
  },
  {
    title: "Entrepreneurship track",
    subtitle: "President & co-founder, Entrepreneurial Ventures Association",
    description:
      "Co-founded and led FLC's entrepreneurship organization to New Registered Student Organization of the Year; ran a campus pitch competition and brought the NASA Venture Program to campus. Goldman Sachs Emerging Leaders alum.",
    dateLabel: "2023 – 2024",
    isPlaceholder: false,
  },
  {
    title: "Applied-AI data platform",
    subtitle: "KDUR community radio · Power Apps, embeddings, Neo4j",
    description:
      "Built and deployed the radio station's library and scheduling platform (60+ daily users), then prototyped the AI layer: vector embeddings for artist-name resolution and natural-language-to-Cypher agents.",
    dateLabel: "2024 – 2025",
    isPlaceholder: false,
  },
  {
    title: "Robot revival and perception research",
    subtitle: "Sawyer/Baxter restoration · ROS · YOLOv8 thermal inspection",
    description:
      "Restored two dormant industrial arms with no vendor support, then built a YOLOv8 pipeline for photovoltaic hotspot inspection — synthetic Blender training data, live validation on hardware.",
    dateLabel: "Summer 2025",
    isPlaceholder: false,
  },
  {
    title: "NASA-challenge hexapod",
    subtitle: "18-DoF autonomous walker · team lead of four",
    description:
      "Led the electrical system, autonomous firmware, and Kuramoto-CPG locomotion simulation for a hexapod that competed at NASA's Colorado Robotics Challenge at the Great Sand Dunes.",
    dateLabel: "Oct 2025 – Apr 2026",
    isPlaceholder: false,
  },
  {
    title: "Humanoid sim-to-real research",
    subtitle: "Booster K1 · NaVILA-style VLA + RL locomotion · Dr. Yiyan Li",
    description:
      "Leading sim-to-real research on a real humanoid: a two-tier architecture pairing ~1 Hz vision-language planning with a 50 Hz reinforcement-learned locomotion policy trained in Isaac Sim / Isaac Lab.",
    dateLabel: "May 2026 – present",
    isPlaceholder: false,
  },
  {
    title: "Cross-embodiment benchmark",
    subtitle: "ManiSkill3 · Panda ↔ Unitree G1 · language-grounded manipulation",
    description:
      "Building an independent benchmark that measures how much manipulation performance survives a change of robot body under a shared language-conditioned policy interface. Phase A infrastructure complete and frozen; Phase B training and evaluation pending.",
    dateLabel: "2026 · in progress",
    isPlaceholder: false,
  },
  {
    title: "Graduate study",
    subtitle: "Embodied AI / robotics",
    description:
      "Deepen foundations in learning, perception, and control; sharpen research taste; build toward physical-AI systems that hold up outside the lab.",
    dateLabel: "Next · Fall 2027",
    isPlaceholder: false,
  },
];
