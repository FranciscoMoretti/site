import TOCInline from 'pliny/ui/TOCInline'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import { CopyButton } from './copy-button'
import { cn } from './lib/utils'
import PostContentImage from './post-content-image'

export const components: MDXComponents = {
  Image: PostContentImage,
  TOCInline,
  a: CustomLink,
  table: TableWrapper,
  BlogNewsletterForm,
  pre: ({
    className,
    __rawcode__,
    __withmeta__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & { __rawcode__?: string; __withmeta__?: string }) => {
    return (
      <div className="relative">
        <pre
          className={cn(
            'relative my-2 max-h-[650px] overflow-x-auto rounded-lg bg-[#262626] p-0',
            className
          )}
          {...props}
        />
        {__rawcode__ && (
          <CopyButton
            value={__rawcode__}
            className={cn(
              'absolute right-4 top-4',
              // Place the copy button lower if there is metadata in figcaption (e.g. filename)
              '[figure:has(figcaption)_&]:top-16'
            )}
          />
        )}
      </div>
    )
  },
  code: ({
    className,
    children,
    __rawcode__,
    __withmeta__,
    ...props
  }: React.HTMLAttributes<HTMLElement> & {
    __rawcode__?: string
    __withmeta__?: string
  }) => (
    <>
      <code
        className={cn(
          'rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm before:hidden after:hidden',
          // When pre is parent, these are non-inline code blocks
          '[pre_&]:bg-transparent [pre_&]:p-4 ',
          className
        )}
        {...props}
      >
        {children}
      </code>
    </>
  ),
}
