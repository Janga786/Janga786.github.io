import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";

export const dynamic = "force-static";
export const alt = "Jangara Bliss robotics research project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 72px",
          backgroundColor: "#0a0d12",
          color: "#e7eaf0",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize: "19px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#7aa5ff",
            }}
          >
            JANGARA BLISS · RESEARCH CASE STUDY
          </div>
          <div style={{ fontSize: "18px", color: "#94a0b4" }}>
            {project.dateLabel ?? "Robotics research"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              maxWidth: "1000px",
              fontSize: project.title.length > 54 ? "54px" : "66px",
              lineHeight: 1.05,
              fontWeight: 600,
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              marginTop: "28px",
              maxWidth: "970px",
              fontSize: "27px",
              lineHeight: 1.35,
              color: "#a8b2c5",
            }}
          >
            {project.problem}
          </div>
        </div>

        <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
          {project.tags.slice(0, 4).map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "8px 14px",
                border: "1px solid rgba(148,163,184,0.28)",
                borderRadius: "999px",
                fontSize: "17px",
                color: "#94a0b4",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
