import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import { BackgroundGrid } from "@/components/shared/BackgroundGrid";

/** Homepage hero: research identity, direct evidence links, and real robot context. */
export function HeroPanel() {
  const github = socials.find((social) => social.kind === "github");

  return (
    <section data-glow="wide" className="relative">
      <BackgroundGrid />
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="meta-label">{profile.eyebrow}</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">
              {profile.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects/"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/85"
              >
                Research
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-line-strong"
              >
                <FileText size={16} aria-hidden="true" />
                CV
              </a>
              {github?.href ? (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  GitHub
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
          <figure className="panel overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/k1-walk-to-volleyball-poster.jpg"
              alt="Booster K1 humanoid during a physical locomotion test in the robotics lab"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full object-cover object-right"
              loading="eager"
            />
            <figcaption className="border-t border-line px-4 py-3 font-mono text-[11px] leading-relaxed text-faint">
              Booster K1 hardware context. Canonical NaVILA results on this site
              are simulation-only; live closed-loop navigation is not claimed.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
