import React from "react"
import { Post } from "@/.contentlayer/generated"

import { PostCard } from "./post-card"

export default function BlogPostList({
  title,
  posts,
}: {
  title: string
  posts: Post[]
}): JSX.Element {
  return (
    <>
      <h2 className="mb-4 scroll-m-20 pb-1 text-2xl font-semibold tracking-tight first:mt-0 md:text-5xl">
        {title}
      </h2>
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
