import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import { ThemeSwitch } from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-background justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between gap-3">
          {siteMetadata.siteLogo && (
            <Image src={siteMetadata.siteLogo} alt="Logo" width={24} height={24} />
          )}
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden text-2xl font-semibold lg:block">{siteMetadata.headerTitle}</div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center justify-end space-x-2 leading-5 sm:space-x-4">
        <div className="no-scrollbar hidden items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-96 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block font-medium text-foreground hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
