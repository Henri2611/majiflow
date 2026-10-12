import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.trycloudflare.com", "10.162.122.91"],
  compress: true,
};

export default nextConfig;
