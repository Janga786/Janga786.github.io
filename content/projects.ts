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
 * Entries marked isPlaceholder:true are structural slots. Their copy describes
 * the KIND of work that belongs there; it makes no claims about completed work.
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
   * 1 · REAL — Vision-language navigation deployed on a Booster K1
   * Facts used here were supplied by Jangara. Metrics remain pending
   * until measured values and artifacts are attached.
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "vla-navigation-booster-k1",
    title: "Vision-Language Navigation on a Booster K1 Humanoid",
    shortTitle: "VLA Navigation · Booster K1",
    category: "embodied-ai",
    status: "featured",
    featured: true,
    isPlaceholder: false,
    oneLiner:
      "An 8B vision-language-action model, a three-machine inference relay, and a humanoid that walks toward natural-language goals.",
    summary:
      "Deployment of a NaVILA-style 8B vision-language-action navigation model on a Booster K1 humanoid. The system spans three machines: a workstation running VLM inference on an RTX 5090, a relay/control machine, and the robot itself — streaming camera frames out and accepting SDK velocity commands back. The interesting work was less the model and more the loop around it: framing rates, latency budgets, command translation, and the failure modes that only exist on real hardware.",
    role: "System builder — model deployment, relay design, robot integration, debugging",
    teamContext:
      "Undergraduate project work. [Replace with precise advisor/team context — who set direction, who built what.]",
    stack: [
      "NaVILA-style 8B VLA",
      "Booster K1",
      "RTX 5090 inference",
      "Python",
      "Robot SDK velocity control",
      "Camera streaming",
    ],
    tags: ["VLA", "navigation", "humanoid", "deployment", "sim-to-real"],
    problem:
      "Vision-language navigation results are usually reported in simulation. Getting the same behavior out of a real humanoid means solving distribution shift, latency, and control-loop problems the benchmark never mentions.",
    systemType: "Real-robot deployment · distributed inference/control loop",
    whyItMatters:
      "Language-directed navigation is a building block for useful humanoids. The gap between a benchmark score and a robot that actually walks where you ask is exactly the gap this project explores.",
    contributions: [
      "Set up 8B VLA model inference on an RTX 5090 workstation and connected it to the robot over a relay/control machine.",
      "Built the loop: robot camera stream → inference → action decoding → SDK velocity commands back to the K1.",
      "Debugged real-deployment issues end to end — the class of problems (timing, framing, drift, recovery) that never appear in simulation.",
      "[Add 1–2 more specific contributions with concrete detail — e.g. the exact interface you designed or the hardest bug you fixed.]",
    ],
    architectureSummary:
      "Three machines share one control loop. The K1 streams camera frames to a relay/control node; frames are forwarded to the inference workstation where the 8B VLA produces navigation actions; actions are translated into velocity commands and sent to the robot SDK. Telemetry flows back for monitoring and evaluation.",
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
        hint: "Attach footage of the K1 executing a language instruction end-to-end.",
        status: "pending",
      },
      {
        label: "Architecture diagram",
        hint: "Replace the schematic card with a precise topology diagram (machines, links, rates).",
        status: "pending",
      },
      {
        label: "Latency budget",
        hint: "Measured per-hop timing: camera → relay → inference → command → actuation.",
        status: "pending",
      },
      {
        label: "Failure-mode log",
        hint: "Documented on-hardware failures and recovery behavior (with clips or logs).",
        status: "pending",
      },
      {
        label: "Safety protocol",
        hint: "Describe e-stop setup, tether/spotting, and command limits used during runs.",
        status: "pending",
      },
    ],
    metrics: [
      { label: "End-to-end loop latency", hint: "Measure before publishing — do not estimate." },
      { label: "Inference rate", hint: "Model forward-pass rate on the 5090 under deployment conditions." },
      { label: "Instruction success rate", hint: "Define the eval protocol first; report n." },
      { label: "Interventions per run", hint: "Honest count of human takeovers per episode." },
    ],
    limitations: [
      "Evaluation protocol on real hardware is still informal — success criteria need to be pinned down before quantitative claims are made.",
      "[Document the environmental assumptions: lighting, space, instruction complexity.]",
    ],
    lessons: [
      "The model is rarely the bottleneck; the seams between machines are. Most debugging time went to the loop, not the network weights.",
      "Simulation results set expectations that hardware immediately renegotiates — treating deployment as its own engineering discipline was the unlock.",
      "[Add the single hardest bug and what it taught you — specificity reads as credibility.]",
    ],
    media: [
      {
        kind: "diagram",
        alt: "Three-machine deployment topology for VLA navigation on the Booster K1",
        caption: "Deployment topology (schematic — replace with measured diagram).",
      },
    ],
    artifacts: [
      { kind: "video", label: "Deployment demo" },
      { kind: "report", label: "Deployment report" },
      { kind: "diagram", label: "System topology" },
      { kind: "logs", label: "Run logs" },
    ],
    seoDescription:
      "Deploying a NaVILA-style 8B vision-language-action model on a Booster K1 humanoid via a three-machine inference relay: RTX 5090 inference, relay/control node, and robot SDK velocity control.",
    sortOrder: 1,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 2 · REAL BASIS — PPO locomotion & evaluation in Isaac Sim / Isaac Lab
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "rl-locomotion-isaac",
    title: "Reinforcement-Learned Locomotion & Evaluation in Isaac Sim",
    shortTitle: "PPO Locomotion · Isaac",
    category: "rl-simulation",
    status: "selected",
    featured: true,
    isPlaceholder: false,
    oneLiner:
      "PPO locomotion policies and benchmark-style evaluation in Isaac Sim / Isaac Lab, with sim-to-real transfer as the point, not an afterthought.",
    summary:
      "Training and evaluation work in NVIDIA's Isaac Sim / Isaac Lab stack: PPO-based locomotion policies, benchmark and evaluation tooling, and the practical study of which simulated behaviors survive contact with hardware. This entry is scoped to the simulation and evaluation side; the deployment story lives in the Booster K1 project.",
    role: "RL training, benchmark/evaluation setup, sim-to-real analysis",
    teamContext:
      "[Replace with precise context: which benchmarks, whose baselines, what was yours.]",
    stack: ["Isaac Sim", "Isaac Lab", "PPO", "Python", "PyTorch"],
    tags: ["reinforcement learning", "locomotion", "simulation", "benchmarking", "sim-to-real"],
    problem:
      "Legged locomotion policies are easy to overfit to a simulator. The question is always the same: what in the reward, randomization, and evaluation setup actually predicts real-world behavior?",
    systemType: "Simulation training + evaluation pipeline",
    whyItMatters:
      "Sim-to-real is the tax every embodied-AI system pays. Understanding it at the training-and-evaluation layer is what makes later deployments predictable instead of lucky.",
    contributions: [
      "Trained PPO locomotion policies in Isaac Sim / Isaac Lab.",
      "Built and ran benchmark/evaluation passes over trained policies.",
      "[Specify: environments used, reward shaping decisions, randomization strategy, and which evaluations you designed vs. reused.]",
    ],
    architectureSummary:
      "Standard modern RL loop: parallelized simulation environments feed a PPO learner; checkpoints flow into an evaluation harness that scores policies on defined tasks; results inform reward and randomization iteration.",
    architectureNodes: [
      "Isaac Sim / Isaac Lab environments",
      "PPO training loop",
      "Policy checkpoints",
      "Benchmark & evaluation harness",
      "Analysis → iteration",
    ],
    evidence: [
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
      {
        label: "Failure notes",
        hint: "Where policies collapse: terrain, perturbation, or distribution edges.",
        status: "pending",
      },
    ],
    metrics: [
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
        kind: "diagram",
        alt: "PPO training and evaluation pipeline in Isaac Sim / Isaac Lab",
        caption: "Training → checkpoint → evaluation loop (schematic).",
      },
    ],
    artifacts: [
      { kind: "report", label: "Evaluation writeup" },
      { kind: "repo", label: "Training / eval code" },
      { kind: "diagram", label: "Pipeline diagram" },
    ],
    seoDescription:
      "PPO locomotion training and benchmark evaluation in Isaac Sim / Isaac Lab, focused on sim-to-real transfer for legged robots.",
    sortOrder: 2,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 3 · REAL BASIS — the three-machine relay as a systems story
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "three-machine-relay",
    title: "A Three-Machine Relay for Real-Time Robot Inference",
    shortTitle: "Inference Relay System",
    category: "systems-integration",
    status: "selected",
    featured: true,
    isPlaceholder: false,
    oneLiner:
      "GPU workstation, relay/control node, and robot — turned into one control loop with defensible interfaces.",
    summary:
      "The systems half of the Booster K1 deployment, treated on its own terms: how camera streaming, model inference on an RTX 5090, and SDK velocity control were split across three machines, what the interfaces between them look like, and how the seams were debugged. Written for readers who care about topology and interface design rather than the model.",
    role: "Architecture, interface design, networking, debugging",
    teamContext:
      "[Replace with precise context — which pieces were designed vs. inherited from SDKs.]",
    stack: ["Python", "Robot SDK", "Camera streaming", "RTX 5090 workstation", "Networking"],
    tags: ["distributed systems", "control loop", "robotics middleware", "integration"],
    problem:
      "An 8B model doesn't fit on a robot. Splitting perception, inference, and control across machines buys compute but spends reliability — every hop adds latency, jitter, and a new way to fail.",
    systemType: "Distributed inference/control topology",
    whyItMatters:
      "Almost every ambitious embodied-AI system is a distributed system in disguise. The relay pattern here — edge sensing, remote inference, local control — is the pattern the field keeps rebuilding.",
    contributions: [
      "Designed the three-machine topology: robot camera streaming, relay/control machine, GPU inference workstation.",
      "Implemented command translation from model outputs to robot SDK velocity control.",
      "Owned cross-machine debugging — the integration seams where most failures lived.",
      "[Add specifics: transport choices, rates, buffering/recovery decisions and why.]",
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
        label: "Topology diagram",
        hint: "Machines, links, protocols, and rates on one page.",
        status: "pending",
      },
      {
        label: "Interface definitions",
        hint: "The actual message/command contracts between machines.",
        status: "pending",
      },
      {
        label: "Debugging narrative",
        hint: "One or two integration bugs told properly: symptom → hypothesis → fix.",
        status: "pending",
      },
      {
        label: "Timing measurements",
        hint: "Per-hop latency and jitter under load.",
        status: "pending",
      },
    ],
    metrics: [
      { label: "Per-hop latency", hint: "Measure camera→relay, relay→GPU, GPU→command." },
      { label: "Sustained frame rate", hint: "What the loop actually holds during runs." },
    ],
    limitations: [
      "[Note what a production version would need that this doesn't have: monitoring, failover, security posture.]",
    ],
    lessons: [
      "Interfaces between machines deserve the same design attention as the model — most failures were seam failures.",
      "[Add the tradeoff you'd make differently now.]",
    ],
    media: [
      {
        kind: "diagram",
        alt: "Three-machine relay topology: robot, relay/control node, GPU workstation",
        caption: "Relay topology (schematic — replace with measured diagram).",
      },
    ],
    artifacts: [
      { kind: "diagram", label: "Topology diagram" },
      { kind: "report", label: "Integration postmortem" },
      { kind: "logs", label: "Timing traces" },
    ],
    seoDescription:
      "Design and debugging of a three-machine inference relay connecting a GPU workstation, relay/control node, and a humanoid robot into one real-time loop.",
    sortOrder: 3,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 4 · PLACEHOLDER — multimodal / vision-language project slot
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "multimodal-project-slot",
    title: "Vision-Language Project — Slot Reserved",
    shortTitle: "Multimodal Slot",
    category: "multimodal",
    status: "placeholder",
    featured: true,
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
    sortOrder: 4,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 5 · PLACEHOLDER — perception / computer vision slot
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "perception-project-slot",
    title: "Perception Pipeline — Slot Reserved",
    shortTitle: "Perception Slot",
    category: "perception",
    status: "placeholder",
    featured: false,
    isPlaceholder: true,
    oneLiner:
      "A reserved slot for a perception project with real metrics: sensing setup, pipeline, mAP/precision/recall, and edge cases.",
    summary:
      "Structured for a computer-vision or perception project where the evidence is quantitative. Jangara has YOLOv8 pipeline experience to draw on; this slot is for the version of that work that's documented well enough to defend — dataset and sensing setup, training details, measured metrics, and the edge cases that define the system's honest operating envelope.",
    role: "[Your role]",
    teamContext: "[Solo or team — say which parts were yours.]",
    stack: ["[Sensor / dataset]", "YOLOv8 or successor", "[Training setup]"],
    tags: ["computer vision", "detection", "metrics", "edge cases"],
    problem: "[The perception task and the constraint that makes it hard — lighting, motion, scale, class similarity.]",
    systemType: "Perception / detection pipeline",
    whyItMatters: "[What downstream system consumes these detections and what an error costs.]",
    contributions: [
      "[Dataset / sensing decisions.]",
      "[Training and augmentation choices.]",
      "[Evaluation design and edge-case hunting.]",
    ],
    architectureSummary:
      "[Sensor → preprocessing → model → post-processing → consumer. Note where failures concentrate.]",
    architectureNodes: ["Sensing", "Preprocessing", "Detector", "Post-processing", "Downstream consumer"],
    evidence: [
      { label: "Metrics table", hint: "mAP / precision / recall with dataset splits stated.", status: "pending" },
      { label: "Pipeline diagram", hint: "The full path from photons to decisions.", status: "pending" },
      { label: "Edge-case gallery", hint: "The inputs that break it, shown plainly.", status: "pending" },
    ],
    metrics: [
      { label: "mAP", hint: "With IoU threshold and split specified." },
      { label: "Precision / recall", hint: "At the operating point actually used." },
      { label: "Inference latency", hint: "On the deployment hardware, not the training box." },
    ],
    limitations: ["[Domain gaps, class limitations, sensor assumptions.]"],
    lessons: ["[The evaluation or data lesson that transfers to the next project.]"],
    media: [
      { kind: "diagram", alt: "Perception pipeline placeholder", caption: "Pipeline (placeholder schematic)." },
    ],
    artifacts: [
      { kind: "repo", label: "Code" },
      { kind: "report", label: "Metrics report" },
    ],
    seoDescription:
      "Reserved slot for a quantified computer-vision project: sensing setup, detection pipeline, measured metrics, and edge-case analysis.",
    sortOrder: 5,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 6 · REAL BASIS — embedded / FPGA / hexapod slot
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "embedded-hardware-systems",
    title: "Embedded & FPGA Systems Work",
    shortTitle: "Embedded · FPGA · PCB",
    category: "embedded",
    status: "selected",
    featured: true,
    isPlaceholder: false,
    oneLiner:
      "Board-level engineering — embedded systems, FPGA, PCB design, and NASA-challenge hexapod work — as the ground truth under the AI stack.",
    summary:
      "A collection entry for hardware-adjacent systems work: embedded firmware, FPGA designs, PCB layout, and robotics hardware built around a NASA-challenge hexapod project. Individually these are coursework-and-competition scale; together they're why the deployment work upstairs treats latency, timing, and power as real numbers instead of abstractions. This entry should eventually be split into 1–2 fully-documented pieces with schematics and test evidence.",
    role: "Design, firmware, and integration across the listed projects",
    teamContext:
      "[Split this entry per project and clarify individual vs. team work for each.]",
    stack: ["Embedded C/C++", "FPGA / HDL", "PCB design", "Microcontrollers"],
    tags: ["embedded", "FPGA", "PCB", "hexapod", "firmware"],
    problem:
      "AI systems eventually meet a voltage rail. This body of work is about being competent at the layer where software constraints become physical ones.",
    systemType: "Embedded / board-level systems portfolio",
    whyItMatters:
      "Physical-AI ambitions without hardware literacy produce systems that can't be debugged below the API. This layer keeps the rest of the stack honest.",
    contributions: [
      "Embedded firmware and microcontroller projects across the computer-engineering curriculum.",
      "FPGA design work and PCB design experience.",
      "Hexapod robotics work connected to a NASA challenge.",
      "[Choose the strongest 1–2 pieces and document them fully: schematic, constraint, test result.]",
    ],
    architectureSummary:
      "[Per selected project: the board/system block diagram, its constraints (timing, power, bandwidth), and how it was validated.]",
    architectureNodes: ["Sensors / IO", "Microcontroller / FPGA", "Firmware & control", "Actuation", "Bench validation"],
    evidence: [
      { label: "Schematics / board images", hint: "Real design files or photos of built hardware.", status: "pending" },
      { label: "Constraint documentation", hint: "The timing/power/bandwidth budget the design met.", status: "pending" },
      { label: "Bench test results", hint: "Scope traces, validation runs, or demo clips.", status: "pending" },
    ],
    metrics: [
      { label: "Timing / power figures", hint: "Only the ones actually measured on the bench." },
    ],
    limitations: [
      "This is currently a collection entry — its credibility improves sharply once one project is documented end-to-end.",
    ],
    lessons: [
      "Hardware debugging builds the habit that carries into ML systems work: distrust the layer you can't observe.",
      "[Add one concrete bench story.]",
    ],
    media: [
      { kind: "diagram", alt: "Embedded systems block diagram placeholder", caption: "Block diagram (placeholder schematic)." },
    ],
    artifacts: [
      { kind: "repo", label: "Design files" },
      { kind: "diagram", label: "Schematics" },
      { kind: "video", label: "Bench demo" },
    ],
    seoDescription:
      "Embedded, FPGA, and PCB systems work — including NASA-challenge hexapod robotics — grounding an AI-deployment portfolio in hardware literacy.",
    sortOrder: 6,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 7 · PLACEHOLDER — AI product / entrepreneurship slot
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "ai-product-slot",
    title: "AI Product Prototype — Slot Reserved",
    shortTitle: "Product Slot",
    category: "product",
    status: "placeholder",
    featured: true,
    isPlaceholder: true,
    oneLiner:
      "A reserved slot for a product-shaped AI prototype: a real user problem, an architecture, and evidence of judgment.",
    summary:
      "Structured for the project where technical work meets product reasoning. The bar: a genuine user problem (housing, agriculture, logistics, healthcare, and manufacturing are the sectors Jangara cares about), a working prototype, an articulated core insight, and a clear account of what was learned — including what didn't work. Entrepreneurship credentials (business minor, campus entrepreneurship, Goldman Sachs Emerging Leaders) inform this slot; they don't substitute for it.",
    role: "[Your role]",
    teamContext: "[Solo or team — say which parts were yours.]",
    stack: ["[Prototype stack]"],
    tags: ["product", "prototype", "users", "entrepreneurship"],
    problem: "[The user problem, stated the way a user would state it.]",
    systemType: "Product prototype",
    whyItMatters: "[Why this problem, why now, why you.]",
    contributions: [
      "[Prototype architecture and build.]",
      "[User/customer reasoning — who you talked to, what changed.]",
      "[The core insight or moat hypothesis.]",
    ],
    architectureSummary: "[Prototype architecture: what's real, what's mocked, what's deliberately deferred.]",
    architectureNodes: ["User problem", "Prototype", "Feedback loop", "Iteration"],
    evidence: [
      { label: "Prototype demo", hint: "Working software, however narrow.", status: "pending" },
      { label: "User evidence", hint: "Interviews, usage, or honest lack thereof.", status: "pending" },
      { label: "Learning memo", hint: "What was validated, invalidated, and abandoned.", status: "pending" },
    ],
    metrics: [
      { label: "Usage / validation signal", hint: "Real numbers only — small honest numbers beat vague big ones." },
    ],
    limitations: ["[What the prototype deliberately doesn't do.]"],
    lessons: ["[The product lesson — especially if it contradicts what you expected.]"],
    media: [
      { kind: "diagram", alt: "Product prototype loop placeholder", caption: "Prototype loop (placeholder schematic)." },
    ],
    artifacts: [
      { kind: "demo", label: "Prototype" },
      { kind: "report", label: "Learning memo" },
    ],
    seoDescription:
      "Reserved slot for an AI product prototype grounded in a real user problem, with architecture and honest validation evidence.",
    sortOrder: 7,
  },

  /* ────────────────────────────────────────────────────────────────────
   * 8 · PLACEHOLDER — research-style investigation slot
   * ──────────────────────────────────────────────────────────────────── */
  {
    slug: "research-investigation-slot",
    title: "Technical Investigation — Slot Reserved",
    shortTitle: "Investigation Slot",
    category: "research",
    status: "placeholder",
    featured: false,
    isPlaceholder: true,
    oneLiner:
      "A reserved slot for a research-style investigation: one question, a method, an evaluation, and a synthesis with limitations.",
    summary:
      "Structured for a report-first project — the kind that demonstrates research readiness to admissions readers. The fill should pick one narrow question from the deployment or simulation work (e.g. a latency/robustness tradeoff, an evaluation-protocol question, a sim-to-real hypothesis), study it properly, and write it up with the discipline of a short paper: method, results, limitations, future work.",
    role: "[Your role]",
    teamContext: "[Solo or advised — name the advising context if any.]",
    stack: ["[Method & tooling]"],
    tags: ["investigation", "evaluation", "writeup"],
    problem: "[The research question, in one falsifiable sentence.]",
    systemType: "Research-style investigation",
    whyItMatters: "[Why the answer changes a real design decision.]",
    contributions: [
      "[Question formulation.]",
      "[Method and evaluation setup.]",
      "[Synthesis — what the results do and don't support.]",
    ],
    architectureSummary: "[Method pipeline: setup → experiment → measurement → analysis.]",
    architectureNodes: ["Question", "Method", "Experiment", "Analysis", "Synthesis"],
    evidence: [
      { label: "Written report", hint: "The full writeup — this slot is report-first.", status: "pending" },
      { label: "Experimental setup", hint: "Enough detail that someone could rerun it.", status: "pending" },
      { label: "Results & plots", hint: "With uncertainty acknowledged.", status: "pending" },
    ],
    metrics: [
      { label: "Study results", hint: "Whatever the question demands — reported with its conditions." },
    ],
    limitations: ["[Scope limits and the confounds you couldn't remove.]"],
    lessons: ["[What the investigation changed about your priors.]"],
    media: [
      { kind: "diagram", alt: "Investigation method placeholder", caption: "Method (placeholder schematic)." },
    ],
    artifacts: [
      { kind: "report", label: "Report" },
      { kind: "slides", label: "Slides" },
    ],
    seoDescription:
      "Reserved slot for a research-style technical investigation with a defined question, method, evaluation, and limitations.",
    sortOrder: 8,
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
