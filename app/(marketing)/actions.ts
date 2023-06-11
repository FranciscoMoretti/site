"use server"
import { db } from "@/lib/db"

export async function updatePostViews({ slug }: { slug: string }) {
  const result = await db.post.update({
    where: {
      slug: slug,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  })
  return result.views
}
