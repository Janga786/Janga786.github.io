import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { SectionShell } from "@/components/shared/SectionShell";
import { Chip } from "@/components/shared/Chip";
import { MotionReveal } from "@/components/shared/MotionReveal";

export const metadata = pageMetadata({
  title: "Resume",
  description:
    "Resume of Jangara Bliss — computer engineering, AI systems, robotics deployment.",
  path: "/resume/",
});

/** Content strings starting with "[" are owner-facing fill-in prompts. */
const isEditorNote = (s: string) => s.trim().startsWith("[");

function NoteAwareText({ text }: { text: string }) {
  if (!isEditorNote(text)) return <>{text}</>;
  return (
    <span className="inline-flex flex-wrap items-baseline gap-2">
      <span className="italic text-faint">{text}</span>
      <span className="rounded-full border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
        to fill
      </span>
    </span>
  );
}

function ResumeSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <MotionReveal>
      <section className="mt-12">
        <h2 className="meta-label">{label}</h2>
        <div className="mt-4">{children}</div>
      </section>
    </MotionReveal>
  );
}

export default function ResumePage() {
  if (!siteConfig.showResumePage) {
    return (
      <SectionShell>
        <div className="panel mx-auto max-w-md p-6 text-center">
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            Resume unavailable
          </h1>
          <p className="mt-2 text-sm text-muted">
            This page is currently disabled.
          </p>
        </div>
      </SectionShell>
    );
  }

  const builderSignal = profile.credibilitySignals.find(
    (s) => s.label === "Builder orientation",
  );
  const productEthos = profile.builderEthos.find((line) =>
    line.startsWith("Product judgment"),
  );

  return (
    <SectionShell className="glow-top">
      <div className="mx-auto max-w-3xl">
        <MotionReveal>
          <p className="meta-label">{profile.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Resume
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted">
            {profile.shortBio}
          </p>
        </MotionReveal>

        {/* Education */}
        <ResumeSection label="Education">
          <div className="panel p-6">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {profile.school}
            </h3>
            <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="meta-label">Major</dt>
                <dd className="mt-1 text-foreground">{profile.major}</dd>
              </div>
              {profile.minor ? (
                <div>
                  <dt className="meta-label">Minor</dt>
                  <dd className="mt-1 text-foreground">{profile.minor}</dd>
                </div>
              ) : null}
              <div>
                <dt className="meta-label">Graduation</dt>
                <dd className="mt-1 text-foreground">{profile.graduation}</dd>
              </div>
              <div>
                <dt className="meta-label">GPA</dt>
                <dd className="mt-1 text-foreground">
                  {profile.gpa}{" "}
                  <span className="text-muted">({profile.gpaNote})</span> ·
                  upper-division {profile.upperDivisionGpa}
                </dd>
              </div>
            </dl>
          </div>
        </ResumeSection>

        {/* Focus areas */}
        <ResumeSection label="Focus areas">
          <ul className="flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <li key={interest}>
                <Chip>{interest}</Chip>
              </li>
            ))}
          </ul>
        </ResumeSection>

        {/* Capability summary */}
        <ResumeSection label="Capability summary">
          <ul className="grid gap-3 sm:grid-cols-2">
            {profile.capabilities.map((capability) => (
              <li key={capability.title} className="panel p-5">
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {capability.description}
                </p>
              </li>
            ))}
          </ul>
        </ResumeSection>

        {/* Selected work */}
        <ResumeSection label="Selected work">
          <ul className="space-y-3">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}/`}
                  className="panel panel-hover group flex items-start justify-between gap-4 p-5"
                >
                  <span>
                    <span className="block text-sm font-semibold tracking-tight text-foreground">
                      {project.shortTitle ?? project.title}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                      <NoteAwareText text={project.oneLiner} />
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-faint transition-colors group-hover:text-accent"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </ResumeSection>

        {/* Entrepreneurship & leadership */}
        <ResumeSection label="Entrepreneurship & leadership">
          <div className="panel p-6">
            {builderSignal ? (
              <p className="text-sm text-foreground">{builderSignal.detail}</p>
            ) : null}
            {productEthos ? (
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {productEthos}
              </p>
            ) : null}
          </div>
        </ResumeSection>

        {/* Download */}
        <MotionReveal>
          <div className="mt-14 border-t border-line pt-8">
            {siteConfig.resumePdfPath ? (
              <a
                href={siteConfig.resumePdfPath}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/85"
              >
                <Download size={16} aria-hidden="true" />
                Download PDF
              </a>
            ) : (
              <p className="font-mono text-xs italic text-faint">
                PDF version — drop resume.pdf into /public and set
                resumePdfPath in content/site-config.ts
              </p>
            )}
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
