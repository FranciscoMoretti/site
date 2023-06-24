import { join, relative } from "path"
import { watch } from "chokidar"
import pkg from "fs-extra"

const { copySync, removeSync } = pkg

const source = "./content/assets/"
const destination = "./public/assets/"

// Check if --watch flag is present in the command line arguments
const should_watch = process.argv.includes("--watch")

// Copy files on startup
copySync(source, destination, { recursive: true })

// Watch for changes if --watch flag is present
if (should_watch) {
  const watcher = watch(source, {
    persistent: true,
    usePolling: true,
  })

  // Watch for all events in source folder
  watcher.on("all", (event, filePath) => {
    console.log(`${event}: ${filePath}`)
    const relativePath = relative(source, filePath)
    const destinationPath = join(destination, relativePath)
    if (event === "unlink") {
      removeSync(destinationPath)
    } else {
      copySync(filePath, destinationPath)
    }
  })
}
