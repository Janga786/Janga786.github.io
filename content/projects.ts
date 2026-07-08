import type { CategoryMeta, Project } from "@/lib/types";

/**
 * Project entries.
 *
 * HOW TO REPLACE A PLACEHOLDER WITH A REAL PROJECT
 * ------------------------------------------------
 * 1. Set `title`, `oneLiner`, `summary`, `problem`, `whyItMatters` to the real story.
 * 2. Fill `contributions` with YOUR specific work; put team context in `teamContext`.
 * 3. Replace `evidence` slot statuses with "available" + real values as you attach
 *    diagrams, videos, metrics, and logs. Add `artifacts` links (repo/report/video).
 * 4. Replace `metrics` hints with measured values. NEVER estimate — measure or omit.
 * 5. Set `isPlaceholder: false` and adjust `status` ("featured" | "selected").
 * 6. Keep `limitations` and `lessons` honest — admissions readers trust candor.
 *
 * All facts below come from Jangara's published record (LinkedIn/GitHub).
 * Strings starting with "[" are fill-in prompts and render as editor notes.
 */

export const categories: CategoryMeta[] = [
  {
    id: "embodied-ai",
    label: "Embodied AI · Deployment",
    evidenceNote:
      "Strong evidence here: video of the real system running, a topology diagram, measured latency, and documented failure modes.",
  },
  {
    id: "multimodal",
    label: "Multimodal · Vision-Language",
    evidenceNote:
      "Strong evidence here: task definition, model/interface choices, qualitative examples, and failure analysis.",
  },
  {
    id: "perception",
    label: "Vision & Perception",
    evidenceNote:
      "Strong evidence here: sensing setup, metrics (mAP / precision / recall), a pipeline diagram, and edge-case behavior.",
  },
  {
    id: "rl-simulation",
    label: "RL & Simulation",
    evidenceNote:
      "Strong evidence here: training setup, reward design, benchmark plots, and honest sim-to-real notes.",
  },
  {
    id: "systems-integration",
    label: "Systems Integration",
    evidenceNote:
      "Strong evidence here: hardware/software architecture, middleware and interface design, and debugging narratives.",
  },
  {
    id: "embedded",
    label: "Embedded & Edge",
    evidenceNote:
      "Strong evidence here: board/FPGA context, timing and power constraints, and integration test results.",
  },
  {
    id: "product",
    label: "Product & Entrepreneurship",
    evidenceNote:
      "Strong evidence here: a real user problem, prototype architecture, customer reasoning, and what was learned.",
  },
  {
    id: "research",
    label: "Research & Investigation",
    evidenceNote:
      "Strong evidence here: a crisp question, method, evaluation setup, synthesis, and limitations.",
  },
];

