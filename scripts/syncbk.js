const Rsync = require("rsync")

const source = "./content/assets/"
const destination = "./public/assets/"

const rsync = new Rsync().flags("avz").source(source).destination(destination)

rsync.execute((error, code, cmd) => {
  if (error) {
    console.error(error)
    process.exit(1)
  }
  console.log(`rsync completed with code ${code}`)
})
