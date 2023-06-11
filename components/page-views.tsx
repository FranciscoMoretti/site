// components/PageViews.tsx

import { updatePostViews } from "@/app/(marketing)/actions"

export async function PageViews({ slug }: { slug: string }) {
  const count = await updatePostViews({ slug })
  return <span title="Views">{count} views</span>
}
