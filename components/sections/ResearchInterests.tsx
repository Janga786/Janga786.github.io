import { profile } from "@/content/profile";
import { MotionReveal } from "@/components/shared/MotionReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";

export function ResearchInterests() {
  return (
    <SectionShell id="interests" className="bg-surface">
      <SectionHeading
        eyebrow="Research Interests"
        title="Three connected questions"
        lede="The methods will change. These are the longer-lived questions that organize the work."
      />
      <ol className="grid gap-4 lg:grid-cols-3">
        {profile.researchThemes.map((theme, index) => (
          <MotionReveal key={theme.title} delay={index * 0.06}>
            <li className="panel h-full p-6">
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-medium text-foreground">
                {theme.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                {theme.question}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {theme.description}
              </p>
            </li>
          </MotionReveal>
        ))}
      </ol>
    </SectionShell>
  );
}
