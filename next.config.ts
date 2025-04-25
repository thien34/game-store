import type { NextConfig } from 'next'
import bundeAnalyzer from '@next/bundle-analyzer'
import createMDX from '@next/mdx'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    inlineCss: isProd,
    mdxRs: true
  },
  turbopack: {},
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  pageExtensions: ['mdx', 'ts', 'tsx'],
  reactStrictMode: !isProd,
  images: {
    minimumCacheTTL: isProd ? 31_536_000 : 86_400 // 1 year for prod, 1 day for dev
  },
  compress: isProd, // Enable gzip HTTP response compression for prod
  poweredByHeader: !isProd, // Remove X-Powered-By header in HTTP response for prod
  generateEtags: isProd, // Enable ETag generation for prod
  redirects: async () => [
    {
      source: '/work',
      destination: '/work/skills-and-tools',
      permanent: false
    }
  ]
}

const withBundleAnalyzer = bundeAnalyzer({
  enabled: isProd ? process.env.ANALYZE === 'true' : false
})

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react'
  }
})

export default withBundleAnalyzer(withMDX(nextConfig))
