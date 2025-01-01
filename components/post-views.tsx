import { Suspense } from 'react'

import { getPostViews } from '@/app/actions'
import { unstable_noStore } from 'next/cache'

export function PostViews({ slug, prev }: { slug: string; prev: number }) {
  return (
    <span>
      <Suspense fallback={<>{prev}</>}>
        <ViewCount slug={slug} />
      </Suspense>{' '}
      views
    </span>
  )
}

async function ViewCount({ slug }: { slug: string }) {
  unstable_noStore()
  // 1 sec delay to not switch abruptly on load
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const count = await getPostViews({ slug })
  return <>{count != null ? count : '-'}</>
}
