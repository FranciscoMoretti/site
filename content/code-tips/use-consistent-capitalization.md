---
alias: Consistent Capitalization, Uniform Capitalization, Standard Capitalization
category: Formatting

publish: true
slug: use-consistent-capitalization

title: Use consistent capitalization
description: Choose a capitalization style for variables, functions, and other identifiers, and adhere to it throughout your codebase. Consistency improves code readability.
date: 2023-06-27

---

## Usage
### 📝 Guideline
**Use consistent casing**: Choose a capitalization style for variables, functions, and other identifiers, and adhere to it throughout your codebase.

Capitalization rules in JavaScript are subjective. However, it's crucial to establish a consistent capitalization style within your team or project. Consistency improves code readability and reduces confusion.

### 🛠️ How to Apply
- **Choose a capitalization convention**: Decide whether to use camel case, Pascal case, or another convention for your variables, functions, and other code elements. Stick to the chosen convention throughout the project. 🐪
- **Document the chosen convention**: Clearly document the capitalization convention chosen by your team, so that everyone is aware of and follows the agreed-upon style. 📄
- **Automate capitalization checks**: Use linting tools or code formatters to automatically check and enforce consistent capitalization throughout the codebase. 🔍

## Pros and Cons

### 👍 Pros
- **Enhances code readability**: Consistent capitalization improves code readability and makes it easier for developers to understand and navigate the codebase. 👁️
- **Maintains code coherence**: By following a consistent capitalization style, the codebase maintains a cohesive and professional appearance. 🌟
- **Facilitates collaboration**: Team members can easily understand and navigate each other's code, leading to smoother collaboration and reduced chances of misunderstandings or errors. 🤝

### 👎 Cons
- **Subjective nature**: Capitalization rules in JavaScript are subjective, leading to potential differences of opinion within the team. ❓
- **Codebase integration**: Enforcing consistent capitalization across an existing codebase with varied capitalization styles can be time-consuming and may require refactoring efforts. ⏰

## Examples

### ❌ Bad
```typescript
let User_Name = "John Doe";

function Get_user_details() {
  // Code here
}

const my_Constant = 42;
```

### ✅ Good
```typescript
let userName = "John Doe";

function getUserDetails() {
  // Code here
}

const MY_CONSTANT = 42;
```

## References

### 🔀 Related principles
- **Naming conventions**: Consistent capitalization is closely related to naming conventions. 👥
- **Code readability**: Consistent capitalization is one aspect of maintaining code readability, which involves various practices to make code more understandable. 👁️