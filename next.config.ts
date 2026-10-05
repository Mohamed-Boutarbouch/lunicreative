import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lunicreative",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
