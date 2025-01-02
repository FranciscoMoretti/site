---
title: Don't Swallow Exceptions
alias: Proper exception handling, Handle exceptions appropriately, Don't hide errors, Exception Handling, Error Handling

draft: false
tags: ['Code Tips']
date: 2023-06-11
summary: Thrown errors are a good thing and you can do something about them. The rule is “Don't ignore caught errors”
category: General
slug: dont-ignore-caught-errors
---

## Usage

### 📝 Guideline

**Don't Swallow Exceptions**: Handle and log both caught and uncaught exceptions to prevent unhandled issues and aid debugging.

It's crucial to handle exceptions properly to ensure that errors are caught, logged, and addressed appropriately. Swallowing exceptions, which means ignoring or suppressing them without taking any action, can lead to unhandled issues and make it difficult to diagnose and fix problems.

### 🛠️ How to Apply

- **Handle exceptions**: Use try-catch blocks to catch exceptions and handle them appropriately. This ensures that exceptions are not ignored and can be dealt with in a controlled manner. ✋
- **Consider multiple catch blocks**: If different types of exceptions can occur, use multiple catch blocks to handle them individually. This allows for more specific handling based on the exception type. 🚦
- **Rethrow exceptions when necessary**: In some cases, it may be appropriate to rethrow an exception after handling it. This can be useful when you want the exception to propagate up the call stack for further handling or to ensure that it's not silently ignored. 🔁
- **Log exceptions**: Use a logging mechanism to record exceptions and relevant details, such as the error message, stack trace, and any relevant context. This information can be invaluable when debugging and troubleshooting issues. 📝

## Pros and Cons

### 👍 Pros

- **Prevents unhandled issues**: By handling exceptions, you prevent them from propagating unhandled throughout your codebase, which can lead to crashes or unexpected behavior. 🚧
- **Easier debugging**: Logging exceptions and their details makes it easier to identify and diagnose issues, speeding up the debugging process. 🔍
- **Improves code reliability**: Proper exception handling contributes to the overall reliability of your code by ensuring that errors are properly dealt with and not ignored. 💪

### 👎 Cons

- **Potential performance impact**: Exception handling can introduce a slight performance overhead, especially when exceptions are frequently thrown and caught. However, the benefits of proper error handling generally outweigh this impact.⏱️
- **Increased code complexity**: Exception handling logic, if not well-structured, can make code more complex and harder to follow .However, it's a necessary trade-off for robustness and reliability. 📚

## Examples

### ❌ Bad

```typescript
try {
  // Risky operation that may throw an exception
  performRiskyOperation();
} catch (Exception e) {
  // Swallow the exception without any action
}
```

### ✅ Good

```typescript
try {
  // Risky operation that may throw an exception
  performRiskyOperation();
} catch (Exception e) {
  // Log the exception for debugging purposes
  logger.error("An error occurred during the risky operation", e);
  // Handle the exception appropriately
  // ...
  // Optionally, rethrow the exception to allow higher-level handling
  throw e;
}
```

## References

### 🔀 Related principles

- **Don't ignore caught errors**: Similar to not swallowing exceptions, this principle emphasizes the importance of handling caught errors within try-catch blocks and avoiding their ignorance. ❌
- **Graceful degradation**: Relates to "Don't Swallow Exceptions" by considering how to gracefully handle exceptions and maintain system functionality.🌈
- **Fail Fast**: This principle emphasizes identifying and failing quickly when encountering errors or invalid conditions, reducing the impact of failures and aiding debugging. ⚡
- **Defensive Programming**: Complements "Don't Swallow Exceptions" by proactively preventing exceptions and ensuring robust code. 🛡️
