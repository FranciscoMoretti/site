import fs from "fs"
import axios from "axios"

export async function downloadImage({
  outputPath,
  imageUrl,
}: {
  outputPath: string
  imageUrl: string
}) {
  try {
    if (fs.existsSync(outputPath)) {
      return
    }

    const response = await axios.get(imageUrl, { responseType: "arraybuffer" })
    const imageBuffer = Buffer.from(response.data, "binary")

    fs.writeFileSync(outputPath, imageBuffer)
    console.log(`Image downloaded and saved to: ${outputPath}`)
  } catch (error) {
    console.error("Error while downloading the image:", error)
  }
}
