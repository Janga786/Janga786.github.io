import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { profile } from "@/content/profile";
import { MotionReveal } from "@/components/shared/MotionReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";

export function AboutPreview() {
  return (
    <SectionShell id="about-preview">
      <MotionReveal>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A computer engineer moving deeper into robot learning"
              lede={profile.shortBio}
              className="mb-6"
            />
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              {profile.missionStatement} My background spans mathematical
              modeling, simulation, ROS, perception, embedded systems, and field
              integration; current work uses that range to ask narrower and more
              rigorous learning questions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/about/"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
              >
                Full background
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                <FileText size={16} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>
          <div className="panel p-6">
            <p className="meta-label">Teaching, service & leadership</p>
            <ul className="mt-5 space-y-4">
              {profile.leadership.slice(0, 3).map((role) => (
                <li key={role} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-accent/60" />
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MotionReveal>
    </SectionShell>
  );
}
