const fs = require("fs-extra")

const source = "./content/assets/"
const destination = "./public/assets/"

fs.copySync(source, destination, { recursive: true })
