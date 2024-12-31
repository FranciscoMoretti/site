import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'
import siteMetadata from '@/data/siteMetadata'
import { buttonVariants } from './ui/button'
import { cn } from './lib/utils'
import { SearchProvider } from 'pliny/search'

const SearchButton = () => {
  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <SearchProvider searchConfig={siteMetadata.search}>
        <SearchButtonWrapper
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'relative h-9 w-24 justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:w-32 lg:w-40'
          )}
          aria-label="Search"
        >
          {/* desktop text  */}
          <span className="hidden lg:inline-flex">Search...</span>
          {/* mobile text  */}
          <span className="inline-flex lg:hidden">Search...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 lg:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </SearchButtonWrapper>
      </SearchProvider>
    )
  }
}

export default SearchButton
