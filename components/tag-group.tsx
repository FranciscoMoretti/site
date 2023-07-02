import Link from "next/link"
import { Tag } from "contentlayer/generated"

import { Badge } from "@/components/ui/badge"

interface Item {
  title: string
  url: string
  items?: Item[]
}

export async function getTagsItems(tags: Tag[]): Promise<Item[]> {
  const items: Item[] = tags.map((tag) => ({
    title: tag.title,
    url: tag.routepath,
  }))
  return items
}

export function TagGroup({ tagsItems }: { tagsItems: Item[] }) {
  return (
    <div className="m-auto mt-4 flex max-w-2xl flex-row flex-wrap items-center justify-center">
      {tagsItems &&
        tagsItems.map((item) => (
          <Link key={item.tag} href={item.url} className="m-0.5">
            <Badge variant="default" className="text-md">
              {item.title}
            </Badge>
          </Link>
        ))}
    </div>
  )
}
