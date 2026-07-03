/**
 * Shared content types.
 *
 * Everything rendered on the site flows through these types from the files in
 * /content. Fields named `*Placeholder*` or flagged `isPlaceholder` exist so
 * the site can look intentional before real evidence is inserted — see the
 * non-fabrication policy in the README.
 */

export type ProjectCategory =
  | "embodied-ai"
  | "multimodal"
  | "perception"
  | "rl-simulation"
  | "systems-integration"
  | "embedded"
  | "product"
  | "research";

export interface CategoryMeta {
  id: ProjectCategory;
  label: string;
  /** One sentence on what strong evidence looks like in this category. */
  evidenceNote: string;
}

export type ProjectStatus = "featured" | "selected" | "placeholder";

export interface EvidenceSlot {
  /** e.g. "End-to-end latency", "Demo video", "Failure cases" */
  label: string;
  /** What should eventually be attached here. Rendered as muted helper text. */
  hint: string;
  /** "pending" renders a tasteful empty state; "available" renders `value`. */
  status: "pending" | "available";
  value?: string;
}

export interface MetricPlaceholder {
  label: string;
  /** Real value once measured, e.g. "142 ms". Leave undefined until known. */
  value?: string;
  hint: string;
}

export interface MediaItem {
  kind: "image" | "video" | "diagram";
  /** Omit src to render a polished schematic placeholder card. */
  src?: string;
  /** Poster frame for videos. */
  poster?: string;
  alt: string;
  caption?: string;
}

export type ArtifactKind =
  | "report"
  | "demo"
  | "video"
  | "repo"
  | "slides"
  | "diagram"
  | "logs";

export interface ArtifactLink {
  kind: ArtifactKind;
  label: string;
  /** Omit href to render the artifact as "not yet published". */
  href?: string;
}

export interface BodySection {
  heading: string;
  paragraphs: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortTitle?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  /** True while the entry is a structural placeholder awaiting real work. */
  isPlaceholder: boolean;
  oneLiner: string;
  summary: string;
  role: string;
  teamContext: string;
  stack: string[];
  tags: string[];
  dateLabel?: string;
  problem: string;
  systemType: string;
  whyItMatters: string;
  contributions: string[];
  architectureSummary: string;
  /** Ordered node labels for the architecture flow card. */
  architectureNodes: string[];
  evidence: EvidenceSlot[];
  metrics: MetricPlaceholder[];
  limitations: string[];
  lessons: string[];
  media: MediaItem[];
  artifacts: ArtifactLink[];
  bodySections?: BodySection[];
  seoDescription: string;
  sortOrder: number;
}

export type WritingType =
  | "deployment-report"
  | "architecture"
  | "evaluation"
  | "reflection"
  | "postmortem"
  | "investigation";

export interface WritingItem {
  slug: string;
  title: string;
  type: WritingType;
  typeLabel: string;
  summary: string;
  isPlaceholder: boolean;
  /** External or internal link once the piece is published. */
  link?: string;
  dateLabel?: string;
  featured: boolean;
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  description: string;
  dateLabel: string;
  isPlaceholder: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href?: string;
  kind: "github" | "linkedin" | "email" | "other";
  isPlaceholder: boolean;
}

export interface Capability {
  title: string;
  description: string;
  /** Lucide icon name, resolved in the CapabilityGrid component. */
  icon: string;
}

export interface CredibilitySignal {
  label: string;
  detail: string;
  icon: string;
}

export interface Profile {
  name: string;
  headline: string;
  /** Mono eyebrow line above the hero headline. */
  eyebrow: string;
  subheadline: string;
  shortBio: string;
  longBio: string[];
  location: string;
  school: string;
  major: string;
  minor?: string;
  graduation: string;
  gpa: string;
  upperDivisionGpa: string;
  gpaNote: string;
  interests: string[];
  values: string[];
  missionStatement: string;
  /** First-person version — About page. */
  graduateStudyStatement: string[];
  /** Third-person version — homepage (keeps first person off the home page). */
  graduateStudyHomepage: string[];
  builderEthos: string[];
  /** Verified honors/awards — rendered on About and Resume. */
  honors: string[];
  /** Leadership & service roles — rendered on About and Resume. */
  leadership: string[];
  /** Kept empty and hidden by default — see siteConfig.showTargetProgramsPublicly. */
  targetPrograms: string[];
  contact: {
    email: string;
  };
  credibilitySignals: CredibilitySignal[];
  capabilities: Capability[];
}
