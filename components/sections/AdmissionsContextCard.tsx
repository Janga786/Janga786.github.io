import { siteConfig } from "@/content/site-config";
import { profile } from "@/content/profile";
import { Chip } from "@/components/shared/Chip";

/** Editor-note convention: strings starting with "[" are fill-in prompts. */
const isEditorNote = (s: string) => s.trim().startsWith("[");

/**
 * Restrained admissions-context panel for the About page.
 *
 * Target programs are PRIVATE by default: they render only when
 * `siteConfig.showTargetProgramsPublicly` is true AND
 * `profile.targetPrograms` has entries. When hidden, the public page shows
 * nothing extra — no hint that a private list exists.
 */
export function AdmissionsContextCard() {
  if (!siteConfig.showAdmissionsContextSection) return null;

  const showPrograms =
    siteConfig.showTargetProgramsPublicly && profile.targetPrograms.length > 0;

  return (
    <div className="panel p-5">
      <p className="meta-label mb-3">Graduate study focus</p>
      <div className="space-y-1.5 text-sm text-muted">
        <p>
          Applying to terminal master&apos;s programs — AI, CS, ECE, robotics —
          enrolling after a {profile.graduation} B.S. in {profile.major}.
        </p>
        <p>Domestic U.S. applicant &middot; Colorado resident.</p>
      </div>
      {showPrograms ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.targetPrograms.map((program) => (
            <li key={program}>
              <Chip
                className={
                  isEditorNote(program) ? "italic text-faint" : undefined
                }
              >
                {program}
              </Chip>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
