const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  async redirects() {
    return [
      {
        source: "/blog-posts",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/use-a-lite-youtube-embedded-player-in-nextjs",
        destination: "/blog/use-a-lite-youtube-embedded-player-in-nextjs",
        permanent: true,
      },
      {
        source:
          "/how-to-animate-on-scroll-with-react-intersection-observer-and-tailwind-in-a-nextjs-app",
        destination:
          "/blog/how-to-animate-on-scroll-with-react-intersection-observer-and-tailwind-in-a-nextjs-app",
        permanent: true,
      },
      {
        source: "/nextjs-in-a-vs-code-development-container",
        destination: "/blog/nextjs-in-a-vs-code-development-container",
        permanent: true,
      },
      {
        source: "/vs-code-competitive-programming-setup",
        destination: "/blog/vs-code-competitive-programming-setup",
        permanent: true,
      },
      {
        source: "/how-to-set-up-google-analytics-on-a-nextjs-website",
        destination: "/blog/how-to-set-up-google-analytics-on-a-nextjs-website",
        permanent: true,
      },
      {
        source: "/zero-to-nextjs-example-with-wsl2-in-w11",
        destination: "/blog/zero-to-nextjs-example-with-wsl2-in-w11",
        permanent: true,
      },
      {
        source: "/next-conf-2021-notes-and-resources",
        destination: "/blog/next-conf-2021-notes-and-resources",
        permanent: true,
      },
      {
        source: "/composition-vs-inheritance-which-is-better-for-your-code",
        destination:
          "/code-tips/composition-vs-inheritance-which-is-better-for-your-code",
        permanent: true,
      },
      {
        source: "/composition-vs-inheritance-which-is-better-for-your-code",
        destination:
          "/code-tips/composition-vs-inheritance-which-is-better-for-your-code",
        permanent: true,
      },
      {
        source: "/dont-add-unneeded-context",
        destination: "/code-tips/dont-add-unneeded-context",
        permanent: true,
      },
      {
        source: "/dont-over-optimize",
        destination: "/code-tips/dont-over-optimize",
        permanent: true,
      },
      {
        source: "/dont-use-flags-as-function-parameters",
        destination: "/code-tips/dont-use-flags-as-function-parameters",
        permanent: true,
      },
      {
        source: "/dont-use-magic-numbers",
        destination: "/code-tips/dont-use-magic-numbers",
        permanent: true,
      },
      {
        source: "/avoid-mental-mapping",
        destination: "/code-tips/avoid-mental-mapping",
        permanent: true,
      },
      {
        source: "/few-function-arguments",
        destination: "/code-tips/few-function-arguments",
        permanent: true,
      },
      {
        source: "/function-names-should-say-what-they-do",
        destination: "/code-tips/function-names-should-say-what-they-do",
        permanent: true,
      },
      {
        source: "/prefer-es6-classes-over-es5-functions",
        destination: "/code-tips/prefer-es6-classes-over-es5-functions",
        permanent: true,
      },
      {
        source: "/functions-should-do-one-thing",
        destination: "/code-tips/functions-should-do-one-thing",
        permanent: true,
      },
      {
        source: "/interface-segregation-principle-isp--solid",
        destination: "/code-tips/interface-segregation-principle-isp--solid",
        permanent: true,
      },
      {
        source: "/kiss-keep-it-short-and-simple",
        destination: "/code-tips/kiss-keep-it-short-and-simple",
        permanent: true,
      },
      {
        source: "/liskov-substitution-principle-lsp--solid",
        destination: "/code-tips/liskov-substitution-principle-lsp--solid",
        permanent: true,
      },
      {
        source: "/open-closed-principle-ocp--solid",
        destination: "/code-tips/open-closed-principle-ocp--solid",
        permanent: true,
      },
      {
        source: "/avoid-negative-conditionals",
        destination: "/code-tips/avoid-negative-conditionals",
        permanent: true,
      },
      {
        source: "/one-concept-per-test",
        destination: "/code-tips/one-concept-per-test",
        permanent: true,
      },
      {
        source: "/use-explanatory-variables",
        destination: "/code-tips/use-explanatory-variables",
        permanent: true,
      },
      {
        source: "/encapsulate-conditionals",
        destination: "/code-tips/encapsulate-conditionals",
        permanent: true,
      },
      {
        source: "/avoid-negative-conditionals",
        destination: "/code-tips/avoid-negative-conditionals",
        permanent: true,
      },
      {
        source: "/dependency-inversion-principle-dip--solid",
        destination: "/code-tips/dependency-inversion-principle-dip",
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
