---
tag: VS Code, Tools, JavaScript, TypeScript, Testing, Debugging
alias:

publish: true
slug: quokka-playground-run-javascript-and-typescript-in-vs-code

title: Quokka Playground - Run JavaScript and TypeScript in VS Code
description: Discover the Quokka extension for Visual Studio Code, a valuable tool that simplifies code testing and learning in JavaScript and TypeScript development.
date: 2023-07-04
cover: /thumbnails/quokka-playground-run-javascript-and-typescript-in-vs-code.png
thumbnail:
  - VS Code
  - Quokka
  - Playground
---

## Introduction
When working on a large project, it's often necessary to test specific code snippets in isolation. In this blog post, we explore the Quokka extension for Visual Studio Code, a solution that simplifies code testing and learning in JavaScript and TypeScript.

## What is Quokka Playground? 🚀
The Quokka extension provides a seamless testing experience within Visual Studio Code. With Quokka, you can easily create new files for trying out code using the command palette. As you type, Quokka automatically runs and displays the output of each `console.log` line, allowing you to observe results in real-time.

Quokka isn't limited to JavaScript; it also supports TypeScript, making it a versatile tool for various web development scenarios.

## Installation 
Follow one of these options to install it.
-  Search for `WallabyJs.quokka-vscode` in VS Code Extensions panel and hit install.
- [Install via the Visual Studio Code Marketplace →](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode).

## Enhance Your Learning Journey 📚

Quokka is an excellent companion for practicing algorithms and enhancing your overall learning experience. As you write code, Quokka provides visual cues by displaying red or green squares on the left side of each line, indicating the presence or absence of errors.

Furthermore, Quokka allows you to import and test node modules that are already a part of your project, expanding its usefulness beyond isolated code snippets.

## How Quokka Enhances JavaScript Development 🧪
Quokka introduces a practical approach to JavaScript development by providing instant code evaluation, conveniently displaying the output alongside your code. This eliminates the need to switch between files or browsers for testing, streamlining your workflow.

You can activate Quokka on a per-file basis or selectively evaluate specific code sections. This flexibility empowers you to experiment and test parts of your code without disrupting the entire project.

```typescript
// Sample JavaScript code
const add = (a, b) => a + b;

add(2, 3); // Output: 5
```


## Features at a Glance 🧩

Quokka comes with a range of features designed to enhance your development workflow.

### Live Feedback for JS and TS

Quokka provides real-time execution feedback within the editor. You can open a new Quokka file or restart Quokka on an existing file using convenient keyboard shortcuts 
- `Cmd/Ctrl + K  J` for JavaScript
- `Cmd/Ctrl + K  T` for TypeScript

The execution output is displayed in the Quokka Console, accessible through the "Show Output" command or the status bar indicator.

![Quokka Squares Indicators](assets/Quokka%20Squares%20Indicators.png)

### Live Logging and Comparison

With Quokka, you can utilize `console.log` or identifier expressions to log and compare values. Sequence expressions allow you to perform comparisons on objects, making it easier to examine and validate your code's behavior.

![Quokka Logging Example](assets/Quokka%20Logging%20Example.png)

### Value Explorer

With the Quokka Value Explorer, you gain valuable insights into your code's behavior. The Value Explorer displays the values of logged variables, making it easy to track their changes as you modify your code.

![Quokka Value Explorer](assets/Quokka%20Value%20Explorer.png)

### Time Machine: Debugging Made Easier

Quokka's "Time Machine" feature allows you to debug files step by step, providing a powerful tool to pinpoint and resolve issues in your code. Additionally, Quokka enables you to effortlessly share your scratchpad via [codeclip.io](http://codeclip.io/) with just a single button click, promoting collaboration and knowledge sharing among developers.



## Conclusion

Quokka is a powerful extension that simplifies code testing and learning in JavaScript and TypeScript development. While it may not be the ultimate solution, it offers a range of features that can significantly improve your coding experience. Give Quokka a try and unlock a more efficient and enjoyable testing journey in Visual Studio Code. Happy coding! 🚀

For more features and details check out the official docs https://quokkajs.com/