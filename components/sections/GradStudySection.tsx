import { profile } from "@/content/profile";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MotionReveal } from "@/components/shared/MotionReveal";

/** Why graduate study — profile.graduateStudyStatement as three indexed panels. */
export function GradStudySection() {
  return (
    <SectionShell className="glow-top">
      <SectionHeading
        eyebrow="Why Graduate Study"
        title="The next step is depth"
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {profile.graduateStudyStatement.map((paragraph, i) => (
          <MotionReveal key={i} delay={i * 0.08}>
            <div className="panel h-full p-5">
              <p className="font-mono text-xs tracking-[0.16em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {paragraph}
              </p>
            </div>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
