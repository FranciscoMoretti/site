import { allPosts } from "@/.contentlayer/generated"

export function getAllTags(): string[] {
  return Array.from(new Set(allPosts.flatMap((list) => list.tags)))
}
