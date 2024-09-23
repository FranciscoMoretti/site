import path from "path"
import { getPermalinks, remarkWikiLink } from "@portaljs/remark-wiki-link"
import { defineDocumentType, makeSource } from "contentlayer2/source-files"
import isEqual from "lodash.isequal"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import { visit } from "unist-util-visit"

import { siteConfig } from "./config/site"
import { absoluteUrl } from "./lib/utils"

function normalizeObsidianAbsolutePath(path) {
  if (
    !path.startsWith("/") &&
    !(path.startsWith("www") || path.startsWith("http") || path.startsWith("#"))
  ) {
    return "/" + path
  }
  return path
}

function removeFileExtension(filePath) {
  const lastDotIndex = filePath.lastIndexOf(".")
  const fileNameWithoutExtension =
    lastDotIndex !== -1 ? filePath.slice(0, lastDotIndex) : filePath
  return fileNameWithoutExtension
}

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
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
    cover: {
      type: "string",
      required: false,
    },
    thumbnail: {
      type: "list",
      of: { type: "string" },
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

export const Tag = defineDocumentType(() => ({
  name: "Tag",
  filePathPattern: `tag/**/*.md*`,
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
    cover: {
      type: "string",
      required: false,
    },
    tag: {
      type: "string",
      required: true,
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

  // Use clousure to keep last documents here, then compare with new on success anmd revalidate paths.

  return {
    onSuccess: async (importData) => {
      return
      // TODO: REmove all this once it works in the alternative method
      const lastAllDocuments = await readLastDocuments()
      const lastAllDcoumentsMap = lastAllDocuments
        ? lastAllDocuments.reduce((acc, doc) => {
            acc[doc._id] = doc
            return acc
          }, {})
        : {}

      const { allDocuments } = await importData()
      console.log("allDocuments", allDocuments.length)
      console.log("lastAllDocuments", lastAllDocuments?.length)
      console.log(
        "last avoid mistakes: ",
        lastAllDcoumentsMap[
          "blog/avoiding-mistakes-in-nextjs-using-the-typescript-plugin.md"
        ]?.title
      )
      console.log(
        "new avoid mistakes: ",
        allDocuments.find(
          (doc) =>
            doc._id ===
            "blog/avoiding-mistakes-in-nextjs-using-the-typescript-plugin.md"
        )?.title
      )

      const changedDocs = allDocuments.filter(
        (doc) => !isEqual(doc, lastAllDcoumentsMap[doc._id])
      )

      const tagsToRevalidate = changedDocs.map((doc) => doc.routepath)

      const isFirstRun = lastAllDocuments === undefined
      if (!isFirstRun && tagsToRevalidate.length > 0) {
        try {
          const url = absoluteUrl("/api/cache")
          console.log("Revalidating cache for tags:", tagsToRevalidate)
          await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ tags: tagsToRevalidate }),
          })
        } catch (error) {
          console.error("Couldn't revalidate cache", error)
        }
      }

      // Write to file
      await writeLastDocuments(allDocuments)
    },
    contentDirPath: siteConfig.content,
    contentDirExclude: contentLayerExcludeDefaults.concat([
      ".obsidian",
      ...siteConfig.contentExclude,
    ]),
    onExtraFieldData: "ignore",
    documentTypes: [Page, Doc, Post, Author, Tag],
    mdx: {
      cwd: process.cwd(),
      remarkPlugins: [
        remarkGfm,
        [remarkWikiLink, { permalinks, pathFormat: "obsidian-short" }],
        () => (tree) => {
          // TODO: Extract into a npm package
          visit(tree, (node) => {
            if (node.type === "link") {
              let url = node.url
              url = normalizeObsidianAbsolutePath(url)
              if (url.startsWith("/")) {
                url = removeFileExtension(url)
              }
              node.url = url
            }
            if (node.type === "image") {
              node.url = normalizeObsidianAbsolutePath(node.url)
            }
          })
        },
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
            theme: "dark-plus",
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
                "before:content-['#'] before:absolute before:invisible before:-ml-[1em] hover:before:visible before:text-muted-foreground pl-[1em] -ml-[1em]",
              ],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    },
  }
})
