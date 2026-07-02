import type { NextConfig } from "next";

// Static export: deploys to GitHub Pages (current setup) or any static host.
// Deploying to Vercel instead? You may delete `output: "export"` to use the
// full Next.js runtime — everything in this project also works statically.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: __dirname },
};

export default nextConfig;
