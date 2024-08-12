---
tag: TailwindCSS, HTML, Next.js
alias:

publish: true
slug: how-to-create-consistent-styles-with-tailwind-mdx-and-html

title: How to Create Consistent Styles with Tailwind, MDX, and HTML
description: Learn how to create consistent styles using Tailwind, MDX, and HTML. This tutorial provides instructions for using the same styles in MDX and HTML content.
date: 2023-07-03
cover: /thumbnails/how-to-create-consistent-styles-with-tailwind-mdx-and-html.png
thumbnail:
  - tailwind
  - MDX and JSX
  - styles
---

## Introduction
In this tutorial, we'll explore how you can create consistent styles using Tailwind, MDX, and HTML. Learn how to render with the same style content that comes from MDX files (static) and content expressed in [HTML](tag/html.md) code (dynamic). Let's get started!

## What is Tailwind? 🎨
[Tailwind](tag/tailwind-css.md) is a utility-first CSS framework that allows you to quickly build custom user interfaces. It provides a set of pre-defined utility classes that you can use to style your HTML elements. With Tailwind, you don't have to write custom CSS for every element; instead, you can compose styles by combining multiple utility classes.

## What is MDX? 📝
MDX is an extension of Markdown that allows you to write JSX in Markdown documents. It enables you to embed React components directly in your Markdown files, making it easy to create dynamic and interactive content. MDX is commonly used in documentation sites, blogs, and other content-driven websites.

## Creating the Style Constants 🎨
To create consistent styles in your web development projects, it's helpful to define a set of style constants that you can reuse throughout your codebase. In this tutorial, we'll create a file called `format.ts` and define the following style constants:

```tsx
export const FORMAT_H1 = "mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
export const FORMAT_H2 = "mt-10 scroll-m-20 border-b border-b-slate-200 pb-1 text-3xl font-semibold tracking-tight first:mt-0"
export const FORMAT_H3 = "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
export const FORMAT_H4 = "mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
export const FORMAT_H5 = "mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
export const FORMAT_H6 = "mt-8 scroll-m-20 text-base font-semibold tracking-tight"
export const FORMAT_A = "font-medium text-slate-900 underline underline-offset-4"
export const FORMAT_P = "leading-7 [&:not(:first-child)]:mt-6"
export const FORMAT_UL = "my-6 ml-6 list-disc"
export const FORMAT_OL = "my-6 ml-6 list-decimal"
export const FORMAT_LI = "mt-2"
```

In the above code snippet, we define various style constants for headings (H1 to H6), links (A), paragraphs (P), unordered lists (UL), ordered lists (OL), and list items (LI). These constants are based on Tailwind's utility classes and can be customized according to your project's needs.

## Using the Style Constants in MDX Components ➿
Now that we have our style constants defined, let's use them in our MDX components. Create a file called `mdx.tsx`  and import the style constants:

```tsx
import {
  FORMAT_A,
  FORMAT_H1,
  FORMAT_H2,
  FORMAT_H3,
  FORMAT_H4,
  FORMAT_H5,
  FORMAT_H6,
  FORMAT_P,
  FORMAT_UL,
  FORMAT_OL,
  FORMAT_LI,
} from "@/styles/format"
```

Next, define the MDX components using the style constants:

```tsx
import { cn } from 'mxcn'; //

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
  a: ({ className, ...props }) => (
    <a className={cn(FORMAT_A, className)} {...props} />
  ),
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
}
```

In the above code snippet, we define MDX components for headings (H1 to H6), links (A), paragraphs (P), unordered lists (UL), ordered lists (OL), and list items (LI). We apply the corresponding style constant classes to each component.

## Using the MDX Components in Next.js Pages 🌐
To demonstrate the usage of our MDX components, let's create a page in Next.js. Create a file called `page.tsx` and import the `Mdx` component and the necessary style constants. Inside the page component, render an MDX component using the `Mdx` component. The styles from `format` can be applied to HTML tags such as `ul`, `li` and `a`.

```tsx
import { Mdx } from "mdx"
import {
  FORMAT_A,
  FORMAT_H2,
  FORMAT_LI,
  FORMAT_LINKED_HEADER,
  FORMAT_UL,
} from "format"

export default async function PostPage({ params }: PostPageProps) {
  const tag = await getTagFromParams(params)

  if (!tag) {
    notFound()
  }

  const posts = await getPosts()

  return (
    <article >
      <Mdx code={tag.body.code} />
      {posts?.length ? (
        <ul className={FORMAT_UL}>
          {posts.map((post) => (
            <li className={FORMAT_LI} key={post.routepath}>
              <a href={post.routepath} className={FORMAT_A}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts published.</p>
      )}
    </article>
  )
}
```


And there you have it. In the same page, content from MDX and dynamically generated content will have the same style.

## Conclusion
In this tutorial, we've learned how to create consistent styles using Tailwind, MDX, and HTML. By defining style constants and using them in MDX components, we can ensure a unified and reusable style system for our web development projects. With Tailwind's utility classes and MDX's flexibility, we can easily achieve consistent and visually appealing designs. Get rid of the evils of duplication and happy coding! 🚀
