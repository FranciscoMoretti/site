import { getPostViews } from "@/app/(marketing)/actions"

export async function PostViews({ slug }: { slug: string }) {
  const count = await getPostViews({ slug })
  return <span title="views">{count != null ? count : "-"} views</span>
}
