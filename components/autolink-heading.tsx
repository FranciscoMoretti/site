import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react"
import GithubSlugger from "github-slugger"

import { cn } from "@/lib/utils"

const slugger = new GithubSlugger()

interface AutoLinkHeadingProps {
  children: ReactNode
  className: string
  linkClassName?: string
  ariaLabel?: string
  headingId?: string
}

function isHeadingElement(element: ReactNode): element is ReactElement {
  return (
    isValidElement(element) &&
    typeof element.type === "string" &&
    /^h[1-6]$/.test(element.type)
  )
}

export function AutoLinkHeading({
  children,
  className,
  linkClassName = "",
  ariaLabel = "Link to section",
  headingId = "",
}: AutoLinkHeadingProps): JSX.Element | null {
  const firstChild = React.Children.toArray(children)[0]

  if (!isHeadingElement(firstChild)) {
    console.warn("AutoLinkHeader: The first child is not a heading element.")
    return null
  }

  const firstGrandChild = React.Children.toArray(firstChild.props.children)[0]

  if (firstGrandChild === undefined) {
    console.warn(
      "AutoLinkHeader: No text content found for the header element."
    )
    return null
  }

  const headerSlug = headingId
    ? headingId
    : slugger.slug(firstGrandChild.toString())
  const clonedFirstChild = cloneElement(firstChild, {
    className: cn(firstChild.props.className, className),
    id: headerSlug,
    children: (
      <a
        href={`#${headerSlug}`}
        className={linkClassName}
        aria-label={ariaLabel}
      >
        {firstChild.props.children}
      </a>
    ),
  })
  return clonedFirstChild
}
