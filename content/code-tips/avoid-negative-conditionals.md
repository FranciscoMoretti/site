---
title: Avoid Negative Conditionals
sidebar_position: 19
date: 2023-06-05
description: Negatives are harder to understand. Conditional functions should be expressed as positives every time.
category: General
slug: avoid-negative-conditionals
---
# Avoid Negative Conditionals

## Usage
### 📝 Guideline
**Avoid Negative Conditionals**: Negatives are harder to understand. Conditional functions should be expressed as positives.

Conditional functions that use negative statements can make the code harder to read and comprehend. By expressing conditional logic in positive terms, you can enhance code readability and make it easier to understand the intended behavior.

### 🛠️ How to apply
- **Use positive conditionals**: Instead of checking for the absence of a condition, check for its presence. This can make the code more straightforward and easier to follow. 🐣
- **Use descriptive variable and function names**: Choose names that clearly convey the purpose of the condition, making the code more self-explanatory. 📛
- **Invert conditions sparingly**: If inverting a condition improves code clarity, do so sparingly. Be mindful of the potential impact on code readability. 🤏
- **Avoid using "not" in function names**: Function names should not include the word "not" as it can make the code less intuitive. Instead, utilize the "not" Boolean operator with the function call itself to express negation. ⛔️

## Pros and Cons

### 👍 Pros
- **Improved readability**: Positive conditionals make the code easier to understand, as they express the desired behavior directly. 😃
- **Reduced cognitive load**: Avoiding negative conditionals helps reduce mental strain and makes it easier to reason about code. 🧠

### 👎 Cons
- **Increased verbosity**: Positive conditionals may require additional code or conditions to handle negative cases, potentially leading to increased verbosity. 🔍
- **Risk of error**: If the positive conditionals are not written accurately, there is a possibility of introducing logic errors. ❌

## Examples

### ❌ Bad
```typescript
if (!isNotLoggedIn) {
  // Do something if logged in
} else {
  // Do something if not logged in
}
```

### ✅ Good
```typescript
if (isLoggedIn) {
  // Do something if logged in
} else {
  // Do something if not logged in
}
```

## References

### 🔀 Related principles
- **Positive Language Principle**: Using positive language throughout the codebase enhances readability and clarity. 🌟
- **Use Intention-Revealing Names**: Choosing descriptive names for variables and functions helps eliminate the need for negative conditionals by clearly indicating the intention behind the code. 📛
- **Guard Clause Principle**: Utilizing guard clauses helps improve code readability by handling special cases early on and reducing nesting depth. 🚧
