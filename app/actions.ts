'use server'

import { db } from '@/lib/db'

export async function upsertIncreasePostViews({ slug }: { slug: string }) {
  if (!db) {
    return null
  }
  const result = await db.post.upsert({
    where: {
      slug: slug,
    },
    create: {
      slug,
      views: 1,
    },
    update: {
      views: {
        increment: 1,
      },
    },
  })
  return result.views
}

export async function getAllViewsDb() {
  if (!db) {
    return null
  }
  const views = await db.post.findMany({
    select: {
      slug: true,
      views: true,
    },
  })
  return views
}
