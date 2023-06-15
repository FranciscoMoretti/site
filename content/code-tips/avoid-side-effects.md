---
title: Avoid side effects
alias: Side Effect Prevention, Side Effect Minimization, Side Effect Avoidance
sidebar_position: 5
date: 2023-06-12
description: Code that produces unexpected changes to the system's state or has hidden consequences can be difficult to reason about and debug. By avoiding side effects, you can create code that is more predictable, easier to test, and less prone to bugs.
category: Functions
slug: avoid-side-effects
---

## Usage
### 📝 Guideline
**Avoid Side Effects**: Minimize or eliminate code that modifies state or produces non-obvious consequences.

Code that produces unexpected changes to the system's state or has hidden consequences can be difficult to reason about and debug. By avoiding side effects, you can create code that is more predictable, easier to test, and less prone to bugs.

### 🛠️ How to Apply
- **Isolate Mutable State**: Encapsulate mutable state within well-defined boundaries, such as classes or functions, to minimize the potential for unintended side effects. 🧩
- **Immutability**: Favor immutability whenever possible to prevent accidental modifications of shared data. 🚫
- **Pure Functions**: Write pure functions that only depend on their input and produce consistent output, without modifying external state. 🧪
- **Avoid Global State**: Minimize the use of global variables or shared state, as they can lead to hidden dependencies and unintended side effects. 🌍

## Pros and Cons

### 👍 Pros
- **Predictability**: Code without side effects is easier to understand and predict because its behavior is more explicit and deterministic. 🎯
- **Testability**: Side-effect-free code is easier to test, as it can be isolated and its behavior can be verified without the need for complex setup or mocking. 🧪
- **Concurrency**: Code with fewer side effects is generally more amenable to concurrent or parallel execution, as it avoids shared mutable state and potential race conditions. 🏃‍♂️

### 👎 Cons
- **Performance impact**: Avoiding side effects may introduce additional data copies or indirection, impacting performance slightly. However, improved maintainability and reliability often outweigh this trade-off. 🐢
- **Integration challenges**: When working with legacy codebases or third-party libraries that heavily rely on side effects, adopting a side effect-free approach can be challenging. 🚧


## Examples

### ❌ Bad
```typescript
// Bad example: Function with side effects
let counter = 0;

function incrementCounter() {
  counter++;
}

incrementCounter();
console.log(counter); // Output: 1
```

### ✅ Good
```typescript
// Good example: Pure function without side effects
function incrementCounter(counter: number): number {
  return counter + 1;
}

let counter = 0;
counter = incrementCounter(counter);
console.log(counter); // Output: 1
```

## References

### 🔀 Related principles
- **Separation of Concerns**: Avoiding side effects is closely related to the principle of separation of concerns, as it promotes modular and decoupled code by isolating state manipulation. 🧩
- **Immutable Data**: The concept of immutability complements side effect prevention by emphasizing the use of unmodifiable data structures to prevent unintended changes. 🔒
- **Pure Functions**: Side effect avoidance aligns with the use of pure functions, which have no side effects and produce consistent results based solely on their input. 🧪
- **Functional Composition**: Pure functions without side effects can be easily composed together to create larger and more complex functions. This encourages modular and reusable code. 🔀