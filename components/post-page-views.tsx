import { getPostViews } from "@/app/(marketing)/actions"

export async function PostPageViews({ slug }: { slug: string }) {
  const count = await getPostViews({ slug })
  return <span title="Views">{count} views</span>
}
