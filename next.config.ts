import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages でサブパス（例: /portfolio）にデプロイする場合は以下を有効化
  // basePath: "/portfolio",
};

export default nextConfig;
