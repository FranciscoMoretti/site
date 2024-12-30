'use server'

import { unstable_cache } from 'next/cache'

import { db } from '@/lib/db'

export async function upsertPost(slug: string) {
  if (!db) {
    return null
  }
  const result = await db.post.upsert({
    where: {
      slug,
    },
    create: {
      slug,
      views: 0,
    },
    update: {},
  })
  return result
}

export async function updatePostViews({ slug }: { slug: string }) {
  if (!db) {
    return null
  }
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
  revalidate: 3600, // TODO: Fine tune views revalidation time for a better user experience
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
