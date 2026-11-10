import type { CategoryMeta, Project } from "@/lib/types";

/**
 * Admissions-facing case studies. Every quantitative result below is tied to
 * a linked report, repository artifact, or final team report. Hardware tests,
 * simulation results, upstream foundations, and personal contributions are
 * deliberately separated.
 */

export const categories: CategoryMeta[] = [
  {
    id: "embodied-ai",
    label: "Robot Learning & Autonomy",
    evidenceNote:
      "Look for a defined task, a complete denominator, per-episode artifacts, failure decomposition, and a clear simulation-versus-hardware boundary.",
  },
  {
    id: "research",
    label: "Benchmarks & Experiments",
    evidenceNote:
      "Strong evidence means controlled comparisons, reproducible configurations, negative results, and conclusions limited to what the experiment can establish.",
  },
  {
    id: "modeling-control",
    label: "Modeling & Control",
    evidenceNote:
      "Strong evidence connects mathematical derivation to numerical tests, independent cross-checks, and known singularities or limitations.",
  },
  {
    id: "perception",
    label: "Perception & Sensing",
    evidenceNote:
      "Strong evidence identifies the sensing setup, algorithm, experimental protocol, held-out evaluation boundary, and failure modes.",
  },
  {
    id: "systems-integration",
    label: "Robotic Systems",
    evidenceNote:
      "Strong evidence identifies the interfaces personally owned, inherited hardware and software, safety constraints, and field validation.",
  },
  {
    id: "embedded",
    label: "Embedded & Edge",
    evidenceNote:
      "Strong evidence distinguishes designed from fabricated hardware and reports timing, protocol, power, or integration constraints precisely.",
  },
  {
    id: "product",
    label: "Product & Leadership",
    evidenceNote:
      "Strong evidence separates a designed user population from actual deployment and explains handoff, operational constraints, and team context.",
  },
];

