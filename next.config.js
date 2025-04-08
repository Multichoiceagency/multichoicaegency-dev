const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cloud.multichoiceagency.nl', pathname: '/**' },
      { protocol: 'https', hostname: 'atahome.nl', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.dribbble.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.pixabay.com', pathname: '/**' },
      { protocol: 'https', hostname: 'source.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable Turbopack for development
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(process.cwd()), // Use process.cwd() for the correct root directory
    };
    return config;
  },
};

module.exports = nextConfig;