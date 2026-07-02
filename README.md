# Jangara Bliss — Portfolio

A dark-mode portfolio site for Jangara Bliss, a computer engineering student building AI systems for the physical world. Built to support graduate-school applications: it presents deployed work (vision-language navigation on a real humanoid, PPO locomotion in Isaac Sim, a three-machine inference relay) alongside clearly labeled placeholder slots for work that is planned but not yet done.

**The site is evidence-first.** Every claim rendered on a page either links to an artifact (video, report, diagram, repo, logs) or is explicitly marked as pending. Nothing on the site fakes completeness — see the [Non-fabrication policy](#non-fabrication-policy) below before editing any content.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static export via `output: "export"`)
- TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- Framer Motion (scroll reveals only, via `components/shared/MotionReveal.tsx`)
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build / static export

```bash
npm run build
```

The static site is emitted to `out/`. There is no server runtime — no server actions, cookies, or request-time APIs are used anywhere.

## How to edit content

All user-facing copy lives in `/content`. Components render whatever these files contain — you should rarely need to touch a component to change what the site says.

### Editor notes (`[...]` strings)

Any content string that starts with `[` (e.g. `"[Replace with precise advisor/team context]"`) is a **fill-in prompt**, not real content. The UI renders these as muted italic text with a small "to fill" chip so they can never be mistaken for claims. Replace them with real text, or leave them — they degrade gracefully.

### Profile — `content/profile.ts`

Name, headline, bios, education numbers (GPA fields), interests, values, the graduate-study statement, builder ethos, credibility signals, and homepage capabilities. `targetPrograms` stays empty and private by default (see toggles below).

### Adding or replacing a project — `content/projects.ts`

Projects conform to the `Project` type in `lib/types.ts`. The important fields:

| Field | Purpose |
| --- | --- |
| `slug`, `title`, `oneLiner`, `summary` | Identity and card copy |
| `category`, `status`, `featured`, `sortOrder` | Placement: category filter, badge, homepage feature, ordering |
| `isPlaceholder` | `true` renders the entry as a labeled structural slot |
| `role`, `teamContext`, `contributions` | Who did what — keep team context honest |
| `problem`, `systemType`, `whyItMatters` | The framing block on the detail page |
| `architectureSummary`, `architectureNodes` | Text + node labels for the architecture flow card |
| `evidence` | Slots with `status: "pending" \| "available"` — pending renders an empty state |
| `metrics` | `MetricPlaceholder[]` — leave `value` undefined until measured |
| `limitations`, `lessons` | Candor sections; admissions readers trust these |
| `media`, `artifacts` | Diagrams/videos and outbound links; omit `src`/`href` until real |
| `seoDescription` | Per-project meta description |

To replace a placeholder with a real project, follow the numbered steps in the comment at the top of `content/projects.ts`:

1. Set `title`, `oneLiner`, `summary`, `problem`, `whyItMatters` to the real story.
2. Fill `contributions` with your specific work; put team context in `teamContext`.
3. Flip `evidence` slot statuses to `"available"` with real values as you attach diagrams, videos, metrics, and logs. Add `artifacts` links (repo/report/video).
4. Replace `metrics` hints with measured values. Never estimate — measure or omit.
5. Set `isPlaceholder: false` and adjust `status` (`"featured"` or `"selected"`).
6. Keep `limitations` and `lessons` honest.

### Writing items — `content/writing.ts`

Each `WritingItem` renders as a card on `/writing`. To publish a piece: write it, host it (PDF in `/public`, external post, or a future route), set `link` and `dateLabel`, and flip `isPlaceholder: false`. Placeholder items render with a "Planned" chip and "in progress" marker — they never fake a link.

### Timeline — `content/timeline.ts`

The "builder arc" on the homepage. Date labels are deliberately coarse (`"Undergraduate"`, `"Recent"`); replace with specific ranges as you choose to disclose them.

### Socials and navigation — `content/socials.ts`, `content/navigation.ts`

Socials: set `href` and flip `isPlaceholder: false` as links become real (LinkedIn is pending). Navigation derives from the site-config toggles automatically — Writing and Resume links appear only when their pages are enabled.

## Site-config toggles — `content/site-config.ts`

| Flag | Default | Effect |
| --- | --- | --- |
| `siteUrl` | `https://janga786.github.io` | Canonical URL base for metadata, sitemap, robots |
| `title` / `titleTemplate` / `description` | — | Site-wide metadata strings |
| `showTargetProgramsPublicly` | `false` | Renders `profile.targetPrograms` on About. Keep off for the public build; the program list stays private |
| `showGpaOnHome` | `false` | GPA on the homepage (intentionally off) |
| `showGpaOnAbout` | `true` | GPA row in the About page education panel |
| `showAdmissionsContextSection` | `true` | "Graduate study focus" card on About |
| `showResumePage` | `true` | `/resume` route + header link |
| `enableWritingPage` | `true` | `/writing` route, homepage preview, header link, sitemap entry |
| `darkModeDefault` | `true` | Reserved for future theming; design is dark-first |
| `enableMotion` | `true` | Master switch for scroll reveals (reduced-motion always wins) |
| `resumePdfPath` | `undefined` | Path to a PDF in `/public` (e.g. `"/resume.pdf"`); the resume page adapts when unset |

## Adding images, videos, and reports

- **Diagrams**: put files in `public/placeholder-diagrams/` and set `src` on the project's `media` entries. Until then, media items without `src` render as schematic placeholder cards.
- **Social/OG images**: `app/opengraph-image.tsx` generates the default OG image at build time. Static alternatives can live in `public/og/`.
- **Reports and videos**: host the file (PDF in `/public`, YouTube, etc.) and set `href` on the relevant `artifacts` entry in `content/projects.ts` or `link` in `content/writing.ts`. Artifacts without an `href` render as "not yet published".

## Deployment

### GitHub Pages (current)

Push to the `Janga786.github.io` repository's `main` branch. The workflow at `.github/workflows/deploy.yml` runs `npm ci && npm run build` and publishes `out/` to Pages. One-time repo setup: Settings → Pages → Source: **GitHub Actions**.

### Vercel (alternative)

Import the repository at vercel.com — the defaults work as-is with the static export. Optionally remove `output: "export"` (and `images: { unoptimized: true }`) from `next.config.ts` to use the full Next.js runtime; everything in this project also works statically.

If the site moves to a custom domain, update `siteUrl` in `content/site-config.ts`.

## Non-fabrication policy

This site is read by admissions committees. Its credibility is the product.

- **Never invent** metrics, awards, employers, dates, or outcomes. If it didn't happen or wasn't measured, it doesn't go in `/content`.
- **Measure before publishing numbers.** Metric slots carry hints like "measure before publishing — do not estimate" for a reason. A missing number reads better than a wrong one.
- **Placeholders stay labeled.** `isPlaceholder: true` entries and `[bracketed]` editor notes render as visibly unfinished. Do not dress them up as completed work — replace them with real work or leave them clearly pending.
- **Claims link to artifacts.** When adding an achievement, attach the evidence (video, report, diagram, logs) in the same edit, or mark the evidence slot as pending.
- **Keep candor sections honest.** `limitations` and `lessons` exist to show judgment; sanitizing them defeats their purpose.
