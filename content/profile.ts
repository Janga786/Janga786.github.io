import type { Profile } from "@/lib/types";

/**
 * The single source of truth for who Jangara is on this site.
 *
 * NON-FABRICATION POLICY: every claim in this file is either (a) a fact
 * Jangara has published (LinkedIn/GitHub) or verified, or (b) a clearly
 * labeled placeholder. When editing, never add metrics, awards, employers,
 * or outcomes that haven't happened.
 */
export const profile: Profile = {
  name: "Jangara Bliss",

  eyebrow: "Computer Engineering · AI Systems · Physical World",
  headline: "Building AI systems for the physical world.",
  subheadline:
    "Jangara Bliss is a computer engineering student focused on machine learning that leaves the notebook — vision-language navigation deployed on a real humanoid, locomotion policies trained in simulation, and the systems engineering that connects models to machines. Graduate study is the next step: deeper AI/ML foundations for building serious physical-AI systems.",

  shortBio:
    "Computer engineering student at Fort Lewis College leading humanoid sim-to-real research — deployment-first, simulation-literate, and comfortable from model inference down to the PCB.",

  longBio: [
    "I'm a senior computer engineering student at Fort Lewis College (math and business minors), and most of my work sits at the same junction: taking a capable model and making it do something in the physical world. Right now that means leading sim-to-real research on the Booster K1 humanoid under Dr. Yiyan Li — a system where you describe a task in natural language and the robot executes it. The architecture is two-tiered: a vision-language model handles perception and task planning at about 1 Hz, while a reinforcement-learned locomotion policy trained in NVIDIA Isaac Sim runs the legs at 50 Hz.",
    "Before the humanoid, the pattern was already set. I led a four-person team building an autonomous 18-DoF hexapod that competed in NASA's Colorado Robotics Challenge at the Great Sand Dunes. I spent a summer under Dr. Kevin Wedeward reviving two dormant industrial robots — tracing a Sawyer's boot failure to a dead CMOS battery, rebuilding its OS from a corrupted encrypted SSD — and then built a YOLOv8 thermal-inspection pipeline on top of them. Under Dr. Matthew Welz I shipped a data platform that Fort Lewis's radio station staff use daily, then prototyped its applied-AI layer. Across three faculty labs, the lesson kept repeating: the model is rarely the hard part; the seams are.",
    "The question that drives me is Moravec's paradox — why the hardest problems in AI turned out to be the ones a toddler solves effortlessly, and how we close the gap between what robots do in simulation and what they do in the real world. That's the problem I want to spend a career on: robots that generalize to new tasks in the physical world the way foundation models generalize in language.",
    "I also come from an entrepreneurship track — co-founder and president of FLC's Entrepreneurial Ventures Association (New Registered Student Organization of the Year), a Goldman Sachs Emerging Leaders alum, and a business minor by design. I care about the sectors where physical AI could matter most: housing, food and agriculture, logistics, healthcare, manufacturing, and space infrastructure. Graduate school is how I get the theoretical depth to build in those spaces at a level I can't reach yet.",
  ],

  location: "Durango, Colorado",
  school: "Fort Lewis College",
  major: "Computer Engineering",
  minor: "Mathematics & Business Administration",
  graduation: "May 2027",

  gpa: "3.64",
  upperDivisionGpa: "3.8",
  gpaNote: "cumulative, strong upward trend — most recent semester 4.0, Dean's List",

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
    "Deployment taught me what I don't know. Running a vision-language model on a real humanoid surfaces questions — about robustness, evaluation, and sim-to-real transfer — that I can currently engineer around but want to actually understand. Moravec's paradox isn't an abstraction when you watch it happen at 50 Hz.",
    "Long-term, I intend to build physical-AI products, likely as a technical founder. Graduate study is leverage for that: research taste, harder problems, and an environment of people operating at the level I want to reach.",
  ],

  builderEthos: [
    "Deployment realism — a demo that only works in simulation is a hypothesis, not a result.",
    "Evidence discipline — claims on this site link to artifacts, or they're labeled as pending.",
    "Full-stack range — comfortable from VLM inference and RL training down to ROS nodes, firmware, and board-level hardware.",
    "Product judgment — entrepreneurship training treated as responsibility: build for real constraints and real users, not for applause.",
  ],

  honors: [
    "2nd place — Physics & Engineering Symposium, Fort Lewis College (robotic PV hotspot inspection), Sep 2025",
    "Dean's List — 4.0 GPA most recent semester",
    "Katz School of Business Leadership Award — signed by the FLC president and dean, Apr 2024",
    "New Registered Student Organization of the Year — Entrepreneurial Ventures Association (as president & co-founder), 2023–24",
    "Certificate of Entrepreneurial Education — NMSU Arrowhead Center Studio G program, Feb 2024",
  ],

  leadership: [
    "President & co-founder, Entrepreneurial Ventures Association — grew the organization from zero, led an 8-person executive team, ran a campus pitch competition allocating $1,500 in micro-grants, and brought the NASA Venture Program to campus (2023–24)",
    "Student representative, Strategic Implementation Committee — one of four students working alongside the college president, trustees, and deans on executing the FLC 2025–2030 strategic plan (2025–26)",
    "Team lead, NASA Colorado Robotics Challenge — led a 4-person team end-to-end on the autonomous hexapod (2025–26)",
    "STEM tutor — mathematics, physics, and programming (2024–25)",
    "Volunteer, Children's Cancer Research Fund — six years managing the chip competition at a memorial golf tournament that has raised $175k+",
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
      detail: "Embedded, FPGA, PCB — three faculty labs and a NASA-challenge hexapod",
      icon: "CircuitBoard",
    },
    {
      label: "Builder orientation",
      detail: "EVA president & co-founder · Goldman Sachs Emerging Leaders · Katz Leadership Award",
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
