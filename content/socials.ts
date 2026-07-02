import type { SocialLink } from "@/lib/types";
import { profile } from "./profile";

/**
 * Set `href` and flip `isPlaceholder: false` as links become real.
 * Placeholder entries render as "coming soon" — they never fake a link.
 */
export const socials: SocialLink[] = [
  {
    kind: "github",
    label: "GitHub",
    href: "https://github.com/Janga786",
    isPlaceholder: false,
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: undefined, // TODO: add LinkedIn profile URL
    isPlaceholder: true,
  },
  {
    kind: "email",
    label: "Email",
    href: `mailto:${profile.contact.email}`,
    isPlaceholder: false,
  },
];
