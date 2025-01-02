/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static export mode
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.multichoiceagency.nl', // WordPress image domain
        pathname: '/wp-content/uploads/**', // Allow all images under WordPress uploads
      },
      {
        protocol: 'https',
        hostname: 'atahome.nl', // Additional image domain
        pathname: '/**', // Allow all paths under atahome.nl
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com', // Additional image domain
        pathname: '/**', // Allow all paths under atahome.nl
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com', // WordPress image domain
        pathname: '/**', // Allow all images under WordPress uploads
      },
    ],
  },
};

module.exports = nextConfig;
