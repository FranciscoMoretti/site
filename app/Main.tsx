import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { getAllViews } from './actions'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

const MAX_DISPLAY = 5

export default function Home({ posts }: { posts: (CoreContent<Blog> & { viewCount?: number })[] }) {
  return (
    <>
      <div className="">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteMetadata.heroTitle}
          </h1>
          <p className="text-lg leading-7 text-muted-foreground">{siteMetadata.heroSubtitle}</p>
        </div>
        <div className="divide-y divide-border">
          <h2 className="pb-4 text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Latest
          </h2>
          <ul className="divide-y divide-border">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags, viewCount } = post
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-x-6 xl:space-y-0">
                      <dl className="flex flex-row items-center justify-start gap-4 xl:flex-col xl:items-end xl:gap-3">
                        <div className="">
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium text-muted-foreground">
                            <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                          </dd>
                        </div>
                        {viewCount && (
                          <div className="">
                            <dt className="sr-only ">View count</dt>
                            <dd className="flex flex-row items-center gap-1 text-base font-medium text-muted-foreground">
                              {viewCount} views
                            </dd>
                          </div>
                        )}
                      </dl>

                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link href={`/blog/${slug}`} className="text-foreground">
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-muted-foreground dark:prose-invert">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary hover:text-primary/90"
                            aria-label={`Read more: "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link href="/blog" className="text-primary hover:text-primary/90" aria-label="All posts">
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
