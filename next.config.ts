import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.trycloudflare.com", "10.162.122.91"],
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'leaflet'],
  },
  compress: true,
};

export default nextConfig;
