import { allDocs } from "contentlayer/generated"

import { DocsConfig } from "types"
import { siteConfig } from "@/config/site"

const simplifiedDocs = allDocs
  .filter((doc) => doc.publish)
  .map((doc) => ({
    title: doc.title,
    routepath: doc.routepath ? doc.routepath : "error_slug",
    category: doc.category,
    sidebar_position: doc.sidebar_position ? doc.sidebar_position : 0,
  }))

interface DocPage {
  title: string
  routepath: string
  category: string
  sidebar_position: number
}

function transformDocPagesToConfig(docPages: DocPage[]): DocsConfig {
  const sidebarNav: DocsConfig["sidebarNav"] = []

  // Sort pages by sidebar_position
  docPages.sort((a, b) => {
    return a.sidebar_position - b.sidebar_position
  })

  // group doc pages by category
  const pagesByCategory = docPages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = []
    }
    acc[page.category].push(page)
    return acc
  }, {} as Record<string, DocPage[]>)

  // build sidebarNav from grouped pages
  Object.entries(pagesByCategory).forEach(([category, pages]) => {
    const sidebarSection = {
      title: category,
      items: pages.map((page) => ({
        title: page.title,
        href: page.routepath,
      })),
    }
    sidebarNav.push(sidebarSection)
  })

  return {
    mainNav: siteConfig.navLinks.map((link) => ({
      title: link.title,
      href: link.href,
    })),
    sidebarNav,
  }
}

export const docsConfig = transformDocPagesToConfig(simplifiedDocs)
