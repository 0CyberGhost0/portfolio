/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
    // remotePatterns: ['leetcard.jacoblin.cool'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leetcard.jacoblin.cool',
        port: '',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;
