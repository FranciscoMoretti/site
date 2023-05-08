import { DocsConfig } from "types"
import { allDocs } from "contentlayer/generated"
import { siteConfig } from "@/config/site"

const simplifiedDocs = allDocs
  .filter((doc) => doc.publish)
  .map((doc) => ({
    title: doc.title,
    slug: doc.slug ? doc.slug : "error_slug",
    category: doc.category,
    sidebar_position: doc.sidebar_position ? doc.sidebar_position : 0,
  }))

interface DocPage {
  title: string
  slug: string
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
        href: page.slug,
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
