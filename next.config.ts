import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},
  transpilePackages: ["gsap", "@splinetool/runtime", "lucide-react"],
  images: { unoptimized: true },
};

export default nextConfig;