export const projects: Project[] = [
  /* ────────────────────────────────────────────────────────────────────
   * 1 · Vision-language navigation deployed on a Booster K1 humanoid
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "vla-navigation-booster-k1",
    title: "Vision-Language Navigation on a Booster K1 Humanoid",
    shortTitle: "VLA Navigation · Booster K1",
    category: "embodied-ai",
    status: "featured",
    featured: true,
    isPlaceholder: false,
    dateLabel: "May 2026 – present",
    oneLiner:
      "An 8B vision-language-action model, a three-machine inference relay, and a humanoid that walks toward natural-language goals.",
    summary:
      "Sim-to-real research on the Booster K1 humanoid, led under Dr. Yiyan Li at Fort Lewis College. Give the robot an instruction like \"walk to the volleyball and turn 90 degrees\" and a NaVILA-style vision-language model interprets the camera feed, reasons about the scene, and emits actions in plain language — \"move forward 75 cm\" — which are translated into real-time velocity commands for a reinforcement-learned locomotion policy. NaVILA (UCSD + NVIDIA, RSS 2025) had no open implementation for the Booster K1; this deployment was built from the paper up. The architecture is two-tiered: vision-language planning at roughly 1 Hz over a 50 Hz RL locomotion policy.",
    role: "Research lead — model deployment, relay design, robot integration, debugging",
    teamContext:
      "Research assistant under Dr. Yiyan Li, Fort Lewis College — leading the sim-to-real research effort.",
    stack: [
      "NaVILA-style 8B VLA",
      "Booster K1",
      "RTX 5090 inference",
      "Isaac Sim / Isaac Lab",
      "Python",
      "Robot SDK velocity control",
    ],
    tags: ["VLA", "navigation", "humanoid", "deployment", "sim-to-real"],
    problem:
      "Vision-language navigation results are usually reported in simulation. Getting the same behavior out of a real humanoid means solving distribution shift, latency, and control-loop problems the benchmark never mentions.",
    systemType: "Real-robot deployment · distributed inference/control loop",
    whyItMatters:
      "Language-directed navigation is a building block for useful humanoids. The gap between a benchmark score and a robot that actually walks where you ask is exactly the gap this research explores.",
    contributions: [
      "Reproduced the NaVILA pipeline for the Booster K1 with no open reference implementation — built from the paper up.",
      "Set up 8B VLA model inference on an RTX 5090 workstation and connected it to the robot over a relay/control machine.",
      "Built the loop: robot camera stream → inference → action decoding → SDK velocity commands back to the K1, pairing ~1 Hz planning with 50 Hz locomotion.",
      "Debugged real-deployment issues end to end — timing, framing, drift, and recovery problems that never appear in simulation.",
    ],
    architectureSummary:
      "Three machines share one control loop. The K1 streams camera frames to a relay/control node; frames are forwarded to the inference workstation where the 8B VLA produces navigation actions at roughly 1 Hz; actions are translated into velocity commands consumed by the 50 Hz locomotion policy. Telemetry flows back for monitoring and evaluation.",
    architectureNodes: [
      "Booster K1 — camera stream + SDK",
      "Relay / control machine",
      "Inference workstation — RTX 5090 · 8B VLA",
      "Velocity commands → robot",
      "Telemetry & evaluation",
    ],
    evidence: [
      {
        label: "Demo video",
        hint: "",
        status: "available",
        value: "Embedded above — the K1 walking to a volleyball on a natural-language instruction.",
      },
      {
        label: "Architecture diagram",
        hint: "",
        status: "available",
        value: "Topology diagram in the gallery — machines, links, and loop rates.",
      },
      {
        label: "Inference latency",
        hint: "",
        status: "available",
        value: "~350 ms per inference step, shown live in the system overlay.",
      },
      {
        label: "Failure-mode log",
        hint: "Documented on-hardware failures and recovery behavior (with clips or logs).",
        status: "pending",
      },
      {
        label: "Instruction success protocol",
        hint: "Define the eval protocol (instructions, environments, n) before reporting rates.",
        status: "pending",
      },
    ],
    metrics: [
      { label: "Inference latency", value: "~350 ms / step", hint: "Measured live in the deployment overlay." },
      { label: "Planning rate", value: "~1 Hz", hint: "Vision-language planning tier." },
      { label: "Locomotion control rate", value: "50 Hz", hint: "RL policy trained in Isaac Sim." },
      { label: "Instruction success rate", hint: "Define the eval protocol first; report n." },
    ],
    limitations: [
      "Vision-based humanoid navigation remains brittle; much of the current work is mapping exactly where the system breaks down and why.",
      "Evaluation on real hardware is still informal — success criteria need to be pinned down before quantitative claims are made.",
    ],
    lessons: [
      "The model is rarely the bottleneck; the seams between machines are. Most debugging time went to the loop, not the network weights.",
      "Instruction-following demos hide a long tail — the gap between one good run and a reliable system is the actual research problem.",
      "Simulation results set expectations that hardware immediately renegotiates; treating deployment as its own engineering discipline was the unlock.",
    ],
    media: [
      {
        kind: "video",
        src: "/media/k1-walk-to-volleyball.mp4",
        poster: "/media/k1-walk-to-volleyball-poster.jpg",
        alt: "The Booster K1 humanoid walking toward a volleyball after receiving a natural-language instruction",
        caption: "\"Walk to the volleyball\" — end-to-end run on real hardware.",
      },
      {
        kind: "diagram",
        src: "/diagrams/vla-topology.svg",
        alt: "Three-machine deployment topology: Booster K1, relay/control node, and RTX 5090 inference workstation with loop rates",
        caption: "Deployment topology with measured loop rates.",
      },
      {
        kind: "video",
        src: "/media/me-with-k1.mp4",
        poster: "/media/me-with-k1-poster.jpg",
        alt: "Jangara working with the Booster K1 humanoid in the lab",
        caption: "Working with the K1 in the lab.",
      },
      {
        kind: "image",
        src: "/media/mujoco.webp",
        alt: "Simulated humanoid walking during training and validation",
        caption: "Simulation side of the sim-to-real loop.",
      },
    ],
    artifacts: [
      { kind: "video", label: "Deployment demo", href: "/media/k1-walk-to-volleyball.mp4" },
      { kind: "diagram", label: "System topology", href: "/diagrams/vla-topology.svg" },
      { kind: "report", label: "Deployment report" },
      { kind: "logs", label: "Run logs" },
    ],
    seoDescription:
      "Deploying a NaVILA-style 8B vision-language-action model on a Booster K1 humanoid: ~1 Hz VLA planning over a 50 Hz RL locomotion policy across a three-machine inference relay.",
    sortOrder: 1,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 2 · X-embodiment language-grounded manipulation benchmark (in progress)
   * All statements grounded in the repo state at tag v0.3.1 — no empirical
   * claims until Phase B produces real numbers.
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "xembench",
    title: "X-Embodiment Language-Grounded Manipulation Benchmark",
    shortTitle: "X-Embodiment Benchmark",
    category: "research",
    status: "in-progress",
    featured: true,
    isPlaceholder: false,
    dateLabel: "2026 · Phase B pending",
    oneLiner:
      "A ManiSkill3 benchmark foundation for measuring language-grounded manipulation transfer between a tabletop arm and a humanoid upper body through a shared canonical action interface.",
    summary:
      "An in-progress benchmark that treats embodiment transfer as a measurable systems problem. A shared language-conditioned policy stack emits actions in a canonical 21-dimensional interface; thin robot-specific adapters translate them for either a Panda/Franka-style tabletop arm or a Unitree G1 humanoid upper body in ManiSkill3. Identical tasks, language splits, and evaluation protocol on both bodies make the interesting quantity directly computable: how much performance survives when only the robot changes. The benchmark infrastructure is complete — environments, demonstration pipeline, baseline scaffolding, failure taxonomy, and the reproducibility layer, frozen pre-Linux at tag v0.3.1 — and readiness checks on the RTX 5090 Linux workstation have passed, including motion-planning and humanoid-environment shakedowns. Phase B, the real training and evaluation runs, is pending — and with it all empirical results.",
    role: "Creator — benchmark architecture, environments, evaluation design, reproducibility engineering",
    teamContext:
      "Solo project, developed independently alongside the Booster K1 research.",
    stack: [
      "ManiSkill3",
      "Python",
      "PyTorch",
      "Panda / Franka-style arm",
      "Unitree G1 (upper body)",
      "HDF5",
      "Behavior Cloning",
      "PPO",
    ],
    tags: [
      "embodied AI",
      "robot learning",
      "manipulation",
      "cross-embodiment transfer",
      "canonical action interface",
      "benchmarking",
      "imitation learning",
      "reinforcement learning",
      "failure analysis",
      "humanoid",
    ],
    problem:
      "Robot policies are increasingly expected to generalize across tasks, scenes, and bodies. This benchmark asks a narrower, measurable question: when language, task structure, and policy architecture are held fixed, how much manipulation performance survives a change in embodiment — and where exactly does it drop?",
    systemType: "Simulation benchmark · cross-embodiment evaluation infrastructure",
    whyItMatters:
      "Cross-embodiment transfer is a central open question for physical AI. Claims about it need benchmarks with leakage-proof splits and honest failure accounting — the infrastructure this project builds before drawing any conclusions.",
    contributions: [
      "Designed the cross-embodiment benchmark structure around a shared canonical 21-dimensional action interface, with thin per-robot adapters for Panda, Panda-stick, and the Unitree G1 upper body.",
      "Implemented language-conditioned task pathways for both embodiments in ManiSkill3, with leakage-proof held-out paraphrase and held-out color/object splits designed in before any training.",
      "Built the HDF5 demonstration pipeline with validation, plus a Behavior Cloning baseline and PPO fine-tuning scaffolding.",
      "Added episode-level evaluation records, a failure taxonomy, transfer-drop and retention metrics, and artifact-pack generation — rehearsed end-to-end on deterministic synthetic data.",
      "Hardened the repo for reproducibility: full smoke checks, documentation, a Linux Phase B runbook, and a pre-Linux freeze at tag v0.3.1 — the repo-wide suite now stands at 187 fast + 5 simulation tests with the data-flywheel layer included.",
      "Completed Linux/RTX 5090 readiness before training: motion-planning (mplib) demonstration collection shaken down end-to-end, the G1 humanoid environments verified on the training machine, and a G1 hand-sign bug found and fixed by a dedicated check script — before it could silently corrupt every grasp demonstration.",
    ],
    architectureSummary:
      "A language instruction is drawn from a train or held-out paraphrase split and fed to the shared policy stack, which emits actions in the canonical 21-D interface. A robot adapter translates them for the Panda or G1 environment, and evaluation episodes stream into transfer, failure, and artifact reports. The same path runs unchanged for either body — that symmetry is the experiment.",
    architectureNodes: [
      "Language instruction — paraphrase / holdout splits",
      "Shared policy stack — BC baseline · PPO scaffold",
      "Canonical 21-D action interface",
      "Robot adapter — Panda | Unitree G1",
      "Eval episodes → transfer, failure & artifact reports",
    ],
    evidence: [
      {
        label: "Test suite",
        hint: "",
        status: "available",
        value: "187 fast + 5 simulation tests passing; full smoke check green.",
      },
      {
        label: "Reproducibility freeze",
        hint: "",
        status: "available",
        value: "Tagged v0.3.1 pre-Linux — pinned pipeline, docs, and a Phase B runbook.",
      },
      {
        label: "Linux / RTX 5090 readiness",
        hint: "",
        status: "available",
        value: "Workstation prep passed: Panda motion-planning shakedown clean, G1 environment shakedown clean, and a hand-sign action bug caught and fixed before any training.",
      },
      {
        label: "Artifact-pack rehearsal",
        hint: "",
        status: "available",
        value: "Reporting pipeline rehearsed end-to-end on deterministic synthetic toy data — explicitly not real results.",
      },
      {
        label: "Benchmark results",
        hint: "All real training and evaluation numbers await Phase B on the RTX 5090 Linux workstation.",
        status: "pending",
      },
      {
        label: "Rollout videos",
        hint: "Demo videos will accompany Phase B evaluation runs.",
        status: "pending",
      },
    ],
    metrics: [
      { label: "Cross-embodiment transfer success", hint: "Pending Phase B — no real numbers exist yet." },
      { label: "Transfer retention", hint: "Arm-to-humanoid retention ratio; pending Phase B." },
      { label: "G1 expert success gate", hint: "Pending Phase B validation." },
      { label: "BC / PPO evaluation matrix", hint: "Pending Phase B training runs." },
      { label: "Test suite", value: "187 + 5", hint: "Fast + simulation tests, all passing." },
      { label: "Pre-Linux freeze", value: "v0.3.1", hint: "Reproducibility tag." },
    ],
    limitations: [
      "Real benchmark results are pending Linux Phase B — the current contribution is the reproducible benchmark foundation, not final empirical conclusions.",
      "The failure taxonomy has its infrastructure in place ahead of full per-environment instrumentation; until then most failure labels resolve to timeout-level granularity.",
      "A diffusion-policy baseline is a stretch goal, not a current result.",
    ],
    lessons: [
      "Benchmarks earn trust through their splits: leakage-proof paraphrase and object holdouts were designed in before any training, so later claims can't quietly overfit.",
      "Rehearsing the full reporting pipeline on labeled synthetic data separates infrastructure bugs from science before any GPU-hours are spent.",
    ],
    media: [
      {
        kind: "diagram",
        src: "/diagrams/xembench-pipeline.svg",
        alt: "Benchmark pipeline: a language instruction passes through paraphrase and holdout splits into a shared policy stack, a canonical 21-dimensional action interface, and robot adapters for a Panda arm or Unitree G1 upper body, ending in evaluation and transfer reports",
        caption: "Benchmark pipeline — the same path runs unchanged for either embodiment.",
      },
    ],
    artifacts: [
      { kind: "repo", label: "Code (private — public release pending)" },
      { kind: "report", label: "Benchmark report" },
      { kind: "logs", label: "Artifact pack (real Phase B results)" },
      { kind: "video", label: "Rollout videos" },
    ],
    seoDescription:
      "An in-progress ManiSkill3 benchmark measuring language-grounded manipulation transfer between a Panda-style arm and a Unitree G1 humanoid upper body via a shared canonical action interface. Benchmark infrastructure complete and Linux-ready; Phase B results pending.",
    sortOrder: 2,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 3 · Physical AI Data Flywheel (in progress)
   * Grounded in the repo state: Mac-safe foundation complete, all outputs
   * synthetic/toy — no real flywheel experiments have run yet.
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "physical-ai-data-flywheel",
    title: "Physical AI Data Flywheel",
    shortTitle: "Physical AI Data Flywheel",
    category: "research",
    status: "in-progress",
    featured: true,
    isPlaceholder: false,
    dateLabel: "2026 · foundation complete",
    oneLiner:
      "A closed-loop data-to-policy system that turns robot benchmark failures into targeted demonstration requests — then validates, trains, evaluates, and repeats.",
    summary:
      "Robot demonstrations are expensive, so which ones you collect matters. Instead of gathering more data at random, this flywheel — built inside the cross-embodiment benchmark — reads evaluation failures, generates candidate demonstration requests aimed at what actually failed, selects among them under an episode budget, validates the resulting dataset before any training touches it, and packages every round into a reproducible artifact with dataset cards and provenance. The Mac-safe foundation is complete: seventeen modules, typed schemas end to end, deterministic validation, five selection strategies, and a full toy round rehearsed on synthetic data with explicit warnings. The real collect–train–evaluate loop is pending Linux experiments, which are designed to test one falsifiable question: does failure-targeted data improve performance more efficiently than the same budget of random additional demonstrations?",
    role: "Creator — system design, schemas, validation, selection strategies, artifact pipeline",
    teamContext:
      "Solo project, built as a layer inside the x-embodiment benchmark codebase.",
    stack: [
      "Python",
      "xembench (ManiSkill3)",
      "Typed dataset / provenance schemas",
      "HDF5 validation",
      "Failure-driven candidate generation",
      "Artifact packaging",
    ],
    tags: [
      "data-centric AI",
      "robot learning",
      "embodied AI",
      "dataset validation",
      "provenance",
      "failure-driven data collection",
      "selection strategies",
      "cross-embodiment manipulation",
      "reproducibility",
    ],
    problem:
      "Robot-learning pipelines usually treat data collection as a fixed upfront cost: gather demonstrations, train, hope. But when a policy fails, those failures say exactly where the dataset is thin. The flywheel asks whether closing that loop — failures deciding what data comes next — beats collecting more of the same.",
    systemType: "Data-to-policy loop · dataset validation & selection infrastructure",
    whyItMatters:
      "Data quality and data choice are becoming the bottleneck of physical AI. A trustworthy flywheel needs validation, provenance, and honest accounting built in from the start — otherwise 'more data' quietly becomes 'more of the same failure modes'.",
    contributions: [
      "Designed the round loop: evaluation failures → failure analysis → candidate demonstration requests → budgeted selection → collection → dataset validation → training → re-evaluation → artifact packs.",
      "Built seventeen flywheel modules with typed schemas for provenance, dataset index records, quality issues, candidate demo requests, selection plans, dataset cards, model-card placeholders, and round manifests.",
      "Implemented deterministic dataset validation with quality scoring — datasets are checked before any training consumes them.",
      "Implemented five budgeted selection strategies — random, stratified, failure_targeted, diversity_greedy, and cost_aware_failure_targeted — so the core comparison (targeted vs. random) is a config switch, not a rewrite.",
      "Rehearsed the entire loop as a deterministic toy round producing synthetic artifact packs with explicit warnings, and generated Linux command plans without executing any training on the Mac.",
      "Covered the layer with 77 flywheel tests; the repo-wide suite stands at 187 fast + 5 simulation tests.",
    ],
    architectureSummary:
      "Evaluation episodes stream failure records into analysis; failures become candidate demonstration requests; a selection strategy spends a fixed episode budget across candidates; collected demonstrations pass deterministic validation before entering the training set; the retrained policy is re-evaluated, and the whole round — dataset card, validation report, plans, and comparisons — is packaged as a checksummed artifact. Then the loop runs again.",
    architectureNodes: [
      "Evaluation failures → failure analysis",
      "Candidate demonstration requests",
      "Budgeted selection — 5 strategies",
      "Collection → dataset validation",
      "Policy training → re-evaluation",
      "Round artifact pack — cards · provenance",
    ],
    evidence: [
      {
        label: "Flywheel foundation",
        hint: "",
        status: "available",
        value: "17 modules, typed schemas end to end, deterministic validation with quality scoring, and failure-driven candidate generation.",
      },
      {
        label: "Selection strategies",
        hint: "",
        status: "available",
        value: "random · stratified · failure_targeted · diversity_greedy · cost_aware_failure_targeted — all budgeted, all tested.",
      },
      {
        label: "Toy round rehearsal",
        hint: "",
        status: "available",
        value: "Deterministic end-to-end round on synthetic data, packaged into artifact packs with explicit synthetic-data warnings.",
      },
      {
        label: "Test suite",
        hint: "",
        status: "available",
        value: "77 flywheel tests; repo-wide suite at 187 fast + 5 simulation tests, all passing.",
      },
      {
        label: "Real flywheel rounds",
        hint: "The collect–train–evaluate loop on real data awaits Linux experiments; all current outputs are synthetic/toy.",
        status: "pending",
      },
      {
        label: "Targeted-vs-random experiment",
        hint: "Pre-registered comparison: baseline vs. +random demos vs. +failure-targeted demos at equal budget.",
        status: "pending",
      },
    ],
    metrics: [
      { label: "Improvement per demonstration", hint: "The flywheel's headline metric; pending real Linux rounds." },
      { label: "Failure-targeted vs. random selection", hint: "Equal-budget comparison; pending real experiments." },
      { label: "Dataset quality score", hint: "Computed by validation on real collected data; pending." },
      { label: "Flywheel modules", value: "17", hint: "Typed, tested, Mac-safe." },
      { label: "Flywheel tests", value: "77", hint: "Within a 187 + 5 repo-wide suite." },
    ],
    limitations: [
      "Mac-safe foundation complete; the real data/training/evaluation loop is pending Linux experiments — no flywheel results exist yet.",
      "All current flywheel outputs are synthetic/toy and are explicitly labeled as such unless marked real later.",
      "Failure targeting currently works at the granularity of the benchmark's existing failure labels; sharper targeting lands with richer per-episode instrumentation.",
      "Designed and rehearsed on one benchmark (xembench); generality beyond it is a hypothesis, not a claim.",
    ],
    lessons: [
      "Validation belongs before training, not after a bad run: a dataset the pipeline can't trust is a result you can't trust.",
      "Making 'which data next?' a typed, budgeted, testable decision turns a vague intuition — failures should guide collection — into an experiment with a falsifiable answer.",
    ],
    media: [
      {
        kind: "diagram",
        src: "/diagrams/flywheel-loop.svg",
        alt: "Physical AI data flywheel loop: evaluation failures flow into failure analysis, candidate demonstration requests, budgeted selection, collection and dataset validation, policy training and re-evaluation, and round artifact packs — which feed the next round",
        caption: "One flywheel round — failures decide what data gets collected next.",
      },
    ],
    artifacts: [
      { kind: "repo", label: "Code (private — public release pending)" },
      { kind: "report", label: "Flywheel experiment report" },
      { kind: "logs", label: "First real round artifact pack" },
    ],
    seoDescription:
      "A closed-loop data-to-policy system for robot learning: benchmark failures drive targeted demonstration requests, datasets are validated before training, and every round ships as a reproducible artifact. Mac-safe foundation complete; real Linux experiments pending.",
    sortOrder: 3,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 4 · Robotic inspection of photovoltaic hotspots (Sawyer + YOLOv8)
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "pv-hotspot-inspection",
    title: "Robotic Inspection of Photovoltaic Hotspots",
    shortTitle: "PV Hotspot Inspection · Sawyer",
    category: "perception",
    status: "featured",
    featured: true,
    isPlaceholder: false,
    dateLabel: "May – Sep 2025",
    oneLiner:
      "Two industrial robots revived from a lab closet, a YOLOv8 model trained on 1,682 thermal images, and mAP@0.5 = 0.985 on hotspot detection.",
    summary:
      "A solo research project under Dr. Kevin Wedeward: a lab-validated system for detecting thermal faults in photovoltaic panels using a 7-DoF Sawyer arm and a custom-trained YOLOv8 model. The arm performs automated multi-angle thermal inspections — including underside components that drone-based inspection misses. The project spanned the full lifecycle: first reviving two industrial robots dormant since 2018 (tracing a Sawyer boot failure to a dead CMOS battery that re-enabled Secure Boot, then rebuilding the OS on a new SSD), then building the ROS Noetic / MoveIt / Gazebo environment, engineering a Blender synthetic-data pipeline, and training and validating the detector on live hardware. Placed 2nd at FLC's Physics & Engineering Symposium.",
    role: "Solo researcher — hardware restoration through model deployment",
    teamContext:
      "Solo project under Dr. Kevin Wedeward, Fort Lewis College (summer research internship).",
    stack: [
      "Sawyer / Baxter",
      "ROS Noetic",
      "MoveIt",
      "Gazebo",
      "YOLOv8",
      "Blender synthetic data",
      "Python",
    ],
    tags: ["computer vision", "thermal inspection", "YOLOv8", "ROS", "synthetic data"],
    problem:
      "Drone-based PV inspection is fast but misses underside faults and close-range detail. A robotic arm can inspect panels from angles drones can't reach — if the perception pipeline is accurate enough to trust.",
    systemType: "Perception pipeline + robotic inspection platform",
    whyItMatters:
      "Thermal faults degrade solar output and can cascade. Beyond the energy application, the project is a full-lifecycle proof: dead hardware to deployed AI, with the metrics to show for it.",
    contributions: [
      "Revived two non-functional industrial robots with no vendor support — diagnosed the Sawyer's boot failure (dead CMOS battery → BIOS reset → incompatible Secure Boot), disassembled the controller, and rebuilt the OS on a new SSD with fresh Intera software.",
      "Built the complete ROS Noetic workstation and control environment; resolved firmware–SDK version conflicts and configured MoveIt and Gazebo for motion planning and simulation.",
      "Engineered a synthetic-data pipeline in Blender + Python to generate training imagery at scale; explored NVIDIA Omniverse for scalable generation.",
      "Trained a YOLOv8 hotspot detector on 1,682 thermal images and validated it live on Baxter/Sawyer hardware with real-time thermal feeds.",
    ],
    architectureSummary:
      "Two data sources — Blender-rendered synthetic imagery and real multi-angle thermal captures — train a YOLOv8 detector, which runs against the Sawyer's live thermal feed as the arm sweeps panels from angles drones can't reach. Edge cases discovered on hardware feed the next training round.",
    architectureNodes: [
      "Blender synthetic renders + real thermal captures",
      "YOLOv8 training",
      "Hotspot detector",
      "Sawyer 7-DoF multi-angle sweep",
      "Live inspection & localization",
    ],
    evidence: [
      {
        label: "Detection metrics",
        hint: "",
        status: "available",
        value: "mAP@0.5 = 0.985 · 98% detection accuracy · trained on 1,682 thermal images.",
      },
      {
        label: "Live hardware validation",
        hint: "",
        status: "available",
        value: "Validated on Baxter/Sawyer hardware with real-time thermal feeds.",
      },
      {
        label: "Pipeline diagram",
        hint: "",
        status: "available",
        value: "Data-to-deployment pipeline in the gallery.",
      },
      {
        label: "Edge-case gallery",
        hint: "Curate the inputs that break the detector — honest operating envelope.",
        status: "pending",
      },
    ],
    metrics: [
      { label: "mAP@0.5", value: "0.985", hint: "Hotspot detection, validation split." },
      { label: "Detection accuracy", value: "98%", hint: "As presented at the FLC symposium." },
      { label: "Training set", value: "1,682 images", hint: "Real thermal captures + synthetic renders." },
      { label: "Symposium result", value: "2nd place", hint: "FLC Physics & Engineering Symposium, Sep 2025." },
    ],
    limitations: [
      "Lab-validated, not field-deployed — panel variety, weather, and mounting geometry in the field remain untested.",
      "Synthetic data closed the volume gap, but the synthetic-to-real distribution shift for rare fault types isn't yet quantified.",
    ],
    lessons: [
      "The first 100+ hours were hardware revival, not AI — embodied systems reward system-level thinking and patience with legacy machines.",
      "Synthetic data is leverage: Blender scripting turned a data-starved problem into a data-rich one, but only after the real captures defined what 'realistic' meant.",
    ],
    media: [
      {
        kind: "image",
        src: "/media/pv-detection-grid.webp",
        alt: "Grid of thermal images with YOLOv8 hotspot detections drawn as bounding boxes",
        caption: "YOLOv8 hotspot detections on thermal imagery.",
      },
      {
        kind: "diagram",
        src: "/diagrams/pv-pipeline.svg",
        alt: "PV inspection pipeline: synthetic and real thermal data into YOLOv8, deployed on a Sawyer arm",
        caption: "Data → detector → robot pipeline.",
      },
      {
        kind: "image",
        src: "/media/pv-thermal-grid.webp",
        alt: "Raw thermal capture grid of photovoltaic panels",
        caption: "Multi-angle thermal captures.",
      },
      {
        kind: "image",
        src: "/media/pv-baxter-rviz.webp",
        alt: "Baxter robot alongside its RViz motion-planning visualization",
        caption: "Restored hardware with RViz motion planning.",
      },
      {
        kind: "image",
        src: "/media/pv-gazebo.webp",
        alt: "Gazebo simulation of the inspection workspace",
        caption: "Gazebo simulation of the inspection cell.",
      },
    ],
    artifacts: [
      { kind: "repo", label: "Inspection pipeline (CV-YOLO-Inspection)", href: "https://github.com/Janga786/CV-YOLO-Inspection" },
      { kind: "repo", label: "Synthetic data generator (robot_vision)", href: "https://github.com/Janga786/robot_vision" },
      { kind: "report", label: "Baxter troubleshooting guide", href: "https://github.com/Janga786/Baxter-Troubleshooting" },
      { kind: "slides", label: "Research poster", href: "/posters/pv-poster.jpg" },
    ],
    seoDescription:
      "Robotic photovoltaic hotspot inspection: restored Sawyer/Baxter robots, a Blender synthetic-data pipeline, and a YOLOv8 detector at mAP@0.5 = 0.985, validated live on hardware.",
    sortOrder: 4,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 5 · Autonomous 18-DoF hexapod — NASA Colorado Robotics Challenge
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "hexapod-nasa-challenge",
    title: "Autonomous Hexapod — NASA Colorado Robotics Challenge",
    shortTitle: "Hexapod · NASA Challenge",
    category: "embedded",
    status: "featured",
    featured: true,
    isPlaceholder: false,
    dateLabel: "Oct 2025 – Apr 2026",
    oneLiner:
      "An 18-DoF walker with emergent Kuramoto-CPG gaits and IMU heading-hold autonomy — competed on the dunes, then learned to dance.",
    summary:
      "End-to-end development of an autonomous hexapod rover for NASA's Colorado Robotics Challenge at Great Sand Dunes National Park, leading a 4-person team. The mechanical chassis and inverse-kinematics geometry started from an open-source design; everything else was rebuilt from the wiring up — the complete electrical system, the autonomous firmware, and a Python locomotion simulator where tripod, wave, and ripple gaits emerge from one Kuramoto coupled-oscillator system instead of hand-coded sequences. Fully open source, including a 34-test CI suite. After the competition, the team gave it a choreographed dance routine — six legs, 18 servos, no human input.",
    role: "Team lead — electrical system, autonomous firmware, locomotion simulation",
    teamContext:
      "4-person team. Chassis/IK geometry adapted from an open-source build; electrical system, firmware, and simulator were the team's own, led by Jangara.",
    stack: [
      "Arduino Mega 2560",
      "ICM-20948 9-DoF IMU",
      "C++ firmware",
      "Python CPG simulator",
      "LiPo + SBEC power",
    ],
    tags: ["hexapod", "autonomy", "firmware", "CPG", "NASA challenge"],
    problem:
      "Sand is a hostile place for a walker: heading drifts, legs sink, and there's no operator in the loop. The robot needed self-contained autonomy — orientation, obstacle response, and gait control — on a microcontroller.",
    systemType: "Autonomous legged robot · embedded control",
    whyItMatters:
      "Legged locomotion on unstructured terrain is the same problem the humanoid work faces, one level down the stack — and this version required owning every layer, from power distribution to gait dynamics.",
    contributions: [
      "Designed the complete electrical system from scratch: Arduino Mega 2560, SparkFun ICM-20948 IMU, bump sensors, LiPo + SBEC power distribution, LED battery indicator, and a 3-bit command interface selecting between 8 autonomous behaviors.",
      "Built the autonomous firmware: closed-loop heading hold via a P-controller fusing gyro and magnetometer data, gyro bias auto-calibration at startup, and a bump-avoidance state machine.",
      "Developed a Python Kuramoto coupled-oscillator simulator where tripod, wave, and ripple gaits emerge from the same dynamical system.",
      "Open-sourced the full project — firmware, simulation, CAD, and a 34-test CI suite.",
    ],
    architectureSummary:
      "IMU and bump sensors feed an ATmega2560 running the heading-hold controller and behavior state machine, driving 18 servos through emergent CPG gaits. A Python Kuramoto simulator designed the gait dynamics before they ran on hardware.",
    architectureNodes: [
      "ICM-20948 IMU + bump sensors",
      "ATmega2560 firmware — P-control heading hold",
      "Behavior FSM — 8 autonomous modes",
      "18 servos — tripod / wave / ripple gaits",
      "Kuramoto CPG simulator (design loop)",
    ],
    evidence: [
      {
        label: "Demo video",
        hint: "",
        status: "available",
        value: "Embedded above — the choreographed routine, fully autonomous.",
      },
      {
        label: "Open-source release",
        hint: "",
        status: "available",
        value: "Firmware, simulator, CAD, and 34-test CI suite on GitHub.",
      },
      {
        label: "Competition field notes",
        hint: "[Add outcome and terrain lessons from the Great Sand Dunes run.]",
        status: "pending",
      },
    ],
    metrics: [
      { label: "Degrees of freedom", value: "18", hint: "6 legs × 3 servos." },
      { label: "Autonomous behaviors", value: "8", hint: "Selected via 3-bit command interface." },
      { label: "Verification", value: "34-test CI suite", hint: "Runs on the open-source repo." },
      { label: "Team", value: "4 people", hint: "Led end-to-end." },
    ],
    limitations: [
      "[Document competition performance and terrain failure modes — sand sink, heading drift limits, servo thermal behavior.]",
    ],
    lessons: [
      "Letting gaits emerge from one coupled-oscillator system replaced three hand-coded gait tables — dynamics did the work that sequencing couldn't.",
      "Heading hold on sand is a controls problem first and a sensing problem second; the P-controller only worked after gyro bias auto-calibration.",
    ],
    media: [
      {
        kind: "video",
        src: "/media/hexapod-dance.mp4",
        poster: "/media/hexapod-dance-poster.jpg",
        alt: "The 18-DoF hexapod performing a choreographed dance routine autonomously",
        caption: "Choreographed routine — no human input during the run.",
      },
      {
        kind: "diagram",
        src: "/diagrams/hexapod-system.svg",
        alt: "Hexapod system architecture: sensors into ATmega2560 firmware driving 18 servos, with a Kuramoto CPG simulator informing gait design",
        caption: "System architecture.",
      },
      {
        kind: "image",
        src: "/media/hexapod-action.webp",
        alt: "The hexapod walking on sand at the NASA Colorado Robotics Challenge",
        caption: "On the dunes at the NASA Colorado Robotics Challenge.",
      },
      {
        kind: "image",
        src: "/media/hexapod-team.webp",
        alt: "The four-person team with the hexapod at Great Sand Dunes National Park",
        caption: "The team at Great Sand Dunes National Park.",
      },
      {
        kind: "image",
        src: "/media/hexapod-closeup.webp",
        alt: "Close-up of the hexapod's custom electrical system and wiring",
        caption: "The rebuilt electrical system.",
      },
    ],
    artifacts: [
      { kind: "repo", label: "Open-source release (hexapod-cpg)", href: "https://github.com/Janga786/hexapod-cpg" },
      { kind: "video", label: "Dance routine", href: "/media/hexapod-dance.mp4" },
      { kind: "slides", label: "Research poster", href: "/posters/hexapod-poster.jpg" },
    ],
    seoDescription:
      "Autonomous 18-DoF hexapod for NASA's Colorado Robotics Challenge: custom electrical system, IMU heading-hold firmware, and emergent Kuramoto-CPG gaits — fully open source.",
    sortOrder: 5,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 6 · PPO locomotion & evaluation in Isaac Sim / Isaac Lab
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "rl-locomotion-isaac",
    title: "Reinforcement-Learned Locomotion & Evaluation in Isaac Sim",
    shortTitle: "PPO Locomotion · Isaac",
    category: "rl-simulation",
    status: "selected",
    featured: true,
    isPlaceholder: false,
    dateLabel: "2026 – present",
    oneLiner:
      "PPO locomotion policies and benchmark-style evaluation in Isaac Sim / Isaac Lab, with sim-to-real transfer as the point, not an afterthought.",
    summary:
      "The training side of the Booster K1 research program: building reinforcement-learning infrastructure in NVIDIA Isaac Lab / Isaac Sim for the K1's velocity-tracking locomotion policy — the 50 Hz tier that executes what the vision-language planner decides. The work covers PPO training, benchmark and evaluation tooling, and the practical study of which simulated behaviors survive contact with hardware.",
    role: "RL training infrastructure, benchmark/evaluation setup, sim-to-real analysis",
    teamContext:
      "Part of the Booster K1 research program under Dr. Yiyan Li; training infrastructure built as the deployment substrate.",
    stack: ["Isaac Sim", "Isaac Lab", "PPO", "Python", "PyTorch"],
    tags: ["reinforcement learning", "locomotion", "simulation", "benchmarking", "sim-to-real"],
    problem:
      "Legged locomotion policies are easy to overfit to a simulator. The question is always the same: what in the reward, randomization, and evaluation setup actually predicts real-world behavior?",
    systemType: "Simulation training + evaluation pipeline",
    whyItMatters:
      "Sim-to-real is the tax every embodied-AI system pays. Understanding it at the training-and-evaluation layer is what makes the humanoid deployment predictable instead of lucky.",
    contributions: [
      "Building PPO training infrastructure in Isaac Lab / Isaac Sim for the K1's velocity-tracking locomotion policy (50 Hz control).",
      "Running benchmark/evaluation passes over trained policies.",
      "[Specify as the work matures: environments, reward shaping decisions, randomization strategy, and which evaluations were designed vs. reused.]",
    ],
    architectureSummary:
      "Standard modern RL loop: parallelized simulation environments feed a PPO learner; checkpoints flow into an evaluation harness that scores policies on defined tasks; results inform reward and randomization iteration — and the surviving policies deploy under the VLA planner on the real robot.",
    architectureNodes: [
      "Isaac Sim / Isaac Lab environments",
      "PPO training loop",
      "Policy checkpoints — 50 Hz control",
      "Benchmark & evaluation harness",
      "Deploy to K1 under VLA planner",
    ],
    evidence: [
      {
        label: "Pipeline diagram",
        hint: "",
        status: "available",
        value: "Training → checkpoint → evaluation loop in the gallery.",
      },
      {
        label: "Training curves",
        hint: "Attach reward/episode-length curves with config details.",
        status: "pending",
      },
      {
        label: "Evaluation protocol",
        hint: "Document tasks, seeds, episode counts, and success criteria.",
        status: "pending",
      },
      {
        label: "Sim-to-real comparison",
        hint: "Side-by-side of simulated vs. real behavior for the same policy class.",
        status: "pending",
      },
    ],
    metrics: [
      { label: "Control rate", value: "50 Hz", hint: "Deployed policy tier on the K1." },
      { label: "Benchmark scores", hint: "Report only with the exact eval config attached." },
      { label: "Training scale", hint: "Env count, steps, wall-clock — measured, not recalled." },
    ],
    limitations: [
      "[State clearly which parts of the pipeline were built vs. configured — Isaac Lab ships strong defaults, and readers know it.]",
    ],
    lessons: [
      "Evaluation design is where RL work becomes science; without a fixed protocol, every policy looks fine in its own demo.",
      "[Add a concrete reward-design or randomization lesson from your runs.]",
    ],
    media: [
      {
        kind: "image",
        src: "/media/isaac-red-box.webp",
        alt: "The Booster K1 model in an Isaac Sim training environment",
        caption: "K1 in the Isaac Sim training environment.",
      },
      {
        kind: "diagram",
        src: "/diagrams/rl-pipeline.svg",
        alt: "PPO training and evaluation pipeline in Isaac Sim and Isaac Lab",
        caption: "Training → checkpoint → evaluation loop.",
      },
    ],
    artifacts: [
      { kind: "report", label: "Evaluation writeup" },
      { kind: "repo", label: "Training / eval code" },
      { kind: "diagram", label: "Pipeline diagram", href: "/diagrams/rl-pipeline.svg" },
    ],
    seoDescription:
      "PPO locomotion training and benchmark evaluation in Isaac Sim / Isaac Lab for the Booster K1's 50 Hz velocity-tracking policy.",
    sortOrder: 6,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 7 · The three-machine relay as a systems story
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "three-machine-relay",
    title: "A Three-Machine Relay for Real-Time Robot Inference",
    shortTitle: "Inference Relay System",
    category: "systems-integration",
    status: "selected",
    featured: false,
    isPlaceholder: false,
    dateLabel: "2026",
    oneLiner:
      "GPU workstation, relay/control node, and robot — turned into one control loop with defensible interfaces.",
    summary:
      "The systems half of the Booster K1 deployment, treated on its own terms: how camera streaming, model inference on an RTX 5090, and SDK velocity control were split across three machines, what the interfaces between them look like, and how the seams were debugged. The live overlay video shows the whole loop at once — the instruction at the top, the model's reasoning, and the velocity commands with latency and buffer state at the bottom.",
    role: "Architecture, interface design, networking, debugging",
    teamContext:
      "Built within the K1 research program under Dr. Yiyan Li — SDK primitives from Booster; topology, translation, and integration were the research work.",
    stack: ["Python", "Robot SDK", "Camera streaming", "RTX 5090 workstation", "Networking"],
    tags: ["distributed systems", "control loop", "robotics middleware", "integration"],
    problem:
      "An 8B model doesn't fit on a robot. Splitting perception, inference, and control across machines buys compute but spends reliability — every hop adds latency, jitter, and a new way to fail.",
    systemType: "Distributed inference/control topology",
    whyItMatters:
      "Almost every ambitious embodied-AI system is a distributed system in disguise. The relay pattern here — edge sensing, remote inference, local control — is the pattern the field keeps rebuilding.",
    contributions: [
      "Designed the three-machine topology: robot camera streaming, relay/control machine, GPU inference workstation.",
      "Implemented command translation from model outputs to robot SDK velocity control, pacing ~1 Hz planning against 50 Hz control.",
      "Owned cross-machine debugging — the integration seams where most failures lived.",
      "Built the live diagnostic overlay: instruction, model reasoning, velocity commands, per-step latency, and buffer state in one view.",
    ],
    architectureSummary:
      "Sensing and actuation stay near the robot; heavy inference runs where the compute is; a relay node in between owns translation, pacing, and safety. Each machine has one job, and the interfaces between them are the design surface.",
    architectureNodes: [
      "Robot — sensing & actuation",
      "Relay / control node — pacing, translation, safety",
      "GPU workstation — model inference",
      "Return path — commands & telemetry",
    ],
    evidence: [
      {
        label: "Live loop recording",
        hint: "",
        status: "available",
        value: "Embedded above — instruction, reasoning, and velocity commands with live latency readout.",
      },
      {
        label: "Topology diagram",
        hint: "",
        status: "available",
        value: "Hop-by-hop diagram in the gallery.",
      },
      {
        label: "Interface definitions",
        hint: "The actual message/command contracts between machines.",
        status: "pending",
      },
      {
        label: "Timing measurements",
        hint: "Per-hop latency and jitter under load.",
        status: "pending",
      },
    ],
    metrics: [
      { label: "Inference step", value: "~350 ms", hint: "Shown live in the overlay." },
      { label: "Per-hop latency", hint: "Measure camera→relay, relay→GPU, GPU→command." },
      { label: "Sustained frame rate", hint: "What the loop actually holds during runs." },
    ],
    limitations: [
      "A production version would need monitoring, failover, and a security posture this research loop doesn't have.",
    ],
    lessons: [
      "Interfaces between machines deserve the same design attention as the model — most failures were seam failures.",
      "[Add the tradeoff you'd make differently now.]",
    ],
    media: [
      {
        kind: "video",
        src: "/media/k1-extra.mp4",
        poster: "/media/k1-extra-poster.jpg",
        alt: "Screen recording of the robot's first-person camera feed with live model inference overlaid: instruction, reasoning, and velocity commands with latency readout",
        caption: "The view from inside the loop: instruction → reasoning → velocity commands, with live latency.",
      },
      {
        kind: "diagram",
        src: "/diagrams/relay-topology.svg",
        alt: "Per-hop view of the three-machine relay: robot to relay to GPU workstation and back",
        caption: "The relay, hop by hop.",
      },
    ],
    artifacts: [
      { kind: "video", label: "Live loop recording", href: "/media/k1-extra.mp4" },
      { kind: "diagram", label: "Topology diagram", href: "/diagrams/relay-topology.svg" },
      { kind: "report", label: "Integration postmortem" },
    ],
    seoDescription:
      "Design and debugging of a three-machine inference relay connecting a GPU workstation, relay/control node, and a humanoid robot into one real-time loop.",
    sortOrder: 7,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 8 · KDUR community radio data platform
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "kdur-data-platform",
    title: "KDUR Community Radio Data Platform",
    shortTitle: "KDUR Data Platform",
    category: "product",
    status: "selected",
    featured: false,
    isPlaceholder: false,
    dateLabel: "Aug 2024 – Oct 2025",
    oneLiner:
      "A deployed data platform for Fort Lewis College's radio station — 60+ daily users — with an applied-AI research layer for search and royalty integrity.",
    summary:
      "Under Dr. Matthew Welz: a complete database application built in Microsoft Power Apps that manages KDUR's music library and broadcast schedules for over 60 daily users — real software, in production, with real stakeholders. On top of the deployed platform sits a research layer: a vector-embedding model in Python that resolves artist-name variants (matching \"Jay Z\" to the official \"Jay-Z\") so royalty attribution stays accurate, a Neo4j graph-database prototype, and AI agents that translate natural language into Cypher queries.",
    role: "Research assistant — built and deployed the platform; prototyped the AI layer",
    teamContext:
      "Research assistantship under Dr. Matthew Welz, Fort Lewis College.",
    stack: ["Microsoft Power Apps", "Python", "Vector embeddings", "Neo4j", "Cypher"],
    tags: ["product", "deployed software", "NLP", "graph database", "real users"],
    problem:
      "The station's catalog, schedules, and analytics lived in scattered records — and royalty attribution breaks when the same artist appears under five name variants.",
    systemType: "Deployed CRUD platform + applied-AI prototype",
    whyItMatters:
      "Sixty people using your software every day is a different education than any class project: uptime, usability, and data integrity stop being abstract.",
    contributions: [
      "Developed and deployed the full Power Apps database application for the music library and broadcast schedules — in daily production use by 60+ users.",
      "Built a vector-embedding model in Python for artist-name resolution to protect royalty attribution accuracy.",
      "Prototyped a Neo4j graph database and AI agents translating natural language into Cypher queries — toward conversational access to the catalog for students and community.",
    ],
    architectureSummary:
      "DJs and staff work in the deployed Power Apps platform; the research layer sits alongside it — embeddings for entity resolution, a graph prototype for relationship queries, and natural-language-to-Cypher agents for conversational access.",
    architectureNodes: [
      "DJs & staff — 60+ daily users",
      "Power Apps platform — library + schedules",
      "Embedding layer — artist-name resolution",
      "Neo4j prototype — NL → Cypher agents",
    ],
    evidence: [
      {
        label: "Production deployment",
        hint: "",
        status: "available",
        value: "In daily use by 60+ station users.",
      },
      {
        label: "Platform screenshots",
        hint: "",
        status: "available",
        value: "Deployed app and graph prototype in the gallery.",
      },
      {
        label: "Entity-resolution evaluation",
        hint: "Quantify match accuracy on a labeled variant set.",
        status: "pending",
      },
    ],
    metrics: [
      { label: "Daily users", value: "60+", hint: "Station DJs and staff." },
      { label: "Resolution accuracy", hint: "Evaluate the embedding matcher before quoting figures." },
    ],
    limitations: [
      "The AI layer is a research prototype — the embeddings and NL-to-Cypher agents aren't yet part of the production deployment.",
    ],
    lessons: [
      "Real users reorder your priorities immediately — reliability and data integrity beat features every week.",
      "[Add the specific user-feedback moment that changed the design.]",
    ],
    media: [
      {
        kind: "image",
        src: "/media/kdur-app.webp",
        alt: "The deployed KDUR radio station management application",
        caption: "The deployed station-management app.",
      },
      {
        kind: "diagram",
        src: "/diagrams/kdur-platform.svg",
        alt: "KDUR platform architecture: users, Power Apps CRUD application, and the applied-AI research layer",
        caption: "Platform + research layer.",
      },
      {
        kind: "image",
        src: "/media/kdur-graph.webp",
        alt: "Neo4j graph database prototype visualization of the KDUR catalog",
        caption: "Neo4j prototype of catalog relationships.",
      },
    ],
    artifacts: [
      { kind: "slides", label: "Research poster", href: "/posters/kdur-poster.jpg" },
      { kind: "demo", label: "Platform demo" },
    ],
    seoDescription:
      "A deployed Power Apps data platform for KDUR community radio (60+ daily users) with an applied-AI layer: embedding-based artist resolution and natural-language-to-Cypher agents.",
    sortOrder: 8,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 9 · Embedded, FPGA & board-level systems (collection)
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "embedded-hardware-systems",
    title: "Embedded, FPGA & Board-Level Systems",
    shortTitle: "Embedded · FPGA · PCB",
    category: "embedded",
    status: "selected",
    featured: false,
    isPlaceholder: false,
    oneLiner:
      "Board-level engineering — Verilog on the Basys 3, bare-metal ATmega2560 work, a custom PCB with production Gerbers, and CMOS VLSI design.",
    summary:
      "A collection entry for the hardware layer under the AI stack: six Verilog systems on the Digilent Basys 3 (soft-core CPU, PicoBlaze + OLED, PS/2-to-UART), six ATmega2560 projects including a custom Arduino-Mega-class PCB with production Gerbers and a bare-metal 40 kHz ADC sampler, transistor-level CMOS designs in 0.6 µm SCMOS, and a self-balancing robot prototype running PID control with a custom integration PCB in progress. This is why the deployment work treats latency, timing, and power as real numbers instead of abstractions.",
    role: "Design, firmware, and verification across the listed projects",
    teamContext:
      "Individual coursework and personal projects across the computer-engineering curriculum and three faculty research labs.",
    stack: ["Verilog / Artix-7", "Embedded C/C++", "ATmega2560", "PCB design (EAGLE/KiCad)", "SPICE"],
    tags: ["embedded", "FPGA", "PCB", "VLSI", "firmware"],
    problem:
      "AI systems eventually meet a voltage rail. This body of work is about being competent at the layer where software constraints become physical ones.",
    systemType: "Embedded / board-level systems portfolio",
    whyItMatters:
      "Physical-AI ambitions without hardware literacy produce systems that can't be debugged below the API. This layer keeps the rest of the stack honest.",
    contributions: [
      "Six self-contained Verilog systems on the Basys 3 (Artix-7): PicoBlaze + PmodOLED, XADC-to-Arduino SPI bridge, PS/2-keyboard-to-UART stack, soft-core CPU, FSMs, LCD driver.",
      "Six ATmega2560 projects including a custom Arduino-Mega-class PCB with production Gerbers, a bare-metal 40 kHz ADC sampler, and a hand-built IR link-layer protocol.",
      "Transistor-level CMOS design in 0.6 µm SCMOS: 8-bit ALU, R-2R DAC + flash ADC, transmission-gate MUX, full static-CMOS gate library.",
      "Self-balancing robot prototype: PID stabilization, with a custom PCB (upgraded MCU, onboard drivers, integrated IMU) in design.",
    ],
    architectureSummary:
      "Per project: sensors and IO into a microcontroller or FPGA, firmware or HDL in the middle, actuation and bench validation on the other side — documented per repository.",
    architectureNodes: ["Sensors / IO", "Microcontroller / FPGA", "Firmware & HDL", "Actuation", "Bench validation"],
    evidence: [
      {
        label: "Open-source repositories",
        hint: "",
        status: "available",
        value: "Three documented repos: FPGA portfolio, ATmega2560 projects, CMOS VLSI designs.",
      },
      {
        label: "Bench test results",
        hint: "Scope traces, validation runs, or demo clips for the strongest 1–2 pieces.",
        status: "pending",
      },
    ],
    metrics: [
      { label: "Timing / power figures", hint: "Only the ones actually measured on the bench." },
    ],
    limitations: [
      "This is a collection entry — its credibility improves sharply once one project is documented end-to-end with bench evidence.",
    ],
    lessons: [
      "Hardware debugging builds the habit that carries into ML systems work: distrust the layer you can't observe.",
      "[Add one concrete bench story.]",
    ],
    media: [
      {
        kind: "diagram",
        alt: "Embedded systems block diagram placeholder",
        caption: "Block diagram (schematic placeholder — add board photos and scope traces).",
      },
    ],
    artifacts: [
      { kind: "repo", label: "FPGA portfolio (Basys 3)", href: "https://github.com/Janga786/basys3-fpga-portfolio" },
      { kind: "repo", label: "ATmega2560 projects + PCB", href: "https://github.com/Janga786/arduino-mega-microcontrollers" },
      { kind: "repo", label: "CMOS VLSI designs", href: "https://github.com/Janga786/cmos-vlsi-spice-portfolio" },
    ],
    seoDescription:
      "Embedded, FPGA, and board-level systems: Verilog on the Basys 3, ATmega2560 firmware and a custom PCB, and transistor-level CMOS VLSI design.",
    sortOrder: 9,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 10 · PLACEHOLDER — multimodal / vision-language project slot
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "multimodal-project-slot",
    title: "Vision-Language Project — Slot Reserved",
    shortTitle: "Multimodal Slot",
    category: "multimodal",
    status: "placeholder",
    featured: false,
    isPlaceholder: true,
    oneLiner:
      "A reserved slot for a self-contained multimodal project: model choice, task definition, interface, and honest evaluation.",
    summary:
      "This slot is structured for a vision-language or multimodal project that stands on its own — separate from the humanoid deployment. The strongest fill here is small but complete: a crisply-defined task, a defensible model/interface choice, qualitative examples, and a failure analysis that shows judgment rather than enthusiasm.",
    role: "[Your role]",
    teamContext: "[Solo or team — say which parts were yours.]",
    stack: ["[Model]", "[Perception inputs]", "[Interface layer]"],
    tags: ["vision-language", "multimodal", "evaluation"],
    problem:
      "[One sentence: the task this project defines and why it isn't trivial.]",
    systemType: "Multimodal model + task interface",
    whyItMatters:
      "[Connect the task to something real: accessibility, inspection, navigation, tooling.]",
    contributions: [
      "[Model / prompt / interface structure decisions and why.]",
      "[Evaluation set construction — what counts as success.]",
      "[Failure analysis — the examples that break it.]",
    ],
    architectureSummary:
      "[Describe input → model → output structure, plus any grounding or post-processing stages.]",
    architectureNodes: [
      "Perception inputs",
      "Vision-language model",
      "Task interface / decoding",
      "Evaluation examples",
    ],
    evidence: [
      { label: "Task definition", hint: "The precise task spec and dataset/examples used.", status: "pending" },
      { label: "Qualitative demos", hint: "Curated success AND failure examples, honestly chosen.", status: "pending" },
      { label: "Failure analysis", hint: "Categorized error modes with counts.", status: "pending" },
    ],
    metrics: [
      { label: "Task metric", hint: "Define per task — accuracy, success rate, or human eval." },
    ],
    limitations: ["[What the model can't do; what the eval can't see.]"],
    lessons: ["[What the project changed about how you use multimodal models.]"],
    media: [
      { kind: "diagram", alt: "Multimodal project pipeline placeholder", caption: "Pipeline (placeholder schematic)." },
    ],
    artifacts: [
      { kind: "repo", label: "Code" },
      { kind: "demo", label: "Demo" },
      { kind: "report", label: "Writeup" },
    ],
    seoDescription:
      "Reserved slot for a self-contained vision-language / multimodal AI project with task definition, evaluation, and failure analysis.",
    sortOrder: 10,
  },

];

/* ── Selectors ─────────────────────────────────────────────────────────── */

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.sortOrder - b.sortOrder);

export const allProjects = [...projects].sort(
  (a, b) => a.sortOrder - b.sortOrder,
);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCategory(id: string): CategoryMeta | undefined {
  return categories.find((c) => c.id === id);
}

export function adjacentProjects(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const idx = allProjects.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: allProjects[idx - 1],
    next: allProjects[idx + 1],
  };
}
