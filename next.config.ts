import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cjpydkz.cluster031.hosting.ovh.net'
      },
      {
        protocol: 'https',
        hostname: 'cjpydkz.cluster031.hosting.ovh.net',
        pathname: '/wp-content/uploads/**',
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
