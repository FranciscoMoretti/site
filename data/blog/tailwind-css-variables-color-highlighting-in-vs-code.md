---
draft: false
summary: Learn how to enable color highlighting for Tailwind CSS variables in VS Code, especially useful when working with Shadcn UI components.
slug: tailwind-css-variables-color-highlighting-in-vs-code
tags: ['TailwindCSS', 'VS Code', 'Tools', 'Shadcn UI']
lastmod: 2025-01-02T19-16-00.000Z
date: 2025-01-02T19-11-00.000Z
title: How to Enable Color Highlighting for Tailwind CSS Variables in VS Code
id: 16f04714-9aef-80b4-b189-fd9d946bcea2
cover: /notion/tailwind-css-variables-colors-in-vs-code/tailwind-css-variables-colors-in-vs-code.16f04714-9aef-8032-8442-f3e4c8340763.png
created_time: 2025-01-02T19:11:00.000Z
last_edited_time: 2025-01-02T19:16:00.000Z
---

When working with Tailwind CSS variables in VS Code, having visual color indicators can significantly improve your development workflow. This is particularly useful when working with Shadcn UI components, which heavily rely on CSS variables for theming.

## The Solution

1. Install the `Color Highlight` extension by `Sergii N` from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

2. Enable HSL color highlighting by adding this to your VS Code `settings.json`:

```json
{
  "color-highlight.matchHslWithNoFunction": true
}
```

## Result

With this setup, you'll see color indicators next to your Tailwind CSS variables, making it easier to identify and work with colors in your stylesheets, especially when customizing Shadcn UI themes:

![Color highlighting in VS Code](/assets/tailwind-css-variables-color-highlighting-in-vs-code.png)

This simple configuration works with both standard CSS colors and HSL values, making your Tailwind CSS and Shadcn UI development experience more visual and intuitive.
