---
title: Functions should do one thing
sidebar_position: 8
date: 2023-05-20
description: Learn about the principle of writing functions that do one thing in this comprehensive guide. Discover the pros and cons, explore bad and good code examples, and uncover related principles for a clean codebase. 🌟
category: Functions
slug: functions-should-do-one-thing
---
## Usage

### 📝 Guideline
**Functions should do one thing**: Create a function for each action or concept. Functions should do one and only one thing.

A function in clean code should have a clear purpose and perform a single task. It should not be responsible for multiple actions or concepts. By following this principle, your code becomes more modular, readable, and maintainable.

### 🛠️ How to Apply
- Each function should have a clear and specific purpose, focusing on a single task. 🎯
- Avoid including multiple functionalities or responsibilities within a single function. 🚫
- Aim to keep your functions concise and easily understandable. 📚
- Refactor complex functions into smaller, modular ones, each handling a specific task. 🔧
- Avoid functions that need "and," "or," or "if" to indicate multiple tasks or conditions. ⛔

## Pros and Cons
### 👍 Pros
- **Improved code organization**: By adhering to this principle, your codebase becomes more structured and easier to navigate. 📂
- **Enhanced reusability**: Well-defined functions that perform a single task can be easily reused in different parts of your application. 🔄

### 👎 Cons
- **Increased function count**: Applying this principle may lead to a larger number of functions within your codebase, which could make it more challenging to manage for larger projects. ⚙️
- **Potential performance impact**: Dividing complex tasks into smaller functions may introduce additional function calls and, in some cases, slightly affect performance. 🐢

## Examples
### ❌ Bad
```typescript
// Bad: Function performing multiple tasks
function processAnimal(animal: string): void {
    if (animal === 'cat') {
        console.log('Meow!');
        feedCat();
    } else if (animal === 'dog') {
        console.log('Woof!');
        walkDog();
    } else {
        console.log('Unknown animal!');
    }
}
```

### ✅ Good
```typescript
// Good: Functions performing a single task
function makeSound(animal: string): void {
    if (animal === 'cat') {
        console.log('Meow!');
    } else if (animal === 'dog') {
        console.log('Woof!');
    } else {
        console.log('Unknown animal!');
    }
}

function feedCat(): void {
    console.log('Feeding the cat...');
}

function walkDog(): void {
    console.log('Walking the dog...');
}
```

## Related principles
- **Separation of concerns**: Functions should focus on specific tasks, promoting a modular and organized codebase. 🧩
- **Single Responsibility Principle**: Each function should have a single responsibility, contributing to maintainable and reusable code. 🎛️
- **KISS (Keep It Simple, Stupid)**: Strive for simplicity in design and implementation. 🤏