import type { TimelineItem } from "@/lib/types";

/** A concise trajectory focused on technical development, not a résumé dump. */
export const timeline: TimelineItem[] = [
  {
    title: "Computer engineering foundation",
    subtitle: "Fort Lewis College · mathematics and business minors",
    description:
      "Built breadth across algorithms, circuits, computer architecture, embedded systems, digital design, statistics, controls, and robotics.",
    dateLabel: "2022 – 2027",
    isPlaceholder: false,
  },
  {
    title: "Product and community systems",
    subtitle: "Entrepreneurship leadership · KDUR data platform",
    description:
      "Co-founded FLC's entrepreneurship organization and built a radio-station data application designed for more than 60 daily users; the app was handed off before deployment when research focus shifted to robotics.",
    dateLabel: "2023 – 2025",
    isPlaceholder: false,
  },
  {
    title: "LiDAR algorithms and experimental design",
    subtitle: "CLiDA · point clouds · PCA · ICP",
    description:
      "Served as algorithm developer on a five-person camera/LiDAR debris-analysis project, contributing motion, axis, dimension, and file-conversion code plus experimental documentation.",
    dateLabel: "Fall 2024",
    isPlaceholder: false,
  },
  {
    title: "Legacy robot restoration and inspection tooling",
    subtitle: "Sawyer / Baxter · ROS · synthetic data · YOLO",
    description:
      "Restored two unsupported industrial arms, rebuilt the ROS workstation, and developed synthetic-data and detection tooling for an inspection research direction. No held-out detector metric is claimed.",
    dateLabel: "Summer 2025",
    isPlaceholder: false,
  },
  {
    title: "Field robotics and controls",
    subtitle: "18-DoF hexapod · four-person team",
    description:
      "Led team integration for a robot fielded at the NASA Colorado Robotics Challenge, then packaged a coupled-oscillator gait simulator and 34-test verification suite.",
    dateLabel: "Oct 2025 – Apr 2026",
    isPlaceholder: false,
  },
  {
    title: "Humanoid navigation research",
    subtitle: "Booster K1 · NaVILA · Isaac Sim / Lab",
    description:
      "Completed a 1,077-episode simulation benchmark, separated reach from stop failures, extended K1 locomotion and deployment interfaces, and began controlled viewpoint studies. Live NaVILA navigation remains a separate, unclaimed hardware milestone.",
    dateLabel: "May 2026 – present",
    isPlaceholder: false,
  },
  {
    title: "Cross-embodiment manipulation",
    subtitle: "xembench · Franka arm ↔ Unitree G1",
    description:
      "Executed a 6,550-episode baseline campaign, a real failure-driven data round, and an action-chunking intervention that improved tool pulling while exposing a persistent precision-grasping ceiling.",
    dateLabel: "2026 · active",
    isPlaceholder: false,
  },
  {
    title: "Graduate study and robot learning",
    subtitle: "Research depth with real-system contact",
    description:
      "Pursue deeper learning, perception, optimization, and control, then work as a robot learning engineer or research engineer on general-purpose autonomous systems.",
    dateLabel: "Next · Fall 2027",
    isPlaceholder: false,
  },
];
