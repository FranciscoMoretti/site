import * as z from "zod"

export const thumbnailImageSchema = z.object({
  line1: z.string(),
  line2: z.string(),
  line3: z.string(),
})
