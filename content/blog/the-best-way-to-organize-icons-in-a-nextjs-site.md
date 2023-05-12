---
tag: Next.js, TailwindCSS, Icon
alias:

publish: true
slug: the-best-way-to-organize-icons-in-a-nextjs-site

title: The Best Way to Organize Icons in a Next.js Site
description: Learn the best way to organize icons in your Next.js site for consistency, simplicity, and less code. Follow our step-by-step guide to using a single file and Tailwind for styling. Check out our blog for more Next.js articles.
date: 2023-05-12
image:
---

If you're building a website or web app, you're probably going to use icons to help communicate information to your users. But how do you organize all those icons and make sure they're consistent across your site?

In this post, we will explore the benefits of organizing icons in a Next.js site using a single file. By using this pattern, you can ensure consistency across your site and simplify the process of replacing icons. This pattern was inspired by [Shadcn](https://twitter.com/shadcn)'s [Taxonomy repository](https://github.com/shadcn/taxonomy), which is a great resource for Next.js app router examples, utilities, and patterns

## Benefits of Organizing Icons

Before we dive into how to organize icons, let's first take a look at why it's important to do so. Here are a few benefits:

- **Consistency**: By organizing your icons in a single place, you ensure that they're consistent across your site. This helps to create a cohesive and professional look and feel.
- **Simplicity**: Organizing your icons makes it easier to replace them if needed. If you ever need to replace an icon, you'll only need to change a single line in a single file.
- **Less Code**: By importing a single component that has access to all icons, you require less code and fewer imports.

Now that we've established why it's important to organize your icons, let's take a look at how to do it.

## Using a Single File for Icons

To organize our icons in a Next.js site, we're going to use a single file. This file will act as an abstraction layer that helps organize the icons in a single place and ensures that they're consistent across the site.

We can define our icons in a file called `icons.tsx`. Here's an example:

```tsx
import { Logo } from "@/config/logo"
import { GithubIcon } from "@/components/github-icon"

import {
  X,
  Copy,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export const Icons = {
  logo: Logo,
  close: X,
  copy: Copy,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  gitHub: GithubIcon,
}
```

In this file, we're using [Lucide](https://lucide.dev/) for most of the icons, but we can also use custom icons like `Logo`. All icons need to have the same interface, which in this example is only that they take a `className` attribute.

## Importing and Using Icons

Now that we have our icons organized in a single file, we can easily import and use them in other files.

Here's an example of how to import and use icons in a component:

```tsx
import { Icons } from "@/components/icons"
 <div>
    <Icons.chevronLeft />
    <Icons.chevronRight/>
</div>
```

By importing a single component, we have access to all icons, requiring less code and fewer imports.

## Styling Icons with Tailwind

We can style our icons using Tailwind by using the `className` attribute. Here's an example:

```tsx
<Icons.chevronRight className="ml-2 h-4 w-4" />
```

This will add a margin to the left of the icon and set its height and width to 4 pixels.

## Custom icons with image
In website design, custom icons are essential components to improve user experience and navigation. For custom icons, we can define a simple component like this one for any image in Next.js:

```tsx
import logo from "@/public/favicon.svg"
import Image from "next/image"

export function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <div className={className}>
      <Image src={logo} alt="Logo" />
    </div>
  )
}
```

You can import that logo into `Icons.tsx` as shown in the "Using a Single File for Icons" section.

## Custom icons with SVG elements

Another way to create custom icons is to define them with svg code directly. In this case, we can define another component not only defines an icon, but also accepts `LucideProps` making it even more compatible and customizable.

``` tsx
import { LucideProps } from "lucide-react"

export function GithubIcon({ ...props }: LucideProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  )
}
```

You can import that logo into `Icons.tsx` as shown in the Using a Single File for Icons" section.

# Conclusion

In this article, we've covered the benefits of organizing icons in a Next.js site and the best way to do so using a single file and Tailwind for styling. By adopting this approach, you can ensure consistency, simplicity, and write less code.

If you're interested in learning more about Next.js and front-end development, be sure to check out our other articles on this blog.