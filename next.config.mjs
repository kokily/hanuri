/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.hanuri.or.kr',
      },
    ],
  },
};

export default nextConfig;
