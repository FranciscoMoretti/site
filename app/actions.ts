'use server'

import { revalidateTag, unstable_cache, unstable_noStore } from 'next/cache'

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
  revalidateTag('post-views')
  return result
}

export async function getPostViews({ slug }: { slug: string }) {
  if (!db) {
    return null
  }
  try {
    const views = await getAllViews()
    return views?.find((view) => view.slug === slug)?.views
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getAllViews = unstable_cache(getAllViewsInternal, ['post-views'], {
  tags: ['post-views'],
})

async function getAllViewsInternal() {
  if (!db) {
    return null
  }
  const postsViews = await db.post.findMany({
    select: {
      slug: true,
      views: true,
    },
    where: {},
  })
  return postsViews
}
