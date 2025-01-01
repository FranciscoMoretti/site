'use client'

import { useEffect, useState } from 'react'

import { getPostViews } from '@/app/actions'

export function PostViews({ slug, prev }: { slug: string; prev: number }) {
  return (
    <span>
      <ViewCount slug={slug} prev={prev} /> views
    </span>
  )
}

function ViewCount({ slug, prev }: { slug: string; prev: number }) {
  const [views, setViews] = useState(prev)

  useEffect(() => {
    // Fetch updated view count
    async function fetchViews() {
      // Wait 1 second to view to be added to db
      await new Promise((resolve) => setTimeout(resolve, 1000))
      getPostViews({ slug }).then((count) => {
        if (count != null) setViews(count)
      })
    }
    fetchViews()
  }, [slug])

  return <>{views ?? '-'}</>
}
