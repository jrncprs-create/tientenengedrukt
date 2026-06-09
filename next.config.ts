import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["sanity", "next-sanity", "@sanity/vision", "@sanity/ui"],
};

export default nextConfig;
