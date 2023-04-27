const chokidar = require("chokidar")
const fs = require("fs-extra")
const path = require("path")

const source = "./content/assets/"
const destination = "./public/assets/"

// Check if --watch flag is present in the command line arguments
const watch = process.argv.includes("--watch")

// Copy files on startup
fs.copySync(source, destination, { recursive: true })

// Watch for changes if --watch flag is present
if (watch) {
  const watcher = chokidar.watch(source, {
    persistent: true,
    usePolling: true,
  })

  // Watch for all events in source folder
  watcher.on("all", (event, filePath) => {
    console.log(`${event}: ${filePath}`)
    const relativePath = path.relative(source, filePath)
    const destinationPath = path.join(destination, relativePath)
    if (event === "unlink") {
      fs.removeSync(destinationPath)
    } else {
      fs.copySync(filePath, destinationPath)
    }
  })
}
