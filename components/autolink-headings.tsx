import React, { isValidElement, ReactNode } from "react"
import GithubSlugger from "github-slugger"

import { cn } from "@/lib/utils"

const slugger = new GithubSlugger()

interface FirstChildProps {
  children: ReactNode
  className: string
  linkClassName?: string
  label?: string
}

export function AutoLinkHeader({
  children,
  className,
  linkClassName = "",
  label = "Link to section",
}: FirstChildProps): JSX.Element | null {
  const firstChild = React.Children.toArray(children)[0]

  if (
    isValidElement(firstChild) &&
    /^h[1-6]$/.test(firstChild.type as string)
  ) {
    const firstGrandChild = React.Children.toArray(firstChild.props.children)[0]
    const headerSlug = slugger.slug(firstGrandChild.toString())
    return React.cloneElement(firstChild, {
      // @ts-expect-error className could not be part of element
      className: cn(firstChild.props.className, className),
      id: headerSlug,
      children: (
        <a href={`#${headerSlug}`} className={linkClassName} aria-label={label}>
          {firstChild.props.children}
        </a>
      ),
    })
  }

  return null
}
