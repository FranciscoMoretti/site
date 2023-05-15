---
tag: VS Code, Prettier
alias:

publish: true
slug: prettier-the-code-formatter-vs-code-extension-for-modern-web-development

title: Prettier - The Code Formatter VS Code Extension for Modern Web Development
description: Learn how Prettier, the industry standard VS Code extension for code formatting, can streamline your modern web development workflow and increase productivity.
date: 2023-05-15
image:
---

As a web developer, I know how important it is to write clean and organized code. But let's be honest, keeping up with the styling can be a real pain, especially when working with a team of developers. That's why I'm here to share with you my personal experience with [Prettier](https://prettier.io/) - the industry-standard code formatter for VS Code extension that has revolutionized the way I write code.

## Installation
Simply search for `esbenp.prettier-vscode` in VS Code Extensions panel and hit install. Or **[Install via the Visual Studio Code Marketplace →](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**.

**Note:** if Prettier is not installed in your project you can install it by following the [official installation instructions](https://prettier.io/docs/en/install.html).

### Setting Prettier as the Default Formatter
To make sure that Prettier is used instead of any other code formatter extensions you might have, set it as the default formatter in your VS Code settings. Simply add the following code snippet to your VS Code settings file:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## The Power of Opinionated Code Formatters 💪

Opinionated code formatters like Prettier are a great tool because they take the responsibility of styling from developers and give it to the tool. With Prettier, you no longer have to worry about spaces, tabs, line breaks, or even single or double quotes. Prettier formats the code for you, which means less time spent formatting and more time writing code. 

Non-opinionated code formatters are good, but not great because there is always room for ambiguity, which can lead to confusion and merge conflicts. Opinionated code formatters like Prettier eliminate these issues by enforcing a consistent style throughout your codebase.

## Format On Save and Be a Faster Developer 🚀

One of the features I love the most about Prettier is the ability to use it with the VS Code `formatOnSave` feature. This makes you a much faster developer because you no longer have to manually format your code before saving. You can simply hit the save button, and Prettier will format your code for you. This saves you time and helps you stay focused on writing code.

### Using Format-On-Save
Format-On-Save is a powerful feature that allows you to automatically format your code every time you save your file. This feature respects the `editor.formatOnSave` setting, which can be turned on for every language compatible with Prettier using:

```json
"editor.formatOnSave": true,
```

To enable Format-On-Save on a per-language basis, you can scope the setting. Here's an example of how to enable Format-On-Save for JavaScript files:

```json
// Set the default
"editor.formatOnSave": false,
// Enable per-language
"[javascript]": {
    "editor.formatOnSave": true
}
``` 

## One Code Formatter for All Your Modern Web Development Languages 🌎

One of the challenges of modern web development is the number of different languages and frameworks we use. Configuring each of these tools can be time-consuming and can lead to many problems to solve. Luckily, Prettier is the code formatter that works with all modern web development languages. This means you only need to configure Prettier once, and you can use it across all of your projects.

## Prettier - The Industry Standard with 83% of Respondents 💻

Prettier has quickly become the industry-standard code formatter for modern web development, with more than 83% of respondents in the State of JS 2021 survey choosing Prettier as their preferred code formatter. This is a testament to how well Prettier works and how much it has improved the workflow of web developers around the world.

## Flexibility with Prettier Configuration ⚙️

While Prettier is opinionated, it's also flexible. If you need to create a slightly different style, you can configure Prettier to meet your needs. This means that even though Prettier enforces a consistent style, you can still configure it to your liking.

## Extend Prettier with a Large Ecosystem of Plugins 🔌

One of the great things about Prettier is its large ecosystem of plugins. These plugins allow you to extend Prettier's functionality and make it even more flexible and compatible with your development stack. As an example, one plugin that I highly recommend is the [Prettier plugin for Tailwind CSS](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier). This plugin automatically sorts Tailwind CSS classes and helps you keep your code organized.

## Conclusion 🎉

In conclusion, Prettier is the must-have code formatter for modern web development. It's opinionated, fast, and flexible, and it works with all of the major web development languages. With Prettier, you can focus on writing code and let the tool take care of the styling. And with the large ecosystem of plugins, you can extend Prettier's functionality and make it even more powerful
