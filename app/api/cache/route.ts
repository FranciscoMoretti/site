import fs, { promises } from "fs"
import path from "path"
import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

const INDEX_FILE = ".contentlayer/generated/Post/_index.json"
const CACHE_FILE = ".cache/generated/Post/_index.json"

export async function POST() {
  try {
    // Read the index file
    let fileContent: any[] = []
    if (fs.existsSync(INDEX_FILE)) {
      try {
        console.log("Reading index file")
        const rawContent = await promises.readFile(INDEX_FILE, "utf-8")
        fileContent = JSON.parse(rawContent)
      } catch (error) {
        console.error("Error parsing index file:", error)
      }
    } else {
      console.log("Index file does not exist")
    }

    // Read the cached content
    let cachedContent: any[] | null = null
    if (fs.existsSync(CACHE_FILE)) {
      try {
        console.log("Reading cache file")
        const rawCachedContent = await promises.readFile(CACHE_FILE, "utf-8")
        cachedContent = JSON.parse(rawCachedContent)
      } catch (error) {
        console.error("Error parsing cache file:", error)
      }
    } else {
      console.log("Cache file does not exist")
    }

    // Compare file content with cached content
    if (JSON.stringify(fileContent) !== JSON.stringify(cachedContent)) {
      // Update the cache

      await promises.mkdir(path.dirname(CACHE_FILE), { recursive: true })
      await promises.writeFile(CACHE_FILE, JSON.stringify(fileContent))

      // Revalidate the tag
      revalidateTag("posts")
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
