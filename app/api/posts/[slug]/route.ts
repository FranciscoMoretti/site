import { upsertIncreasePostViews } from '@/app/actions'
export const dynamic = 'force-dynamic'

export async function POST(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const result = await upsertIncreasePostViews({ slug })
    return new Response(JSON.stringify({ views: result }))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
