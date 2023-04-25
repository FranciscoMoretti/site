import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"

import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { remarkWikiLink, getPermalinks } from "@flowershow/remark-wiki-link"
import { siteConfig } from "./config/site"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `code-tips/**/*.md*`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    category: {
      type: "string",
      required: true,
    },
    date: {
      type: "string",
    },
    // TODO: Solve slug - permalink mechanism
    // slug: {
    //   type: "string",
    //   required: true,
    // },
    page_id: {
      type: "string",
    },
    sidebar_position: {
      type: "number",
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields,
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.md*`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    // slug: {
    //   type: "string",
    // },
    page_id: {
      type: "string",
    },
    sidebar_position: {
      type: "number",
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: false,
    },
    authors: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: "list",
      of: { type: "string" },
      required: false,
      default: ["fmoretti"],
    },
  },
  computedFields,
}))

export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    avatar: {
      type: "string",
      required: true,
    },
    twitter: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}))

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.md*`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    // slug: {
    //   type: "string",
    // },
    page_id: {
      type: "string",
    },
    sidebar_position: {
      type: "number",
    },
  },
  computedFields,
}))

export default makeSource(async () => {
  const permalinks = await getPermalinks(siteConfig.content)
  return {
    contentDirPath: siteConfig.content,
    onExtraFieldData: "ignore",
    documentTypes: [Page, Doc, Post, Author],
    mdx: {
      cwd: process.cwd(),
      remarkPlugins: [
        remarkGfm,
        [remarkWikiLink, { permalinks, pathFormat: "obsidian-short" }],
      ],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "dark-plus",
            onVisitLine(node) {
              // Prevent lines from collapsing in `display: grid` mode, and allow empty
              // lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }]
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className.push("line--highlighted")
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ["word--highlighted"]
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              className: [
                "before:content-['#'] before:absolute before:invisible before:-ml-[1em] hover:before:visible before:text-slate-300 pl-[1em] -ml-[1em]",
              ],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    },
  }
})
