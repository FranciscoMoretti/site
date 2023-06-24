---
alias: You Aren't Gonna Need It, YAGNI Principle

category: General
publish: true
slug: you-aint-gonna-need-it-yagni

title: You Ain't Gonna Need It (YAGNI) 
description: Only implement what's necessary. Avoid premature optimization. Keep code simple and focused on current requirements.
date: 2023-06-14
---

## Usage
### 📝 Guideline
**You Ain't Gonna Need It** : Only implement features or code necessary at the current moment.

YAGNI is a code principle that promotes simplicity and efficiency in software development. It encourages developers to implement only the features and code that are essential for the current project, avoiding unnecessary complexity and future speculation.

### 🛠️ How to Apply
- **Think Minimal**: Focus on implementing only the features that are essential for the current project. Avoid adding unnecessary complexity or features. ✂️
- **Avoid Speculation**: Don't try to anticipate future requirements that are not yet defined. Instead, prioritize delivering the functionality that is needed now. 🔮
- **Refactor with Purpose**: If you realize that certain code or features are no longer necessary, remove them or refactor them to simplify the codebase. ♻️

## Pros and Cons

### 👍 Pros
- **Simplicity**: By implementing only what is needed, the codebase remains lean and easier to understand. 🧩
- **Faster Development**: Focusing on essential features allows for faster development and quicker delivery of working software. ⚡️
- **Improved maintainability:** With a smaller codebase and fewer features, maintaining and debugging the software becomes more efficient. 🛠️


### 👎 Cons
- **Potential missed opportunities:** There might be instances where a feature or functionality is not immediately needed but could have provided value if implemented. 🤷‍♂️
- **Limited foresight**: Ignoring future needs entirely may lead to code that is difficult to extend or adapt when new requirements emerge. 🚧

## Examples

### ❌ Bad
```typescript
// Unnecessary features and excessive customization options
class Button {
  constructor(text, color, size, icon) {
    this.text = text;
    this.color = color;
    this.size = size;
    this.icon = icon;
    // ...
  }

  render() {
    // Complex rendering logic with multiple variations
    // ...
  }

  // More unnecessary methods and properties...
}

```

### ✅ Good
```typescript
// Simple and functional button component
class Button {
  constructor(text) {
    this.text = text;
  }

  render() {
    // Basic rendering logic
    // ...
  }
}
```

## References

### 🔀 Related principles
- **KISS Principle**: YAGNI complements the KISS principle by emphasizing the importance of simplicity and avoiding unnecessary complexity. 🤫
- **Don't Repeat Yourself**: YAGNI complements DRY by encouraging developers to avoid duplicating code that is not currently needed. 🔄
- **SOLID Principles**: The Single Responsibility Principle (SRP) and the Interface Segregation Principle (ISP) align with YAGNI by encouraging focused and minimalistic code design. 🎯
- **Behavior-Driven Development**: YAGNI aligns with BDD's focus on developing code based on the currently required behavior and avoiding speculative features. 🌟