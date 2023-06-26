---
tag: Prettier, TailwindCSS, pnpm
alias:

publish: true
slug: how-to-setup-tailwind-and-sort-imports-prettier-plugins

title: How to Setup Tailwind and Sort Imports Prettier Plugins
description: Learn how to set up Tailwind CSS and sort imports using Prettier plugins in your projects. Improve your code formatting and maintain a consistent import order.
date: 2023-06-26
image:
---

## Introduction
In this tutorial, we will explore how to enhance your web development workflow by setting up Tailwind CSS and Sort Imports Prettier plugins. By combining these powerful tools, you can ensure consistent code formatting and efficient import organization in your projects. Let's optimize our development experience! 🚀

## Prettier Plugins
In this section, we'll introduce two essential plugins that will enhance your development experience when working with Prettier.

### Plugin 1: @ianvs/prettier-plugin-sort-imports📦

Prettier Plugin Sort Imports from [`@ianvs/prettier-plugin-sort-imports`](https://github.com/IanVS/prettier-plugin-sort-imports) is a prettier plugin that allows you to sort import declarations based on a provided Regular Expression order while preserving the order of side-effect imports. 
This plugin is similar to [`@trivago/prettier-plugin-sort-imports`](https://github.com/trivago/prettier-plugin-sort-imports) but provides several extra features that enhance the sorting process, including:

- No re-ordering across side-effect imports
- Combining imports from the same source
- Grouping type and value imports
- Sorting Node.js built-in modules to the top
- Support for custom import order separation
- Proper handling of comments around imports
- Simplified options for easier configuration

### Plugin 2: prettier-plugin-tailwindcss 📦

The `prettier-plugin-tailwindcss` plugin is specifically designed to work with Tailwind CSS. It allows you to format your Tailwind CSS classes using Prettier's powerful formatting capabilities. This plugin ensures that your Tailwind CSS code follows a consistent and readable style, enhancing the maintainability of your projects.

By incorporating the `prettier-plugin-tailwindcss` plugin into your development workflow, you can ensure that your Tailwind CSS classes are formatted consistently, saving you time and effort in manually organizing your styles.

If you are using VS Code, you should also learn how to [[tailwind-css-intellisense-vs-code-extension-a-web-developers-best-friend|Boost Productivity with Tailwind CSS VS Code Extension]].

## Step 1: Install the required packages

To set up Tailwind CSS and Sort Imports Prettier plugins, we need to install the necessary dependencies. In this guide, we will be using `pnpm` as the package manager. However, if you prefer using `npm` or any other package manager, you can still follow along with minor adjustments.

Open your project's terminal and run the following command to install the required dev dependencies:

```bash
pnpm install --save-dev @ianvs/prettier-plugin-sort-imports prettier prettier-plugin-tailwindcss
```

If you are using `npm` instead of `pnpm`, you can run the following command:

```bash
npm install --save-dev @ianvs/prettier-plugin-sort-imports prettier prettier-plugin-tailwindcss
```

These commands will install the necessary plugins for Tailwind CSS and Sort Imports Prettier.

### Package versions
I've tried many combinations of versions that had different bug fixes. These are the versions that worked for me:

- "@ianvs/prettier-plugin-sort-imports": "^4.0.2"
- "prettier": "^2.8.8"
- "prettier-plugin-tailwindcss": "^0.3.0"

**Note:** You'll probably be ok with larger versions but if something is not working, try to use these ones to rule out factors.

### Step 2: Configure prettier.config.js

Create a `prettier.config.js` file in the root directory of your project if you don't have one already. Open the file and add the following code:

```ts
/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    require.resolve("@ianvs/prettier-plugin-sort-imports"),
    require("prettier-plugin-tailwindcss"),
  ],
};
```

This configuration ensures that Tailwind CSS and Sort Imports Prettier plugins are included and properly set up.

### Require and resolve for prettier with pnpm
If you  use `pnpm` you'll need the `require` and `require.request` from the `prettier.config.js`. If you don't use `pnpm`, those will work equally well but they might not be needed. You can find more details in [Issue #31](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31).

### My complete prettier config 
Here is my full prettier conf that you can use as a starting point.

```js
/** @type {import('prettier').Config} */

module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/registry/(.*)$",
    "^@/app/(.*)$",
    "",
    "^(?!.*[.]css$)[./].*$",
    ".css$",

  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    require.resolve("@ianvs/prettier-plugin-sort-imports"),
    require("prettier-plugin-tailwindcss"),
  ],
}
```



### Conclusion

With the packages installed and the configuration set up, you're ready to enjoy the benefits of Tailwind CSS and Sort Imports Prettier plugins. The Tailwind CSS plugin provides automatic formatting for your Tailwind CSS classes, making your stylesheets more consistent and readable. The Sort Imports plugin organizes your import statements according to the specified order, keeping your codebase clean and maintainable.

If you are a VS Code user working, other nice additions to this workflow would be formatting on save and linting. Here is an article that shows how to do that for Next.js projects: [[how-to-set-up-prettier-and-eslint-in-vs-code-for-next-js|How to Set Up Prettier and ESLint in VS Code for Next.js]]

