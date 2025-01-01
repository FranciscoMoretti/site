import { Config } from 'notion-downloader'

const config: Config = {
  conversion: {
    pageLinkHasExtension: false,
    slugProperty: 'slug',
    namingStrategy: {
      markdown: 'githubSlug',
      assets: 'default',
    },
    outputPaths: {
      markdown: 'data/blog',
      assets: 'public/notion',
    },
    markdownPrefixes: {
      markdown: '/blog/',
      assets: '/notion/',
    },
    filters: [
      {
        propertyName: 'draft',
        propertyValue: 'false',
        fitlerType: 'property',
      },
    ],
  },
  rootDbAsFolder: true,
  rootObjectType: 'database',
  rootId: 'bbad12b67bcf4390bb503b177f17a9f1',
  cache: {
    cleanCache: false,
    cacheStrategy: 'cache',
  },
  logLevel: 'info',
  revalidatePeriod: -1,
}

export default config
