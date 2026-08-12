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
    "Jangara Bliss studies learning-based autonomy, robot learning, and embodied systems across simulation and real robotic platforms, with completed results, active work, and claim boundaries separated clearly.",

  /* ── Visibility toggles ─────────────────────────────────────────────── */

  /** Target programs stay private by default. Flip to render them on About. */
  showTargetProgramsPublicly: false,

  /** GPA appears on the About page; keep it off the homepage. */
  showGpaOnHome: false,
  showGpaOnAbout: true,

  /** Small "graduate study focus" card on the About page. */
  showAdmissionsContextSection: false,

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
   * Set to undefined to hide the download button — the resume page adapts.
   */
  resumePdfPath: "/resume.pdf" as string | undefined,
} as const;

export type SiteConfig = typeof siteConfig;
