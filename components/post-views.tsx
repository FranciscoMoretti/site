'use client'

import { getPostViews } from '@/app/actions'
import { useQuery } from '@tanstack/react-query'

export function PostViews({ slug, prev }: { slug: string; prev: number }) {
  return (
    <span title="views">
      <ViewCount slug={slug} prev={prev} /> views
    </span>
  )
}

function ViewCount({ slug, prev }: { slug: string; prev: number }) {
  const { data } = useQuery({
    queryKey: ['postViews', slug],
    queryFn: async () => {
      return getPostViews({ slug })
    },
  })
  return <>{data != null ? data : prev}</>
}
