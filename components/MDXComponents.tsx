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
    __rawstring__,
    __withMeta__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawstring__?: string
    __src__?: string
    __withMeta__?: string
  }) => {
    return (
      <>
        <pre
          className={cn(
            'mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-[#262626] p-0',
            className
          )}
          {...props}
        />
      </>
    )
  },
  code: ({
    className,
    children,
    __rawstring__,
    __withMeta__,
    ...props
  }: React.HTMLAttributes<HTMLElement> & {
    __rawstring__?: string
    __withMeta__?: string
  }) => (
    <code className={cn('relative rounded p-4 font-mono text-sm', className)} {...props}>
      {children}
      {__rawstring__ && (
        <CopyButton
          value={__rawstring__}
          className={cn('absolute right-4 top-4 ', __withMeta__ && 'top-16')}
        />
      )}
    </code>
  ),
}
