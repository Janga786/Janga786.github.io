import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/content/profile";
import { BackgroundGrid } from "@/components/shared/BackgroundGrid";
import { SystemDiagram } from "@/components/sections/SystemDiagram";

/** Homepage hero: headline + CTAs on the left, deployment schematic right. */
export function HeroPanel() {
  return (
    <section data-glow="wide" className="relative">
      <BackgroundGrid />
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="meta-label">
              {profile.eyebrow}
              <span
                aria-hidden="true"
                className="blink-caret ml-1.5 inline-block h-[11px] w-[5px] translate-y-px bg-accent/80"
              />
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient-hero">{profile.headline}</span>
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">
              {profile.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects/"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/85"
              >
                View Projects
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/about/"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-line-strong"
              >
                About &amp; Resume
              </Link>
            </div>
          </div>
          <SystemDiagram />
        </div>
      </div>
    </section>
  );
}
