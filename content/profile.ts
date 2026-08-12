import type { Profile } from "@/lib/types";

/**
 * Public profile copy. Quantitative claims are limited to values supported by
 * the transcript, final project reports, or linked repository artifacts.
 */
export const profile: Profile = {
  name: "Jangara Bliss",

  eyebrow: "Computer Engineering · Robot Learning · Autonomy",
  headline: "Building and evaluating autonomous robots.",
  subheadline:
    "Jangara Bliss works across robot learning, autonomy, and embodied evaluation — from a 1,077-episode humanoid navigation benchmark to cross-embodiment manipulation and field robotics. The through-line is adapting algorithms to unfamiliar physical systems, then building the controls, diagnostics, and evidence needed to understand why the complete system succeeds or fails.",

  shortBio:
    "Computer engineering student at Fort Lewis College focused on robot learning and autonomy, with experience spanning benchmark design, simulation, controls, perception, and embedded systems.",

  longBio: [
    "I'm a computer engineering student at Fort Lewis College, with minors in mathematics and business administration. My current research centers on humanoid navigation and robot learning. Under Dr. Yiyan Li, I integrated the Booster K1 into the VLN-CE-Isaac / NaVILA evaluation stack and completed all 1,077 R2R val-unseen episodes. The result — 18.3% success and 30.3% oracle success — became more useful after I decomposed it: 129 episodes reached the goal region but did not stop, separating arrival recognition from the larger exploration problem. I am now using controlled viewpoint experiments to study how a shorter embodiment changes the images and decisions seen by a navigation model.",
    "Alongside that work, I built xembench, a ManiSkill3 benchmark for language-grounded manipulation across a Franka-style arm and a Unitree G1 upper body. Its completed baseline campaign includes 1,202 demonstrations and a 6,550-episode evaluation matrix. The first result was mostly negative: zero-shot transfer was near zero because the native precision-manipulation policies were themselves weak. A follow-up intervention showed where progress was possible — action chunking raised tool-pulling success from 1.3% to 14.7%, while grasp-critical tasks remained near zero. That boundary is the point of the benchmark: make failure measurable before calling it transfer.",
    "Earlier projects gave me the rest of the stack. I led integration for a four-person, 18-DoF hexapod team that fielded a robot at the NASA Colorado Robotics Challenge; implemented LiDAR point-cloud algorithms for a five-person debris-analysis project; restored legacy Sawyer and Baxter robots; and built a KUKA kinematics library with analytic, finite-difference, and URDF cross-checks. Embedded and FPGA coursework keeps the hardware layer concrete rather than abstract.",
    "The research question I want to pursue is how autonomous robots generalize and continue improving after deployment: how embodiment, viewpoint, action representation, data selection, and closed-loop feedback interact outside a curated training distribution. After a master's, I want to work as a robot learning engineer or research engineer building general-purpose autonomous systems. I value research that survives contact with a real platform and engineering that produces conclusions, not only demos.",
  ],

  location: "Durango, Colorado",
  school: "Fort Lewis College",
  major: "Computer Engineering",
  minor: "Mathematics & Business Administration",
  graduation: "May 2027",

  gpa: "3.65",
  upperDivisionGpa: "3.8",
  gpaNote:
    "cumulative through Summer 2026; 4.0 in Spring and Summer 2026, Spring Dean's List",

  interests: [
    "Robot learning",
    "Autonomous systems",
    "Embodied AI",
    "Reinforcement learning",
    "Computer vision & perception",
    "Simulation & sim-to-real",
    "Controls & motion planning",
    "Experimental evaluation",
    "Embedded systems",
  ],

  values: [
    "Evidence before narrative",
    "Separate a demo from an evaluation",
    "Treat deployment as an experimental discipline",
    "Credit teams, upstream work, and tools precisely",
    "Build across interfaces without hiding their failure modes",
  ],

  missionStatement:
    "Help build general-purpose autonomous robots that can adapt to new tasks, bodies, and environments — and continue learning after deployment.",

  graduateStudyHomepage: [
    "Deeper foundations in learning, perception, optimization, and control are necessary to move from integrating capable systems to designing better robot-learning methods.",
    "K1 and xembench exposed research questions about embodiment shift, viewpoint, action representation, policy class, and data selection that engineering alone cannot settle.",
    "The immediate goal is a robot learning or research engineering role; a master's should add research maturity while preserving the ability to build and test complete systems on real platforms.",
  ],

  graduateStudyStatement: [
    "I want graduate study to turn broad robotics range into real depth in robot learning and autonomy. I can already connect simulators, policies, control interfaces, sensors, and hardware. The next step is learning to formulate sharper questions, choose methods that isolate causes, and build models whose behavior I can explain rather than only integrate.",
    "The K1 benchmark made embodiment shift concrete: a model sees a different world when its camera is half as high, and success depends on separating exploration, arrival recognition, locomotion, and evaluation logic. Xembench produced a complementary lesson: transfer cannot be interpreted when the native policies are weak, and more demonstrations do not automatically repair a policy-class limitation. I want the theoretical and experimental tools to study those interactions rigorously.",
    "After the degree, I plan to work as a robot learning engineer or research engineer on general-purpose autonomous systems. I am looking for graduate work that combines strong learning, perception, and control foundations with frequent contact with real robots, careful evaluation, and room to own an end-to-end research question.",
  ],

  builderEthos: [
    "Deployment realism — a simulator result, a hardware test, and a closed-loop hardware evaluation are three different claims.",
    "Evaluation discipline — preserve per-episode data, define denominators, report negative results, and state what the experiment cannot establish.",
    "Full-stack range — comfortable moving between learned policies, benchmark harnesses, ROS and SDK interfaces, control logic, firmware, and electronics.",
    "Provenance — identify team roles, upstream frameworks, course context, and AI-assisted implementation instead of implying sole authorship.",
  ],

  honors: [
    "2nd place — Physics & Engineering Symposium, Fort Lewis College (robotic PV hotspot inspection), Sep 2025",
    "Dean's List — Spring 2026, 4.0 semester GPA",
    "Katz School of Business Leadership Award — Apr 2024",
    "New Registered Student Organization of the Year — Entrepreneurial Ventures Association, 2023–24",
    "Goldman Sachs Emerging Leaders Series — Feb 2024",
  ],

  leadership: [
    "Student representative, Strategic Implementation Committee — one of four students serving with the FLC president, trustees, deans, and campus leaders on the 2025–2030 strategic plan",
    "President & co-founder, Entrepreneurial Ventures Association — led an 8-person executive team, organized pitch competitions allocating $1,500 in micro-grants, and brought the NASA Venture Program to campus",
    "Team lead, NASA Colorado Robotics Challenge — coordinated a four-person team building and fielding an autonomous 18-DoF hexapod",
    "STEM tutor — mathematics, physics, and programming",
    "Volunteer, Children's Cancer Research Fund — six years supporting a memorial golf tournament that has raised more than $175,000",
  ],

  targetPrograms: [],

  contact: {
    email: "jangarabliss@gmail.com",
  },

  credibilitySignals: [
    {
      label: "Humanoid navigation evaluation",
      detail: "1,077/1,077 episodes · 18.3% SR · 30.3% oracle success",
      icon: "Bot",
    },
    {
      label: "Cross-embodiment benchmark",
      detail: "1,202 demonstrations · 6,550-episode baseline matrix",
      icon: "Gauge",
    },
    {
      label: "Field robotics",
      detail: "Four-person team · 18-DoF hexapod · Great Sand Dunes",
      icon: "Workflow",
    },
    {
      label: "Mathematical validation",
      detail: "KUKA FK / IK / Jacobian / trajectories · 39-test suite",
      icon: "Layers",
    },
    {
      label: "Perception & sensing",
      detail: "LiDAR point clouds, ICP, PCA, YOLO tooling, ROS",
      icon: "ScanEye",
    },
    {
      label: "Hardware breadth",
      detail: "Microcontrollers, FPGA, PCB design, robot restoration",
      icon: "CircuitBoard",
    },
  ],

  capabilities: [
    {
      title: "Robot Learning & Autonomy",
      description:
        "Language-conditioned navigation and manipulation, behavior cloning, PPO, action representation, and the failure modes that determine closed-loop performance.",
      icon: "Bot",
    },
    {
      title: "Experimental Robotics",
      description:
        "Benchmark design, controlled ablations, per-episode evidence, confidence intervals, failure decomposition, and reproducible artifact packs.",
      icon: "Gauge",
    },
    {
      title: "Perception",
      description:
        "RGB and point-cloud pipelines using vision-language models, YOLO, PCA, ICP, and geometric measurements under real sensing constraints.",
      icon: "ScanEye",
    },
    {
      title: "Modeling & Control",
      description:
        "Kinematics, Jacobians, trajectory generation, locomotion rewards, visual servoing, heading control, and simulation-based validation.",
      icon: "Workflow",
    },
    {
      title: "Robotics Systems",
      description:
        "Isaac Sim / Lab, ManiSkill3, MuJoCo, ROS / ROS 2, MoveIt, robot SDKs, distributed inference, and safety-aware deployment paths.",
      icon: "Network",
    },
    {
      title: "Embedded & Edge Systems",
      description:
        "Arduino and bare-metal firmware, FPGA protocols, PCB design, sensor integration, power distribution, and hardware debugging.",
      icon: "CircuitBoard",
    },
  ],
};
