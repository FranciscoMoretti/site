---
title: Keep it short and simple (KISS)
alias: Keep It Simple Stupid, Keep It Stupid Simple, Keep It Super Simple, keep it short and simple, keep it small and simple
sidebar_position: 24
date: 2023-06-09
description: Learn about the KISS principle and its impact on software development. Prioritize simplicity, improve maintainability, and enhance code readability.
category: General
slug: kiss-keep-it-short-and-simple
---

## Usage

### 📝 Guideline

**The KISS principle**: Prioritize simplicity in design to optimize system performance by avoiding unnecessary complexity.

The KISS principle emphasizes the importance of simplicity in software development. It suggests that simplicity leads to better system performance and maintainability, while unnecessary complexity can hinder development and introduce potential issues.

### 🛠️ How to Apply

- **Avoid over-engineering**: Resist the temptation to overcomplicate solutions. Instead, strive for simplicity by choosing the most straightforward and efficient approach. 🚀
- **Keep functions and methods concise**: Break down complex tasks into smaller, manageable functions or methods. This improves code readability and makes debugging easier. 🔍
- **Simplify algorithms and logic**: Aim for clear and straightforward algorithms and logic. Avoid unnecessary branching, nested conditions, or convoluted control flows. 🌿
- **Minimize dependencies**: Reduce dependencies to essential components or libraries. Excessive dependencies can increase complexity and introduce potential compatibility issues. 🧩
- **Regularly refactor and remove code**: Continuously review and refactor code to eliminate redundant or unused components. This helps maintain a clean and lean codebase. 🧹

## Pros and Cons

### 👍 Pros

- **Improved maintainability**: Simple code is easier to understand and modify, reducing the risk of introducing bugs during maintenance. 💡
- **Enhanced readability**: Simplicity makes code more readable, facilitating collaboration among developers and improving overall code quality. 👓
- **Reduced development time**: Simple designs and straightforward solutions often lead to faster development cycles and shorter time-to-market. ⏰
- **Lower learning curve**: When code is kept simple, new team members can quickly understand and contribute to the project, accelerating onboarding. 📚

### 👎 Cons
- **Trade-offs with optimization**: In some cases, simplicity can sacrifice performance optimizations or introduce inefficiencies. Careful analysis is necessary to strike the right balance. ⚖️
- **Limited flexibility**: Simplicity may result in a trade-off with flexibility. Extremely simple designs might not accommodate future changes or scalability requirements. 🕸️
- **Increased risk of oversimplification**: Emphasizing simplicity without considering the complexity of the problem domain may lead to oversimplification. 🧩


## Examples

### ❌ Bad
```typescript
// Bad example: Overly complex code
function calculateAverage(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  return average;
}
```

### ✅ Good
```typescript
// Good example: Simplified code
function calculateAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}
```

## References

### 🔀 Related principles

- **DRY principle**: It aligns with KISS principle by emphasizing simplicity and avoiding unnecessary duplication. 🔄
- **YAGNI principle**: The KISS principle and the You Ain't Gonna Need It (YAGNI) principle both advocate for avoiding unnecessary complexity and functionality. 🚫
- **SOLID principles**: The Single Responsibility Principle and the Interface Segregation Principle align with the KISS principle by promoting simplicity in design and implementation. 🧱
- **Separation of Concerns (SoC)**: It complements the KISS principle by promoting simplicity through modularization and avoiding excessive complexity in individual components. 🧩

### 🗨️ Quotes

> “There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.” - C.A.R. Hoare.

> "Simplicity is the prerequisite for reliability." - Edsger Dijkstra

> "Keep it simple, make it general, and make it intelligible." - Dennis Ritchie

> "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry

> "Simplicity is the ultimate sophistication." - Leonardo da Vinci