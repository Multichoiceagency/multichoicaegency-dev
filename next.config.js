/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint warnings during build
  },
  images: {
    unoptimized: true, // Required for static export mode
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.multichoiceagency.nl', // WordPress image domain
        pathname: '/**', // Allow all images under this domain
      },
      {
        protocol: 'https',
        hostname: 'atahome.nl', // Additional image domain
        pathname: '/**', // Allow all paths under this domain
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com', // Pixabay domain
        pathname: '/**', // Allow all paths under this domain
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com', // Unsplash domain
        pathname: '/**', // Allow all paths under this domain
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Pexels domain
        pathname: '/**', // Allow all paths under this domain
      },
    ],
  },
};

module.exports = nextConfig;
