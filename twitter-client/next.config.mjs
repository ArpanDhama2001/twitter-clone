/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.twimg.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.ftcdn.net',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.licdn.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
