import { Suspense } from 'react'

import { getPostViews } from '@/app/actions'

export function PostViews({ slug }: { slug: string }) {
  return (
    <span title="views">
      <Suspense fallback={<>{'...'}</>}>
        <ViewCount slug={slug} />
      </Suspense>{' '}
      views
    </span>
  )
}

export async function ViewCount({ slug }: { slug: string }) {
  const count = await getPostViews({ slug })
  return <>{count != null ? count : '-'}</>
}
