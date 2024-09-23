import path from "path"
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  FORMAT_A,
  FORMAT_H1,
  FORMAT_H2,
  FORMAT_H3,
  FORMAT_H4,
  FORMAT_H5,
  FORMAT_H6,
  FORMAT_HR,
  FORMAT_LI,
  FORMAT_OL,
  FORMAT_P,
  FORMAT_UL,
} from "@/styles/format"
import sizeOf from "image-size"
import { useMDXComponent } from "next-contentlayer2/hooks"

import { cn } from "@/lib/utils"
import { Callout } from "@/components/callout"
import { Card } from "@/components/card"

import { CopyButton } from "./copy-button"

const CustomLink = (className, props) => {
  const href = props.href

  // Obsidian absolute path links can start with relative paths from root folder without /. This adds a leading slash.
  // TODO: Better way of normalizing markdown links
  if (href.startsWith("#")) {
    return <a className={cn(FORMAT_A, className)} {...props} />
  }
  if (href.startsWith("/")) {
    return (
      <Link className={cn(FORMAT_A, className)} {...props}>
        {props.children}
      </Link>
    )
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(FORMAT_A, className)}
      {...props}
    />
  )
}

const components = {
  h1: ({ className, ...props }) => (
    <h1 className={cn(FORMAT_H1, className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn(FORMAT_H2, className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn(FORMAT_H3, className)} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <h4 className={cn(FORMAT_H4, className)} {...props} />
  ),
  h5: ({ className, ...props }) => (
    <h5 className={cn(FORMAT_H5, className)} {...props} />
  ),
  h6: ({ className, ...props }) => (
    <h6 className={cn(FORMAT_H6, className)} {...props} />
  ),
  a: ({ className, ...props }) => CustomLink(className, props),
  p: ({ className, ...props }) => (
    <p className={cn(FORMAT_P, className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn(FORMAT_UL, className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn(FORMAT_OL, className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn(FORMAT_LI, className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }) => {
    // TODO: Extract into a package that does auto size for local next/images
    if (props.src.startsWith("/")) {
      const srcAbsPath = decodeURI(
        path
          .join(
            process.cwd(),
            "public",
            props.src.replace(/^\//, "") // Remove leading slash if exists
          )
          .toString()
      )
      const dimensions = sizeOf(srcAbsPath)
      if (!dimensions.width || !dimensions.height) {
        console.error(
          `Image [${props.src}] has incomplete dimensions [${dimensions}]`
        )
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={srcAbsPath} alt=""></img>
      }
      return (
        <Image
          src={props.src}
          alt={alt ? alt : props.src}
          {...props}
          placeholder="empty"
          width={Number(dimensions.width)}
          height={Number(dimensions.height)}
          className={cn("rounded-md border", className)}
        />
      )
    } else {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={cn("rounded-md border", className)}
          alt={alt}
          {...props}
        />
      )
    }
  },
  hr: ({ ...props }) => <hr className={FORMAT_HR} {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    __rawString__,
    __withMeta__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string
    __src__?: string
    __withMeta__?: string
  }) => (
    <>
      <pre
        className={cn(
          "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-neutral-900 py-4",
          className
        )}
        {...props}
      />
      {__rawString__ && (
        <CopyButton
          value={__rawString__}
          className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
        />
      )}
    </>
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Image,
  Callout,
  Card,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
