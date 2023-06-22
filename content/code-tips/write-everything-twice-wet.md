---
alias: WET Principle, Write Everything Twice, Duplication Over Premature Abstraction, We Enjoy Typing, Waste Everyone's Time
category: General

publish: true
slug: write-everything-twice-wet

title: Write Everything Twice (WET)
description: Code duplication is often frowned upon in software development, as it violates the Don't Repeat Yourself (DRY) principle. However, in certain situations, it can be more beneficial to have duplicated code rather than introducing premature abstraction.
date: 2023-06-22

---

## Usage

### 📝 Guideline
**Write Everything Twice (WET)**: Writing code with duplication is preferable to premature abstraction.

Code duplication is often frowned upon in software development, as it violates the Don't Repeat Yourself (DRY) principle. However, in certain situations, it can be more beneficial to have duplicated code rather than introducing premature abstraction.

### 🛠️ How to Apply
- **Avoid premature abstraction**: Before extracting common code into reusable abstractions, ensure that the similarities between the duplicated code are well understood and stable. 🚫
- **Consider code readability**: Duplicated code can sometimes be more readable and easier to understand, especially when the logic is straightforward and self-contained. 📖
- **Strive for balance**: While duplication should be minimized, it's essential to find the right balance between abstraction and duplication. Evaluate the trade-offs between the benefits of abstraction and the potential downsides. ⚖️

## Pros and Cons

### 👍 Pros
- **Code Clarity**: Duplicating code can sometimes lead to clearer and more readable code, especially when the duplicated logic is straightforward and self-contained. 📝
- **Flexibility**: Duplicated code allows individual components to evolve independently without affecting others. It provides the flexibility to modify specific sections without introducing complex abstractions. 🧩
- **Simplicity**: Duplication eliminates the need for complex abstractions, making the code simpler and easier to understand, especially for beginners. 🎯

### 👎 Cons
- **Code Maintainability**: Duplicated code requires changes to be applied to multiple places, increasing the maintenance effort and the risk of inconsistencies. 🚧
- **Potential code bloat**: With excessive duplication, the codebase can become larger and more challenging to maintain. It can result in redundant logic, increased file sizes, and decreased overall code quality. 🐘

## Examples

### ❌ Bad
```typescript
// Bad example: Over abstraction to avoid repetition
function calculateArea(radius: number): number {
  return calculatePiTimesRadius(radius) * radius;
}

function calculateCircumference(radius: number): number {
  return 2 * calculatePiTimesRadius(radius);
}

function calculatePiTimesRadius(radius: number): number {
  return 3.14 * radius;
}

const area = calculateArea(5);
const circumference = calculateCircumference(5);


```

### ✅ Good
```typescript
// Good example: Duplication that's clearer and more straightforward
function calculateArea(radius: number): number {
  return 3.14 * radius * radius;
}

function calculateCircumference(radius: number): number {
  return 2 * 3.14 * radius;
}

const area: = calculateArea(5);
const circumference = calculateCircumference(5);

```

## References

### 🔀 Related principles
- **DRY (Don't Repeat Yourself)**: The principle of Write Everything Twice (WET) goes against the DRY principle, which emphasizes code reuse and minimizing duplication. While DRY is generally preferred, WET can be a pragmatic approach in specific scenarios. 🌪️
- **Keep It Simple, Stupid (KISS):** By keeping code duplication when it improves clarity, WET adheres to the spirit of KISS. 🤔
- **YAGNI (You Ain't Gonna Need It):** By not prematurely abstracting code, WET focuses on fulfilling the current requirements without adding unnecessary complexity. 🏗️