export const defaultConfig = {
  title: "",
  description: "",
  name: "",
  url: "",
  favicon: "",
  ogImage: "",

  links: {
    twitter: "",
    github: "",
  },
  twitter: {
    handle: "@franmoretti_",
  },

  editLinkRoot: "",
  showEditLink: false,
  showToc: true,
  showSidebar: false,

  // content source directory for markdown files
  // DO NOT CHANGE THIS VALUE
  // if you have your notes in another (external) directory,
  // /content dir should be a symlink to that directory
  content: "content",
  contentExclude: [],
  contentInclude: [],
  blogDir: "blog",
  peopleDir: "people",

  comments: {
    provider: "giscus", // supported providers: giscus, utterances, disqus
    pages: ["blog"], // page directories where we want commments
    config: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    },
  },
  search: {
    provider: "algolia",
    config: {
      appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
      apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
      indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
    },
  },
  navLinks: [
    // { href: '/about', name: 'About' },
  ],
}
