import type { NextConfig } from 'next'

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' app.posthog.com vercel.live va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  connect-src *;
  font-src 'self';
  frame-src 'self';
`

const legacyContentSources = [
  '/about',
  '/projects',
  '/blog',
  '/blog/:path*',
  '/blog-posts',
  '/tags',
  '/tags/:path*',
  '/tag/:path*',
  '/code-tips',
  '/code-tips/:path*',
  '/clean-code-tips',
  '/use-a-lite-youtube-embedded-player-in-nextjs',
  '/how-to-animate-on-scroll-with-react-intersection-observer-and-tailwind-in-a-nextjs-app',
  '/nextjs-in-a-vs-code-development-container',
  '/vs-code-competitive-programming-setup',
  '/how-to-set-up-google-analytics-on-a-nextjs-website',
  '/zero-to-nextjs-example-with-wsl2-in-w11',
  '/next-conf-2021-notes-and-resources',
  '/pull-env-variables-from-vercel',
  '/composition-vs-inheritance-which-is-better-for-your-code',
  '/dont-add-unneeded-context',
  '/dont-over-optimize',
  '/use-pronounceable-and-meaningful-variable-names',
  '/dont-use-flags-as-function-parameters',
  '/dont-use-magic-numbers',
  '/avoid-mental-mapping',
  '/few-function-arguments',
  '/function-names-should-say-what-they-do',
  '/prefer-es6-classes-over-es5-functions',
  '/functions-should-do-one-thing',
  '/kiss-keep-it-short-and-simple',
  '/single-responsibility-principle-srp--solid',
  '/interface-segregation-principle-isp--solid',
  '/liskov-substitution-principle-lsp--solid',
  '/open-closed-principle-ocp--solid',
  '/dependency-inversion-principle-dip--solid',
  '/avoid-negative-conditionals',
  '/one-concept-per-test',
  '/use-explanatory-variables',
  '/encapsulate-conditionals',
  '/use-the-same-vocabulary-for-the-same-concept',
  '/dont-ignore-caught-errors',
  '/use-getters-and-setters',
  '/remove-dead-code',
]

const config: NextConfig = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
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
  async redirects() {
    return [
      {
        source: '/ingest/:path*',
        destination: 'https://app.posthog.com/:path*',
        permanent: true,
      },
      ...legacyContentSources.map((source) => ({
        source,
        destination: '/',
        permanent: true,
      })),
    ]
  },
}

export default config
