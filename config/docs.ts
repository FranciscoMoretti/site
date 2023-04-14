import { DocsConfig } from "types"
import { allDocs } from "contentlayer/generated"

const simplifiedDocs = allDocs.map(
  doc => (({
    title: doc.title,
    slug: doc.slug ? doc.slug : 'error_slug',
    category: doc.category,
    sidebar_position: doc.sidebar_position ? doc.sidebar_position : 0
  })
))

interface DocPage {
  title: string;
  slug: string;
  category: string;
  sidebar_position: number;
}

function transformDocPagesToConfig(docPages: DocPage[]): DocsConfig {
  const sidebarNav: DocsConfig["sidebarNav"] = [];

  // Sort pages by sidebar_position
  docPages.sort((a, b) => {
    return a.sidebar_position - b.sidebar_position;
  });

  // group doc pages by category
  const pagesByCategory = docPages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, DocPage[]>);

  // build sidebarNav from grouped pages
  Object.entries(pagesByCategory).forEach(([category, pages]) => {
    const sidebarSection = {
      title: category,
      items: pages.map((page) => ({
        title: page.title,
        href: page.slug,
      })),
    };
    sidebarNav.push(sidebarSection);
  });

  return {
    mainNav: [
      {
        title: "Documentation",
        href: "/docs",
      },
      {
        title: "Guides",
        href: "/guides",
      },
    ],
    sidebarNav,
  };
}

const codeTipsDocs = simplifiedDocs.filter(doc => doc.slug.startsWith('/docs/code-tips'))
export const docsConfig = transformDocPagesToConfig(codeTipsDocs);
