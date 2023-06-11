import { updatePostViews } from "@/app/(marketing)/actions"
import { getPostViews } from "@/app/(marketing)/actions"

export async function PostPageViews({ slug }: { slug: string }) {
  const count =
    process.env.NODE_ENV === "production"
      ? await updatePostViews({ slug })
      : await getPostViews({ slug })
  return <span title="Views">{count} views</span>
}
