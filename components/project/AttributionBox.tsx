import type { Project } from "@/lib/types";

export function AttributionBox({ project }: { project: Project }) {
  const items = [
    { label: "My role", value: project.role },
    ...(project.advisor ? [{ label: "Advisor", value: project.advisor }] : []),
    { label: "Collaborators", value: project.collaborators },
    { label: "Upstream systems / models", value: project.upstreamSystems },
  ];

  return (
    <section className="panel border-accent/25 p-6" aria-labelledby="attribution-heading">
      <p className="meta-label">Attribution</p>
      <h2 id="attribution-heading" className="mt-2 text-lg font-medium text-foreground">
        Who did what
      </h2>
      <dl className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="bg-card-2 p-4">
            <dt className="meta-label">{item.label}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
