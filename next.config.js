const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
    serverActions: true,
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
        source: "/web-dev-in-windows-11",
        destination:
          "/blog/how-to-install-next-js-in-windows-using-wsl2-a-step-by-step-guide",
        permanent: true,
      },
      {
        source: "/zero-to-nextjs-example-with-wsl2-in-w11",
        destination:
          "/blog/how-to-install-next-js-in-windows-using-wsl2-a-step-by-step-guide",
        permanent: true,
      },
      {
        source: "/next-conf-2021-notes-and-resources",
        destination: "/blog/next-conf-2021-notes-and-resources",
        permanent: true,
      },
      {
        source: "/pull-env-variables-from-vercel",
        destination:
          "/blog/how-to-simplify-your-local-development-with-vercel-env",
        permanent: true,
      },
      {
        source: "/composition-vs-inheritance-which-is-better-for-your-code",
        destination: "/",
        permanent: false, // Temporarily redirect to home until I create a better page
      },
      {
        source:
          "/code-tips/composition-vs-inheritance-which-is-better-for-your-code",
        destination: "/",
        permanent: false, // Temporarily redirect to home until I create a better page
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
        source: "/use-pronounceable-and-meaningful-variable-names",
        destination:
          "/code-tips/use-pronounceable-and-meaningful-variable-names",
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
        destination: "/",
        permanent: true, // Temporarily redirect to home until I create a better page
      },
      {
        source: "/code-tips/prefer-es6-classes-over-es5-functions",
        destination: "/",
        permanent: true, // Temporarily redirect to home until I create a better page
      },
      {
        source: "/functions-should-do-one-thing",
        destination: "/code-tips/functions-should-do-one-thing",
        permanent: true,
      },
      {
        source: "/kiss-keep-it-short-and-simple",
        destination: "/code-tips/kiss-keep-it-short-and-simple",
        permanent: true,
      },
      {
        source: "/single-responsibility-principle-srp--solid",
        destination: "/code-tips/single-responsibility-principle-srp",
        permanent: true,
      },
      {
        source: "/interface-segregation-principle-isp--solid",
        destination: "/code-tips/interface-segregation-principle-isp",
        permanent: true,
      },
      {
        source: "/liskov-substitution-principle-lsp--solid",
        destination: "/code-tips/liskov-substitution-principle-lsp",
        permanent: true,
      },
      {
        source: "/open-closed-principle-ocp--solid",
        destination: "/code-tips/open-closed-principle-ocp",
        permanent: true,
      },
      {
        source: "/dependency-inversion-principle-dip--solid",
        destination: "/code-tips/dependency-inversion-principle-dip",
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
        source: "/code-tips/use-pronounceable-and-meaningful-variable-names",
        destination: "/code-tips/use-pronounceable-names",
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
