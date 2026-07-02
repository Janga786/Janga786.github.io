import type { TimelineItem } from "@/lib/types";

/**
 * The "builder arc" — trajectory, not résumé. Date labels are deliberately
 * coarse; replace with specific ranges as you choose to disclose them.
 */
export const timeline: TimelineItem[] = [
  {
    title: "Computer engineering foundation",
    subtitle: "Fort Lewis College",
    description:
      "Core curriculum across circuits, embedded systems, digital design, and software — plus a business minor picked up deliberately alongside it.",
    dateLabel: "Undergraduate",
    isPlaceholder: false,
  },
  {
    title: "Hardware-adjacent systems work",
    subtitle: "Embedded · FPGA · PCB · NASA hexapod project",
    description:
      "Board-level and firmware projects where timing, power, and physics constrain the software — the layer that makes deployment instincts real.",
    dateLabel: "Undergraduate",
    isPlaceholder: false,
  },
  {
    title: "Robotics software stack",
    subtitle: "ROS · MoveIt · Gazebo · YOLOv8",
    description:
      "Middleware, motion planning, simulation, and perception pipelines — the connective tissue between models and actuators.",
    dateLabel: "Undergraduate",
    isPlaceholder: false,
  },
  {
    title: "Simulation, RL, and evaluation",
    subtitle: "Isaac Sim / Isaac Lab · PPO locomotion",
    description:
      "Training locomotion policies and building benchmark-style evaluation — learning where simulation is honest and where it flatters.",
    dateLabel: "Recent",
    isPlaceholder: false,
  },
  {
    title: "Real humanoid deployment",
    subtitle: "NaVILA-style 8B VLA on a Booster K1",
    description:
      "A three-machine relay — RTX 5090 inference, relay/control node, robot camera streaming and SDK velocity control — running vision-language navigation on real hardware, with all the debugging that implies.",
    dateLabel: "Recent",
    isPlaceholder: false,
  },
  {
    title: "Entrepreneurship track",
    subtitle: "Business minor · campus entrepreneurship · Goldman Sachs Emerging Leaders",
    description:
      "Formal product and leadership training, treated as preparation for building real physical-AI products — not a detour from engineering.",
    dateLabel: "Ongoing",
    isPlaceholder: false,
  },
  {
    title: "Graduate study",
    subtitle: "Terminal master's — AI / CS / ECE / Robotics",
    description:
      "Deepen foundations in learning, perception, and control; sharpen research taste; build toward frontier physical-AI work.",
    dateLabel: "Next · post-May 2027",
    isPlaceholder: false,
  },
];
