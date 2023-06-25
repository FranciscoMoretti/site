---
tag: Next.js, VS Code, ESLint, Prettier
alias:

publish: true
slug: how-to-set-up-prettier-and-eslint-in-vs-code-for-next-js

title: How to Set Up Prettier and ESLint in VS Code for Next.js
description: Supercharge your development experience by setting up Prettier and ESLint in VS Code for your Next.js projects. Improve code formatting and catch errors early.
date: 2023-06-25
image:
---

## Introduction
In this tutorial, we'll explore how to install and configure Prettier and ESLint in Visual Studio Code (VS Code) for your Next.js projects. By using these tools, you can ensure consistent code formatting and catch potential errors during development. By using the VS Code extensions, the tools will run as you code, supercharging your developer experience! 🚀

## Installation and Configuration Steps

### Step 1: Installing Prettier in Your Project
To begin, open your Next.js project in VS Code and open the integrated terminal. Run the following command to install Prettier as a development dependency:

```bash
npm install prettier --save-dev
```

To learn more about the benefits of [[letting-go-of-control-embracing-the-prettier-code-formatter|embracing the power of Prettier]].

### Step 2: Installing the Prettier VS Code Extension
Next, navigate to the Extensions view in VS Code and search for the "Prettier - Code formatter" extension by Esben Petersen. This is a people's favourite with 33M downloads as of 2023. Click on the "Install" button to add it to your editor. Check out this other post to learn more about the [[prettier-the-code-formatter-vs-code-extension-for-modern-web-development|Prettier formatter VS Code extension]].

### Step 3: Installing ESLint in Your Project
Similarly, install ESLint as a development dependency by running the following command in the integrated terminal:

```bash
npm install eslint --save-dev
```

Unsure about ESLint? Next.js has integrated ESLint support and it's what `next lint` uses under the hood! I use ESLint in all my projects but you should make your own choice. Here is an analysis of [[the-pros-and-cons-of-using-eslint|the pros and cons of using ESLint]].

### Step 4: Installing the ESLint VS Code Extension
Head over to the Extensions view again and search for the "ESLint" extension by Dirk Baeumer. This is another popular extension with more than 27M downloads at the moment. Install this extension to enable ESLint integration in VS Code. To learn some of the useful stuff it can do have a look at [[eslint-vs-code-extension|error detection and fixing with ESLint VS Code extenison]].


### Step 5: Integrating ESLint and Prettier
To ensure that ESLint and Prettier work together seamlessly, we need to install a package called `eslint-config-prettier`. This package disables any ESLint rules that conflict with Prettier's formatting. Run the following command to install it:

```bash
npm install eslint-config-prettier --save-dev
```

Once installed, create an `.eslintrc.json` file in the root of your project with the following content:

```json
{
  "extends": ["next", "next/core-web-vitals", "prettier"],
  "plugins": [],
  "rules": {}
}
```

Prettier should go last in this array to ensure that format is applied after fixes.

### Step 6: VS Code Configurations to Format and Lint on Save
To enable automatic formatting with Prettier and linting with ESLint on file save, add the following settings to your VS Code `settings.json` file:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

With these settings in place, your code will be automatically formatted by Prettier and checked for errors by ESLint whenever you save a file.

## Conclusion
Congratulations! You have successfully set up Prettier and ESLint in VS Code for your Next.js projects. By having consistent and automatic code formatting and catching errors early on, you can greatly improve your development workflow. Happy coding! 🎉