'use client'

import { getAllViewsDb } from '@/app/actions'
import { useQuery } from '@tanstack/react-query'

export function PostViewsClient({ slug }: { slug: string }) {
  const { data, isFetching } = useQuery({
    queryKey: ['postViews'],
    queryFn: async () => getAllViewsDb(),
  })

  if (isFetching) {
    return null
  }

  const views = data?.find((view) => view.slug === slug)?.views || 0
  return <span title="views">{views} views</span>
}
