---
title: Don’t Over Optimize
sidebar_position: 18
date: 2023-05-29
description: Trying to optimize your code is a waste of time in some cases. Modern browsers do a lot of optimizations at runtime.
category: General
slug: dont-over-optimize
---

## Usage

### 📝 Guideline
**Don't Over Optimize**: Avoid excessive code optimization efforts to save development time and rely on optimizations of the system.

Optimizing your code can sometimes be a waste of time. Modern browsers and hardware are equipped with powerful optimization mechanisms that automatically optimize code at runtime, making manual optimizations unnecessary in many cases.

### 🛠️ How to Apply
- **Prioritize readability**: Focus on writing clean and understandable code rather than obsessing over minor performance improvements. 📖
- **Leverage browser optimizations**: Trust the capabilities of modern browsers to optimize your code automatically and efficiently. 🚀
- **Measure performance**: Identify critical performance bottlenecks in your code and optimize only where necessary. ⏱️

## Pros and Cons

### 👍 Pros
- **Development efficiency**: By avoiding unnecessary optimization efforts, you can save time and focus on more critical aspects of development. ⏰
- **Improved code readability**: By avoiding excessive optimizations, the code remains clear and understandable, making it easier to maintain and collaborate on. 📚
- **Focus on critical areas**: Instead of spending time optimizing non-critical sections, developers can concentrate on the most performance-sensitive parts of the codebase, maximizing efficiency. ⚡️

### 👎 Cons
- **Missed optimization opportunities**: Not investing any effort in code optimization may lead to missed opportunities to improve performance and efficiency in critical areas. ❌
- **Potential performance issues**: Neglecting optimization completely can result in suboptimal code that may perform poorly, especially in scenarios where optimizations are essential. ⏱️
- **Inefficient resource utilization**: By not optimizing code, resources such as memory or network bandwidth may be used inefficiently, leading to unnecessary overhead and increased costs. 💸

## Examples

### ❌ Bad
```typescript
// Bad: Excessive optimization

// On old browsers, each iteration with uncached `list.length` would be costly
// because of `list.length` recomputation. In modern browsers, this is optimized.
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}
```

### ✅ Good
```typescript
// Good: Prioritizing readability over excessive optimization

for (let i = 0; i < list.length; i++) {
  // ...
}
```

## References

### 🔀 Related principles
- **Code Readability**: Prioritize code readability to enhance maintainability and collaboration. 📖
- **Benchmarking**: Utilize benchmarking techniques to identify performance bottlenecks. ⏱️
- **Optimize Critical Paths**: Focus optimization efforts on the most performance-sensitive sections of code. ⚡️

