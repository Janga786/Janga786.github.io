import type { Profile } from "@/lib/types";

/**
 * Public profile copy. Quantitative claims are limited to values supported by
 * the transcript, final project reports, or linked repository artifacts.
 */
export const profile: Profile = {
  name: "Jangara Bliss",

  eyebrow: "Jangara Bliss · Robot Learning & Control",
  headline: "Learned control for robots in the physical world.",
  subheadline:
    "I work on learned and model-based control for robots: a vision-language-guided humanoid evaluated in simulation, a seven-motor arm on real hardware, and the embedded layer underneath.",

  shortBio:
    "Computer engineering senior at Fort Lewis College (B.S. expected May 2027) working toward reliable learned control for humanoid and legged robots, with experience in RL locomotion in simulation, motor control on real hardware, evaluation, perception, and embedded systems.",

  longBio: [
    "I'm a computer engineering senior at Fort Lewis College, with minors in mathematics and business administration, graduating in May 2027. From May to August 2026 I did full-time research with Dr. Yiyan Li on a Booster K1 humanoid: NaVILA, a vision-language navigation model, issuing commands at about 1 Hz to a 50 Hz reinforcement-learning walking policy I trained. I added the K1 to the VLN-CE-Isaac benchmark and ran all 1,077 episodes in simulation. Pipeline fixes (a tilt-limit mismatch and a camera warm-up bug) and policy retraining raised success from under 1% to 18.3%. That is still below the published 24.4% baseline for an H1 humanoid whose walking policy, like mine, used only proprioception. In a 2,400-episode ablation, two identically configured 300-episode runs scored 15.0% and 16.0% yet disagreed on 11.0% of individual episodes, so I now report every success rate with its uncertainty. NaVILA also ran live on the real K1 for two natural-language episodes using Booster's built-in walker; my own walking policy has only worked in simulation.",
    "This fall I moved to hardware control on my senior-capstone arm, a seven-motor reBot B601-DM I am adapting for bridge crack inspection. My teammate is building a second arm, so I am the only person working on this one. I brought up its motors over CAN with a 200 Hz control loop and built its Jacobian, inverse kinematics, and a minimum-jerk planner. A slow torque test measured 6.6 N·m of gravity load at the elbow against 2.7 N·m from the URDF; gravity and friction feed-forward with retuned gains cut loaded-joint holding error from 0.04–0.05 rad to 0.005 rad or less.",
    "Earlier projects gave me the rest of the stack. I led a four-person team that built an 18-DoF hexapod for NASA Space Grant's Colorado Robotics Challenge, designing its electrical system and extending its firmware (originally Mark W's open-source code) with heading hold and bump avoidance. As a solo summer research assistant under Dr. Kevin Wedeward, I revived two discontinued Rethink robots, Sawyer and Baxter. I also built xembench, a simulation benchmark for language-grounded manipulation across two robot bodies, a KUKA kinematics library with analytic, finite-difference, and URDF cross-checks, and point-cloud methods for a five-person LiDAR design project. Embedded, FPGA, and PCB work keeps the hardware layer concrete.",
    "I want to learn to build reliable learned control for humanoid and legged robots, down to the embedded layer that drives the motors, especially learning that uses model predictive control (MPC) and trajectory optimization as priors or safety layers. I am applying to MS programs in robotics for Fall 2027 and plan a graduate co-op at a company building legged or humanoid robots. After the MS I plan to build embedded robot controllers at a humanoid or legged robot company, and eventually start my own company on a problem robotics has not yet solved.",
  ],

  location: "Durango, Colorado",
  school: "Fort Lewis College",
  major: "Computer Engineering",
  minor: "Mathematics & Business Administration",
  graduation: "May 2027",

  gpa: "3.65",
  upperDivisionGpa: "3.80",
  gpaNote:
    "cumulative; 4.00 in Spring 2026 (17 credits), Dean's List",

  interests: [
    "Learned control for humanoid & legged robots",
    "Reinforcement learning",
    "Model predictive control & trajectory optimization",
    "System identification",
    "Vision-language navigation",
    "Simulation & sim-to-real",
    "Embedded control",
    "Experimental evaluation",
  ],

  researchThemes: [
    {
      title: "Learned Control with Model-Based Structure",
      question:
        "How can model predictive control and trajectory optimization serve as priors or safety layers for learned controllers on humanoid and legged robots?",
      description:
        "My K1 walking policy and my arm controller sit at the two ends of this question: a policy trained in simulation, and hand-identified gravity and friction feed-forward on real motors. I want to learn to combine them properly.",
    },
    {
      title: "From Simulation to Contact",
      question:
        "What does it take for a learned walker that works in simulation to hold up under contact and on real hardware?",
      description:
        "My policy tended to stall when it touched a wall, and it has not yet worked outside simulation. Closing that gap, down to the embedded layer that drives the motors, is the skill I most want to build.",
    },
    {
      title: "Evaluation You Can Trust",
      question:
        "How much evidence does one success rate really carry, and what can verification establish about a learned controller?",
      description:
        "Identically configured benchmark runs that agreed in aggregate disagreed on 11.0% of episodes. I report every success rate with its uncertainty and want stronger tools than a single score.",
    },
  ],

  experience: [
    {
      title: "Research Assistant — Humanoid Robot Intelligence",
      organization: "Fort Lewis College · Advisor: Dr. Yiyan Li · paid, solo project",
      dateLabel: "May – Aug 2026",
      summary:
        "Built a two-tier stack: NaVILA (~1 Hz) commanding a 50 Hz RL walking policy I trained in Isaac Lab (simulation only). Integrated the K1 into VLN-CE-Isaac and ran all 1,077 episodes; pipeline fixes and policy retraining raised success from under 1% to 18.3%. In a preregistered 2,400-episode ablation, two identically configured 300-episode runs agreed in aggregate (15.0% vs 16.0%) but disagreed on 11.0% of episodes. Ran NaVILA live on the physical K1 for two natural-language episodes through a relay I built, using Booster's built-in walker.",
      href: "/projects/k1-navila-research/",
    },
    {
      title: "Senior Design — Bridge Crack-Inspection Arm",
      organization: "Fort Lewis College · Advisor: Dr. Yiyan Li · two-person team; my teammate is building a second arm from scratch, so all work on this arm is mine",
      dateLabel: "Sep 2026 – present",
      summary:
        "Brought up a 6+1-DoF arm over CAN at 200 Hz, identified gravity/friction feed-forward on the real hardware (post-tuning holds ≤ 0.005 rad over 41 logged hardware runs, 28 completed), and ran guarded trajectories feeding a zero-shot crack-segmentation pipeline.",
      href: "/projects/rebot-crack-inspection/",
    },
    {
      title: "Independent Project — xembench",
      organization: "Language-grounded manipulation benchmark in ManiSkill3 (simulation)",
      dateLabel: "2026",
      summary:
        "Designed and ran a two-embodiment benchmark with 1,202 demonstrations and 6,550 baseline evaluation episodes, then tested failure-driven data collection and action chunking.",
      href: "/projects/xembench/",
    },
    {
      title: "Team Lead — Colorado Robotics Challenge",
      organization: "NASA Space Grant · Advisor: Dr. Charles Hakes · four-person team · paid",
      dateLabel: "Oct 2025 – Apr 2026",
      summary:
        "Led a four-person team fielding an 18-DoF hexapod at Great Sand Dunes; designed the electrical system (Arduino Mega, 9-DoF IMU, bump sensors, LiPo + SBEC power) and extended the firmware, originally Mark W's open-source code, with gyro-magnetometer heading hold, gyro-bias calibration, and bump avoidance. Later built a Kuramoto coupled-oscillator gait simulator with a 34-test suite.",
      href: "/projects/hexapod-nasa-challenge/",
    },
    {
      title: "Research Assistant — Computer Vision & Robotics",
      organization: "Fort Lewis College · Advisor: Dr. Kevin Wedeward · paid, solo project",
      dateLabel: "May – Sep 2025",
      summary:
        "Revived two non-functional Rethink robots (Sawyer, Baxter) with no vendor support, rebuilt a Dockerized ROS 1 + ROS 2 workstation, and trained a YOLOv8 thermal hotspot detector on Blender synthetic data; with Baxter holding the camera, it flagged an induced hotspot on test panels in every saved frame. 2nd Place, FLC Physics & Engineering Symposium 2025, the highest-placing solo project.",
      href: "/projects/legacy-robot-restoration-inspection/",
    },
    {
      title: "Research Assistant — AI & Data",
      organization: "Fort Lewis College · Advisor: Dr. Matthew Welz · paid, solo project",
      dateLabel: "Aug 2024 – Oct 2025",
      summary:
        "Designed a Power Apps music-library database for the FLC radio station (designed for 60+ daily users; handed off before deployment and since deployed by the station on another platform built on my work), prototyped embedding-based artist-name matching, and built LLM agents that query Neo4j in natural language.",
      href: "/projects/kdur-data-platform/",
    },
  ],

  values: [
    "Evidence before narrative",
    "Separate a demo from an evaluation",
    "Treat deployment as an experimental discipline",
    "Credit teams and upstream work precisely",
    "Build across interfaces without hiding their failure modes",
  ],

  missionStatement:
    "Build reliable learned control for humanoid and legged robots, down to the embedded layer that drives the motors.",

  graduateStudyHomepage: [
    "I can train a walking policy and find where it fails, but I cannot yet design a controller that holds up under contact. That is what I want an MS to teach me.",
    "The K1 benchmark showed that one success rate is weak evidence; the arm showed that a model file can be wrong by more than a factor of two. Both point toward learning combined with model-based control and careful identification.",
    "After the MS I plan to build embedded robot controllers at a humanoid or legged robot company.",
  ],

  graduateStudyStatement: [
    "I want an MS in robotics to turn hands-on range into depth in learned control for humanoid and legged robots, especially learning that uses MPC and trajectory optimization as priors or safety layers, down to the embedded layer.",
    "My K1 stack was a slow decision-maker over a fast walker: NaVILA at about 1 Hz over a 50 Hz RL walking policy. It reached 18.3% success in simulation, and its policy tended to stall on contact with walls. On the capstone arm, hand-fitted gravity and friction feed-forward cut holding error to 0.005 rad or less; I want to learn to do that identification properly, including corrections learned from data.",
    "I plan a graduate co-op at a company building legged or humanoid robots, then a role building embedded robot controllers after the degree.",
  ],

  builderEthos: [
    "Deployment realism — a simulator result, a hardware test, and a closed-loop hardware evaluation are three different claims.",
    "Evaluation discipline — preserve per-episode data, define denominators, report negative results, and state what the experiment cannot establish.",
    "Full-stack range — comfortable moving between learned policies, benchmark harnesses, ROS and SDK interfaces, control logic, firmware, and electronics.",
    "Provenance — identify team roles, upstream frameworks, and course context instead of implying sole authorship.",
  ],

  honors: [
    "2nd Place, FLC Physics & Engineering Symposium 2025, the highest-placing solo project.",
    "Dean's List — Spring 2026, 4.0 semester GPA",
    "Katz School of Business Leadership Award — Apr 2024",
    "New Registered Student Organization of the Year — Entrepreneurial Ventures Association, 2023–24",
    "Goldman Sachs Emerging Leaders Series — Feb 2024",
  ],

  leadership: [
    "Student representative, FLC Strategic Implementation Committee (2025–26) — one of four students serving with the FLC president, trustees, deans, and campus leaders on the 2025–2030 strategic plan",
    "Co-founder & president, Entrepreneurial Ventures Association (2023–24) — led an 8-person executive team, ran a $1,500 micro-grant pitch competition, and helped bring NASA's Technology Transfer University (T2U) program to campus",
    "Team lead (paid), Colorado Robotics Challenge (NASA Space Grant) — coordinated a four-person team building and fielding an autonomous 18-DoF hexapod",
    "STEM tutor (2024–25) — mathematics, physics, and programming",
    "Chip Competition Manager, Nicholas Cisewski Memorial Golf Tournament for pediatric cancer research (2020–present)",
  ],

  targetPrograms: [],

  contact: {
    email: "jangarabliss@gmail.com",
  },

  credibilitySignals: [
    {
      label: "Humanoid navigation evaluation",
      detail: "1,077/1,077 episodes · under 1% → 18.3% success (simulation)",
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
      label: "Hardware control",
      detail: "7 motors over CAN at 200 Hz · holding error ≤ 0.005 rad",
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
      title: "Control",
      description:
        "joint PD + gravity/friction feed-forward (200 Hz over CAN), Jacobian and damped-least-squares IK, minimum-jerk trajectories, IMU-fused heading hold, Kuramoto CPG gaits, RL locomotion (PPO, Isaac Lab)",
      icon: "Workflow",
    },
    {
      title: "Robotics & ML",
      description:
        "PyTorch, ROS 1/ROS 2, MoveIt, Isaac Lab, MuJoCo, Gazebo, NaVILA (VLN) deployment, YOLOv8/YOLO-World, Blender synthetic data, Open3D, LLM agents on Neo4j, AI coding agents & orchestration (Claude Code, Codex, local LLMs)",
      icon: "Bot",
    },
    {
      title: "Hardware",
      description:
        "board bring-up, soldering, embedded C drivers (GPIO, PWM, ADC, UART), ATmega PCB design, CAN bus, oscilloscope, logic analyzer, FPGA (Verilog, Vivado)",
      icon: "CircuitBoard",
    },
    {
      title: "Programming",
      description:
        "Python, C++, C, Verilog, Cypher; Linux, Docker, Git | Spanish (conversational)",
      icon: "Layers",
    },
  ],
};
