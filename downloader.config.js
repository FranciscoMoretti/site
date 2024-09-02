/** @type {import('notion-downloader-cli').Config} */
module.exports = {
  conversion: {
    outputPaths: {
      markdown: "content/",
      images: "public/assets/",
    },
    markdownPrefixes: {
      images: "/assets",
    },
    pageLinkHasExtension: false,
    slugProperty: "slug",
  },
  rootDbAsFolder: true,
  rootObjectType: "database",
  rootId: "c974ccd9c70c4abd8a5bd4f5a294e5dd",
  cache: {
    cleanCache: false,
    cacheStrategy: "cache",
  },
  logLevel: "debug",
  revalidatePeriod: 180,
}
