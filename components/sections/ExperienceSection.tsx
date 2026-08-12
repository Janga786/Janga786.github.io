import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { MotionReveal } from "@/components/shared/MotionReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" className="bg-surface">
      <SectionHeading
        eyebrow="Research Experience"
        title="Ownership across studies and systems"
        lede="Roles are described at the level personally designed, implemented, evaluated, debugged, or coordinated."
      />
      <ol className="divide-y divide-line border-y border-line">
        {profile.experience.map((item, index) => (
          <MotionReveal key={`${item.title}-${item.dateLabel}`} delay={Math.min(index * 0.04, 0.16)}>
            <li className="grid gap-3 py-6 md:grid-cols-[1fr_2fr] md:gap-10">
              <div>
                <p className="font-mono text-[11px] tracking-wide text-faint">
                  {item.dateLabel}
                </p>
                <h3 className="mt-2 font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-accent-2">{item.organization}</p>
              </div>
              <div className="flex items-start gap-4">
                <p className="text-sm leading-relaxed text-muted">{item.summary}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    aria-label={`Read the case study for ${item.title}`}
                    className="mt-0.5 shrink-0 text-faint transition-colors hover:text-accent"
                  >
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </li>
          </MotionReveal>
        ))}
      </ol>
    </SectionShell>
  );
}
