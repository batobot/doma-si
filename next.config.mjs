/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'doma-si.com',
          },
        ],
        destination: 'https://www.doma-si.com',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
