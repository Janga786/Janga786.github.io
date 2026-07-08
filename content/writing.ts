import type { WritingItem } from "@/lib/types";

/**
 * Writing & technical reports.
 *
 * All entries are structural placeholders until real reports are published.
 * To publish: write the piece, host it (PDF in /public, external post, or a
 * future MDX route), set `link`, add a `dateLabel`, and flip `isPlaceholder`.
 */
export const writing: WritingItem[] = [
  {
    slug: "baxter-troubleshooting",
    title: "Baxter troubleshooting guide — reviving an unsupported robot",
    type: "reflection",
    typeLabel: "Field guide",
    summary:
      "Practical fixes for Baxter startup failures, ROS networking, and Intera SDK issues, documented while restoring two dormant industrial robots with no vendor support — written so the next person skips the late-night debugging sessions.",
    isPlaceholder: false,
    link: "https://github.com/Janga786/Baxter-Troubleshooting",
    dateLabel: "2025",
    featured: true,
  },
  {
    slug: "xembench-report",
    title: "X-embodiment manipulation benchmark — technical report",
    type: "evaluation",
    typeLabel: "Benchmark report",
    summary:
      "Planned report on language-grounded manipulation transfer across a tabletop arm and a humanoid upper body: canonical action-interface design, leakage-proof language splits, BC/PPO baselines, transfer-drop and retention metrics, and failure analysis. Publishes once Phase B training and evaluation produce real numbers.",
    isPlaceholder: true,
    featured: true,
  },
  {
    slug: "flywheel-report",
    title: "Physical AI data flywheel — experiment report",
    type: "evaluation",
    typeLabel: "Experiment report",
    summary:
      "Planned report on failure-driven data collection: whether demonstrations targeted at evaluation failures improve policy performance more efficiently than the same budget of random additional demos. Covers dataset validation, selection strategies, and per-round accounting. Publishes once real Linux experiments run — all current flywheel outputs are synthetic.",
    isPlaceholder: true,
    featured: false,
  },
  {
    slug: "humanoid-deployment-report",
    title: "Deployment report — vision-language navigation on a real humanoid",
    type: "deployment-report",
    typeLabel: "Deployment report",
    summary:
      "The intended home for a full writeup of the Booster K1 deployment: system topology, latency budget, failure modes encountered on hardware, and what the demo videos actually show.",
    isPlaceholder: true,
    featured: true,
  },
  {
    slug: "sim-rl-evaluation",
    title: "Simulation & RL evaluation — what transfers and what doesn't",
    type: "evaluation",
    typeLabel: "Evaluation",
    summary:
      "Planned analysis of PPO locomotion training in Isaac Sim / Isaac Lab: training setup, evaluation protocol, and an honest account of the sim-to-real gap.",
    isPlaceholder: true,
    featured: true,
  },
  {
    slug: "perception-navigation-analysis",
    title: "Perception & navigation analysis",
    type: "investigation",
    typeLabel: "Investigation",
    summary:
      "Reserved for a deep dive on a perception or navigation subsystem — sensing setup, metrics, edge cases, and where the pipeline breaks first.",
    isPlaceholder: true,
    featured: false,
  },
  {
    slug: "systems-integration-postmortem",
    title: "Systems integration postmortem — the three-machine relay",
    type: "postmortem",
    typeLabel: "Postmortem",
    summary:
      "Planned postmortem on connecting GPU inference, a relay/control node, and a robot into one control loop: the seams that failed, the debugging path, and the design tradeoffs that survived.",
    isPlaceholder: true,
    featured: false,
  },
];
