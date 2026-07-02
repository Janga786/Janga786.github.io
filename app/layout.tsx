import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site-config";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import { absoluteUrl } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${profile.name} — AI systems for the physical world`,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.title,
    url: siteConfig.siteUrl,
    title: `${profile.name} — AI systems for the physical world`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI systems for the physical world`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0d12",
  colorScheme: "dark",
};

function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: absoluteUrl("/"),
    email: `mailto:${profile.contact.email}`,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: profile.school,
    },
    description: profile.shortBio,
    knowsAbout: profile.interests,
    sameAs: socials
      .filter((s) => s.href && s.kind !== "email")
      .map((s) => s.href),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jbMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
