interface Project {
  title: string
  description: string
  href: string
}

const projectsData: Project[] = [
  {
    title: 'ChatJS',
    description: `An open-source foundation for building AI chat products with auth, models, streaming, tools, sharing, desktop support, and a CLI.`,
    href: 'https://chatjs.dev',
  },
  {
    title: 'AI Registry',
    description: `A model explorer for Vercel AI Gateway with provider, context window, pricing, and metadata comparisons.`,
    href: 'https://airegistry.app',
  },
] as const

export default projectsData
