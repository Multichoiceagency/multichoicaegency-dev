const withPWA = require('next-pwa')({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint warnings during build
  },
  // Add TypeScript configuration to ignore build errors
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  images: {
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
        hostname: 'cdn.dribbble.com', // Additional image domain
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

module.exports = withPWA(nextConfig);