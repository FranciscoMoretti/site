import { Icons } from "@/components/icons"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & {
  href?: string
  items: NavLink[]
}

type SiteConfig = {
  title: string
  description: string
  name: string
  url: string
  favicon: string
  profilePicture: string
  links: {
    twitter: string
    github: string
  }
  twitter: {
    handle: string
  }
  editLinkRoot: string
  showEditLink: boolean
  showToc: boolean
  showSidebar: boolean
  content: string
  contentExclude: string[]
  contentInclude: string[]
  blogDir: string
  peopleDir: string
  comments: {
    provider: "giscus" | "utterances" | "disqus"
    pages: string[]
    config: {
      repo: string
      repositoryId: string
      category: string
      categoryId: string
    }
  }
  search: {
    provider: "algolia"
    config: {
      appId: string
      apiKey: string
      indexName: string
    }
  }
  navLinks: {
    href: string
    title: string
  }[]
}

type UserConfig = {
  title: string
  description: string
  name: string
  url: string
} & Partial<Config>

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}
