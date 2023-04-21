import { SiteConfig } from "@/types"

export const defaultConfig: SiteConfig = {
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
    handle: "",
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
      repo: "",
      repositoryId: "",
      category: "",
      categoryId: "",
    },
  },
  search: {
    provider: "algolia",
    config: {
      appId: "",
      apiKey: "",
      indexName: "",
    },
  },
  navLinks: [
    // { href: '/about', name: 'About' },
  ],
}
