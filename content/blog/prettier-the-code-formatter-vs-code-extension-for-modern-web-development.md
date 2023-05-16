---
tag: VS Code, Prettier
alias:

publish: true
slug: prettier-the-code-formatter-vs-code-extension-for-modern-web-development

title: Prettier - The Code Formatter VS Code Extension for Modern Web Development
description: Discover the time-saving wonders of the Prettier Code Formatter VS Code extension and improve your modern web development workflow. Happy coding!
date: 2023-05-16
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



# Prettier Code Formatter VS Code Extension - A Time-Saving Marvel 🌟

Are you tired of spending countless minutes tweaking the formatting of your code? Do you wish there was a magical tool that could take care of all the tedious spacing, line breaks, and quote choices for you? Well, my fellow developers, rejoice! In this blog post, we'll dive into the wonderful world of the Prettier Code Formatter VS Code extension and discover how it can transform your coding experience. 💻✨

## What is Prettier? 🧐 

Prettier is an opinionated code formatter that helps you maintain consistent code styling in your projects. By automatically applying a set of predefined formatting rules, Prettier saves you from the hassle of manual adjustments, freeing up your time to focus on what truly matters: creating awesome websites.

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


## The VS Code Extension Superpower 🚀

If you're a Visual Studio Code enthusiast like me, you're in the right place! The Prettier Code Formatter extension integrates seamlessly with VS Code, allowing you to unleash the full power of Prettier right within your favorite code editor. 🎉

With the Prettier extension enabled, you can effortlessly format your code with a simple keyboard shortcut or even set it up to format your code automatically on save. Yes, you heard that right! The `formatOnSave` option combined with Prettier will work its magic every time you hit that save button. 🪄✨

### Using Format-On-Save
Format-On-Save is a powerful feature that allows you to automatically format your code every time you save your file. This feature respects the `editor.formatOnSave` setting, which can be turned on for every language compatible with Prettier using:

```json settings.json
{
	"editor.formatOnSave": true,
}
```

## The Need for Speed ⚡

As a developer, time is of the essence. The faster you can produce clean and readable code, the more efficient and productive you become. And that's why Prettier is our friend! 😎

Say goodbay to manually adjusting spaces, tabs, line breaks, single or double quotes, and all those nitpicky details that can slow you down. Prettier takes care of it all, ensuring a consistent and visually pleasing codebase. ✨💪

## Embracing the Prettier Lifestyle 🌟

Now that you've learned about the wonders of the Prettier Code Formatter VS Code extension, it's time to embrace this new way of coding. Let go of the control you once had over your code's appearance and trust Prettier to do that work for you. 💁‍♀️

If you're new to Prettier, don't worry! Installing and setting it up is a breeze. Simply head over to the official Prettier documentation and follow the step-by-step instructions provided [here](https://prettier.io/docs/en/install.html). Before you know it, you'll be doing code formatting effortlessly. ⛱️

In the meantime, if you want to learn more about the benefits of Prettier Code Formatter, check out my previous blog post titled [**"Letting Go of Control - Embracing the Prettier Code Formatter"**](letting-go-of-control-embracing-the-prettier-code-formatter). It explores the benefits of using Prettier in your development workflow. 🌈🔗

## Conclusion: 🎉

Congratulations on discovering the magic of the Prettier Code Formatter VS Code extension! By automating code formatting, Prettier saves you time, enhances your productivity, and lets you focus on what you do best—writing awesome code.  Happy Coding! 😄🎉
