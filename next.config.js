/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint:     { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors:  true },
  images:     { unoptimized: true },

  // Reduce bundle parsing time on large data files
  webpack(config, { isServer }) {
    // Disable size warnings — our curriculum files are intentionally large
    config.performance = { hints: false }

    // Speed up source map generation
    if (!isServer) {
      config.devtool = false
    }

    return config
  },
}

module.exports = nextConfig
