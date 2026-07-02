import type { NavItem } from "@/lib/types";
import { siteConfig } from "./site-config";

export const primaryNav: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  ...(siteConfig.enableWritingPage
    ? [{ label: "Writing", href: "/writing" }]
    : []),
  ...(siteConfig.showResumePage ? [{ label: "Resume", href: "/resume" }] : []),
  { label: "Contact", href: "/#contact" },
];

export const headerCta: NavItem = { label: "View Projects", href: "/projects" };
