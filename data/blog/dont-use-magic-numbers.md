---
title: Don’t Use Magic Numbers

draft: false
tags: ['Code Tips']
date: 2023-05-24
summary: Improve code clarity and searchability by replacing magic numbers with constants. Make your code more expressive and self-explanatory.
category: Variables
slug: dont-use-magic-numbers
---

## Usage

### 📝 Guideline

**Don't Use Magic Numbers**: Avoid using literal values in your code; instead, assign them to constants with meaningful names. Magic numbers make code hard to understand and maintain.

Numbers that appear in the code without explanation are known as "magic numbers." They make the code less readable and searchable. By assigning these values to constants with meaningful names, you can make the code more expressive and self-explanatory.

### 🛠️ How to Apply

- Define constants to represent magic numbers. 🧙‍♂️
- Use meaningful names for the constants. 🌟
- Replace magic numbers with the corresponding constants. ✨
- Update constants if the values need to change. 🔄

## Pros and Cons

### 👍 Pros

- **Improved Readability**: Constants with meaningful names make the code easier to understand. 📖
- **Enhanced Maintainability**: Updating constants instead of scattered magic numbers simplifies code maintenance. 🔧
- **Searchability**: Constants are easily searchable, allowing other developers to quickly locate and comprehend the purpose of the numbers used in the code. 🔍

### 👎 Cons

- **Increased Indirection**: The use of constants introduces an additional layer of indirection, requiring developers to refer to the constants instead of the actual numbers. 🔄
- **Potential Overhead**: Defining constants for every numerical value may result in an increase in the number of variables in your code, which can have a minor impact on performance and memory usage. ⚠️

## Examples

### ❌ Bad

```typescript
// Calculate the discount amount
function calculateDiscount(totalAmount: number): number {
  return totalAmount - totalAmount * 0.15
}
```

### ✅ Good

```typescript
const DISCOUNT_PERCENTAGE = 0.15

// Calculate the discount amount
function calculateDiscount(totalAmount: number): number {
  return totalAmount - totalAmount * DISCOUNT_PERCENTAGE
}
```

## References

### 🔀 Related Principles

- **Use Descriptive Names**: Meaningful names for constants are essential for code readability. 🌈
- **Avoid Magic Strings**: Similar to magic numbers, using magic strings should be avoided. 🪄
- **Avoid Hard-Coding**: Don't hard-code values directly in your code; use configurable options instead. 🚫
- **Separation of Concerns**: By using constants, you separate the data from the logic. 🗃️
