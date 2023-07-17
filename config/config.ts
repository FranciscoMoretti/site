import { UserConfig } from "../types/index"

const config: UserConfig = {
  title: "Francisco Moretti",
  description:
    "Hi, I'm Francisco! I'm learning in public and sharing my journey. I'm working with modern web technologies like Next.js, React, TailwindCSS, and TypeScript.",
  name: "Francisco Moretti",
  url: "https://www.franciscomoretti.com/",
  favicon: "",
  profilePicture: "/profile_picture.jpg",

  links: {
    twitter: "https://twitter.com/franmoretti_",
    github: "https://github.com/FranciscoMoretti/site",
  },

  editLinkRoot:
    "https://github.com/franciscomoretti/site/edit/main/site/content",
  showEditLink: true,
  showToc: true,
  showSidebar: false,

  contentExclude: ["templates"],

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
  analytics: "G-RQWLTRWBS2",
  navLinks: [
    { href: "/code-tips", title: "Code Tips" },
    { href: "/blog", title: "Blog" },
  ],
  social: [
    { label: "github", href: "https://github.com/flowershow/flowershow" },
    { label: "discord", href: "https://discord.gg/cPxejPzpwt" },
  ],
  search: {
    provider: "algolia",
    config: {
      appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
      apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
      indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
    },
  },
}

export default config
