import { ReactNode } from 'react'
import Image from '@/components/Image'
import Bleed from 'pliny/ui/Bleed'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { HeaderInfoRow } from '@/components/HeaderInfoRow'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostBanner({ content, next, prev, children }: LayoutProps) {
  const { slug, title, images, date, markdownForCopy } = content
  const displayImage =
    images && images.length > 0 ? images[0] : 'https://picsum.photos/seed/picsum/800/400'

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <div className="space-y-1 border-border pb-10 text-center">
            <div className="w-full">
              <Bleed>
                <div className="relative aspect-[2/1] w-full ">
                  <Image src={displayImage} alt={title} fill className="rounded-lg object-cover" />
                </div>
              </Bleed>
            </div>
            <div className="relative pt-10">
              <div className="py-4">
                <HeaderInfoRow date={date} slug={slug} markdownForCopy={markdownForCopy} />
              </div>
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
          <div className="prose max-w-none py-4 dark:prose-invert">{children}</div>
          {siteMetadata.comments && (
            <div className="pb-6 pt-6 text-center text-foreground/80" id="comment">
              <Comments slug={slug} />
            </div>
          )}
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              {prev && prev.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${prev.path}`}
                    className="text-primary hover:text-primary/90"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </Link>
                </div>
              )}
              {next && next.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${next.path}`}
                    className="text-primary hover:text-primary/90"
                    aria-label={`Next post: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
