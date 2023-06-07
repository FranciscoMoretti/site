---
title: Remove dead code
sidebar_position: 20
date: 2023-06-06
description: Delete code that isn’t executed. It will still be in your git history if you need it.
category: General
slug: remove-dead-code
---

## Usage
### 📝 Guideline
**Remove Dead Code**: Delete code that isn't executed. It will still be in your git history if you need it.

Removing dead code refers to the process of eliminating any code that is no longer being used or executed within your project. This can include unused functions, variables, classes, or even entire modules. By removing dead code, you can improve the maintainability, readability, and performance of your codebase.

### 🛠️ How to Apply
- **Regular code audits**: Regularly review your codebase and identify unused or redundant code sections. Remove them to keep your codebase clean and efficient. ✂️
- **Automated tools**: Utilize code analysis tools that can help identify dead code within your project. These tools can save time and provide insights into code sections that can be safely removed. 🛠️
- **Delete code with confidence**: Once you have identified the unused code, delete it from your codebase. 💥
- **Verify functionality**: After deleting the code, run your automated tests and perform manual testing to ensure that the remaining code still functions correctly. 🧪

## Pros and Cons

### 👍 Pros
- **Improved maintainability**: Removing dead code reduces the complexity of your codebase, making it easier to understand and maintain. 🚀
- **Reduced risk of bugs**: Unused code can introduce confusion and potential conflicts. Removing it reduces the risk of bugs and makes your codebase more reliable. 🐛
- **Enhanced code readability**: Removing dead code improves code clarity and makes it easier for other developers to understand your intentions. 👓
- **Enhanced performance**: By eliminating unused code, you can reduce the memory footprint and execution time of your application, leading to improved performance. ⚡

### 👎 Cons
- **Loss of historical context**: Removing dead code means that valuable historical context may be lost. However, the code can still be accessed through the version control system if needed. 📚
- **Risk of accidental removal**: There is a small risk of accidentally removing code that may be needed in rare scenarios. Proper code review and version control practices can mitigate this risk. ⚠️

## Examples

### ❌ Bad
```typescript
function calculateAverage(numbers: number[]): number {
  // Unused variable
  const unusedVariable = 'This variable is not used anywhere';

  // Dead code that is not executed
  if (false) {
    console.log('This code will never run');
  }

  // Dead function that is never called
  function unusedFunction() {
    console.log('This function is never used');
  }

  // Code block that is commented out
  /*
  console.log('This code is commented out');
  */
  
  return numbers.reduce((a, b) => a + b) / numbers.length;
}
```

### ✅ Good
```typescript
function calculateAverage(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b) / numbers.length;
}
```

## References

### 🔀 Related principles
- **Modularity**: Removing dead code promotes code modularity by eliminating unnecessary dependencies. 🧩
- **Readability**: Removing unused code enhances code readability and improves code comprehension for developers. 👓
- **YAGNI (You Ain't Gonna Need It)**: Removing dead code is in line with the YAGNI principle, which advocates for not implementing functionality until it is actually needed. ✂️
- **KISS (Keep It Simple, Stupid)**: Removing dead code supports the KISS principle by simplifying the codebase and reducing unnecessary complexity. 💋