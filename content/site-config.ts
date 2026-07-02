/**
 * Central site configuration and feature toggles.
 *
 * Everything an admissions-season edit might need to flip lives here —
 * no component changes required.
 */
export const siteConfig = {
  /** Production URL. Update if the site moves to a custom domain. */
  siteUrl: "https://janga786.github.io",

  title: "Jangara Bliss",
  titleTemplate: "%s — Jangara Bliss",
  description:
    "Jangara Bliss is a computer engineering student building AI systems for the physical world — vision-language navigation on a real humanoid, reinforcement learning in simulation, and the systems engineering in between.",

  /* ── Visibility toggles ─────────────────────────────────────────────── */

  /** Target programs stay private by default. Flip to render them on About. */
  showTargetProgramsPublicly: false,

  /** GPA appears on the About page; keep it off the homepage. */
  showGpaOnHome: false,
  showGpaOnAbout: true,

  /** Small "graduate study focus" card on the About page. */
  showAdmissionsContextSection: true,

  /** Render the /resume route and header link. */
  showResumePage: true,

  /** Render the /writing route, homepage preview, and header link. */
  enableWritingPage: true,

  /* ── Presentation ───────────────────────────────────────────────────── */

  /** The design is dark-first; this exists for future theming work. */
  darkModeDefault: true,

  /** Master switch for Framer Motion reveals (reduced-motion always wins). */
  enableMotion: true,

  /**
   * Path to a resume PDF inside /public (e.g. "/resume.pdf").
   * Leave undefined until a PDF is added — the resume page adapts.
   */
  resumePdfPath: undefined as string | undefined,
} as const;

export type SiteConfig = typeof siteConfig;
