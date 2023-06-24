---
alias: AHA Principle, Avoiding Hasty Abstractions, Moist Programming
category: General

publish: true
slug: avoid-hasty-abstractions-aha

title: Avoid Hasty Abstractions (AHA)
description: Prefer duplication over the wrong abstraction. Avoid rushing into creating abstractions without a clear understanding of the problem domain. It is better to tolerate duplication initially than to create premature or incorrect abstractions.
date: 2023-06-23

---

## Usage

### 📝 Guideline
**Avoid Hasty Abstractions**: Prefer duplication over the wrong abstraction.

Avoid rushing into creating abstractions without a clear understanding of the problem domain. It is better to tolerate duplication initially than to create premature or incorrect abstractions.

### 🛠️ How to Apply
- **Prefer duplication**: If you're unsure about the correct abstraction, it's better to have duplicated code temporarily until you fully understand the commonalities and requirements for abstraction. 📊
- **Identify commonalities**: Look for patterns and similarities in the duplicated code. When you notice parts that can be generalized, you'll be in a better position to provide meaningful abstractions. 🧩
- **Consider future requirements**: Instead of prematurely optimizing for performance or designing the "perfect" API, focus on code that can easily adapt to future changes. 🔮
- **Avoid premature abstractions**: If you abstract too early, you might end up with complex code that's difficult to maintain. Wait until you have a good understanding of the use cases before creating abstractions. 🚧
- **Mindful Abstraction**: When the commonalities are clear, it's the right time to create abstractions. Abstract out the shared functionality into functions or modules that accurately capture the essence of the problem. 🌤️

## Pros and Cons

### 👍 Pros
- **Increased Clarity**: Duplicating code initially allows you to gain a deeper understanding of the problem, leading to clearer and more concise abstractions. 🔍
- **Flexible Adaptation**: Delaying abstractions until commonalities are well-understood enables easier adaptation to future changes in requirements or use cases. 🔄
- **Accurate abstractions**: By avoiding hasty abstractions, you ensure that your abstractions accurately represent the underlying problem domain. 🎯

### 👎 Cons
- **Code duplication**: Delaying abstractions may result in some code duplication, which can be seen as a drawback.♻️
- **Maintenance overhead**: Duplicated code may require updates in multiple places if changes are needed, leading to increased maintenance overhead. 🪨

## Examples

### ❌ Bad
```typescript
// Bad Example: Hasty Abstraction that don't provide much value and forces one item per operation
function performOperation(items: Item[], operation: string): void {
  for (const item of items) {
    performCustomOperation(item, operation);
  }
}

function performCustomOperation(item: Item, operation: string): void {
  if (operation === "operation1") {
    // Custom operation 1
  } else if (operation === "operation2") {
    // Custom operation 2
  }
  // More operations...
}
```

### ✅ Good
```typescript
// Good Example: Avoid Hasty Abstraction

function performOperation(items: Item[], operation: string): void {
  if (operation === "operation1") {
    for (const item of items) {
      // Custom operation 1 logic
    }
  } else if (operation === "operation2") {
    for (const item of items) {
      // Custom operation 2 logic
    }
  }
  // More operations...
}

```

## References

### 🔀 Related principles
- **Optimize for change first**: This principle complements AHA by emphasizing the need for flexibility in the face of evolving requirements. 🔧
- **Don't Repeat Yourself (DRY)**: While AHA suggests temporary duplication, DRY focuses on removing duplication through well-designed abstractions. 🔄
- **Write Everything Twice (WET)**: AHA encourages careful consideration of abstractions, which aligns with the idea of avoiding unnecessary complexity promoted by WET. ♻️



