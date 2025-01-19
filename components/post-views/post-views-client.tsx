'use client'

import { getAllViewsDb } from '@/app/actions'
import { useQuery } from '@tanstack/react-query'

// Update CSR views if changed by the client
export function PostViewsClient({ slug }: { slug: string }) {
  const { data } = useQuery({
    queryKey: ['postViews'],
    queryFn: async () => getAllViewsDb(),
  })

  if (!data) return null

  // Update views in the database
  const views = data?.find((view) => view.slug === slug)?.views || 0
  return <span title="views">{views} views</span>
}
