---
title: Don't add unneeded context

draft: false
tags: ['Code Tips']
date: 2023-06-07
summary: Learn how to write clear and concise code by avoiding unnecessary repetition of context in variable names. Enhance code readability and maintainability.
category: General
slug: dont-add-unneeded-context
---

## Usage

### 📝 Guideline

**Don't add unneeded context**: Avoid repeating information that is already provided by the surrounding code context.

Avoid using redundant words or phrases in variable or method names that duplicate information already conveyed by the context in which they are used. Trust the naming conventions and let the surrounding code provide the necessary context.

### 🛠️ How to Apply

- **Avoid repetition**: If the class or object name already conveys the context, there's no need to repeat it in the variable name. 🔄
- **Use descriptive names**: Instead of adding redundant context, use names that describe the specific purpose or behavior of the variable. 📚
- **Consider the scope**: When naming variables, take into account the scope of the code to ensure clarity and avoid confusion. 🎯

## Pros and Cons

### 👍 Pros

- **Improved readability**: Removing redundant context from variable names makes the code easier to read and understand. 👁️
- **Concise code**: Eliminating unnecessary repetition in variable names leads to more compact and cleaner code. 🧹
- **Reduces cognitive load**: Clear and concise variable names decrease the cognitive load on developers, making it easier to comprehend and work with the codebase. ⚡

### 👎 Cons

- **Loss of clarity**: If variable names lack context due to the omission of redundant information, it may become harder to understand their purpose. 🤔
- **Potential ambiguity**: Overly generic or abbreviated variable names may introduce ambiguity, especially when used in different contexts. ❓

## Examples

### ❌ Bad

```typescript
// Bad variable names with unnecessary context
class Car {
  private carModel: string
  private carMake: string

  constructor(carModel: string, carMake: string) {
    this.carModel = carModel
    this.carMake = carMake
  }

  public getCarModel(): string {
    return this.carModel
  }
}
```

### ✅ Good

```typescript
// Good variable names without redundant context
class Car {
  private model: string
  private make: string

  constructor(model: string, make: string) {
    this.model = model
    this.make = make
  }

  public getModel(): string {
    return this.model
  }
}
```

## References

### 🔀 Related principles

- **Avoid redundant comments**: Don't add unnecessary context through comments, as it can duplicate information already present in the code. 💬
- [**Single Responsibility Principle**](/blog/single-responsibility-principle-srp): By adhering to the single responsibility principle, you can avoid adding unneeded context and keep classes and methods focused on their core purpose. 🎯
- **Consistency in naming**: Maintaining consistency in naming conventions helps to avoid unnecessary context and promotes clarity and understanding in the codebase. 🔄
- [**Don't Repeat Yourself (DRY)**](/blog/dont-repeat-yourself-dry): Duplicating code or logic can introduce redundant context, so follow the DRY principle to eliminate unnecessary repetition. 🚱
