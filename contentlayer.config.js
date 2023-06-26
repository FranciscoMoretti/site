import path from "path"
import { getPermalinks, remarkWikiLink } from "@flowershow/remark-wiki-link"
import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import { visit } from "unist-util-visit"

import { siteConfig } from "./config/site"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  route: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  routepath: {
    type: "string",
    resolve: (doc) =>
      doc.slug
        ? path.join("/", path.dirname(doc._raw.flattenedPath), doc.slug)
        : path.join("/", doc._raw.flattenedPath),
  },
  tags: {
    type: "list",
    of: { type: "string" },
    required: false,
    resolve: (doc) => {
      return doc.tag ? doc.tag.split(", ") : []
    },
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
    slug: {
      type: "string",
      required: true,
    },
    sidebar_position: {
      type: "number",
    },
    publish: {
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
    slug: {
      type: "string",
      required: true,
    },
    publish: {
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
    tag: {
      type: "string",
      required: false,
      default: "",
    },
  },
  computedFields,
}))

export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.md*`,
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
    slug: {
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
    slug: {
      type: "string",
      required: false,
    },
    sidebar_position: {
      type: "number",
    },
  },
  computedFields,
}))

const contentLayerExcludeDefaults = [
  "node_modules",
  ".git",
  ".yarn",
  ".cache",
  ".next",
  ".contentlayer",
  "package.json",
  "tsconfig.json",
]

export default makeSource(async () => {
  const permalinks = await getPermalinks(siteConfig.content).filter(
    (link) => !link.startsWith("/.obsidian/")
  )

  return {
    contentDirPath: siteConfig.content,
    contentDirExclude: contentLayerExcludeDefaults.concat([
      ".obsidian",
      ...siteConfig.contentExclude,
    ]),
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
        () => (tree) => {
          visit(tree, (node) => {
            if (node?.type === "element" && node?.tagName === "pre") {
              const [codeEl] = node.children
              if (codeEl.tagName !== "code") {
                return
              }

              node.__rawString__ = codeEl.children?.[0].value
              node.__src__ = node.properties?.__src__
            }
          })
        },
        [
          rehypePrettyCode,
          {
            theme: {
              dark: "dark-plus",
              light: "light-plus",
            },
            keepBackground: false,

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
        () => (tree) => {
          visit(tree, (node) => {
            if (node?.type === "element" && node?.tagName === "div") {
              if (!("data-rehype-pretty-code-fragment" in node.properties)) {
                return
              }

              const preElement = node.children.at(-1)
              if (preElement.tagName !== "pre") {
                return
              }

              preElement.properties["__withMeta__"] =
                node.children.at(0).tagName === "div"
              preElement.properties["__rawString__"] = node.__rawString__

              if (node.__src__) {
                preElement.properties["__src__"] = node.__src__
              }
            }
          })
        },
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
