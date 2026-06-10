interface Project {
  title: string
  description: string
  href: string
  meta: string
  cta?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'ChatJS',
    description: `An open-source foundation for building AI chat products with auth, models, streaming, tools, sharing, desktop support, and a CLI.`,
    imgSrc:
      'https://raw.githubusercontent.com/FranciscoMoretti/sparka/refs/heads/main/app/opengraph-image.png',
    href: 'https://chatjs.dev',
    meta: '1.2k stars · 111 forks · TypeScript',
    cta: 'Open project',
  },
  {
    title: 'AI Registry',
    description: `A model explorer for Vercel AI Gateway with provider, context window, pricing, and metadata comparisons.`,
    href: 'https://airegistry.app',
    meta: '45 stars · 8 forks · TypeScript',
    cta: 'Open project',
  },
] as const

export default projectsData