export const projects: Project[] = [
  {
    slug: "k1-navila-research",
    title: "Humanoid Navigation Research on the Booster K1",
    shortTitle: "K1 / NaVILA Navigation Research",
    category: "embodied-ai",
    status: "completed-study",
    featured: true,
    isPlaceholder: false,
    dateLabel: "May – Aug 2026",
    oneLiner:
      "NaVILA over a 50 Hz RL walking policy I trained: a 1,077-episode simulation benchmark where success rose from under 1% to 18.3%, a 2,400-episode ablation that exposed run-to-run noise, and two live episodes on the real K1 using Booster's built-in walker.",
    summary:
      "This project adds the Booster K1 as a new embodiment in the VLN-CE-Isaac / NaVILA evaluation stack. NaVILA, a vision-language navigation model, issues commands at about 1 Hz to a 50 Hz reinforcement-learning walking policy I trained in Isaac Lab; the policy uses only proprioception (joint and body sensing), the same category as the published 24.4% H1 baseline. Pipeline fixes (a 46-degree evaluation tilt limit that cut about 61% of early episodes short, and a camera warm-up bug) and policy retraining raised success from under 1% to 18.3% and more than doubled the mean distance walked per episode. The canonical run completed all 1,077 R2R val-unseen episodes in Isaac Sim: 197 successes (18.3% SR), 326 episodes that reached the goal radius at some point (30.3% oracle success), 10.9% SPL, and 7.59 m final navigation error. The most useful result was the decomposition. Of the 326 reaches, 129 failed to stop, while 751 never reached the goal region. That separates arrival recognition from the dominant exploration failure class. A preregistered 2,400-episode camera-height and image-transform ablation completed in August 2026 with every pre-specified contrast null. Its strongest finding was about evaluation reliability itself: two identically configured 300-episode runs agreed in aggregate (15.0% vs 16.0%) but disagreed on 11.0% of episode outcomes (33/300; Cohen's κ = 0.58), only 48% (30/63) of episodes that succeeded in either run succeeded in both, and a fixed wall-clock limit censored conditions unequally (timeouts of 2.0% vs 12.3%). Separately, NaVILA ran live on the physical K1 for two natural-language episodes with zero teleoperation, using Booster's built-in walker; my trained walking policy has only worked in simulation.",
    role:
      "Research assistant (paid, solo project) — K1 embodiment integration, RL walking-policy training (simulation), evaluation harness, live-deployment relay, evidence ledger, and experiment design",
    teamContext:
      "Paid, solo undergraduate research under Dr. Yiyan Li at Fort Lewis College, built on NaVILA, VLN-CE-Isaac, Isaac Lab, and Booster Robotics frameworks.",
    advisor: "Dr. Yiyan Li, Fort Lewis College",
    collaborators: "Independent undergraduate research with faculty supervision.",
    upstreamSystems:
      "NaVILA, VLN-CE-Isaac, Isaac Lab, RSL-RL, and Booster Robotics training and deployment frameworks.",
    stack: [
      "Booster K1",
      "NaVILA",
      "Isaac Sim / Isaac Lab",
      "VLN-CE-Isaac",
      "Python",
      "PPO / RSL-RL",
    ],
    tags: ["Vision-Language Navigation", "Embodied AI", "Generalization", "Simulation"],
    problem:
      "How does a shorter humanoid embodiment change the visual evidence, locomotion demands, and stopping behavior of a navigation policy evaluated on the same task distribution?",
    systemType:
      "Simulation benchmark + locomotion/deployment engineering + evaluation-reliability study",
    whyItMatters:
      "A policy cannot be called embodiment-robust when camera geometry and controller interfaces change the problem it actually sees.",
    contributions: [
      "Integrated K1 robot, camera, observation, wrapper, parser, and evaluation surfaces into the upstream NaVILA benchmark instead of treating the inherited stack as authored work.",
      "Completed and preserved the 1,077-episode canonical evaluation with per-episode measurement JSONs and a regenerable metric script.",
      "Separated never-reached, reached-without-stopping, and successful episodes to turn one aggregate score into testable failure mechanisms.",
      "Trained the 50 Hz proprioception-only walking policy (PPO in Isaac Lab, simulation only) and extended Booster training and deployment frameworks with K1-specific environment configuration, reward terms, observation-contract checks, validators, filtering, and safety-aware mode handling.",
      "Built the relay that ran NaVILA live on the physical K1 for two natural-language episodes (RTX 5090 inference, ~350 ms; Booster SDK velocity control; Booster's built-in walker).",
      "Maintained an evidence ledger that records supported claims, nuanced values, conflicts, and missing raw artifacts rather than silently choosing the most favorable number.",
    ],
    methodology: [
      "Added K1-specific robot, camera, observation, action-parser, and evaluation interfaces to the existing NaVILA / VLN-CE-Isaac stack, while preserving upstream ownership.",
      "Ran the navigation policy through a K1 wrapper and 50 Hz locomotion policy, preserving per-episode measurement artifacts instead of relying on a summary screenshot.",
      "Audited locomotion and deployment contracts separately from the canonical navigation evaluation so simulation performance, physical locomotion, and live closed-loop deployment remain distinct claims.",
    ],
    experimentalDesign: [
      "Scored the complete 1,077-episode R2R val-unseen set under one canonical simulation configuration and reported SR, oracle success, SPL, and final navigation error.",
      "Partitioned every episode into never reached, reached without stopping, or successful to separate exploration and arrival-recognition behavior.",
      "Preregistered a follow-up camera-height and image-transform sweep (plan committed before launch). The plan named a paired test, but its own determinism probe showed per-episode outcomes were not stable run to run, so the analysis used unpaired comparisons; that amendment was appended to the preregistration on 22 August 2026, after the sweep finished; a dated note in that file records this. The 2,400-episode sweep completed in August 2026 with all pre-specified contrasts null; its evaluation-reliability result is that two identically configured 300-episode runs agreed in aggregate (15.0% vs 16.0%) but disagreed on 11.0% of episodes (Cohen's κ = 0.58).",
    ],
    failureAnalysis: [
      "751 episodes never entered the goal radius, making exploration the dominant observed failure class.",
      "129 episodes reached the goal radius but did not stop, isolating a smaller arrival-recognition or termination problem.",
      "The decomposition identifies failure classes but does not prove that camera height caused them; the completed 2,400-episode controlled sweep did not support the causal height hypothesis (all pre-specified contrasts were null).",
    ],
    nextQuestions: [
      "What evaluation scale and design would resolve embodiment effects smaller than the measured run-to-run noise floor?",
      "Can observation transforms or viewpoint-aware training improve exploration without degrading stop behavior?",
      "What instrumentation is required before a physical K1 run can support a defensible closed-loop NaVILA claim?",
    ],
    provenance: [
      "NaVILA, VLN-CE-Isaac, Isaac Lab, RSL-RL, and Booster training/deployment code are upstream foundations; the contribution is the K1-specific integration, experiments, diagnostics, and analysis.",
      "The canonical 18.3% result is simulation-only, and it is below the published NaVILA baselines, including the 24.4% H1 result whose walking policy, like mine, used only proprioception. Two live natural-language NaVILA episodes ran on the real K1 in May 2026 with zero teleoperation. One is on video, with the recorded instruction \"walk to the volley ball and turn 90 degrees\": a relay screen recording shows the VLM issuing the velocity commands (executed by Booster's built-in walking controller), paired with a dated third-person clip. The second episode was not recorded. My trained RL walking policy has not yet worked outside simulation, and no navigation score is claimed for the live session.",
      "The recorded below-1% prior baseline is useful context but its original raw run directory was unavailable during the evidence audit; the final 1,077-episode result is fully preserved and regenerable.",
    ],
    architectureSummary:
      "Natural-language navigation decisions are evaluated through a K1-specific benchmark wrapper and a 50 Hz locomotion policy. The wrapper aligns observations, joint ordering, commands, camera geometry, and termination logic; the evaluation layer preserves per-episode trajectories and metrics for failure analysis.",
    architectureNodes: [
      "R2R instruction + Matterport3D scene",
      "NaVILA vision-language policy",
      "K1 wrapper + action parser",
      "50 Hz locomotion policy",
      "Episode measurements + failure decomposition",
    ],
    evidence: [
      {
        label: "Canonical result",
        hint: "",
        status: "available",
        value: "1,077/1,077 episodes scored; 197 successes; all measurement artifacts preserved.",
      },
      {
        label: "Failure decomposition",
        hint: "",
        status: "available",
        value: "751 never reached, 129 reached without stopping, and 197 succeeded.",
      },
      {
        label: "Evidence ledger",
        hint: "",
        status: "available",
        value: "Claim-by-claim receipts, conflicts, regeneration commands, and provenance boundaries are public.",
      },
      {
        label: "Controlled sweep",
        hint: "",
        status: "available",
        value: "Completed August 2026: 2,400 episodes, all pre-specified contrasts null; two identically configured 300-episode runs agreed in aggregate (15.0% vs 16.0%) but disagreed on 11.0% of episodes.",
      },
    ],
    metrics: [
      { label: "Episodes", value: "1,077 / 1,077", hint: "Complete denominator." },
      { label: "Success rate", value: "18.3%", hint: "197 successful episodes." },
      { label: "Oracle success", value: "30.3%", hint: "326 episodes reached the goal radius." },
      { label: "SPL / NE", value: "10.9% / 7.59 m", hint: "Path efficiency / final navigation error." },
    ],
    limitations: [
      "The canonical result is simulation-only, and my trained walking policy has not yet worked on the real robot. The two May 2026 live episodes used Booster's built-in walker; no navigation score is claimed for them.",
      "The sweep's primary test changed from paired to unpaired because repeat runs were nondeterministic; the amendment recording that change was appended to the preregistration after the sweep finished. The 2,400-episode sweep completed with null pre-specified contrasts.",
      "The walking policy tended to stall on contact with walls; the 18.3% result is still below the benchmark's published baselines.",
      "Aggregate navigation scores alone cannot isolate perception, exploration, locomotion, parser, and stopping failures; the decomposition narrows but does not eliminate that ambiguity.",
    ],
    lessons: [
      "A new embodiment changes the observation distribution before any learning algorithm changes.",
      "Reaching and recognizing arrival are different capabilities and should not be collapsed into one failure label.",
      "An evidence ledger is part of the research system: it prevents stale slides and attractive demos from outrunning the data.",
    ],
    media: [
      {
        kind: "diagram",
        src: "/diagrams/k1-benchmark.svg",
        alt: "K1 NaVILA benchmark flow with 1,077 episodes and failure decomposition",
        caption: "Canonical simulation benchmark and the reach-versus-stop decomposition.",
      },
      {
        kind: "image",
        src: "/media/isaac-red-box.webp",
        alt: "Booster K1 humanoid walking toward a red box in MuJoCo",
        caption: "K1 sim2sim demo in MuJoCo (from k1-vlm-navigation), heading assist enabled.",
      },
      {
        kind: "video",
        src: "/media/k1-walk-to-volleyball.mp4",
        poster: "/media/k1-walk-to-volleyball-poster.jpg",
        alt: "Booster K1 walking toward a volleyball during the live NaVILA episode",
        caption: "Live NaVILA episode (May 2026) — paired with the relay recording below, which shows the VLM issuing the velocity commands (Booster's built-in walker executing).",
      },
      {
        kind: "video",
        src: "/media/k1-relay-live.mp4",
        alt: "Screen recording of the NaVILA laptop relay in live mode",
        caption: "The synchronized trace: the relay in [LIVE] mode streaming VLM velocity commands (~350 ms/inference) over the robot's own moving head camera.",
      },
      {
        kind: "diagram",
        src: "/diagrams/vla-topology.svg",
        alt: "Tested K1 deployment path with robot, relay, and inference workstation",
        caption: "Deployment path. The two live May 2026 episodes are documented in the repository; no scored navigation run is claimed.",
      },
    ],
    artifacts: [
      { kind: "repo", label: "Canonical repository", href: "https://github.com/Janga786/k1-navila-research" },
      { kind: "report", label: "Final results", href: "https://github.com/Janga786/k1-navila-research/blob/main/FINAL_RESULTS_full1077.md" },
      { kind: "logs", label: "Evidence ledger", href: "https://github.com/Janga786/k1-navila-research/blob/main/EVIDENCE.md" },
      { kind: "report", label: "Sweep status", href: "https://github.com/Janga786/k1-navila-research/blob/main/SWEEP_STATUS.md" },
    ],
    seoDescription:
      "Booster K1 humanoid navigation research: NaVILA over a self-trained RL walking policy, a 1,077-episode simulation benchmark (under 1% to 18.3% success), and a 2,400-episode ablation showing identically configured runs disagreeing on 11.0% of episodes.",
    sortOrder: 1,
  },

  {
    slug: "xembench",
    title: "X-Embodiment Language-Grounded Manipulation Benchmark",
    shortTitle: "xembench",
    category: "research",
    status: "completed-study",
    featured: true,
    isPlaceholder: false,
    dateLabel: "2026 · v0.5.0",
    oneLiner:
      "A two-embodiment ManiSkill3 simulation benchmark: a 6,550-episode baseline evaluation in which transfer could not yet be measured because weak native policies scored 0% on one side of each pair, and an action-chunking result on tool pulling (1.3% to 14.7%).",
    summary:
      "Xembench asks a narrow question: how much performance survives when the task and language stay fixed but the robot body changes? A shared language-conditioned policy emits actions through a canonical 21-dimensional interface, and thin adapters map those actions to a Franka-style arm or Unitree G1 upper body. The completed Phase B baseline used 1,202 demonstrations, 18 behavior-cloning policies, and a 73-cell / 6,550-episode matrix. With canonical instructions, Push-T reached 45% native success and G1 box transport 17%. The cross-embodiment question is not answered yet: at least one task in every transfer pair scores 0% natively, so every transfer cell is 0% and no transfer drop can be measured. In a follow-up, action chunking (k=8, 2,000 demonstrations) raised tool-pulling success from 1.3% to 14.7% at three seeds, while grasp-critical tasks stayed near zero. All results are simulation only.",
    role:
      "Project owner — research question, benchmark architecture, experimental decisions, campaign supervision, analysis, and artifact review",
    teamContext:
      "Independent simulation research.",
    collaborators:
      "Independent research project.",
    upstreamSystems:
      "ManiSkill3 environments and robot assets, PyTorch, Franka Panda and Unitree G1 simulation models.",
    stack: [
      "ManiSkill3",
      "PyTorch",
      "Franka Panda",
      "Unitree G1",
      "Behavior Cloning",
      "PPO",
      "HDF5",
    ],
    tags: ["Robot Learning", "Generalization", "Manipulation", "X-Embodiment"],
    problem:
      "Cross-embodiment claims are hard to interpret when tasks, action spaces, language splits, and native policy quality all change at once.",
    systemType:
      "Simulation-only benchmark + baseline campaign + intervention study",
    whyItMatters:
      "A useful benchmark should expose when transfer is impossible to interpret, not turn a weak native policy into a misleading transfer claim.",
    contributions: [
      "Defined a canonical 21-dimensional semantic action interface and per-robot adapters so a zero-shot body swap is an explicit, testable operation.",
      "Built leak-checked paraphrase and unseen-color splits, a demonstration pipeline, behavior-cloning and PPO baselines, evaluation matrices, and failure-taxonomy reports.",
      "Executed and reviewed the 1,202-demonstration, 6,550-episode Phase B campaign and stopped short of claiming transfer when native precision policies were too weak.",
      "Ran one real failure-driven data-flywheel round with equal targeted and random budgets; the mostly null result showed that more same-kind data was not the binding constraint.",
      "Tried a ladder of precision-manipulation changes; at three seeds, action chunking raised tool pulling from 1.3% to 14.7% but left grasp-critical tasks near zero.",
    ],
    methodology: [
      "Represented both embodiments through a canonical 21-dimensional semantic action interface and thin robot-specific adapters.",
      "Trained language-conditioned behavior-cloning baselines from collected demonstrations, then evaluated native, held-out-language, unseen-color, and zero-shot body-swap cells through one reporting pipeline.",
      "Used a failure taxonomy to choose an equal-budget targeted-versus-random data round and a later intervention ladder rather than treating more data as the automatic remedy.",
    ],
    experimentalDesign: [
      "The completed Phase B campaign used 1,202 demonstrations, 18 behavior-cloning policies, and 73 evaluation cells totaling 6,550 episodes.",
      "Native competence was checked before interpreting cross-embodiment transfer; transfer pairs containing a weak native side were not treated as clean embodiment tests.",
      "The action-chunking comparison was repeated across three seeds and reported separately for tool pulling and grasp-critical tasks.",
    ],
    failureAnalysis: [
      "Every transfer cell was 0%, but one side of each pair already scores 0% natively, so this says nothing yet about transfer.",
      "The equal-budget failure-driven data round was mostly null, indicating that more same-kind demonstrations did not resolve the observed ceiling at this scale.",
      "Action chunking improved temporally extended tool pulling while leaving pick-and-stack tasks near zero, localizing a persistent last-inch grasp-conversion problem.",
    ],
    nextQuestions: [
      "Which policy classes can first establish reliable native precision manipulation on both embodiments?",
      "How should action representations separate shared task semantics from embodiment-specific control authority?",
      "Once native competence is established, which task factors produce genuine zero-shot or adaptation-based transfer?",
    ],
    provenance: [
      "The project uses ManiSkill3 environments and robot assets; it does not claim authorship of the simulator or underlying robot models.",
      "All results are simulation-only. No sim-to-real or hardware-transfer claim is made.",
    ],
    architectureSummary:
      "Language-conditioned observations enter one policy stack. The policy emits a canonical action vector whose semantic slots remain fixed across bodies; a thin adapter maps valid slots to each robot. Native, held-out-language, unseen-color, and zero-shot body-swap cells share one evaluation and reporting pipeline.",
    architectureNodes: [
      "Language-grounded task",
      "Shared policy stack",
      "Canonical 21-D action",
      "Franka / G1 adapter",
      "Native + transfer evaluation matrix",
    ],
    evidence: [
      {
        label: "Baseline campaign",
        hint: "",
        status: "available",
        value: "1,202 demonstrations, 18 BC policies, 73 cells, and 6,550 evaluation episodes.",
      },
      {
        label: "Native baselines",
        hint: "",
        status: "available",
        value: "Push-T 45%; G1 box transport 17% (canonical instructions); precision grasping near zero.",
      },
      {
        label: "Intervention result",
        hint: "",
        status: "available",
        value: "Action chunking improved pull_tool from 1.3% to 14.7% across three seeds; pick/stack remained near zero.",
      },
      {
        label: "Reproducibility pack",
        hint: "",
        status: "available",
        value: "Code, configs, tests, and aggregated result tables are committed; per-episode CSVs, demonstrations, checkpoints, and rollout videos are not.",
      },
    ],
    metrics: [
      { label: "Baseline matrix", value: "6,550 episodes", hint: "73 cells." },
      { label: "Demonstrations", value: "1,202", hint: "Baseline campaign." },
      { label: "Best native tasks", value: "45% / 17%", hint: "Push-T / G1 transport." },
      { label: "Chunking result", value: "1.3% → 14.7%", hint: "Tool pulling, three seeds." },
    ],
    limitations: [
      "Transfer cannot yet be measured: at least one task in every transfer pair scores 0% natively.",
      "The benchmark is simulation-only and uses a deliberately constrained policy class; results do not generalize to stronger sequence models or physical robots.",
      "The first failure-driven data round was underpowered for near-zero tasks and produced a mostly null comparison.",
    ],
    lessons: [
      "Native competence is a prerequisite for interpreting transfer.",
      "Longer action horizons can help temporally extended tool use without solving last-inch grasp conversion.",
      "A null result can narrow the search space: at this scale, more same-kind demonstrations were not enough.",
    ],
    media: [
      {
        kind: "image",
        src: "/media/xembench-task-montage.png",
        alt: "ManiSkill3 task frames for Franka-style arm and Unitree G1 manipulation environments",
        caption:
          "Simulation task suite used by xembench: pick, tool-pull, Push-T, stack, apple-placement, and G1 box-transport environments.",
      },
      {
        kind: "diagram",
        src: "/diagrams/xembench-pipeline.svg",
        alt: "Xembench language-conditioned policy and canonical action interface across a Franka arm and Unitree G1",
        caption: "One policy interface, two embodiments, and one shared evaluation matrix.",
      },
      {
        kind: "diagram",
        src: "/diagrams/flywheel-loop.svg",
        alt: "Failure-driven data collection and retraining loop used in xembench",
        caption: "The first real equal-budget targeted-versus-random round was executed; its mostly null result motivated the intervention study.",
      },
    ],
    artifacts: [
      { kind: "repo", label: "Repository", href: "https://github.com/Janga786/xembench" },
      { kind: "report", label: "Phase B report", href: "https://github.com/Janga786/xembench/blob/master/reports/phase_b_campaign_report.md" },
      { kind: "report", label: "Transfer matrix", href: "https://github.com/Janga786/xembench/blob/master/reports/transfer_matrix.md" },
      { kind: "diagram", label: "Architecture", href: "https://github.com/Janga786/xembench/blob/master/docs/architecture.md" },
    ],
    seoDescription:
      "Xembench is a two-embodiment ManiSkill3 benchmark with a 6,550-episode simulated baseline matrix; transfer is not yet measurable under weak native policies; action chunking raised tool-pulling success from 1.3% to 14.7%.",
    sortOrder: 3,
  },
  {
    slug: "rebot-crack-inspection",
    title: "Bridge Crack-Inspection Arm \u2014 reBot B601-DM",
    shortTitle: "Crack-Inspection Arm",
    category: "systems-integration",
    status: "active-research",
    featured: true,
    isPlaceholder: false,
    dateLabel: "Sep 2026 \u2013 present",
    oneLiner:
      "Senior-design bridge crack-inspection arm: 7-motor CAN bring-up at 200 Hz, gravity/friction feed-forward identified on the real hardware, guarded first trajectories, and a zero-shot crack-segmentation pipeline.",
    summary:
      "The reBot B601-DM is a 6+1-DoF arm being developed into a bridge crack-inspection system as a two-person senior-design project; my teammate is building a second arm from scratch and has not worked on this arm, so all work on this arm is mine. I brought up all seven motors over CAN in MIT mode at a 200 Hz control rate (per-motor setpoint, stiffness/damping gains, and feed-forward torque), measured the elbow's real gravity load at 6.6 N\u00b7m against the URDF's 2.7 N\u00b7m prediction, and identified gravity and friction feed-forward on the hardware: post-tuning holds cut loaded-joint error from 0.04\u20130.05 rad to \u2264 0.005 rad across a 41-run logged campaign (28 completed; aborted and refused runs are logged too). The first guarded trajectory ran on the physical arm on 2026-10-22, tracking within 0.023 rad with no guard fault; a visible 3.3 Hz shoulder/elbow wobble was traced to low damping and roughly halved by raising derivative gain. On the perception side, a wrist RealSense D405 streams into zero-shot OpenCrack/nnU-Net segmentation (weights used as released), producing crack masks about 17 times a second and offline trace-path demos. No detection accuracy on real imagery is claimed yet.",
    role:
      "Sole owner of the arm \u2014 bring-up, control, kinematics/IK, planning, tuning, and vision integration",
    teamContext:
      "Two-person Fort Lewis College senior-design team advised by Dr. Yiyan Li; my teammate is building a second arm from scratch, so all work on this arm is mine. I run every hardware session.",
    advisor: "Dr. Yiyan Li, Fort Lewis College",
    collaborators: "Two-person senior-design team; my teammate is building a second arm from scratch, so the arm (bring-up, control, kinematics/IK, planning, tuning, vision integration) is mine. Crack-segmentation weights are upstream work, credited.",
    upstreamSystems:
      "reBot B601-DM arm and vendor SDK, OpenCrack nnU-Net weights (used as released), RealSense D405, USB\u2013CAN bridge.",
    stack: ["CAN bus", "MIT-mode motor control", "Python", "DLS IK", "Minimum-jerk planning", "RealSense D405", "nnU-Net"],
    tags: ["hardware", "controls", "system identification", "safety", "inspection"],
    problem:
      "Make a real 6+1-DoF arm hold and track poses accurately under load so it can scan crack surfaces, with safety guards strong enough to iterate on physical hardware.",
    systemType: "Physical arm bring-up + controller identification and tuning + guarded motion + inspection perception pipeline",
    whyItMatters:
      "This is the project where model error met measurement: the URDF under-predicted the elbow gravity load by 2.4\u00d7, and closing that gap with identified feed-forward is what made accurate holds possible.",
    contributions: [
      "Brought up all 7 motors over a USB\u2013CAN bridge in MIT mode with a 200 Hz loop streaming setpoint, stiffness/damping gains, and feed-forward torque per motor.",
      "Measured the elbow gravity load (6.6 N\u00b7m vs the URDF's 2.7 N\u00b7m) and identified gravity plus friction feed-forward on the real arm, cutting loaded-joint hold error to \u2264 0.005 rad in post-tuning holds.",
      "Built the analytic 6\u00d76 Jacobian, damped-least-squares IK with multi-start seeding, and a minimum-jerk trajectory planner; root-caused a gripper-axis frame error (+X, not +Z).",
      "Put every motor command behind arm_guard, a last-line safety filter with a startup position check, before running the first guarded trajectory (2026-10-22, within 0.023 rad, no guard fault).",
      "Connected the wrist D405 and ran the zero-shot crack-segmentation pipeline live at ~17 Hz, with capture, overlay, and offline trace-path demo tooling.",
    ],
    methodology: [
      "Identify before tuning: measure the real gravity/friction loads, inject them as feed-forward, then tune gains against logged hold and tracking error rather than by feel.",
      "Log everything: the 41-run campaign records completed, aborted, refused, and read-only runs with raw logs committed as evidence.",
      "Guarded escalation: simulation rehearsal first, then operator-attended guarded runs with hard clamps and a startup position check.",
    ],
    failureAnalysis: [
      "A 3.3 Hz shoulder/elbow wobble in the first guarded run was traced to low damping; raising derivative gain cut it roughly in half.",
      "The URDF's elbow gravity prediction was 2.4\u00d7 low; uncorrected, holds drifted 0.04\u20130.05 rad under load.",
      "A gripper-axis frame error (+X instead of +Z) was root-caused in the kinematic chain before it could corrupt tool-pose targets.",
    ],
    nextQuestions: [
      "Hand-eye calibration and measured joint limits ahead of gated commissioning (the current camera extrinsic and limits are vendor-nominal).",
      "A quantitative held-out evaluation of crack segmentation on real D405 imagery, per the repository's test plan.",
      "Planned extensions: MPC and corrections learned from data on top of the identified feed-forward.",
    ],
    provenance: [
      "Two-person senior-design team; my teammate is building a second arm from scratch, so all work on this arm is mine.",
      "I designed the system (the control architecture, how the ROS 2 nodes connect, and the safety gating). All hardware work is mine: motor bring-up, the torque test that found the URDF's gravity error, the gain and feed-forward decisions, and every physical run, with raw logs committed.",
      "Crack segmentation uses the OpenCrack nnU-Net weights exactly as released \u2014 no training is claimed; the arm, SDK, and camera are vendor systems.",
    ],
    architectureSummary:
      "A wrist RGB-D camera feeds zero-shot crack segmentation; masks become trace paths, which the DLS IK and minimum-jerk planner turn into joint trajectories. Every command passes the arm_guard safety filter before the 200 Hz CAN loop drives the motors.",
    architectureNodes: [
      "D405 RGB-D stream",
      "Zero-shot crack mask (nnU-Net)",
      "Trace-path planning",
      "DLS IK + minimum-jerk trajectories",
      "arm_guard safety filter",
      "200 Hz CAN motor loop",
    ],
    evidence: [
      { label: "Tuning campaign", hint: "", status: "available", value: "CONTROLLER_TUNING.md write-up with raw logs: 41 logged runs (28 completed), gravity measurement, and per-joint post-tuning holds." },
      { label: "First guarded run", hint: "", status: "available", value: "2026-10-22 evidence directory: tracking within 0.023 rad, wobble diagnosis plots, and the kd comparison." },
      { label: "Vision pipeline", hint: "", status: "available", value: "Live D405 capture, ~17 Hz crack masks, and offline trace-path demos with overlays." },
      { label: "Test suite", hint: "", status: "available", value: "Offline unit/integration/contract tests (588 test functions as of 2026-10-30)." },
    ],
    metrics: [
      { label: "Post-tuning hold error", value: "\u2264 0.005 rad", hint: "From 0.04\u20130.05 rad before feed-forward." },
      { label: "Gravity reality gap", value: "6.6 vs 2.7 N\u00b7m", hint: "Measured elbow load vs URDF prediction." },
      { label: "Control rate", value: "200 Hz", hint: "Per-motor MIT-mode commands over CAN." },
      { label: "Logged hardware runs", value: "41", hint: "28 completed; aborts and refusals logged." },
    ],
    limitations: [
      "Operator-attended development runs, not commissioning: camera extrinsics, tool tip, workcell, and joint limits are still vendor-nominal values.",
      "No quantitative crack-detection metric on real imagery is claimed; the segmentation weights are zero-shot upstream work.",
      "The \u2264 0.005 rad figure describes post-tuning holds, not every run in the 41-run campaign.",
    ],
    lessons: [
      "Feed-forward identified from measurements beats gain-cranking: most of the hold error was unmodeled gravity and friction, not controller weakness.",
      "Safety filters are what make hardware iteration fast \u2014 the guard let tuning proceed without risking the arm.",
      "A frame-convention error can look like a control bug; checking the kinematic chain first saved the tool-pose work.",
    ],
    media: [
      { kind: "image", src: "/media/rebot-live-hero.jpg", alt: "The physical reBot B601-DM arm with wrist-mounted D405 camera in the lab", caption: "The physical reBot B601-DM in the lab — wrist D405 camera and gripper visible." },
      { kind: "video", src: "/media/rebot-trajectory-live.mp4", poster: "/media/rebot-live-hero.jpg", alt: "The physical arm executing a commanded trajectory near a box", caption: "The real arm under commanded motion (operator-attended); raw run logs for the tuning and guarded-run campaigns are committed in the repository." },
      { kind: "video", src: "/media/rebot-kinematics-live.mp4", poster: "/media/rebot-kin-poster.jpg", alt: "Close view of the physical arm moving through kinematic poses", caption: "Kinematics in action on the physical arm — the DLS IK and minimum-jerk planner driving the 200 Hz CAN loop." },
      { kind: "image", src: "/media/rebot-d405-crack-live.jpg", alt: "View through the arm's wrist camera: a red crack mask overlaid on a printed crack held in front of it", caption: "Through the arm's own wrist D405: the zero-shot crack mask (red) tracing a printed test target live — a print, not a bridge surface; no accuracy metric is claimed." },
      { kind: "image", src: "/media/rebot-replay-measured.jpg", alt: "Rendered replay of measured joint states from the real reBot arm", caption: "Measured-state replay: joint states recorded on the real arm (2026-10-22 smoke run), re-rendered for inspection." },
      { kind: "image", src: "/media/rebot-kd-tuning.png", alt: "Velocity plots comparing low and raised damping gains", caption: "The 3.3 Hz wobble diagnosis: velocity traces at kd 1 vs kd 4 from the first guarded run's evidence." },
      { kind: "image", src: "/media/rebot-tracking.png", alt: "Joint tracking plot from the controller-tuning campaign", caption: "Seven-joint demo tracking from the tuning campaign's committed figures." },
      { kind: "image", src: "/media/rebot-crack-rehearsal.png", alt: "Simulated rehearsal of a crack-tracing trajectory", caption: "Crack-trace rehearsal in simulation \u2014 new motion scripts are rehearsed in simulation before hardware runs." },
      { kind: "image", src: "/media/rebot-trace-overlay.png", alt: "Crack image with planned trace paths overlaid", caption: "Offline demo: zero-shot crack mask converted into planned trace paths (2026-10-23)." },
    ],
    artifacts: [
      { kind: "repo", label: "Repository", href: "https://github.com/Janga786/rebot-crack-vision" },
      { kind: "report", label: "Controller tuning write-up", href: "https://github.com/Janga786/rebot-crack-vision/blob/main/docs/motion/CONTROLLER_TUNING.md" },
      { kind: "logs", label: "First guarded run evidence", href: "https://github.com/Janga786/rebot-crack-vision/tree/main/evidence/operator/first-guarded-run-2026-10-22" },
    ],
    seoDescription:
      "Senior-design bridge crack-inspection arm: CAN motor bring-up at 200 Hz, measured gravity feed-forward, guarded trajectories within 0.023 rad, and a zero-shot crack-segmentation pipeline.",
    sortOrder: 2,
  },

  {
    slug: "kuka-kr6-kinematics",
    title: "KUKA KR 6 Kinematics & Verification Suite",
    shortTitle: "KUKA KR 6 Kinematics",
    category: "modeling-control",
    status: "validated-library",
    featured: false,
    isPlaceholder: false,
    dateLabel: "Spring 2026 · packaged Summer 2026",
    oneLiner:
      "Forward and inverse kinematics, a geometric Jacobian, singularity diagnostics, and trajectories — cross-checked against finite differences and a generated URDF in a 39-test suite.",
    summary:
      "This individual robotics course project became a small standalone Python library for the six-axis KUKA KR 6 R900 sixx. The implementation connects standard Denavit–Hartenberg modeling to forward kinematics, closed-form inverse position kinematics, a 6×6 geometric Jacobian, singularity diagnostics, inverse velocity kinematics, and quintic/LSPB trajectories. The important part is the verification chain: central finite differences check the analytic Jacobian, FK→IK→FK random trials check inverse solutions, manufacturer reach data provides a physical sanity check, and a generated URDF is reloaded as an independent forward-kinematics oracle.",
    role:
      "Individual course project — mathematical derivation, implementation, tests, figures, and later standalone packaging",
    teamContext:
      "Completed in an undergraduate robotics course and later reorganized as a documented, tested public library.",
    collaborators: "Individual undergraduate course project; later packaged independently.",
    upstreamSystems:
      "KUKA manufacturer specifications, standard robotics references, NumPy, URDF tooling, and visualization libraries.",
    stack: ["Python", "NumPy", "DH parameters", "URDF", "GitHub Actions"],
    tags: ["kinematics", "jacobian", "trajectory", "verification"],
    problem:
      "Robotics packages can return a pose without proving that the model, derivative, inverse solution, and robot description agree.",
    systemType: "Analytic robotics library + numerical validation suite",
    whyItMatters:
      "The project demonstrates mathematical readiness and a habit of validating the same mechanism through independent representations.",
    contributions: [
      "Implemented the six-link DH chain and forward kinematics with joint-limit and manufacturer-reach checks.",
      "Implemented geometric Jacobian, manipulability, singularity sweeps, closed-form position IK, and inverse velocity kinematics.",
      "Implemented quintic and LSPB trajectory primitives and task-space motion examples.",
      "Built a programmatic URDF and cross-validated its reloaded transforms against the analytic DH model.",
      "Packaged the project with 39 pytest tests, multi-version CI, reproducible figures, animations, and technical documentation.",
    ],
    methodology: [
      "Derived one standard Denavit–Hartenberg model and used it to implement forward kinematics, closed-form position IK, a geometric Jacobian, inverse velocity kinematics, singularity diagnostics, and trajectories.",
      "Generated a URDF from the same documented geometry but reloaded it through an independent representation for cross-checking.",
    ],
    experimentalDesign: [
      "Compared the analytic Jacobian against central finite differences, ran 200 FK→IK→FK random round trips, checked reach against manufacturer data, and exercised 39 automated tests.",
      "Treated each oracle as a different failure detector rather than using one implementation to validate itself.",
    ],
    failureAnalysis: [
      "Singular or ill-conditioned configurations expose where inverse-velocity calculations become unstable.",
      "Agreement among analytic and numerical models still cannot reveal physical calibration or compliance error because no real KR 6 was measured.",
    ],
    nextQuestions: [
      "How does calibration uncertainty propagate through the analytic model on a physical arm?",
      "Which dynamics, collision, and closed-loop control layers are needed before the library can support real motion experiments?",
    ],
    provenance: [
      "This began as a course project; the public library and test packaging were completed later and should not be read as a separate research project.",
      "KUKA specifications and standard robotics references define the physical model; external libraries are used for visualization and independent cross-checks, not presented as authored algorithms.",
    ],
    architectureSummary:
      "One DH model feeds FK, Jacobian, IK, trajectory, and URDF-generation modules. Each path is checked by a different oracle: finite differences, random round trips, manufacturer data, or a reloaded URDF.",
    architectureNodes: [
      "KUKA geometry + DH table",
      "FK / Jacobian / IK",
      "Joint + task-space trajectories",
      "Generated URDF",
      "Independent numerical cross-checks",
    ],
    evidence: [
      { label: "Automated verification", hint: "", status: "available", value: "39 pytest tests across FK, Jacobian, IK, trajectories, and URDF behavior." },
      { label: "Jacobian check", hint: "", status: "available", value: "Analytic Jacobian compared with central finite differences." },
      { label: "IK check", hint: "", status: "available", value: "FK→IK→FK round trips across 200 random configurations." },
      { label: "Model cross-check", hint: "", status: "available", value: "Analytic DH transforms compared with an independently reloaded generated URDF." },
    ],
    metrics: [
      { label: "Tests", value: "39 passing", hint: "CI suite." },
      { label: "Random IK trials", value: "200", hint: "FK→IK→FK." },
      { label: "URDF agreement", value: "≤ 50 µm", hint: "At the documented ready pose." },
      { label: "Robot axes", value: "6 DoF", hint: "KUKA KR 6 R900 sixx." },
    ],
    limitations: [
      "The library models kinematics, not dynamics, collision checking, calibration uncertainty, or closed-loop execution on a physical KR 6.",
      "Closed-form IK relies on the robot's spherical-wrist geometry and does not transfer unchanged to arbitrary six-axis arms.",
      "Numerical agreement validates implementation consistency, not real-robot calibration accuracy.",
    ],
    lessons: [
      "Independent representations are stronger than one self-consistent implementation.",
      "Singularities become easier to reason about when analytic structure, numerical conditioning, and visualization are shown together.",
      "Course work becomes useful evidence when its context remains visible and the verification story is reproducible.",
    ],
    media: [
      {
        kind: "diagram",
        src: "/diagrams/kuka-validation.svg",
        alt: "KUKA kinematics modules and independent verification paths",
        caption: "Analytic model, generated URDF, and numerical oracles form one verification loop.",
      },
      {
        kind: "image",
        src: "/media/kuka-urdf-crosscheck.png",
        alt: "KUKA KR 6 analytic DH stick model beside the independently rendered URDF model",
        caption:
          "Analytic DH model and reloaded URDF at the same documented configuration; numerical pose agreement is reported separately.",
      },
      {
        kind: "image",
        src: "/media/kuka-wrist-singularity.png",
        alt: "KUKA wrist singularity sweep showing minimum singular value and manipulability approaching zero",
        caption:
          "Wrist-singularity sweep: the minimum singular value and manipulability collapse as q5 approaches zero.",
      },
    ],
    artifacts: [
      { kind: "repo", label: "Repository", href: "https://github.com/Janga786/kuka-kr6-kinematics" },
      { kind: "report", label: "Technical documentation", href: "https://github.com/Janga786/kuka-kr6-kinematics#how-it-is-checked" },
      { kind: "demo", label: "Figures & animations", href: "https://github.com/Janga786/kuka-kr6-kinematics#gallery" },
    ],
    seoDescription:
      "A KUKA KR 6 kinematics library implementing FK, IK, Jacobians, singularity diagnostics, and trajectories with 39 tests, finite-difference checks, and URDF cross-validation.",
    sortOrder: 4,
  },

  {
    slug: "clida-lidar-motion",
    title: "CLiDA LiDAR Debris Analysis",
    shortTitle: "CLiDA / LiDAR Motion Analysis",
    category: "perception",
    status: "completed-study",
    featured: false,
    isPlaceholder: false,
    dateLabel: "Fall 2024 · code packaged 2026",
    oneLiner:
      "A five-person sensing project that estimated object dimensions, principal axis, motion state, and rotation rate from point-cloud sequences, later packaged as a public, tested methods library.",
    summary:
      "The Camera LiDAR Debris Analyzer (CLiDA) was a five-person computer engineering design project for characterizing small rotating objects. As algorithm developer, I contributed LiDAR preprocessing, file conversion, dimension measurement, principal-axis estimation, motion detection, and rotation-rate logic, then helped document the verification plan. A later public Python package presents the point-cloud methods in a compact, inspectable form using NumPy and Open3D, with synthetic-cloud tests.",
    role:
      "Algorithm developer — LiDAR processing, motion/axis/dimension methods, test hardware support, and report sections",
    teamContext:
      "Five-person CE 315 design team. Protocol and individual roles come from the December 2024 team report.",
    collaborators: "Five-person CE 315 design team with shared hardware, software, testing, and documentation responsibilities.",
    upstreamSystems: "LiDAR hardware, NumPy, Open3D, PCA, and ICP methods.",
    stack: ["Python", "Open3D", "NumPy", "LiDAR", "PCA", "ICP", "3D printing"],
    tags: ["Perception", "Point Clouds", "ICP", "Experimental Robotics"],
    problem:
      "Estimate the size, orientation, motion state, and rotation rate of a small object from sparse point-cloud sequences.",
    systemType: "Team sensing prototype + controlled experiment + standalone methods package",
    whyItMatters:
      "It connects algorithm implementation to a physical test stand, ground-truth rates, repeated trials, and a documented team role.",
    contributions: [
      "Developed and debugged LiDAR processing for RPM detection, axis identification, dimension measurement, point pruning, and file-format conversion.",
      "Used PCA to estimate principal orientation and ICP-derived inter-frame rotation for speed and axis estimates.",
      "3D-printed silhouettes and mounts to improve repeatable sensor alignment and test geometry.",
      "Authored manufacturing, verification, risk, planning, and lessons-learned sections of the final report.",
      "Later packaged the point-cloud methods with sample data, scripts, documentation, and synthetic-cloud tests.",
    ],
    methodology: [
      "Cleaned sequential point clouds, measured axis-aligned dimensions, estimated principal orientation with PCA, gated motion from displacement, and recovered inter-frame rotation with ICP.",
      "Used 3D-printed silhouettes and mounts to make the sensing geometry and alignment repeatable enough for controlled trials.",
    ],
    experimentalDesign: [
      "Compared estimated rotation rate against a motorized test stand at known target rates.",
      "Used the final five-person team report as the authority for the protocol and role allocation; the later public package is supporting method evidence.",
    ],
    failureAnalysis: [
      "Point-cloud sparsity, surface finish, alignment, overlap, and ICP initialization can dominate the apparent algorithm quality.",
      "Axis-aligned dimensions vary with orientation, PCA has a sign ambiguity, and the controlled stand does not reproduce unconstrained debris motion.",
    ],
    nextQuestions: [
      "How do the estimators behave under tumbling, partial occlusion, and changing sensor range?",
      "What ground-truth and calibration procedure would be required for unconstrained 3D rotation rather than a fixed-axis test stand?",
    ],
    provenance: [
      "CLiDA was a five-person team project; project management, hardware, software leadership, and test execution were shared across named roles.",
      "The final team report is the authority for the protocol and role allocation. The public code package is supporting algorithm evidence; its sample outputs are illustrative, not experiment results.",
    ],
    architectureSummary:
      "Point-cloud frames are cleaned, measured with bounding boxes, summarized with PCA, screened by a displacement gate, and registered with ICP. A controlled motorized stand supplies repeated target-rate trials for comparison.",
    architectureNodes: [
      "LiDAR point-cloud sequence",
      "NaN / outlier cleanup",
      "AABB dimensions + PCA axis",
      "Motion gate + ICP registration",
      "RPM estimate vs. test-stand truth",
    ],
    evidence: [
      { label: "Final team report", hint: "", status: "available", value: "Names team roles, experimental protocol, and individual contributions." },
      { label: "Public method package", hint: "", status: "available", value: "Preprocessing, dimensions, PCA orientation, motion gate, ICP speed estimation, sample data, and tests." },
      { label: "Hardware setup", hint: "", status: "available", value: "Controlled rotating target, known rates, LiDAR mounting, and 3D-printed fixtures." },
    ],
    metrics: [
      { label: "Team", value: "5 people", hint: "Role attributed explicitly." },
      { label: "Methods package", value: "Public", hint: "NumPy/Open3D, synthetic-cloud tests." },
      { label: "Course", value: "CE 315", hint: "Fall 2024 design project." },
    ],
    limitations: [
      "The experiment used controlled objects and a fixed test stand, not unconstrained orbital debris or a flight-ready sensor system.",
      "Axis-aligned dimensions are sensitive to object orientation; PCA has a sign ambiguity; ICP depends on overlap and initialization.",
      "The public package is a compact methods artifact and does not contain the full team report or raw final-trial dataset.",
    ],
    lessons: [
      "A clean algorithm is not enough; mounts, surface finish, alignment, and ground truth determine whether its output is meaningful.",
      "Team reports are useful provenance when they name individual contributions instead of retroactively assigning sole ownership.",
      "A small public methods package can make a long team report inspectable without pretending the package is the whole project.",
    ],
    media: [
      { kind: "image", src: "/media/clida-point-cloud-processing.png", alt: "Example LiDAR point cloud with a geometric bounding box", caption: "Sample point cloud packaged with the public methods implementation." },
      { kind: "image", src: "/media/clida-hardware-setup.png", alt: "CLiDA LiDAR and rotating-object test setup", caption: "Controlled sensor and rotating-target setup used for verification." },
      { kind: "image", src: "/media/clida-functional-block-diagram.png", alt: "CLiDA functional block diagram", caption: "Team system architecture from sensing through analysis." },
    ],
    artifacts: [
      { kind: "repo", label: "Point-cloud package", href: "https://github.com/Janga786/lidar-pointcloud-motion-pipeline" },
      { kind: "report", label: "Methods documentation", href: "https://github.com/Janga786/lidar-pointcloud-motion-pipeline#readme" },
    ],
    seoDescription:
      "CLiDA LiDAR debris analysis: a five-person sensing project with PCA and ICP point-cloud methods, a controlled test-stand protocol, explicit role attribution, and a public methods package.",
    sortOrder: 5,
  },

  {
    slug: "hexapod-nasa-challenge",
    title: "Autonomous Hexapod — Colorado Robotics Challenge (NASA Space Grant)",
    shortTitle: "18-DoF Field Hexapod",
    category: "systems-integration",
    status: "fielded-system",
    featured: false,
    isPlaceholder: false,
    dateLabel: "Oct 2025 – Apr 2026",
    oneLiner:
      "A four-person team integrated and fielded an 18-DoF hexapod at Great Sand Dunes; I led the team, designed the electrical system, extended the firmware from Mark W's open-source original, and later built a coupled-oscillator gait simulator.",
    summary:
      "The challenge required a walking robot to operate on loose sand and uneven terrain, where power distribution, sensing, gait stability, and field repair mattered at the same time. I led the four-person team, designed the electrical system (Arduino Mega, ICM-20948 9-DoF IMU, bump sensors, LiPo + SBEC power, and a three-bit interface for selecting eight behaviors), and extended the firmware with gyro-magnetometer heading hold, gyro-bias calibration, and bump avoidance; both the firmware and the chassis derive from Mark W's open-source work. After the field project, I built a Python Kuramoto coupled-oscillator simulator in which wave, ripple, and tripod phase relationships emerge from one model, then packaged it with a 34-test suite and visualizations.",
    role:
      "Team lead (paid) — electrical system design, firmware extensions, field integration, and later CPG simulation/testing",
    teamContext:
      "Four-person challenge team. The physical robot, chassis, firmware, and field work were collaborative and include inherited reference implementations.",
    advisor: "Dr. Charles Hakes, Fort Lewis College",
    collaborators: "Four-person challenge team; physical integration and field operation were collaborative.",
    upstreamSystems:
      "Inherited firmware by Mark W, team-authored code under another GitHub account, and external reference geometry / IK.",
    stack: ["Arduino Mega", "C++", "Python", "ICM-20948", "Kuramoto CPG", "18 servos"],
    tags: ["field robotics", "controls", "embedded", "locomotion"],
    problem:
      "Build and field a legged robot that can maintain useful behavior on loose sand under real power, sensing, and integration constraints.",
    systemType: "Fielded team robot + later simulation and verification extension",
    whyItMatters:
      "It shows the difference between a locomotion idea and a robot that must be wired, powered, repaired, and operated outdoors by a team.",
    contributions: [
      "Led a four-person team through system integration and field operation at Great Sand Dunes National Park.",
      "Designed the electrical system: Arduino Mega, 9-DoF IMU, bump sensors, LiPo + SBEC power, and the three-bit behavior-selection interface documented in project materials.",
      "Extended the team firmware with gyro-magnetometer heading hold, gyro-bias calibration, and bump avoidance.",
      "Built the later Kuramoto CPG simulator, gait visualizations, phase analysis, and 34-test CI suite.",
      "Published field photographs, wiring documentation, firmware context, CAD references, simulations, and explicit attribution notes in one evidence repository.",
    ],
    methodology: [
      "Integrated sensing, power, behavior selection, and eighteen servo channels around an Arduino-based team firmware stack for outdoor operation.",
      "Studied wave, ripple, and tripod phase relationships later in a separate Kuramoto coupled-oscillator simulator with automated checks.",
    ],
    experimentalDesign: [
      "Fielded the team robot at Great Sand Dunes and preserved photographs, wiring documentation, and physical motion media.",
      "No repeatable terrain-success protocol was preserved, so field operation is evidence of integration rather than a quantified locomotion result.",
    ],
    failureAnalysis: [
      "Power delivery, connectors, calibration, loose terrain, and recovery procedures became coupled parts of the locomotion problem.",
      "The later Python CPG was not the physical challenge controller and cannot be used retroactively to explain field performance.",
    ],
    nextQuestions: [
      "How would the coupled-oscillator controller perform when deployed on the physical robot under repeatable terrain conditions?",
      "Which field metrics can separate gait instability from power, sensing, and operator-recovery failures?",
    ],
    provenance: [
      "This is a team project, not a sole-authorship claim. The public repository includes firmware originally written by Mark W and modified for the project, team-authored code under another GitHub account, and geometry/IK derived from an external reference implementation.",
      "The Python CPG is a later simulation and verification extension; the site does not claim that this exact Python controller ran on the physical challenge robot.",
    ],
    architectureSummary:
      "Sensors and a compact behavior interface feed Arduino-based control, which coordinates eighteen servos through inherited and modified gait code. The later CPG simulator studies gait phase relationships separately from the physical firmware.",
    architectureNodes: [
      "IMU + bump sensors",
      "Arduino Mega behavior logic",
      "Power + three-bit command interface",
      "18-servo hexapod",
      "Separate Kuramoto CPG study",
    ],
    evidence: [
      { label: "Field evidence", hint: "", status: "available", value: "Team and robot photographs at Great Sand Dunes plus physical walking media." },
      { label: "System documentation", hint: "", status: "available", value: "Wiring, firmware, CAD context, control architecture, and challenge setup." },
      { label: "CPG verification", hint: "", status: "available", value: "34-test suite with phase, gait, workspace, trajectory, and edge-case checks." },
      { label: "Attribution boundary", hint: "", status: "available", value: "Team, inherited firmware, reference geometry, and later personal extension are identified explicitly." },
    ],
    metrics: [
      { label: "Degrees of freedom", value: "18", hint: "Six legs × three joints." },
      { label: "Team", value: "4 people", hint: "Field project." },
      { label: "Behavior interface", value: "3 bits / 8 modes", hint: "Selection interface." },
      { label: "CPG tests", value: "34 passing", hint: "Later simulation suite." },
    ],
    limitations: [
      "No repeatable field success-rate protocol or terrain benchmark was preserved, so the project is presented as a fielded system rather than a quantified locomotion study.",
      "The CPG simulator and physical firmware are related conceptually but were not the same deployed controller.",
      "Ownership spans teammates, inherited firmware, and reference geometry; contribution claims therefore stay at the subsystem and integration level.",
    ],
    lessons: [
      "Field conditions make power, connectors, calibration, and recovery first-class control problems.",
      "A mathematical gait model becomes more useful when its relationship to the deployed firmware is stated honestly.",
      "Precise attribution strengthens a team project because reviewers can see both collaboration and individual depth.",
    ],
    media: [
      { kind: "image", src: "/media/hexapod-action.webp", alt: "18-DoF hexapod moving on sand at Great Sand Dunes", caption: "Fielded robot during the challenge." },
      { kind: "diagram", src: "/diagrams/hexapod-system.svg", alt: "Hexapod sensors, firmware, power, servos, and later CPG simulator", caption: "Physical system and later CPG study, shown as related but distinct layers." },
      { kind: "video", src: "/media/hexapod-dance.mp4", poster: "/media/hexapod-dance-poster.jpg", alt: "Hexapod executing a coordinated motion routine", caption: "Physical coordination test." },
      { kind: "image", src: "/media/hexapod-team.webp", alt: "Four-person hexapod challenge team with the robot", caption: "Four-person challenge team and robot." },
    ],
    artifacts: [
      { kind: "repo", label: "Evidence repository", href: "https://github.com/Janga786/hexapod-cpg" },
      { kind: "report", label: "Wiring & firmware notes", href: "https://github.com/Janga786/hexapod-cpg/tree/main/docs" },
      { kind: "video", label: "Physical motion clip", href: "/media/hexapod-dance.mp4" },
    ],
    seoDescription:
      "A four-person, 18-DoF hexapod I led for NASA Space Grant's Colorado Robotics Challenge: an electrical system I designed, firmware I extended from Mark W's open-source original, and a later Kuramoto CPG simulator with a 34-test suite.",
    sortOrder: 6,
  },

  {
    slug: "legacy-robot-restoration-inspection",
    title: "Legacy Robot Restoration & Inspection Tooling",
    shortTitle: "Sawyer / Baxter Restoration",
    category: "perception",
    status: "completed-study",
    featured: false,
    isPlaceholder: false,
    dateLabel: "May – Sep 2025",
    oneLiner:
      "Revived two discontinued Rethink robots (Sawyer and Baxter) with no vendor support, rebuilt the ROS workstation, and built a synthetic-data thermal hotspot detector; 2nd place at the 2025 FLC Physics & Engineering Symposium.",
    summary:
      "The project began with two nonfunctional legacy robots and limited vendor support. I diagnosed controller and boot problems, restored operating environments, and rebuilt a Dockerized ROS 1 (Indigo) + ROS 2 (Humble) MoveIt/Gazebo workstation so the arms could again be simulated and programmed. In parallel, I developed Blender/Python synthetic-data tooling and YOLO-based inspection experiments. In August 2025 I also ran the detector on real panels as a qualitative end-to-end check. An earlier detector metric was removed after an internal evidence audit found the training configuration reused training images for validation, with no preserved held-out set. What remains is still useful: robot restoration, systems troubleshooting, synthetic-data generation, inspection tooling, and a symposium-award research direction. This was a paid, solo research assistantship (May–September 2025), presented at the September 2025 symposium.",
    role: "Research Assistant, Computer Vision & Robotics (paid, solo project; May–September 2025) under Dr. Kevin Wedeward — restoration, ROS environment, synthetic data, and inspection experiments",
    teamContext: "Paid, solo undergraduate research project with faculty supervision; May–September 2025, presented at the September 2025 symposium.",
    advisor: "Dr. Kevin Wedeward, Fort Lewis College",
    collaborators: "Individual undergraduate research with faculty supervision.",
    upstreamSystems: "Sawyer and Baxter vendor stacks, ROS 1/ROS 2, MoveIt, Gazebo, Blender, and YOLO.",
    stack: ["Sawyer", "Baxter", "ROS 1/2", "MoveIt", "Gazebo", "Blender", "YOLO"],
    tags: ["robot restoration", "ROS", "synthetic data", "computer vision"],
    problem: "Recover unsupported research hardware and create an inspection-development environment when the original software and controller stack no longer worked reliably.",
    systemType: "Hardware restoration + robotics workstation + perception prototype",
    whyItMatters: "Restoring the platform made later robotics experiments possible and exposed the difference between a detector demo and a valid held-out evaluation.",
    contributions: [
      "Diagnosed hardware and boot failures, including Sawyer's: a dead CMOS battery had reset its BIOS into an incompatible Secure Boot setting. Obtained the Intera update from other universities and handled storage/OS recovery and network troubleshooting.",
      "Rebuilt a Dockerized ROS 1 (Indigo) + ROS 2 (Humble) workstation with MoveIt and Gazebo for motion-planning and simulation workflows; the ROS 1/ROS 2 bridge was not finished.",
      "Created Blender/Python synthetic inspection scenes and automatic labels, and trained a YOLOv8 thermal hotspot detector on them.",
      "Documented Baxter troubleshooting so future students could reproduce common startup and ROS-network fixes.",
      "Presented the inspection research at the September 2025 symposium: 2nd Place, FLC Physics & Engineering Symposium 2025, the highest-placing solo project.",
    ],
    methodology: [
      "Recovered controller and workstation functionality through hardware inspection, operating-system repair, firmware and BIOS configuration, networking, and ROS environment reconstruction.",
      "Built qualitative synthetic-data and detection tooling in Blender, Python, and YOLO while auditing the boundary between a demo and a held-out evaluation.",
    ],
    experimentalDesign: [
      "Preserved restoration records, ROS workspaces, troubleshooting notes, generated scenes, labels, and qualitative inspection examples.",
      "In August 2025 I ran the detector on real panels as a qualitative end-to-end check: Baxter's end effector held a thermal camera over four small test modules, and because four modules could not drive enough current to create a real solar-panel hotspot, I induced one by heating a single cell with a heat gun. On the saved thermal frames, the detector flagged the heated cell as a hotspot every time (thermal frames shown on this page). This was a qualitative confirmation only; a valid held-out detector evaluation remains future work.",
      "Rejected the former detector result because the available configuration reused training images for validation and did not preserve the claimed dataset or valid held-out result file.",
    ],
    failureAnalysis: [
      "Unsupported software, controller state, networking, and operating-system compatibility were the initial blockers before perception experiments could begin.",
      "Train-as-validation output exposed a methodological failure: an attractive metric without independent held-out evidence does not demonstrate generalization.",
    ],
    nextQuestions: [
      "Can a versioned dataset with subject-independent train, validation, and test splits support a defensible inspection baseline?",
      "What sensing and synchronization are required for closed-loop inspection on the restored physical arms?",
    ],
    provenance: [
      "Vendor ROS packages and workspaces are upstream; the contribution is restoration, environment integration, custom scripts, synthetic-data tooling, and documentation.",
      "The thermal hotspot detector is not in a public repository; the linked CV-YOLO-Inspection repository is related synthetic-data tooling for beverage-can inspection, built with the same Blender-to-YOLO approach.",
      "No mAP, accuracy, thermal-image count, live thermal feed, or closed-loop hardware-inspection result is claimed because the audited repositories do not support those statements.",
    ],
    architectureSummary: "The supported work has three layers: recover the robot controllers, rebuild the ROS planning environment, and develop synthetic-data/detection tooling. A valid held-out detector evaluation remains future work rather than a retroactive claim.",
    architectureNodes: ["Legacy robot diagnostics", "Recovered controller + OS", "ROS / MoveIt / Gazebo workstation", "Synthetic image + label generation", "YOLO experimentation with held-out evaluation still required"],
    evidence: [
      { label: "Restoration record", hint: "", status: "available", value: "Controller photographs, boot/SDK errors, repair notes, ROS workspaces, and troubleshooting guide." },
      { label: "Synthetic-data tooling", hint: "", status: "available", value: "Blender assets, generation scripts, automatic labels, and inspection examples." },
      { label: "Research recognition", hint: "", status: "available", value: "2nd Place, FLC Physics & Engineering Symposium 2025, the highest-placing solo project." },
      { label: "Metric boundary", hint: "", status: "available", value: "An earlier detector metric was removed after the evidence audit found no valid held-out artifact." },
      { label: "Real-panel check", hint: "", status: "available", value: "Saved thermal frames (August 2025) from a Baxter-held camera showing the detector flagging a heat-gun-induced hotspot on small test modules — qualitative only." },
    ],
    metrics: [
      { label: "Robots restored", value: "2", hint: "Sawyer and Baxter." },
      { label: "Symposium", value: "2nd place", hint: "Highest-placing solo project, FLC P&E 2025." },
      { label: "Inspection tooling", value: "Qualitative", hint: "No held-out metric preserved." },
      { label: "Research mode", value: "Prototype", hint: "Not closed-loop validation." },
    ],
    limitations: [
      "The public vision repositories do not preserve a valid train/validation/test split or the previously stated detector results.",
      "Simulation, synthetic inspection examples, and restored hardware do not establish a closed-loop autonomous inspection system.",
      "The Baxter troubleshooting repository is a practical reference, not sole proof of every repair event.",
    ],
    lessons: [
      "Restoration work can be the highest-leverage research contribution when the platform is otherwise unusable.",
      "Train-as-validation output can make a model look excellent while providing no evidence of generalization.",
      "Removing an unsupported metric makes the remaining systems work more credible.",
    ],
    media: [
      { kind: "image", src: "/media/pv-baxter-rviz.webp", alt: "Baxter robot model running in RViz after workstation restoration", caption: "Recovered ROS visualization and programming environment." },
      { kind: "image", src: "/media/pv-gazebo.webp", alt: "Industrial robot simulation in Gazebo", caption: "Motion-planning and simulation workstation." },
      { kind: "image", src: "/media/pv-detection-grid.webp", alt: "Restored Baxter robot positioned over a test panel", caption: "Restored Baxter over a test panel — tooling-development evidence, not a held-out metric." },
      { kind: "image", src: "/media/pv-real-panel-thermal-hotspot-1.jpg", alt: "Thermal camera frame of four small test modules with a detector box labelled hotspot on the heated cell", caption: "Saved thermal frame (Aug 2025) from the camera held by Baxter's end effector: the detector boxes the heat-gun-induced hotspot on one of four small test modules. Qualitative check, not a held-out metric." },
      { kind: "image", src: "/media/pv-real-panel-thermal-hotspot-2.jpg", alt: "Second thermal frame from a different camera position with the same heated cell flagged as a hotspot", caption: "Second saved frame from a different camera position — the same heated cell is flagged again. Qualitative check, not a held-out metric." },
    ],
    artifacts: [
      { kind: "repo", label: "Related synthetic-data tooling (can inspection)", href: "https://github.com/Janga786/CV-YOLO-Inspection" },
      { kind: "repo", label: "Baxter field guide", href: "https://github.com/Janga786/Baxter-Troubleshooting" },
      { kind: "repo", label: "ROS workstation", href: "https://github.com/Janga786/Baxter-Sawyer_Work_Station_Windows" },
    ],
    seoDescription: "Solo summer research: reviving discontinued Rethink Sawyer and Baxter robots, rebuilding a ROS/MoveIt/Gazebo workstation, and a synthetic-data thermal hotspot detector; 2nd place, FLC Physics & Engineering Symposium 2025.",
    sortOrder: 7,
  },

  {
    slug: "embedded-hardware-systems",
    title: "Embedded, FPGA & Board-Level Systems",
    shortTitle: "Embedded Systems Portfolio",
    category: "embedded",
    status: "validated-library",
    featured: false,
    isPlaceholder: false,
    dateLabel: "2023 – 2026",
    oneLiner: "Hardware foundation: bring-up of FLC's ATmega2560 course board, a custom ATmega2560 board design (Eagle, Gerbers; not fabricated), register-level timer and ADC sketches, Basys 3 FPGA labs, and CMOS designs in SPICE simulation.",
    summary: "These projects are the hardware foundation beneath the robotics work. I soldered and brought up Fort Lewis College's ATmega2560 course board and wrote its embedded C drivers (GPIO, PWM, ADC, UART), and earned an A in CE 433 Embedded Devices, an FPGA design course. The public repositories hold course-sized work: a two-layer ATmega2560 board I designed in Eagle (Gerbers exported; not fabricated), a register-level ADC sampler at 40 kHz, an IR serial link with addressing and checksum (from a course lab template), timer-interrupt music sketches, Verilog labs on a Basys 3 (Artix-7) including PicoBlaze systems and an XADC serial link checked on an oscilloscope, and schematic-level CMOS designs (an 8-bit ALU, a mirror full adder, a ring oscillator) simulated in SPICE with AMI C5 0.6 µm models. The self-balancing folder holds component bring-up sketches, not a balancing controller.",
    role: "Individual coursework and project collection — firmware, HDL, PCB layout, SPICE decks, and documentation",
    teamContext: "Undergraduate course projects (CE 351 microcontrollers, CE 433 Embedded Devices, Digital VLSI), curated into public repositories later.",
    collaborators: "Individual undergraduate course projects.",
    upstreamSystems: "Arduino Mega reference architecture, ATmega2560 documentation, course lab templates, Vivado, Xilinx PicoBlaze, textbook Verilog listings, Electric VLSI, and AMI C5 SPICE models.",
    stack: ["C / C++", "ATmega2560", "Verilog", "Vivado", "Eagle PCB", "Gerbers", "SPICE"],
    tags: ["embedded", "FPGA", "PCB", "register-level"],
    problem: "Build enough low-level fluency to reason about sensing, timing, protocols, power, and hardware interfaces without treating the robot as a black box.",
    systemType: "Curated embedded / digital / PCB / VLSI course-project collection",
    whyItMatters: "Robot learning systems still fail at clocks, registers, connectors, signal paths, and power rails; this work makes those layers inspectable.",
    contributions: [
      "Soldered and brought up FLC's ATmega2560 course board; the course sketches run on it.",
      "Designed a two-layer, 160 × 100 mm ATmega2560 board in Eagle based on the Arduino Mega reference architecture, with Gerber, drill, and pick-and-place files; the board was not fabricated.",
      "Set up Timer1 and the ADC by register to sample at 40 kHz, store 256 samples after a threshold trigger, and estimate frequency from zero crossings.",
      "Built an IR serial link with addressing and checksum (from a course lab template) and timer-interrupt music sketches.",
      "Wrote Verilog labs on a Basys 3, including PicoBlaze systems and an XADC serial link checked on an oscilloscope, and simulated schematic-level CMOS designs in SPICE.",
    ],
    methodology: [
      "Moved from transistor-level CMOS design in simulation through FPGA labs, register-level microcontroller work, a serial link, and a two-layer board layout.",
      "Separated schematic/layout completion, manufacturing-file export, fabrication, assembly, and bring-up as different hardware milestones.",
    ],
    experimentalDesign: [
      "Used SPICE simulation, register-level timing checks, peripheral bring-up sketches, on-board FPGA runs with oscilloscope captures, and design-rule outputs as appropriate to each artifact.",
      "No validation of a fabricated copy of the custom board is presented because it was not fabricated.",
    ],
    failureAnalysis: [
      "Timing, protocol state, sensor wiring, and power interfaces exposed failure modes that high-level frameworks normally hide.",
      "Several folders stop at component bring-up, so they cannot support claims about a complete closed-loop robot.",
    ],
    nextQuestions: [
      "Which board-level design should be fabricated and instrumented for a complete bring-up record?",
      "How can the low-level timing and sensing work be connected to a repeatable closed-loop robotics experiment?",
    ],
    provenance: [
      "The custom board follows the Arduino Mega reference architecture; it is a design, not a novel microcontroller platform, and it was not fabricated.",
      "The IR link started from a course lab template; the PicoBlaze files are Xilinx's; some Verilog modules are adapted from textbook listings; two SPICE decks started from course example cells. CMOS results are from simulation only.",
    ],
    architectureSummary: "The portfolio moves from transistor-level CMOS design (in simulation) to FPGA modules, microcontroller peripherals, a serial link, and a board layout, with explicit timing and interfaces at every level.",
    architectureNodes: ["CMOS + digital logic (SPICE)", "FPGA modules", "ATmega2560 peripherals", "Firmware timing + serial link", "Two-layer PCB design + Gerbers"],
    evidence: [
      { label: "Board design", hint: "", status: "available", value: "Two-layer Eagle schematic/layout and Gerbers; fabrication not claimed." },
      { label: "Register-level timing", hint: "", status: "available", value: "Timer1-triggered ADC conversions at 40 kHz with an interrupt-driven sample buffer." },
      { label: "Serial link", hint: "", status: "available", value: "IR serial link with addressing and checksum (from a course lab template)." },
      { label: "Scope boundary", hint: "", status: "available", value: "Component bring-up is labeled separately from a complete closed-loop robot; CMOS work is simulation only." },
    ],
    metrics: [
      { label: "ADC sample rate", value: "40 kHz", hint: "Register-level sampler." },
      { label: "PCB layers", value: "2", hint: "Design with Gerbers." },
      { label: "Target MCU", value: "ATmega2560", hint: "Mega-class board." },
      { label: "Fabrication", value: "Not claimed", hint: "Design files only." },
    ],
    limitations: [
      "The repositories package work from several courses; public upload dates are not project dates.",
      "The custom board was designed, not fabricated or assembled.",
      "Some folders are peripheral bring-up exercises, not complete embedded products.",
    ],
    lessons: [
      "Precise scope language matters in hardware: designed, fabricated, assembled, and validated are different milestones.",
      "Register-level work builds intuition for the timing and bandwidth constraints hidden by high-level robotics frameworks.",
      "Breadth is most useful when tied back to concrete robot interfaces rather than presented as a catalog.",
    ],
    media: [
      {
        kind: "image",
        src: "/media/embedded-pcb-layout.png",
        alt: "Two-layer Arduino-Mega-class PCB layout in the board editor",
        caption:
          "Documented board layout with routed signals and copper layers; design files and Gerbers exist, but fabrication is not claimed.",
      },
      {
        kind: "diagram",
        src: "/diagrams/embedded-stack.svg",
        alt: "Embedded systems portfolio from CMOS and FPGA through firmware and a two-layer PCB",
        caption: "Hardware breadth from logic through board-level implementation.",
      },
    ],
    artifacts: [
      { kind: "repo", label: "Microcontroller portfolio", href: "https://github.com/Janga786/arduino-mega-microcontrollers" },
      { kind: "repo", label: "FPGA portfolio", href: "https://github.com/Janga786/basys3-fpga-portfolio" },
      { kind: "repo", label: "CMOS SPICE designs", href: "https://github.com/Janga786/cmos-vlsi-spice-portfolio" },
    ],
    seoDescription: "Embedded systems portfolio: ATmega2560 course-board bring-up, a 40 kHz register-level ADC sampler, an IR serial link, Basys 3 FPGA labs, CMOS SPICE simulation, and a two-layer ATmega2560 PCB design with Gerbers.",
    sortOrder: 8,
  },

  {
    slug: "kdur-data-platform",
    title: "KDUR Community Radio Data Platform",
    shortTitle: "KDUR Data Platform",
    category: "product",
    status: "selected",
    featured: false,
    isPlaceholder: false,
    dateLabel: "Aug 2024 – Oct 2025",
    oneLiner: "A Power Apps catalog and scheduling system built with a community radio station and designed for 60+ daily users, plus embedding and graph-database prototypes — handed off before deployment and since deployed by the station on another platform built on my work.",
    summary: "Working with Fort Lewis College's KDUR radio station, I designed and built a Power Apps data application for the music library and station workflows. The intended population was more than 60 daily DJs and staff members. I later explored an applied-AI layer: vector embeddings for artist-name normalization and a Neo4j prototype with natural-language-to-Cypher agents. When I moved full-time into robotics research, the application was handed off before deployment; the station (KDUR) has since deployed the system on another platform built on my work. The project demonstrates user-centered data modeling, prototyping, and handoff; no active-user count is claimed.",
    role: "Research Assistant, AI & Data (paid, solo project) — application design, data modeling, embedding prototype, graph-database exploration, and handoff",
    teamContext: "Paid, solo project under Dr. Matthew Welz, built with KDUR stakeholders; intended users informed requirements.",
    advisor: "Dr. Matthew Welz, Fort Lewis College",
    collaborators: "KDUR staff and intended users contributed workflow requirements and feedback.",
    upstreamSystems: "Microsoft Power Apps, vector-embedding services, Neo4j, and natural-language-to-Cypher tooling.",
    stack: ["Power Apps", "Python", "Vector embeddings", "Neo4j", "Cypher", "Data modeling"],
    tags: ["product", "data platform", "embeddings", "community"],
    problem: "Replace fragmented music-library and scheduling workflows while reducing artist-name inconsistency that can affect search and royalty records.",
    systemType: "Stakeholder-informed application + applied-AI prototypes",
    whyItMatters: "It adds product judgment and real stakeholder collaboration while keeping my handoff distinct from the station's later deployment.",
    contributions: [
      "Mapped station entities and workflows into a relational Power Apps application for songs, albums, artists, locations, and schedules.",
      "Designed the interface around an intended population of more than 60 daily station users.",
      "Built an embedding-based artist-name resolution prototype and explored a graph representation in Neo4j.",
      "Prototyped natural-language-to-Cypher access for catalog questions.",
      "Documented and handed off the application when research priorities shifted to robotics.",
    ],
    methodology: [
      "Mapped stakeholder workflows into a structured catalog and scheduling model, then prototyped artist-name resolution with embeddings and relationship exploration in Neo4j.",
      "Kept the delivered application and later AI experiments distinct so prototype capabilities do not imply production adoption.",
    ],
    experimentalDesign: [
      "Requirements were informed by an intended population of more than 60 daily station users, but no production telemetry or adoption study was preserved.",
      "The project is therefore evaluated through application artifacts, data models, prototypes, and handoff evidence rather than user-impact metrics.",
    ],
    failureAnalysis: [
      "The absence of deployment telemetry prevents claims about active users, reliability, or workflow impact.",
      "Embedding and natural-language graph-query prototypes were not validated as station services.",
    ],
    nextQuestions: [
      "What deployment and telemetry plan would allow station adoption and data-quality improvements to be measured?",
      "Can entity-resolution accuracy be evaluated against a labeled catalog before adding a natural-language query layer?",
    ],
    provenance: [
      "More than 60 refers to the intended daily user population supplied by the station, not measured active users of a deployed application.",
      "The Power Apps system was handed off before deployment; the station has since deployed the system on another platform built on my work. The embedding and graph layers remained research prototypes.",
    ],
    architectureSummary: "Station workflows feed a structured catalog application; separate experiments test whether embeddings can normalize artist names and whether graph queries can provide a more natural discovery interface.",
    architectureNodes: ["KDUR stakeholder workflows", "Power Apps catalog + schedules", "Structured station data", "Embedding name resolution", "Neo4j / NL-to-Cypher prototype"],
    evidence: [
      { label: "Application artifact", hint: "", status: "available", value: "Power Apps screens, data model, and project poster." },
      { label: "Data work", hint: "", status: "available", value: "Catalog-processing scripts, CSV exports, embedding experiments, and graph prototype." },
      { label: "Stakeholder context", hint: "", status: "available", value: "Designed with station workflows and an intended population of more than 60 daily users." },
      { label: "Status boundary", hint: "", status: "available", value: "Handed off before deployment; since deployed by the station on another platform from my work. No active-user count is claimed." },
    ],
    metrics: [
      { label: "Intended users", value: "60+ daily", hint: "Station population, not active users." },
      { label: "Deployment", value: "Handed off", hint: "Since deployed by the station on another platform." },
      { label: "AI layer", value: "Prototype", hint: "Embeddings + graph queries." },
      { label: "Domain", value: "Community radio", hint: "KDUR at FLC." },
    ],
    limitations: [
      "No active-user count is claimed: the application was handed off before deployment, and the station's later deployment runs on another platform.",
      "Embedding and natural-language graph-query experiments were prototypes, not validated station services.",
      "The project should support a product/leadership narrative rather than displace stronger robotics evidence.",
    ],
    lessons: [
      "Intended users and active users are different metrics.",
      "A clean handoff is a legitimate project outcome when priorities change, provided status remains explicit.",
      "Stakeholder work improved the ability to translate ambiguous needs into data structures and interfaces.",
    ],
    media: [
      { kind: "image", src: "/media/kdur-app.webp", alt: "KDUR Power Apps radio-station catalog interface", caption: "Application interface built for station library and workflow needs." },
      { kind: "diagram", src: "/diagrams/kdur-platform.svg", alt: "KDUR application, handoff status, and separate applied-AI prototypes", caption: "Built application and research prototypes, with handoff status explicit." },
      { kind: "image", src: "/media/kdur-graph.webp", alt: "Neo4j graph prototype for radio catalog relationships", caption: "Graph-database exploration for catalog relationships and natural-language querying." },
    ],
    artifacts: [{ kind: "diagram", label: "System diagram", href: "/diagrams/kdur-platform.svg" }],
    seoDescription: "A KDUR community-radio data application designed for 60+ intended daily users, with embedding and Neo4j prototypes, explicitly labeled as handed off before deployment and since deployed by the station on another platform built on my work.",
    sortOrder: 9,
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.sortOrder - b.sortOrder);

export const allProjects = [...projects].sort(
  (a, b) => a.sortOrder - b.sortOrder,
);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getCategory(id: string): CategoryMeta | undefined {
  return categories.find((category) => category.id === id);
}

export function adjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const index = allProjects.findIndex((project) => project.slug === slug);
  if (index === -1) return {};
  return {
    prev: allProjects[index - 1],
    next: allProjects[index + 1],
  };
}
