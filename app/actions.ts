'use server'

import { revalidatePath, revalidateTag, unstable_cache, unstable_noStore } from 'next/cache'

import { db } from '@/lib/db'

export async function upsertIncreasePostViews({ slug }: { slug: string }) {
  unstable_noStore()
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
  if (result.views % 10 === 0) {
    revalidateTag('post-views')
    revalidatePath('/', 'layout')
  }
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

export const getAllViewsCache = unstable_cache(getAllViewsDb, ['post-views'], {
  tags: ['post-views'],
  revalidate: 60 * 60, // 1 hour
})
