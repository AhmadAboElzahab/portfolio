/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['0.0.0.0', '*'],
    },
  },
};

export default nextConfig;
