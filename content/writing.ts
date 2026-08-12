import type { WritingItem } from "@/lib/types";

/** Public reports and evidence ledgers only — no planned-content placeholders. */
export const writing: WritingItem[] = [
  {
    slug: "k1-navila-final-results",
    title: "K1 NaVILA — full 1,077-episode benchmark results",
    type: "evaluation",
    typeLabel: "Benchmark report",
    summary:
      "Canonical simulation result with full denominator, navigation metrics, failure decomposition, experimental configuration, and explicit provenance notes.",
    isPlaceholder: false,
    link: "https://github.com/Janga786/k1-navila-research/blob/main/FINAL_RESULTS_full1077.md",
    dateLabel: "2026",
    featured: true,
  },
  {
    slug: "k1-evidence-ledger",
    title: "K1 research evidence ledger",
    type: "investigation",
    typeLabel: "Evidence audit",
    summary:
      "Claim-by-claim verification that records supported values, nuanced values, conflicts, missing raw artifacts, and the exact files used to regenerate key results.",
    isPlaceholder: false,
    link: "https://github.com/Janga786/k1-navila-research/blob/main/EVIDENCE.md",
    dateLabel: "2026",
    featured: true,
  },
  {
    slug: "xembench-phase-b",
    title: "xembench Phase B campaign report",
    type: "evaluation",
    typeLabel: "Research report",
    summary:
      "Methods and results for the 1,202-demonstration, 6,550-episode baseline campaign, the first data-flywheel round, and the precision-manipulation intervention study.",
    isPlaceholder: false,
    link: "https://github.com/Janga786/xembench/blob/master/reports/phase_b_campaign_report.md",
    dateLabel: "2026",
    featured: true,
  },
  {
    slug: "kuka-kinematics",
    title: "KUKA KR 6 kinematics and verification notes",
    type: "architecture",
    typeLabel: "Technical documentation",
    summary:
      "Derivations, implementation notes, validation tables, figures, and reproducible commands for forward and inverse kinematics, Jacobians, trajectories, and URDF cross-checks.",
    isPlaceholder: false,
    link: "https://github.com/Janga786/kuka-kr6-kinematics#readme",
    dateLabel: "2026",
    featured: true,
  },
  {
    slug: "lidar-motion-pipeline",
    title: "LiDAR point-cloud motion pipeline",
    type: "architecture",
    typeLabel: "Methods documentation",
    summary:
      "A compact technical reference for cleaning point clouds, measuring dimensions, estimating orientation with PCA, gating motion, and recovering rotation with ICP.",
    isPlaceholder: false,
    link: "https://github.com/Janga786/lidar-pointcloud-motion-pipeline#readme",
    dateLabel: "2024 / packaged 2026",
    featured: false,
  },
  {
    slug: "baxter-troubleshooting",
    title: "Baxter troubleshooting guide",
    type: "reflection",
    typeLabel: "Field guide",
    summary:
      "Practical notes on startup failures, ROS networking, Intera SDK issues, and hardware debugging for a legacy platform with limited vendor support.",
    isPlaceholder: false,
    link: "https://github.com/Janga786/Baxter-Troubleshooting",
    dateLabel: "2025",
    featured: false,
  },
];
