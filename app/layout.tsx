import { Inter as FontSans } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"

import "@/styles/globals.css"

import { Suspense } from "react"
import { Metadata, Viewport } from "next"

import { PHProvider, PostHogPageview } from "@/components/posthog-provider"

import { Providers } from "./providers"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: `${siteConfig.name}`,
      url: `${siteConfig.url}`,
    },
  ],
  creator: `${siteConfig.name}`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.twitter.handle,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      {process.env.NEXT_PUBLIC_POSTHOG_KEY ? (
        <Suspense>
          <PostHogPageview />
        </Suspense>
      ) : null}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          {children}
          <Toaster />
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
