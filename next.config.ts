import { withContentlayer } from 'next-contentlayer2'
import createBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is app.posthog.com vercel.live va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined
const unoptimized = process.env.UNOPTIMIZED ? true : undefined

const config: NextConfig = {
  output,
  basePath,
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['app', 'components', 'layouts', 'scripts'],
  },
  experimental: {
    ppr: 'incremental',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
    unoptimized,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ]
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  async redirects() {
    return [
      {
        source: '/ingest/:path*',
        destination: 'https://app.posthog.com/:path*',
        permanent: true,
      },
      {
        source: '/tag/:path*',
        destination: '/tags/:path*',
        permanent: true,
      },
      {
        source: '/code-tips/:path*',
        destination: '/blog/:path',
        permanent: true,
      },
      {
        source: '/code-tips/',
        destination: '/tags/code-tips',
        permanent: true,
      },
      {
        source: '/blog-posts',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/tag/next-js',
        destination: '/tags/nextjs',
        permanent: true,
      },
      {
        source: '/tags/next-js',
        destination: '/tags/nextjs',
        permanent: true,
      },
      {
        source: '/tag/tailwind-css',
        destination: '/tags/tailwindcss',
        permanent: true,
      },
      {
        source: '/tags/tailwind-css',
        destination: '/tags/tailwindcss',
        permanent: true,
      },
      {
        source: '/use-a-lite-youtube-embedded-player-in-nextjs',
        destination: '/blog/use-a-lite-youtube-embedded-player-in-nextjs',
        permanent: true,
      },
      {
        source: '/blog/youtube-embedded-player',
        destination: '/blog/use-a-lite-youtube-embedded-player-in-nextjs',
        permanent: true,
      },
      {
        source:
          '/how-to-animate-on-scroll-with-react-intersection-observer-and-tailwind-in-a-nextjs-app',
        destination:
          '/blog/how-to-animate-on-scroll-with-react-intersection-observer-and-tailwind-in-a-nextjs-app',
        permanent: true,
      },
      {
        source: '/nextjs-in-a-vs-code-development-container',
        destination: '/blog/nextjs-in-a-vs-code-development-container',
        permanent: true,
      },
      {
        source: '/vs-code-competitive-programming-setup',
        destination: '/blog/vs-code-competitive-programming-setup',
        permanent: true,
      },
      {
        source: '/how-to-set-up-google-analytics-on-a-nextjs-website',
        destination: '/blog/how-to-set-up-google-analytics-on-a-nextjs-website',
        permanent: true,
      },
      {
        source: '/blog/web-dev-in-windows-11',
        destination: '/blog/how-to-install-next-js-in-windows-using-wsl2-a-step-by-step-guide',
        permanent: true,
      },
      {
        source: '/zero-to-nextjs-example-with-wsl2-in-w11',
        destination: '/blog/how-to-install-next-js-in-windows-using-wsl2-a-step-by-step-guide',
        permanent: true,
      },
      {
        source: '/next-conf-2021-notes-and-resources',
        destination: '/blog/next-conf-2021-notes-and-resources',
        permanent: true,
      },
      {
        source: '/pull-env-variables-from-vercel',
        destination: '/blog/how-to-simplify-your-local-development-with-vercel-env',
        permanent: true,
      },
      {
        source: '/composition-vs-inheritance-which-is-better-for-your-code',
        destination: '/blog/composition-vs-inheritance-which-is-better-for-your-code',
        permanent: true,
      },
      {
        source: '/code-tips/composition-vs-inheritance-which-is-better-for-your-code',
        destination: '/blog/composition-vs-inheritance-which-is-better-for-your-code',
        permanent: true,
      },
      {
        source: '/dont-add-unneeded-context',
        destination: '/blog/composition-vs-inheritance-which-is-better-for-your-code',
        permanent: true,
      },
      {
        source: '/dont-over-optimize',
        destination: '/blog/dont-over-optimize',
        permanent: true,
      },
      {
        source: '/use-pronounceable-and-meaningful-variable-names',
        destination: '/blog/use-pronounceable-and-meaningful-variable-names',
        permanent: true,
      },
      {
        source: '/dont-use-flags-as-function-parameters',
        destination: '/blog/dont-use-flags-as-function-parameters',
        permanent: true,
      },
      {
        source: '/dont-use-magic-numbers',
        destination: '/blog/dont-use-magic-numbers',
        permanent: true,
      },
      {
        source: '/avoid-mental-mapping',
        destination: '/blog/avoid-mental-mapping',
        permanent: true,
      },
      {
        source: '/few-function-arguments',
        destination: '/blog/few-function-arguments',
        permanent: true,
      },
      {
        source: '/function-names-should-say-what-they-do',
        destination: '/blog/function-names-should-say-what-they-do',
        permanent: true,
      },
      {
        source: '/prefer-es6-classes-over-es5-functions',
        destination: '/',
        permanent: true, // Temporarily redirect to home until I create a better page
      },
      {
        source: '/code-tips/prefer-es6-classes-over-es5-functions',
        destination: '/blog/prefer-es6-classes-over-es5-functions',
        permanent: true, // Temporarily redirect to home until I create a better page
      },
      {
        source: '/functions-should-do-one-thing',
        destination: '/blog/functions-should-do-one-thing',
        permanent: true,
      },
      {
        source: '/kiss-keep-it-short-and-simple',
        destination: '/blog/kiss-keep-it-short-and-simple',
        permanent: true,
      },
      {
        source: '/single-responsibility-principle-srp--solid',
        destination: '/blog/single-responsibility-principle-srp',
        permanent: true,
      },
      {
        source: '/interface-segregation-principle-isp--solid',
        destination: '/blog/interface-segregation-principle-isp',
        permanent: true,
      },
      {
        source: '/liskov-substitution-principle-lsp--solid',
        destination: '/blog/liskov-substitution-principle-lsp',
        permanent: true,
      },
      {
        source: '/open-closed-principle-ocp--solid',
        destination: '/blog/open-closed-principle-ocp',
        permanent: true,
      },
      {
        source: '/dependency-inversion-principle-dip--solid',
        destination: '/blog/dependency-inversion-principle-dip',
        permanent: true,
      },
      {
        source: '/avoid-negative-conditionals',
        destination: '/blog/avoid-negative-conditionals',
        permanent: true,
      },
      {
        source: '/one-concept-per-test',
        destination: '/blog/one-concept-per-test',
        permanent: true,
      },
      {
        source: '/blog/avoid-side-effects-in-functions',
        destination: '/blog/avoid-side-effects',
        permanent: true,
      },
      {
        source: '/use-explanatory-variables',
        destination: '/blog/use-explanatory-variables',
        permanent: true,
      },
      {
        source: '/encapsulate-conditionals',
        destination: '/blog/encapsulate-conditionals',
        permanent: true,
      },
      {
        source: '/avoid-negative-conditionals',
        destination: '/blog/avoid-negative-conditionals',
        permanent: true,
      },
      {
        source: '/code-tips/use-pronounceable-and-meaningful-variable-names',
        destination: '/blog/use-pronounceable-names',
        permanent: true,
      },
      {
        source: '/use-the-same-vocabulary-for-the-same-concept',
        destination: '/blog/use-the-same-vocabulary-for-the-same-concept',
        permanent: true,
      },
      {
        source: '/dont-ignore-caught-errors',
        destination: '/blog/dont-ignore-caught-errors',
        permanent: true,
      },
      {
        source: '/use-getters-and-setters',
        destination: '/blog/use-getters-and-setters',
        permanent: true,
      },
      {
        source: '/remove-dead-code',
        destination: '/blog/remove-dead-code',
        permanent: true,
      },
      {
        source: '/clean-code-tips',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

const buildConfig = (): NextConfig => {
  const plugins = [withContentlayer, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), config)
}

export default buildConfig()
