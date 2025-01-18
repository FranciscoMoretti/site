import { type MdCastConfigInput } from 'mdcast'

const config: MdCastConfigInput = {
  markdown: {
    frontmatterProperties: {
      title: 'title',
      description: 'summary',
      canonical_url: 'canonical_url',
      tags: 'tags',
      image: 'images',
      date: 'date',
      slug: 'slug',
    },
    canonical_url_base: 'https://www.franciscomoretti.com/blog',
    link_url_base: 'https://www.franciscomoretti.com',
    image_url_base: 'https://www.franciscomoretti.com',
    default_lang: 'typescript',
  },
  devto: {
    should_publish: true,
  },
  hashnode: {
    should_hide: false,
    // Get tags for hashnode by:
    // 1. Search in https://hashnode.com/ the tag slug. E.g. Shadcn UI -> shadcn-ui
    // 2. Run the query to get the ID https://gql.hashnode.com/?source=legacy-api-page
    // E.g. query {
    //   tag(slug: "shadcn-ui") {
    //     id
    //   }
    // }
    tags_dictionary: {
      JavaScript: { slug: 'javascript', id: '56744721958ef13879b94cad' },
      TypeScript: { slug: 'typescript', id: '56744723958ef13879b954e0' },
      Ubuntu: { slug: 'ubuntu', id: '56744721958ef13879b94988' },
      UI: { slug: 'ui', id: '56744723958ef13879b954f5' },
      'VS Code': { slug: 'vscode', id: '57323a8bae9d49b5a5a5b39c' },
      Windows: { slug: 'windows', id: '56744723958ef13879b953f7' },
      React: { slug: 'reactjs', id: '56744723958ef13879b95434' },
      Services: { slug: 'services', id: '5682e64e2c29f7e0c86d024b' },
      'Tailwind CSS': { slug: 'tailwind-css', id: '5f4ebbb150b5c61ec6ef4ad2' },
      Testing: { slug: 'testing', id: '56744723958ef13879b9549b' },
      Tools: { slug: 'tools', id: '56744721958ef13879b94e0c' },
      Debugging: { slug: 'debugging', id: '56744723958ef13879b95372' },
      Git: { slug: 'git', id: '56744723958ef13879b9526c' },
      HTML: { slug: 'html', id: '56744722958ef13879b94f96' },
      'Next.js': { slug: 'nextjs', id: '584879f0c0aaf085e2012086' },
      Performance: { slug: 'performance', id: '56744721958ef13879b94dc4' },
      Analytics: { slug: 'analytics', id: '56744721958ef13879b9495b' },
      APIs: { slug: 'apis', id: '56744723958ef13879b95245' },
      'Best Practices': {
        slug: 'best-practices',
        id: '56744723958ef13879b95598',
      },
      CLI: { slug: 'cli', id: '56744723958ef13879b953a7' },
      Databases: { slug: 'databases', id: '56744722958ef13879b950eb' },
      'Shadcn UI': { slug: 'shadcn-ui', id: '648b5554f9b78f110ed2c1eb' },
      'Node.js': { slug: 'nodejs', id: '56744722958ef13879b94ffb' },
    },
  },
  medium: {
    should_publish: true,
    should_notify_followers: false,
    // Search in https://medium.com/ the tag e.g. "Shadcn UI"
    // When found, get it from the URL
    // E.g. https://medium.com/tag/shadcn-ui -> shadcn-ui
    tags_dictionary: {
      Analytics: { slug: 'analytics' },
      API: { slug: 'api' },
      'Best Practices': { slug: 'best-practices' },
      CLI: { slug: 'cli' },
      Database: { slug: 'database' },
      Debugging: { slug: 'debugging' },
      Git: { slug: 'git' },
      HTML: { slug: 'html' },
      JavaScript: { slug: 'javaScript' },
      'Next.js': { slug: 'nextjs' },
      Performance: { slug: 'performance' },
      React: { slug: 'react' },
      Services: { slug: 'services' },
      'Tailwind CSS': { slug: 'tailwind-Css' },
      Testing: { slug: 'testing' },
      Tools: { slug: 'tools' },
      TypeScript: { slug: 'typescript' },
      Ubuntu: { slug: 'ubuntu' },
      UI: { slug: 'ui' },
      'VS Code': { slug: 'vscode' },
      Windows: { slug: 'windows' },
      'Shadcn UI': { slug: 'shadcn-ui' },
      'Node.js': { slug: 'nodejs' },
    },
  },
}

export default config
