import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // On GitHub Actions, GITHUB_ACTIONS env var is set automatically — use it
  // to apply the /mens.space.waw base path only in the deployed build.
  ...(process.env.GITHUB_ACTIONS && {
    basePath: "/mens.space.waw",
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
