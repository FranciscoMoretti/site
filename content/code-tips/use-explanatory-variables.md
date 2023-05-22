---
title: Use Explanatory Variables
sidebar_position: 2
date: 2023-05-21
description: Break the calculations up into intermediate values that are held in variables with meaningful names. The names give meaning and clarity to the code.
category: Variables
slug: use-explanatory-variables
---

## Usage

### 📝 Guideline
**Use Explanatory Variables**: Break the calculations up into intermediate values that are held in variables with meaningful names. The names give meaning and clarity to the code.

Explanatory variables improve the readability and maintainability of the code by breaking complex calculations into smaller, well-named intermediate values. By assigning meaningful names to these variables, the purpose and intent of the code become clear.

### 🛠️ How to apply
- Break down complex expressions into smaller, meaningful variables. 🧩
- Use descriptive variable names that convey the purpose or meaning of the value they hold. 💡
- Avoid using hard-coded values directly in your code; assign them to variables with explanatory names. 📝
- Reuse explanatory variables instead of repeating the same complex expression multiple times. 🔄

## Pros and Cons

### 👍 Pros
- **Improved Readability**: Explanatory variables make your code more understandable, allowing other developers to quickly grasp the purpose and functionality of your code. 👓
- **Enhanced Maintainability**: By breaking down complex expressions and using meaningful variable names, you create code that is easier to maintain and modify in the future. 🔧
- **Debugging Facilitation**: When debugging, having explanatory variables simplifies the process by enabling you to inspect the intermediate values of your code. 🔍
- **Codebase Consistency**: Consistently using explanatory variables throughout your codebase helps establish a clear and unified coding style. 🌟

### 👎 Cons
- **Increased Memory Usage**: Introducing additional variables might slightly increase memory consumption, although the impact is typically negligible. 🧠
- **Possible Overuse**: While explanatory variables can improve code clarity, excessive use may lead to an unnecessarily high number of variables, potentially hindering code comprehension. 🚦

## Examples

### ❌ Bad
```typescript
// Bad: Repeated complex expression
if (circle.radius > 5 && (circle.color === 'red' || circle.color === 'blue')) {
  // Do something
}
```

### ✅ Good
```typescript
// Good: Reuse explanatory variables for clarity
const isLargeRadius = circle.radius > 5;
const isRedOrBlue = circle.color === 'red' || circle.color === 'blue';

if (isLargeRadius && isRedOrBlue) {
  // Do something
}
```

## References

### 🔀 Related principles

- **Choose Descriptive Names**: Meaningful variable names complement the use of explanatory variables, further enhancing code clarity. 📛
- **Separation of Concerns**: Breaking down complex calculations into smaller steps aligns with the principle of dividing code into distinct, manageable units. 🧩
- **Single Responsibility Principle**: By using explanatory variables, you promote code that follows the single responsibility principle, as each variable represents a specific calculation or concept. 🎯
- **Don't Repeat Yourself (DRY)**: Reusing explanatory variables reduces code duplication and fosters a more maintainable codebase. 🔁