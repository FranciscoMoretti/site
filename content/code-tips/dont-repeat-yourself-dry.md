---
alias: [DRY Principle, DRY Code, Duplicated Code Principle, Once and Only Once Principle]
category: General

publish: true
slug: dont-repeat-yourself-dry

title: Don't Repeat Yourself (DRY)
description: Avoid duplicating the same information in multiple places.The DRY principle encourages developers to eliminate code duplication by extracting common functionality. 
date: 2023-06-21

---

## Usage

### 📝 Guideline
**Don't Repeat Yourself (DRY)**: Avoid duplicating the same information in multiple places.

The DRY principle encourages developers to eliminate code duplication by extracting common functionality into reusable components. This promotes code reusability, easier maintenance, and improved readability.

### 🛠️ How to Apply
- **Extract Reusable Functions:** Identify code blocks with similar functionality and extract them into reusable functions. Reuse these functions across your codebase. ✂️
- **Create Reusable Classes**: Modularize your code by creating reusable classes that encapsulate common functionality. This allows you to reuse the same code across different parts of your application. 🧩
- **Refactor Duplicate Code**: Regularly review your codebase and refactor any duplicate code you come across. Consolidate repeated logic into a single location to ensure consistency and reduce maintenance efforts. 🔁

## Pros and Cons

### 👍 Pros
- **Code Reusability**: DRY principles promote code reuse, making it easier to maintain and update your codebase. ♻️
- **Improved Maintainability**: By eliminating redundant code, you reduce the chances of introducing bugs and make it easier to locate and fix issues when they arise. 🛠️
- **Enhanced Consistency**: DRY code encourages consistent implementation, ensuring that changes made in one place propagate correctly throughout the codebase. 🔄

### 👎 Cons
- **Complexity Tradeoff**: Extracting reusable components or functions may introduce additional complexity, requiring careful design and consideration to ensure clarity and understandability. 🤔
- **Over-Abstracting:** In some cases, excessive attempts to eliminate duplication can lead to over-abstraction, making the code harder to understand and maintain. 🧩
- **Increased Development Time**: Applying DRY principles may initially require more effort upfront to identify and extract common code. However, this investment pays off in the long run by reducing duplication-related issues. ⏱️

## Examples

### ❌ Bad
```typescript
function calculateRectangleArea(width, height) {
  return width * height;
}

function calculateSquareArea(sideLength) {
  return sideLength * sideLength;
}

function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}
```

### ✅ Good
```typescript
function calculateRectangleArea(width, height) {
  return width * height;
}

function calculateSquareArea(sideLength) {
  return calculateRectangleArea(sideLength, sideLength);
}

function calculateTriangleArea(base, height) {
  return calculateRectangleArea(base, height) / 2;
}
```

## References

### 🔀 Related principles
- **Single Responsibility Principle (SRP)**: DRY aligns with the SRP by promoting the separation of concerns. Both principles aim to reduce code complexity and improve maintainability. 🎯
- **Keep It Simple, Stupid (KISS):** DRY and KISS both advocate for simplicity and avoiding unnecessary complexity. DRY focuses specifically on eliminating code duplication, while KISS emphasizes simplicity in overall design and implementation. 🤔
- **Separation of Concerns (SoC):** DRY aligns with SoC by reducing duplication and promoting modularity, making it easier to identify and manage different concerns independently. 🧩