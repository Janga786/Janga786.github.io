import type { Profile } from "@/lib/types";

/**
 * The single source of truth for who Jangara is on this site.
 *
 * NON-FABRICATION POLICY: every claim in this file is either (a) a fact
 * Jangara has verified, or (b) a clearly-labeled placeholder. When editing,
 * never add metrics, awards, employers, or outcomes that haven't happened.
 */
export const profile: Profile = {
  name: "Jangara Bliss",

  eyebrow: "Computer Engineering · AI Systems · Physical World",
  headline: "Building AI systems for the physical world.",
  subheadline:
    "Jangara Bliss is a computer engineering student focused on machine learning that leaves the notebook — vision-language navigation deployed on a real humanoid, locomotion policies trained in simulation, and the systems engineering that connects models to machines. Graduate study is the next step: deeper AI/ML foundations for building serious physical-AI systems.",

  shortBio:
    "Computer engineering student at Fort Lewis College working on AI for physical systems — deployment-first, simulation-literate, and comfortable from model inference down to the PCB.",

  longBio: [
    "I'm a computer engineering student at Fort Lewis College, and most of my work sits at the same junction: taking a capable model and making it do something in the physical world. That has meant deploying an 8B vision-language-action navigation model on a Booster K1 humanoid, building the three-machine relay that connects GPU inference to robot control, training PPO locomotion policies in simulation, and debugging the long tail of problems that only show up on real hardware.",
    "The pattern I keep returning to is that the model is rarely the hard part. The hard part is everything around it — perception inputs that degrade, latency budgets that break control loops, sim-to-real gaps, and integration seams between machines that were never designed to talk to each other. I like that layer. It rewards people who can move between ML, software systems, and hardware without treating any of them as someone else's problem.",
    "Outside the lab I come from an entrepreneurship background — a business minor, campus entrepreneurship work, and the Goldman Sachs Emerging Leaders program. I care about building things people actually use, and about the sectors where physical AI could matter most: housing, food and agriculture, logistics, healthcare, manufacturing, and space infrastructure. Graduate school is how I get the theoretical depth to build in those spaces at a level I can't reach yet.",
  ],

  location: "Colorado, USA",
  school: "Fort Lewis College",
  major: "Computer Engineering",
  minor: "Business",
  graduation: "May 2027",

  gpa: "3.64",
  upperDivisionGpa: "3.8",
  gpaNote: "cumulative, with a strong upward trend",

  interests: [
    "Machine learning",
    "Computer vision & perception",
    "Reinforcement learning",
    "Embodied AI & robot learning",
    "Simulation & sim-to-real",
    "Multimodal / vision-language models",
    "Robotics software",
    "Embedded systems",
    "AI products",
  ],

  values: [
    "Build things that survive contact with the real world",
    "Evidence over claims",
    "Take initiative; keep drama out of the work",
    "Build skills and systems that keep long-term options open",
    "Respect complexity; ship anyway",
  ],

  missionStatement:
    "Apply intelligence to physical systems — in housing, agriculture, logistics, healthcare, manufacturing, and space infrastructure — and become technically strong enough to build companies around it.",

  graduateStudyHomepage: [
    "The next systems need stronger foundations — optimization, learning theory, perception, control — than an undergraduate curriculum provides. A terminal master's is the direct path to that depth.",
    "Deploying a vision-language model on a real humanoid surfaced questions about robustness, evaluation, and sim-to-real transfer that deserve proper study, not just engineering workarounds.",
    "The long-term goal is building physical-AI products. Graduate study is leverage: research taste, harder problems, and an environment operating at a higher level.",
  ],

  graduateStudyStatement: [
    "The systems I want to build next need more than working code — they need stronger foundations in optimization, learning theory, perception, and control than an undergraduate curriculum provides. A terminal master's is the direct path to that depth.",
    "Deployment taught me what I don't know. Running a vision-language model on a real humanoid surfaces questions — about robustness, evaluation, and sim-to-real transfer — that I can currently engineer around but want to actually understand.",
    "Long-term, I intend to build physical-AI products, likely as a technical founder. Graduate study is leverage for that: research taste, harder problems, and an environment of people operating at the level I want to reach.",
  ],

  builderEthos: [
    "Deployment realism — a demo that only works in simulation is a hypothesis, not a result.",
    "Evidence discipline — claims on this site link to artifacts, or they're labeled as pending.",
    "Full-stack range — comfortable from VLM inference and RL training down to ROS nodes, firmware, and board-level hardware.",
    "Product judgment — entrepreneurship training treated as responsibility: build for real constraints and real users, not for applause.",
  ],

  /**
   * PRIVATE BY DEFAULT — rendered only when
   * siteConfig.showTargetProgramsPublicly is true.
   * Add program names here for the private admissions build.
   */
  targetPrograms: [],

  contact: {
    email: "jangarabliss@gmail.com",
  },

  /* Compact evidence chips under the hero. Signals, not trophies. */
  credibilitySignals: [
    {
      label: "Real humanoid deployment",
      detail: "8B vision-language-action (VLA) model running on a Booster K1",
      icon: "Bot",
    },
    {
      label: "Multi-machine inference relay",
      detail: "RTX 5090 inference → relay/control node → robot SDK",
      icon: "Network",
    },
    {
      label: "Simulation & RL",
      detail: "Isaac Sim / Isaac Lab, PPO locomotion, benchmark evaluation",
      icon: "Gauge",
    },
    {
      label: "Robotics software",
      detail: "ROS, MoveIt, Gazebo, YOLOv8 perception pipelines",
      icon: "Workflow",
    },
    {
      label: "Hardware-adjacent",
      detail: "Embedded systems, FPGA, PCB design, NASA hexapod project work",
      icon: "CircuitBoard",
    },
    {
      label: "Builder orientation",
      detail: "Business minor · campus entrepreneurship · Goldman Sachs Emerging Leaders",
      icon: "Rocket",
    },
  ],

  /* Technical lanes for the homepage capability grid. */
  capabilities: [
    {
      title: "Multimodal AI",
      description:
        "Vision-language and vision-language-action models as interfaces between human intent and machine behavior.",
      icon: "Layers",
    },
    {
      title: "Computer Vision & Perception",
      description:
        "Detection and perception pipelines that hold up outside the dataset — YOLOv8 in practice, sensing under real constraints.",
      icon: "ScanEye",
    },
    {
      title: "Reinforcement Learning & Simulation",
      description:
        "PPO locomotion training and evaluation in Isaac Sim / Isaac Lab, with attention to what transfers and what doesn't.",
      icon: "Gauge",
    },
    {
      title: "Robot Learning & Autonomy",
      description:
        "Navigation and control stacks where learned components meet classical robotics — and the evaluation to tell them apart.",
      icon: "Bot",
    },
    {
      title: "Systems Integration",
      description:
        "Multi-machine topologies: GPU inference, relay/control nodes, camera streaming, and SDK-level velocity control as one system.",
      icon: "Network",
    },
    {
      title: "Embedded & Edge Systems",
      description:
        "FPGA, PCB, and microcontroller work — the layer where compute budgets, timing, and physics stop being abstractions.",
      icon: "CircuitBoard",
    },
    {
      title: "AI Product Prototyping",
      description:
        "Turning capability into products with real users and real constraints, informed by formal entrepreneurship training.",
      icon: "Rocket",
    },
  ],
};
