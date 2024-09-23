import { watch } from "chokidar"
import dotenv from "dotenv"
import fetch from "node-fetch"

function absoluteUrl(path) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
const indexFile = ".contentlayer/generated/Post/_index.json"

// Load environment variables
dotenv.config({ path: ".env.local" })
dotenv.config({ path: ".env" })

const indexWatcher = watch(indexFile, {
  persistent: true,
  usePolling: true,
})

indexWatcher.on("change", async (filePath) => {
  console.log(`Change detected in ${filePath}`)
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
})
