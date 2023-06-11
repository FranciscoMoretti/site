import { getPostViews } from "@/app/(marketing)/actions"

export async function PostCardViews({ slug }: { slug: string }) {
  const count = await getPostViews({ slug })
  return <span title="Views">{count} views</span>
}
