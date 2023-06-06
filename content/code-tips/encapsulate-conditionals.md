---
title: Encapsulate conditionals
sidebar_position: 21
date: 2023-06-06
description: Encapsulate the expressions used in conditionals and use the new function name to indicate their intent. Boolean logic is easier to understand if it’s read in isolation.
category: General
slug: encapsulate-conditionals
---

## Usage
### 📝 Guideline
**Encapsulate Conditionals**: Encapsulate the expressions used in conditionals and use the new function name to indicate their intent. Boolean logic is easier to understand if it's read in isolation.

Encapsulating conditionals means extracting the condition into a well-named function, making the code more readable and self-explanatory. By doing so, you improve the maintainability and understandability of the codebase.

### 🛠️ How to apply
- **Extract Expressions**: Identify complex Boolean expressions within conditionals and extract them into separate functions or variables.💡
- **Use Meaningful Function Names**: Choose function names that clearly convey the purpose and intent of the condition. This helps other developers understand the logic without needing to read the implementation details. 🧐
- **Use Extracted Functions**: Replace the original expression in the conditional with a function call to the newly created function. 🔄

## Pros and Cons

### 👍 Pros
- **Improved Readability**: Encapsulating conditionals into well-named functions enhances code readability, making it easier for developers to understand the intent of the logic. 📖
- **Simplified Logic**: Breaking down complex conditionals into smaller, encapsulated functions simplifies the code, reducing cognitive load and improving maintainability. 🚀
- **Easier Maintenance**: By isolating Boolean expressions, it becomes easier to modify or update the logic without impacting the surrounding code. 🔧

### 👎 Cons
- **Increased Function Count**: Encapsulating conditionals may lead to an increase in the number of functions in the codebase and this can introduce additional complexity if not managed properly. ⚙️
- **Potential Performance Impact**: Depending on the implementation, introducing function calls for encapsulated conditionals might impact performance, although the impact is usually negligible. ⏱
- **Increase Indirection**: The use of encapsulated conditionals may introduce indirection, requiring developers to navigate through multiple layers of function calls to understand the underlying logic. 🔗

## Examples

### ❌ Bad
```typescript
if (user.role === 'ADMIN' && user.status === 'ACTIVE' && user.permissions.includes('MANAGE_USERS')) {
  // Perform administrative tasks
  // ...
}
```

### ✅ Good
```typescript
function isAdminWithManageUsersPermission(user) {
  return user.role === 'ADMIN' && user.status === 'ACTIVE' && user.permissions.includes('MANAGE_USERS');
}

if (isAdminWithManageUsersPermission(user)) {
  // Perform administrative tasks
  // ...
}
```

## References

### 🔀 Related principles
- **Keep Functions Small**: Encapsulating conditionals aligns with the principle of keeping functions small, as it promotes the extraction of logic into smaller, more focused functions. 🏭
- **Single Responsibility Principle**: Encapsulating conditionals helps adhere to the Single Responsibility Principle by separating the logic into discrete functions, each with a single responsibility. 🎯
- **Separation of Concerns**: Encapsulating conditionals helps separate the logic of evaluating conditions from the actions triggered by those conditions. 🔗