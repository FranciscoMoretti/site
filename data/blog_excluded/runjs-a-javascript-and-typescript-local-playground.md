---
tags: ['JavaScript', 'TypeScript', 'Tools']

draft: false

title: RunJS - A JavaScript and TypeScript Local Playground
summary: RunJS, a local playground for JavaScript and TypeScript. Exploring its features and use cases with code examples.
date: 2024-06-06
images: ['/thumbnails/runjs-a-javascript-and-typescript-local-playground.png']
---

## Intro

Recently, I got a license from Luke Haas to explore [RunJS](https://runjs.app/), and I'm impressed with some of the features. I've been putting it to the test and integrating it into my workflow. It's worth mentioning that there is a free version with core functionality, and the license gives you lifetime access (with updates for 1 year), which is rare these days. Another thing I love about it is that it's open source. In this post, I'll be sharing my experience with RunJS and how it's helping me in my daily work.

## What is RunJS?

RunJS is a local playground for JavaScript and TypeScript. It allows you to write, execute, and see the results of your code instantly. Unlike IDEs, RunJS has a minimalistic, distraction-free interface perfect for quick experiments and learning.

## Why Choose RunJS?

1. **Minimalistic Interface:** RunJS offers a clean, distraction-free environment. This simplicity helps you focus on your code, making it great for presentations and screen sharing.

2. **Continuous Code Execution:** RunJS continuously executes your code as you type. This instant feedback loop is invaluable for testing and learning.

3. **Run JS and TS with no configuration:** RunJS supports both JavaScript and TypeScript out of the box. No need to run node or to setup TS. It simply works.

## Use cases for RunJS

These are some of the use cases that I've personally found useful.

### 1. Exploring JS Language Features

JavaScript is weird. RunJS helps you understand them by letting you execute code snippets instantly. This is great for trying out language features or understanding tricky parts of JavaScript.

![JavaScript is weird demo](/assets/javascript_is_weird.png)

Note that it highlights some of these errors to help you avoid the fitfalls of JavaScript.

### 2. Printing the Output of Code Execution

RunJS makes it easy to see the output of your code as you type. This feature is perfect for debugging and understanding how your code works.

![Runjs output demo](/assets/runjs_output_demo.gif)

### 3. Executing JS/TS Without Creating a File

With RunJS, there's no need to create files or set up a Node environment to run your code. This is ideal for quick experiments or learning sessions.

### 4. Solving LeetCode Problems

This is my favorite use case for RunJS. RunJS allows you to print the output of test cases and different parts of the code easily, making debugging and understanding your solution much simpler. The distraction-free interface of RunJS helps a lot here.

You can code all the function with auto-completion support and error linting. It's also convenient to see the output of all the test cases at the end and check how they do without having to hit run every time.

Super helpful for small problems like this one.

![alt text](/assets/runjs_power_of_two.png)

Showing another small one that fits in the screen, but it's also helpful for complex problems.1

![alt text](/assets/runjs_move_zeroes.png)

Oh and you might have noticed that the last case should be true. Wrong! This is not how array comparison works in JS. Here RunJS is helping you to understand the problem with an error message.

![alt text](/assets/runjs_error.png)

## Conclusion

[RunJS](https://runjs.app/) is a nice tool for JavaScript and TypeScript coding. Its simple interface and instant feedback make it perfect for learning, and prototyping. It's not going to replace your IDE but it can be a great addition to your workflow. By being different, and by keeping things simple, it does better than IDEs for some tasks. In my opinion, is a specialized tool that helps with communication, exploring and focus.
