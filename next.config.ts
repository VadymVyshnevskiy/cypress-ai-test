import type { NextConfig } from "next";

// Use basePath for GitHub Pages deployment
// Set GITHUB_PAGES=true in CI/CD, leave unset for localhost
const basePath = process.env.GITHUB_PAGES === "true" ? "/cypress-ai-test" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
