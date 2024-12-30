import TOCInline from 'pliny/ui/TOCInline'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import { CopyButton } from './copy-button'
import { cn } from './lib/utils'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  table: TableWrapper,
  BlogNewsletterForm,
  pre: ({
    className,
    __rawcode__,
    __withMeta__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & { __rawcode__?: string; __withMeta__?: string }) => {
    return (
      <div className="relative">
        <pre
          className={cn(
            'relative mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg bg-[#262626] p-0',
            className
          )}
          {...props}
        />
        {__rawcode__ && (
          <CopyButton
            value={__rawcode__}
            className={cn('absolute right-4 top-4', __withMeta__ && 'top-16', '')}
          />
        )}
      </div>
    )
  },
  code: ({
    className,
    children,
    __rawcode__,
    __withMeta__,
    ...props
  }: React.HTMLAttributes<HTMLElement> & {
    __rawcode__?: string
    __withMeta__?: string
  }) => (
    <>
      <code
        className={cn(
          'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm before:hidden after:hidden',
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
