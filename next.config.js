const path = require("path")
const { nextjsRedirects } = require("./lib/redirects-config.ts")

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return nextjsRedirects
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cloud.multichoiceagency.nl", pathname: "/**" },
      { protocol: "https", hostname: "atahome.nl", pathname: "/**" },
      { protocol: "https", hostname: "cdn.dribbble.com", pathname: "/**" },
      { protocol: "https", hostname: "cdn.pixabay.com", pathname: "/**" },
      { protocol: "https", hostname: "source.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  turbopack: {
    resolveAlias: {
      underscore: "lodash",
    },
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(process.cwd()),
    }
    return config
  },
}

module.exports = nextConfig
