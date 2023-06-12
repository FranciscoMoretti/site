import { increasePostViews } from "@/app/(marketing)/actions"

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const result = await increasePostViews({ slug: params.slug })
    return new Response(JSON.stringify({ views: result }))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
