"use server"

import { db } from "@/lib/db"

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

export async function increasePostViews({ slug }: { slug: string }) {
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
  return result
}

export async function getPostViews({ slug }: { slug: string }) {
  if (!db) {
    return null
  }
  try {
    const result = await db.post.findUnique({
      select: {
        views: true,
      },
      where: {
        slug: slug,
      },
    })
    return result?.views
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getAllViews() {
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
