import React, { isValidElement, ReactNode } from "react"
import { kebabCase } from "lodash"

import { cn } from "@/lib/utils"

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

  if (isValidElement(firstChild) && /^h[1-6]$/.test(firstChild.type)) {
    const firstGrandChild = React.Children.toArray(firstChild.props.children)[0]
    const headerSlug = kebabCase(firstGrandChild.toString())
    return React.cloneElement(firstChild, {
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
