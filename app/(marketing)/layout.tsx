import { Suspense } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { NavigationEvents } from "@/components/navigation-events"
import { SiteFooter } from "@/components/site-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>
      <header className="sticky top-0 z-40 w-full border-b border-b-secondary bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.navLinks} />
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              <CommandMenu />
            </div>
            <nav className="flex items-center">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.gitHub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <ModeToggle />
            </nav>
            {/* <nav>
            <Link
              href="/login"
              className={cn(buttonVariants({ size: "sm" }), "px-4")}
            >
              Login
            </Link>
          </nav> */}
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
