---
title: Use Explanatory Variables
sidebar_position: 2
date: 2022-05-16
description: Break the calculations up into intermediate values that are held in variables with meaningful names. The names give meaning and clarity to the code.
category: Variables
slug: use-explanatory-variables
---

## Usage

### 📝 Guideline
"Use explanatory variables to make your code more readable."

### 🔀 Alternative Names
- N/A

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
- **Maintenance Overhead**: Adding explanatory variables requires thoughtful naming and occasional updates if underlying logic changes, which can introduce additional maintenance overhead. 🛠️
- **Learning Curve**: Adopting the practice of using explanatory variables may require a learning curve for developers unfamiliar with the concept. 📚

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

## Related principles
- **Single Responsibility Principle**: Explanatory variables support the Single Responsibility Principle by making code more modular and focused on a single task. 🔗
- **Don't Repeat Yourself (DRY)**: Using explanatory variables helps avoid code duplication by reusing meaningful variables instead of duplicating complex expressions. 🔄
- **Naming Conventions**: Explanatory variables align with good naming conventions, promoting clarity and understanding of code elements. 🏷️
- **Separation of Concerns**: By separating complex expressions into smaller variables, you achieve a clearer separation of concerns within your codebase. 🧩
- **KISS Principle (Keep It Simple, Stupid)**: Explanatory variables contribute to keeping code simple and straightforward, making it easier to comprehend and maintain. 🤓
