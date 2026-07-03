import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import { SectionShell } from "@/components/shared/SectionShell";

/**
 * Closing contact band — one wide panel, direct CTAs only.
 * Placeholder socials (no href yet) render as muted non-links with a
 * "soon" chip; they never fake a destination.
 */
export function ContactPanel() {
  const github = socials.find((s) => s.kind === "github");
  const linkedin = socials.find((s) => s.kind === "linkedin");

  return (
    <SectionShell id="contact">
      <div className="panel relative overflow-hidden p-8 sm:p-10">
        <div
          aria-hidden="true"
          className="bg-grid-faint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_100%_at_50%_0%,black_25%,transparent_100%)]"
        />
        <div className="relative">
          <p className="meta-label">Contact</p>
          <h2 className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Working on physical AI — or reviewing an application?
          </h2>
          <p className="mt-3 text-muted">Direct is best: email gets answered.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/85"
            >
              <Mail size={16} aria-hidden="true" />
              Email Jangara
            </a>
            {github?.href ? (
              <a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-line-strong"
              >
                {github.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : null}
            {linkedin ? (
              linkedin.href ? (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-line-strong"
                >
                  {linkedin.label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-line px-4 py-2 text-sm text-faint">
                  {linkedin.label}
                  <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    soon
                  </span>
                </span>
              )
            ) : null}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
