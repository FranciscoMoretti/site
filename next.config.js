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
