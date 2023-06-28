import React from "react"
import { Post } from "@/.contentlayer/generated"

import { PostCard } from "./post-card"

export default function BlogPostList({
  posts,
}: {
  posts: Post[]
}): JSX.Element {
  return (
    <>
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => PostCard({ post, index }))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </>
  )
}
