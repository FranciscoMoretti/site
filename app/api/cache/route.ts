import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    // Invalidate all data tagged with 'posts' in the cache
    revalidateTag("posts")
    return NextResponse.json({
      success: true,
      message: "Cache revalidated for posts",
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to revalidate cache" },
      { status: 500 }
    )
  }
}
