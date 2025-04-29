'use client'

import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import { PostViews } from '@/components/post-views/post-views'
import CopyAsMarkdownButton from '@/components/CopyAsMarkdownButton'

interface HeaderInfoRowProps {
  date: string
  slug: string
  markdownForCopy: string
}

export function HeaderInfoRow({ date, slug, markdownForCopy }: HeaderInfoRowProps) {
  return (
    <div className="flex justify-between ">
      <dl className="mb-1 flex flex-row items-center justify-center gap-4 font-mono">
        <div className="">
          <dt className="sr-only">Published on</dt>
          <dd className="text-sm font-medium text-muted-foreground">
            <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
          </dd>
        </div>
        <div className="">
          <dt className="sr-only">View count</dt>
          <dd className="flex flex-row items-center gap-1 text-sm font-medium text-muted-foreground">
            <PostViews slug={slug} />
          </dd>
        </div>
      </dl>
      <CopyAsMarkdownButton markdownForCopy={markdownForCopy} />
    </div>
  )
}
