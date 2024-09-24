import { Config } from "notion-downloader-cli"

const config: Config = {
  conversion: {
    outputPaths: {
      markdown: "content/",
      assets: "public/assets/",
    },
    markdownPrefixes: {
      markdown: "",
      assets: "/assets",
    },
    layoutStrategy: {
      markdown: "hierarchical",
      assets: "flat",
    },
    namingStrategy: {
      markdown: "githubSlug",
      assets: "default",
    },
    pageLinkHasExtension: false,
    slugProperty: "slug",
    statusPropertyName: "Status",
    statusPropertyValue: "Publish",
  },
  rootDbAsFolder: true,
  rootObjectType: "database",
  rootId: "c974ccd9c70c4abd8a5bd4f5a294e5dd",
  cache: {
    cleanCache: false,
    cacheStrategy: "cache",
  },
  logLevel: "debug",
  revalidatePeriod: 300,
}

export default config
