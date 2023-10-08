---
title: Function names should say what they do
sidebar_position: 7
date: 2023-05-26
description: Say what the function does with its name. The name should tell you what it expects as inputs as well.
category: Functions
slug: function-names-should-say-what-they-do
---

## Usage

### 📝 Guideline
**Function names should say what they do**: Name functions according to their purpose, indicating expected inputs.

Functions play a crucial role in clean code. One of the key aspects of writing clean code is ensuring that your function names clearly express their intended functionality. A function's name should provide a clear and concise description of what the function does, as well as indicate the expected inputs.

### 🛠️ How to Apply
- **Name Clarity**: Use clear and concise names that accurately describe the function's purpose. 🏷️
- **Action Verbs**: Include action verbs that indicate what the function does. 🏃‍♂️
- **Relevant Details**: Include relevant information in the function name, such as the expected inputs or the type of output. 🔖
- **Avoid Ambiguity**: Avoid using generic or ambiguous names that can cause confusion. ❌


## Pros and Cons

### 👍 Pros
- **Improved Code Readability**: Descriptive function names make it easier for developers to understand the purpose and behavior of the code. 📖
- **Self-Documentation**: Well-named functions act as self-documenting code, reducing the need for extensive comments and making the code easier to maintain. 📖
- **Enhanced Collaboration**: Clear function names facilitate effective communication among team members, leading to smoother collaboration and reduced misunderstandings. 🤝

### 👎 Cons
- **Long Names**: Sometimes, descriptive function names can become lengthy, impacting code aesthetics and requiring more effort to type. ⏰
- **Naming Ambiguity**: Choosing the right name may be challenging, as it requires a balance between being descriptive and concise. It is important to select a name that accurately represents the function's behavior. ❓

## Examples

### ❌ Bad
```typescript
  // Bad: Function name does not convey its purpose or expected inputs
  function addToDate(date, month) {
    // ...
  }
  const date = new Date()
  
  // Usage
  // It's hard to tell from the function name what is added
  addToDate(date, 1)
```

### ✅ Good
```typescript
  // Good: Function name clearly describes the purpose and expected inputs
  function addMonthToDate(month, date) {
    // ...
  }

  // Usage
  const date = new Date()
  addMonthToDate(1, date)
```

## References

### 🔀 Related Principles
- **Single Responsibility Principle**: Functions with clear and descriptive names align with the principle of having functions focused on a single task. 🎯
- **Use Self-Explanatory Variable Names**: Choose variable names that are self-explanatory and reflect their purpose. 🔄
- **Naming Conventions**: Follow established naming conventions within your programming language or framework. 📝
