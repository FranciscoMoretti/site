---
title: Use Few Function Arguments
alias: Minimal Function Arguments, Limited Function Arguments

draft: false
tags: ['Code Tips']
date: 2023-05-27
summary: Simplify your code and improve testability by minimizing function arguments. Discover how fewer arguments enhance readability and maintainability.
category: Functions
slug: few-function-arguments
---

## Usage

### 📝 Guideline

**Use Few Function Arguments**: Reduce the number of function arguments to enhance testability and simplify handling.

Functions with fewer arguments are generally easier to understand and maintain. Testing complexity increases with many arguments. By minimizing the number of function arguments, you can improve code readability and maintenance.

### 🛠️ How to Apply

- **Break down complex functions**: If a function has too many arguments, consider breaking it down into smaller functions with fewer arguments. 🧩
- **Group related arguments**: Identify arguments that are closely related and bundle them together into a single object or data structure. 📦
- **Use default values**: Utilize default values for optional arguments to minimize the need for passing multiple arguments. 🏷️

## Pros and Cons

### 👍 Pros

- **Enhanced readability**: Functions with fewer arguments are easier to understand and reason about. They have a clear purpose, making the code more readable. 👀
- **Improved maintainability**: When functions have fewer arguments, it's simpler to modify or extend them without cascading changes to other parts of the codebase. 🧰
- **Reduced coupling**: Fewer arguments reduce the dependencies between functions, promoting loose coupling and better modular design. 🔗

### 👎 Cons

- **Temptation to Rely on Shared State**: Minimizing arguments may tempt developers to rely on shared state or global variables, which is usually worse than many function arguments. 🚫
- **Potential performance impact**: In some cases, combining arguments or using configuration objects may introduce a slight performance overhead due to additional object creation or property access. However, this impact is usually negligible in most scenarios. 🐌

## Examples

### ❌ Bad

```typescript
// Bad: Function with excessive arguments
function calculateTotalPrice(
  itemPrice: number,
  taxRate: number,
  discount: number,
  shippingFee: number
): number {
  // Complex logic involving all arguments
  // ...
  return totalPrice
}
```

### ✅ Good

```typescript
// Good: Function with reduced arguments
function calculateTotalPrice(
  itemPrice: number,
  options: { taxRate: number; discount: number; shippingFee: number }
): number {
  const { taxRate, discount, shippingFee } = options
  // Simplified logic utilizing the options object
  // ...
  return totalPrice
}
```

## References

### 🔀 Related principles

- **Avoid Long Function**: Minimizing the number of function arguments relates to the principle of avoiding long and complex functions. 📏
- [**Single Responsibility Principle**](/blog/single-responsibility-principle-srp): A function with fewer arguments aligns with the principle of having a single responsibility. 🎯
- **Default Parameter Values**: Using default values in function arguments can help reduce the number of explicit arguments passed. 🏷️
- **Object-Oriented Design**: Grouping arguments into a single object aligns with the principles of object-oriented design and encapsulation. 🧱
