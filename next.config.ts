import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/arts-crafts", destination: "/creative", permanent: true },
      { source: "/design", destination: "/invitations", permanent: true },
      { source: "/web", destination: "/websites", permanent: true },
    ];
  },
};

export default nextConfig;
