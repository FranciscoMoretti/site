---
tags: ["Next.js", "React"]


draft: false


title: Sync Files to Public Folder in Next.js using Chokidar
summary: Learn how to automatically sync files to the public folder in React or Next.js using Chokidar and fs-extra. Sync your assets with this step-by-step tutorial.
date: 2023-04-27
images: ["/thumbnails/syncing-files-to-public-folder-in-react-or-nextjs-using-chokidar-and-fs-extra.png"]

---

When building a website with React or Next.js, you may have some assets (e.g. images, videos, or other static files) that need to be accessible on the server. These assets can be stored in a folder of your choice, but they won't be automatically included in the build process. In this tutorial, we'll learn how to use Chokidar and fs-extra to automatically sync files to the public folder, making them available to your website.

## Prerequisites

Before we start, make sure that you have the following tools installed on your machine:

- Node.js (v12 or later)
- pnpm

You should also have a basic understanding of JavaScript and the command line.

## Step 1: Install Dependencies

We'll use Chokidar and fs-extra to detect file changes and copy them to the public folder. To install these dependencies, run the following command in your project directory:

```sh
pnpm install chokidar fs-extra --save-dev
```

## Step 2: Create a Sync Script

We'll create a script that watches for file changes in a source directory and syncs them to a destination directory. Create a new file called `sync.js` in your project directory and add the following code:

```js
const chokidar = require("chokidar")
const fs = require("fs-extra")
const path = require("path")

const source = "your/source/directory"
const destination = "your/destination/directory" // Usually "./public/assets/" or "./public/"

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
```

This script copies all files from the source directory to the destination directory on startup, and then watches for all events in the source directory. When a file is added, changed, or deleted, the script syncs it to the destination directory. Note that we're using `chokidar` to watch for file changes, and `fs-extra` to copy and remove files.

## Step 3: Add a Watch Task

We can run the sync script manually every time we make changes to the source files, but it would be more convenient to have it run automatically. We'll add a watch task to our package.json file that runs the sync script whenever a file in the source directory changes.

Open your `package.json` file and add the following script:

```json
{
  "scripts": {
    "dev": "pnpm run sync --watch & next dev",
    "build": "npm run sync && next build",
    "sync": "node scripts/sync.js"
  }
}
```

The `sync` option runs the sync script, and the `dev` script runs both the `sync --watch` and `next dev` commands. This will start the development server and watch for changes in the source directory. Whenever a file changes, the sync script will be triggered, and the changes will be synced to the public directory.

With this setup, any changes you make to files in the content/assets folder will be automatically synced to the public/assets folder during development.

In the `build` script, we first run the `sync` script to sync the latest files to the `public/assets` folder. After that, we run the `next build` command to build the Next.js application.

That's it! With this setup, you can easily sync files from a source directory to a public directory in a React or Next.js project using `chokidar` and `fs-extra`.
