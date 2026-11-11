# Jangara Bliss — Robotics Portfolio

Portfolio site for Jangara Bliss, a computer engineering senior at Fort Lewis College working on learned control for robots. The site states what was completed in simulation, what ran on hardware, what came from a team or course, and which upstream systems the work builds on.

Featured projects:

- Booster K1 / NaVILA navigation research: 1,077-episode simulation benchmark (under 1% to 18.3% success), a 2,400-episode ablation, and two live episodes on the real K1
- Bridge crack-inspection arm (reBot B601-DM): seven-motor CAN bring-up at 200 Hz, measured gravity/friction feed-forward, and zero-shot crack segmentation
- xembench: cross-embodiment manipulation benchmark in simulation

The homepage systems section covers the Colorado Robotics Challenge hexapod, KUKA kinematics, Sawyer/Baxter restoration, and embedded/FPGA/PCB work; the projects page also includes CLiDA LiDAR motion analysis and the KDUR data platform.

## Tech stack

- Next.js 16 App Router with static export (`output: "export"`)
- TypeScript and Tailwind CSS v4
- Framer Motion for restrained reveals
- GitHub Pages deployment from `out/`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

The production site is emitted to `out/`. There is no server runtime.

`public/resume.pdf` is the final resume PDF with the phone number left off the public copy, copied in directly. `scripts/generate_resume.py` carries the same text in a different layout; running it (`python3 scripts/generate_resume.py`) overwrites that file.

## Content architecture

All public copy lives under `content/`:

- `profile.ts` — bio, three research questions, education, experience, capabilities, and leadership
- `projects.ts` — case studies, methods, experimental design, metrics, attribution, failure analysis, limitations, and next questions
- `writing.ts` — real research outputs with authorship and status labels; no planned-content cards
- `site-config.ts` — canonical URL and visibility toggles

Project pages use distinct status labels including active research, completed study, fielded system, and validated library. Visible attribution fields identify the applicant's role, advisor when applicable, collaborators, and upstream systems/models. Separate provenance notes preserve team ownership, course context, inherited code, and simulation/hardware boundaries.

## Media and evidence

- `public/diagrams/` contains deterministic SVG system diagrams.
- `public/media/` contains project photographs, videos, and report-derived figures.
- `public/og/k1-navigation-sim.png` is a real project frame used by the homepage social card; each project route also generates a project-specific social card.
- `public/resume.pdf` is the final resume PDF without the phone number (see Validation above).

External artifacts link to the canonical GitHub repository, result report, evidence ledger, or methods documentation. Files without a defensible public source are not presented as evidence.

## Deployment

The repository targets GitHub Pages. Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes `out/`.

If the production domain changes, update `siteUrl` in `content/site-config.ts`.

## Evidence policy

- Do not convert a hardware clip into a model-control claim without synchronized command or model traces.
- Do not publish a detector metric without a preserved held-out split and result artifact.
- Distinguish designed, fabricated, assembled, and validated hardware milestones.
- Name team roles, course origins, upstream frameworks, and inherited code.
- Preserve denominators, per-episode artifacts, and negative results.
- Keep limitations visible; an unsupported number is removed, not softened.

## License

The site's code is under the [MIT License](LICENSE). Photos, videos, and other media in `public/` are not covered by that license.
