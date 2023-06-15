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

export async function increasePostViews({ slug }: { slug: string }) {
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
    if (process.env.NODE_ENV === "production") {
      console.error(error)
    }
    return null
  }
}

export async function getAllViews() {
  const postsViews = await db.post.findMany({
    select: {
      slug: true,
      views: true,
    },
    where: {},
  })
  return postsViews
}
