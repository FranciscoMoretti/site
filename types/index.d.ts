import { User } from "@prisma/client"
import type { Icon } from "lucide-react"

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
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

type SiteConfig = {
  title: string
  description: string
  name: string
  url: string
  favicon: string
  ogImage: string
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
    name: string
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

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
    stripeCurrentPeriodEnd: number
    isPro: boolean
  }
