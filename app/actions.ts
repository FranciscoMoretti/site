'use server'

import { revalidateTag, unstable_cache, unstable_noStore } from 'next/cache'

import { db } from '@/lib/db'

export async function upsertIncreasePostViews({ slug }: { slug: string }) {
  unstable_noStore()
  if (!db) {
    return null
  }
  await db.post.upsert({
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
}

export async function getAllViewsDb() {
  unstable_noStore()
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

export const getAllViewsCache = unstable_cache(getAllViewsDb, ['post-views'], {
  tags: ['post-views'],
  revalidate: 60 * 60 * 24, // 1 day
})
