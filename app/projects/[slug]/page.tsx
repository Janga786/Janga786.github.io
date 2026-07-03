import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { profile } from "@/content/profile";
import {
  projects,
  getProject,
  getCategory,
  adjacentProjects,
} from "@/content/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MotionReveal } from "@/components/shared/MotionReveal";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectFacts } from "@/components/project/ProjectFacts";
import { PlaceholderMedia } from "@/components/project/PlaceholderMedia";
import { ArchitectureCard } from "@/components/project/ArchitectureCard";
import { EvidenceGrid } from "@/components/project/EvidenceGrid";
import { ArtifactLinks } from "@/components/project/ArtifactLinks";
import { ProjectPager } from "@/components/project/ProjectPager";

const isEditorNote = (s: string) => s.trim().startsWith("[");

/** Renders content strings; editor-note strings ("[...]") get a muted hint treatment. */
function NoteAware({ text }: { text: string }) {
  if (!isEditorNote(text)) return <>{text}</>;
  return (
    <span className="italic text-faint">
      {text}
      <span className="ml-2 inline-flex items-center rounded-full border border-dashed border-line-strong px-1.5 py-px align-middle font-mono text-[10px] not-italic tracking-wide text-faint">
        to fill
      </span>
    </span>
  );
}

function NoteAwareList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2.5 h-px w-4 shrink-0 bg-line-strong"
          />
          <span className="min-w-0 text-sm leading-relaxed text-muted">
            <NoteAware text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return pageMetadata({
    title: project.shortTitle ?? project.title,
    description: project.seoDescription,
    path: `/projects/${slug}/`,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const categoryLabel = getCategory(project.category)?.label ?? project.category;
  const { prev, next } = adjacentProjects(project.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seoDescription,
    url: absoluteUrl(`/projects/${project.slug}/`),
    author: {
      "@type": "Person",
      name: profile.name,
    },
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-14 sm:space-y-16">
        <div className="space-y-6">
          <ProjectHero project={project} categoryLabel={categoryLabel} />

          {project.isPlaceholder ? (
            <div className="panel flex items-start gap-3 border-dashed p-4">
              <Info
                size={18}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-faint"
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="inline-flex items-center rounded-full border border-line-strong px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  placeholder
                </span>
                <p className="text-sm leading-relaxed text-muted">
                  This is a structured slot awaiting a real project — the
                  layout below shows the evidence it&apos;s built to hold.
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <MotionReveal>
          <ProjectFacts project={project} />
        </MotionReveal>

        {project.media[0] ? (
          <MotionReveal>
            <PlaceholderMedia media={project.media[0]} />
          </MotionReveal>
        ) : null}

        <MotionReveal>
          <section>
            <SectionHeading
              as="h2"
              eyebrow="01"
              title="Overview"
              className="mb-6"
            />
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              <NoteAware text={project.summary} />
            </p>
            {project.bodySections?.map((section) => (
              <div key={section.heading} className="mt-8 max-w-2xl">
                <h3 className="text-base font-medium text-foreground">
                  {section.heading}
                </h3>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-sm leading-relaxed text-muted"
                  >
                    <NoteAware text={paragraph} />
                  </p>
                ))}
              </div>
            ))}
          </section>
        </MotionReveal>

        <MotionReveal>
          <ArchitectureCard
            summary={project.architectureSummary}
            nodes={project.architectureNodes}
          />
        </MotionReveal>

        {project.media.length > 1 ? (
          <MotionReveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {project.media.slice(1).map((m) => (
                <PlaceholderMedia key={m.alt} media={m} />
              ))}
            </div>
          </MotionReveal>
        ) : null}

        <MotionReveal>
          <section>
            <SectionHeading
              as="h2"
              eyebrow="02"
              title="Contributions"
              className="mb-6"
            />
            <NoteAwareList items={project.contributions} />
          </section>
        </MotionReveal>

        <MotionReveal>
          <section>
            <SectionHeading
              as="h2"
              eyebrow="03"
              title="Evidence & evaluation"
              className="mb-6"
            />
            <EvidenceGrid
              evidence={project.evidence}
              metrics={project.metrics}
            />
          </section>
        </MotionReveal>

        <MotionReveal>
          <div className="grid gap-4 md:grid-cols-2">
            <section className="panel p-6">
              <p className="meta-label mb-2">04</p>
              <h2 className="text-lg font-medium text-foreground">
                Limitations
              </h2>
              <div className="mt-4">
                <NoteAwareList items={project.limitations} />
              </div>
            </section>
            <section className="panel p-6">
              <p className="meta-label mb-2">05</p>
              <h2 className="text-lg font-medium text-foreground">
                Lessons & tradeoffs
              </h2>
              <div className="mt-4">
                <NoteAwareList items={project.lessons} />
              </div>
            </section>
          </div>
        </MotionReveal>

        <MotionReveal>
          <section>
            <SectionHeading
              as="h2"
              eyebrow="06"
              title="Artifacts"
              className="mb-6"
            />
            <ArtifactLinks artifacts={project.artifacts} />
          </section>
        </MotionReveal>

        <ProjectPager prev={prev} next={next} />
      </article>
    </div>
  );
}
