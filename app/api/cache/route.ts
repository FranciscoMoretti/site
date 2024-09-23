import fs, { promises } from "fs"
import path from "path"
import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"
import isEqual from "lodash.isequal"

import { ContentParams } from "@/types/contentParams"
import { contentParamsToKey } from "@/lib/utils"

// TODO: Should this really be force dynamic?
export const dynamic = "force-dynamic"

const INDEX_FILE = ".contentlayer/generated/Post/_index.json"
const CACHE_FILE = ".cache/generated/Post/_index.json"

export async function POST() {
  try {
    const newContent = (await readFileContent(INDEX_FILE)) || []
    const cachedContent = (await readFileContent(CACHE_FILE)) || []

    const { newContentMap, cachedContentMap } = createContentMaps(
      newContent,
      cachedContent
    )

    const changedSlugs = getChangedSlugs(newContentMap, cachedContentMap)
    const removedSlugs = getRemovedSlugs(newContentMap, cachedContentMap)
    const addedSlugs = getAddedSlugs(newContentMap, cachedContentMap)

    const changedContentParams: ContentParams[] = changedSlugs.map((slug) => ({
      slug: slug,
      type: "Post",
    }))

    const changeContentKeys = changedContentParams.map((item) =>
      contentParamsToKey(item)
    )
    // Compare file content with cached content
    if (
      changedSlugs.length > 0 ||
      removedSlugs.length > 0 ||
      addedSlugs.length > 0
    ) {
      // Update the cache
      await promises.mkdir(path.dirname(CACHE_FILE), { recursive: true })
      await promises.writeFile(CACHE_FILE, JSON.stringify(newContent))

      // Revalidate the tag
      const contentTypeKey = "allPosts"
      console.log(`Revalidating: ${contentTypeKey}`)
      revalidateTag(contentTypeKey)
      changeContentKeys.forEach((key) => {
        console.log(`Revalidating: ${key}`)
        revalidateTag(key)
      })
      console.log("Cache updated and revalidated")

      return NextResponse.json({
        success: true,
        message: "Cache updated and revalidated",
      })
    }

    console.log("Cache is up to date")

    return NextResponse.json({
      success: true,
      message: "Cache is up to date",
    })
  } catch (error) {
    console.error("Error updating cache:", error)
    return NextResponse.json(
      { success: false, message: "Failed to update cache" },
      { status: 500 }
    )
  }
}

async function readFileContent(filePath: string): Promise<any[] | null> {
  if (fs.existsSync(filePath)) {
    try {
      console.log(`Reading file: ${filePath}`)
      const rawContent = await promises.readFile(filePath, "utf-8")
      return JSON.parse(rawContent)
    } catch (error) {
      console.error(`Error parsing file ${filePath}:`, error)
      return null
    }
  } else {
    console.log(`File does not exist: ${filePath}`)
    return null
  }
}

function createContentMaps(newContent: any[], cachedContent: any[]) {
  const newContentMap = newContent.reduce((acc, item) => {
    acc[item.slug] = item
    return acc
  }, {})

  const cachedContentMap = cachedContent.reduce((acc, item) => {
    acc[item.slug] = item
    return acc
  }, {})

  return { newContentMap, cachedContentMap }
}

function getChangedSlugs(
  newContentMap: Record<string, any>,
  cachedContentMap: Record<string, any>
): any[] {
  return Object.keys(newContentMap).filter(
    (slug) => !isEqual(newContentMap[slug], cachedContentMap[slug])
  )
}

function getRemovedSlugs(
  newContentMap: Record<string, any>,
  cachedContentMap: Record<string, any>
): string[] {
  return Object.keys(cachedContentMap).filter(
    (slug) => !(slug in newContentMap)
  )
}

function getAddedSlugs(
  newContentMap: Record<string, any>,
  cachedContentMap: Record<string, any>
): string[] {
  return Object.keys(newContentMap).filter(
    (slug) => !(slug in cachedContentMap)
  )
}
