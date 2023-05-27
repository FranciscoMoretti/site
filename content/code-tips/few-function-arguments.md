---
title: Use Few Function Arguments
sidebar_position: 9
date: 2023-05-27
description: Fewer arguments make your function easier to test. They are also easier to handle.
category: Functions
slug: few-function-arguments
---

## Usage

### 📝 Guideline

**Use Few Function Arguments**: Reduce the number of function arguments to enhance testability and simplify handling.

Functions with many arguments hinder understanding and reasoning. Testing complexity increases due to the need for values in multiple test cases. Minimize arguments for clarity and easier testing.

### 🛠️ How to apply
- **Break down complex functions**: If a function has too many arguments, consider breaking it down into smaller functions with fewer arguments. 🧩
- **Group related arguments**: Identify arguments that are closely related and bundle them together into a single object or data structure. 📦
- **Use default values**: Utilize default values for optional arguments to minimize the need for passing multiple arguments. 🏷️
- **Consider using keyword arguments**: If the programming language supports keyword arguments, utilize them to improve the clarity and flexibility of function calls. 🔤
- **Less than 3 arguments:** Aim for zero or few arguments, avoiding three or more to prevent excessive complexity. 3️⃣

## Pros and Cons

### 👍 Pros
- **Enhanced readability**: Functions with fewer arguments are easier to understand and reason about. They have a clear purpose, making the code more readable. 👀
- **Improved maintainability**: When functions have fewer arguments, it's simpler to modify or extend them without cascading changes to other parts of the codebase. 🧰
- **Reduced coupling**: Fewer arguments reduce the dependencies between functions, promoting loose coupling and better modular design. 🔗

### 👎 Cons
- **Potential for increased function complexity**: In some cases, reducing the number of function arguments might lead to more complex implementation logic within the function. 🕸️
- **Increased dependency on shared state**: When reducing function arguments, it's common to rely more on shared state or global variables. This can introduce hidden dependencies and make the code harder to reason about or debug. 🕵️
- **Potential performance impact**: In some cases, combining arguments or using configuration objects may introduce a slight performance overhead due to additional object creation or property access. 🐌


## Examples

### ❌ Bad
```typescript
// Bad: Function with excessive arguments
function calculateTotalPrice(itemPrice: number, taxRate: number, discount: number, shippingFee: number): number {
  // Complex logic involving all arguments
  // ...
  return totalPrice;
}
```

### ✅ Good
```typescript
// Good: Function with reduced arguments
function calculateTotalPrice(itemPrice: number, options: { taxRate: number, discount: number, shippingFee: number }): number {
  const { taxRate, discount, shippingFee } = options;
  // Simplified logic utilizing the options object
  // ...
  return totalPrice;
}
```

## References

### 🔀 Related principles
- **Avoid Long Function**: Minimizing the number of function arguments relates to the principle of avoiding long and complex functions. 📏
- **Single Responsibility Principle**: A function with fewer arguments aligns with the principle of having a single responsibility. 🎯
- **Default Parameter Values**: Using default values in function arguments can help reduce the number of explicit arguments passed. 🏷️
- **Object-Oriented Design**: Grouping arguments into a single object aligns with the principles of object-oriented design and encapsulation. 🧱

