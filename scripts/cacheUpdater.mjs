import chokidar from "chokidar"
import dotenv from "dotenv"
import debounce from "lodash.debounce"
import fetch from "node-fetch"

function absoluteUrl(path) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
const indexFile = ".contentlayer/generated/Post/_index.json"

// Load environment variables
dotenv.config({ path: ".env.local" })
dotenv.config({ path: ".env" })

console.log("Watching for changes in", indexFile)

const updateCache = debounce(async (filePath) => {
  console.log(`Updating cache for ${filePath}`)
  try {
    const response = await fetch(absoluteUrl("/api/cache"), {
      method: "POST",
    })
    if (response.ok) {
      console.log("Cache updated successfully")
    } else {
      console.error("Failed to update cache:", response.statusText)
    }
  } catch (error) {
    console.error("Error updating cache:", error)
  }
}, 300)

const watcher = chokidar.watch(indexFile, {
  persistent: true,
  ignoreInitial: true,
})

watcher
  .on("add", (path) => {
    console.log(`File ${path} has been added`)
    updateCache(path)
  })
  .on("change", (path) => {
    console.log(`File ${path} has been changed`)
    updateCache(path)
  })
  .on("unlink", (path) => {
    console.log(`File ${path} has been removed`)
  })

// Keep the script running
process.stdin.resume()
