---
title: Don't ignore caught errors
alias: Avoid Ignoring Caught Errors, Handle All Caught Errors
sidebar_position: 26
date: 2023-06-11
description: Thrown errors are a good thing and you can do something about them. The rule is “Don't ignore caught errors”
category: General
slug: dont-ignore-caught-errors
---

## Usage
### 📝 Guideline
**Don't ignore caught errors**: Always handle errors that are caught during the execution of your program.

Ignoring caught errors can lead to unexpected behavior, incorrect results, and even system crashes. Properly handling errors ensures that issues are identified and addressed, improving the overall stability and reliability of your code.

### 🛠️ How to Apply
- **Avoid empty catch blocks**: Empty catch blocks hide errors and make it challenging to identify and fix issues. ❌
- **Log errors**: Use a logging mechanism to record caught errors. This helps in identifying the root cause of the error and facilitates debugging.🔍
- **Provide meaningful error messages**: Display descriptive error messages to help users understand what went wrong and how to resolve the issue. 📢
- **Take appropriate actions**: Implement error handling mechanisms, such as retries, fallbacks, or alternative workflows, to gracefully handle caught errors and ensure the program can continue execution without disruptions. 🔄

## Pros and Cons

### 👍 Pros
- **Improved stability**: Handling caught errors prevents unexpected crashes or failures, making your code more stable and reliable. 💪
- **Better user experience**: When errors are handled properly, users receive informative messages and appropriate actions are taken, resulting in a better user experience. 😊
- **Easier debugging**: Properly handling caught errors allows developers to identify and fix issues more efficiently, as the errors are logged and can provide insights into the problem. 🔧

### 👎 Cons
- **Increased complexity**: Implementing error handling logic adds complexity to the codebase, requiring careful design and consideration of potential edge cases. 🧩
- **Additional development time**: Writing error handling code and documenting error handling strategies may increase development time. ⏳
- **Potential performance impact**: Depending on the error handling mechanism used, there may be a slight performance impact. It's important to find a balance between error handling and performance optimization. ⚡

## Examples

### ❌ Bad
```typescript
try {
  // Some code that may throw an error
} catch (error) {
  // Ignore the caught error and continue execution
}
```

### ✅ Good
```typescript
try {
  // Some code that may throw an error
} catch (error) {
  // One option (more noisy than console.log):
  console.error(error)
  // Another option:
  notifyUserOfError(error)
  // Another option:
  reportErrorToService(error)
  // Or do all three!
}
```

## References

### 🔀 Related principles
- **Don't swallow exceptions**: Swallowing exceptions, similar to ignoring caught errors, can lead to unhandled issues and hinder debugging efforts. ❌
- **Principle of Defensive Programming**: Handling caught errors aligns with the principle of defensive programming by anticipating and addressing potential issues in the code. 🛡️
- **Principle of Graceful Degradation**: Handling caught errors contributes to the principle of graceful degradation by ensuring the system can gracefully handle errors and continue functioning despite issues. 💯
- **Fail Fast**: The principle of "Fail Fast" complements "Don't ignore caught errors" by advocating for immediate detection and handling of errors to prevent further issues. ⏩