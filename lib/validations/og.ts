import * as z from 'zod'

export const ogImageSchema = z.object({
  heading: z.string(),
  type: z.string(),
  mode: z.enum(['light', 'dark']).optional().default('dark'),
})

export type OgImageSchema = z.infer<typeof ogImageSchema>
