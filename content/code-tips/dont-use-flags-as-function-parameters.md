---
title: Don’t use flags as function parameters
sidebar_position: 6
date: 2023-05-26
description: Flags tell you that a function does more than one thing. Functions should do only one thing.
category: Functions
slug: dont-use-flags-as-function-parameters
---

## Usage

### 📝 Guideline
**Don't Use Flags as Function Parameters**: Functions should have a single responsibility and flags indicate that a function does more than one thing.

Flags are often used as function parameters to control the behavior of a function. However, this practice can make the code harder to understand and maintain. Instead, it is recommended to split the function into multiple smaller functions, each with a clear and single purpose.

### 🛠️ How to Apply
- Split functions with flags into separate functions or methods, each responsible for a single task. 🚀
- Refactor the code to remove conditional statements based on flags and replace them with calls to the appropriate functions. 🔄
- Ensure that each function or method has a clear and well-defined responsibility. 🎯

## Pros and Cons

### 👍 Pros
- **Improved Readability**: Functions with clear and single responsibilities are easier to understand, reducing cognitive load. 📖
- **Enhanced Maintainability**: Smaller, focused functions are easier to test, debug, and modify when needed. 🛠️
- **Modularity**: By splitting functions based on different tasks, code becomes more modular, promoting code reuse. 🧩

### 👎 Cons
- **Increased Function Count**: Splitting functions may result in an increase in the number of functions, which can make the codebase larger. 📈
- **Potential Overhead**: In some cases, creating multiple functions instead of using flags might introduce slight overhead due to function call overhead. ⏱️
- **Code Duplication**: Splitting functions without proper abstraction can lead to code duplication, which may introduce bugs and maintenance issues. 🐞

## Examples

### ❌ Bad
```typescript
// Bad: Using a flag to determine the behavior of the function
function drawShape(shape: string, fill: boolean) {
  if (fill) {
    // Draw filled shape
    console.log(`Drawing a filled ${shape}`);
  } else {
    // Draw outline only
    console.log(`Drawing an outlined ${shape}`);
  }
}

// Usage
drawShape("circle", true); // Draw a filled circle
drawShape("rectangle", false); // Draw an outlined rectangle
```

### ✅ Good
```typescript
// Good: Separate functions for each shape drawing task
function drawFilledShape(shape: string) {
  console.log(`Drawing a filled ${shape}`);
}

function drawOutlinedShape(shape: string) {
  console.log(`Drawing an outlined ${shape}`);
}

// Usage
drawFilledShape("circle"); // Draw a filled circle
drawOutlinedShape("rectangle"); // Draw an outlined rectangle
```

## References

### 🔀 Related Principles
- **Single Responsibility Principle**: Functions should have a single responsibility, which aligns with not using flags as function parameters. 🎯
- **Code Reusability**: By splitting functions, code becomes more modular and can be reused in different contexts. 🔄
- **Separation of Concerns**: Divide functions into smaller functions, each handling a specific concern. 📦