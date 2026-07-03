import type { Metadata } from "next";
import Link from "next/link";
import { Check, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Chip } from "@/components/shared/Chip";
import { MotionReveal } from "@/components/shared/MotionReveal";
import { AdmissionsContextCard } from "@/components/sections/AdmissionsContextCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: profile.shortBio,
  path: "/about/",
});

/** Editor-note convention: strings starting with "[" are fill-in prompts. */
const isEditorNote = (s: string) => s.trim().startsWith("[");

function EditorAwareText({ text }: { text: string }) {
  if (!isEditorNote(text)) return <>{text}</>;
  return (
    <span className="italic text-faint">
      {text}
      <span className="ml-2 inline-flex items-center rounded-full border border-line px-1.5 py-px font-mono text-[10px] uppercase not-italic tracking-[0.12em] text-faint">
        to fill
      </span>
    </span>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
      {children}
    </h2>
  );
}

export default function AboutPage() {
  return (
    <SectionShell className="glow-top">
      <article className="mx-auto max-w-3xl">
        <MotionReveal>
          <SectionHeading
            as="h1"
            eyebrow="Background"
            title="About Jangara"
          />
        </MotionReveal>

        {/* Long bio */}
        <MotionReveal>
          <div className="space-y-4 leading-relaxed text-muted">
            {profile.longBio.map((paragraph, i) => (
              <p key={i} className={cn(i === 0 && "text-lg")}>
                <EditorAwareText text={paragraph} />
              </p>
            ))}
          </div>
        </MotionReveal>

        {/* Technical interests */}
        <MotionReveal className="mt-14">
          <SubHeading>Technical interests</SubHeading>
          <ul className="flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <li key={interest}>
                <Chip>{interest}</Chip>
              </li>
            ))}
          </ul>
        </MotionReveal>

        {/* Why graduate school */}
        <MotionReveal className="mt-14">
          <SubHeading>Why graduate school</SubHeading>
          <div className="space-y-4 border-l-2 border-accent/40 pl-4">
            {profile.graduateStudyStatement.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                <EditorAwareText text={paragraph} />
              </p>
            ))}
          </div>
        </MotionReveal>

        {/* Education */}
        <MotionReveal className="mt-14">
          <SubHeading>Education</SubHeading>
          <div className="panel p-5">
            <p className="font-medium text-foreground">{profile.school}</p>
            <p className="mt-1 text-sm text-muted">
              {profile.major}
              {profile.minor ? ` · Minor in ${profile.minor}` : null}
            </p>
            <p className="mt-1 text-sm text-muted">
              B.S. expected {profile.graduation}
            </p>
            {siteConfig.showGpaOnAbout ? (
              <p className="mt-3 border-t border-line pt-3 font-mono text-xs text-muted">
                GPA {profile.gpa} ({profile.gpaNote}) &middot;{" "}
                {profile.upperDivisionGpa} upper-division
              </p>
            ) : null}
          </div>
        </MotionReveal>

        {/* Admissions context */}
        <MotionReveal className="mt-6">
          <AdmissionsContextCard />
        </MotionReveal>

        {/* Builder ethos */}
        <MotionReveal className="mt-14">
          <SubHeading>Builder ethos</SubHeading>
          <ul className="space-y-3">
            {profile.builderEthos.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted"
              >
                <Check
                  size={16}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span>
                  <EditorAwareText text={principle} />
                </span>
              </li>
            ))}
          </ul>
        </MotionReveal>

        {/* Values */}
        <MotionReveal className="mt-14">
          <SubHeading>Values</SubHeading>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {profile.values.map((value) => (
              <li
                key={value}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted"
              >
                <span
                  aria-hidden
                  className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/60"
                />
                <EditorAwareText text={value} />
              </li>
            ))}
          </ul>
        </MotionReveal>

        {/* Contact row */}
        <MotionReveal className="mt-16">
          <div className="flex flex-wrap items-center gap-3 border-t border-line pt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/85"
            >
              Contact
            </Link>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-line-strong"
            >
              <Mail size={16} aria-hidden />
              {profile.contact.email}
            </a>
          </div>
        </MotionReveal>
      </article>
    </SectionShell>
  );
}
