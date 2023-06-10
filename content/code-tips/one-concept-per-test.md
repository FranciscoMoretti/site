---
title: One concept per test
alias: Single Responsibility Principle of Unit Testing, One Assertion Per Test, Single Responsibility Principle of Testing, Single concept per test
sidebar_position: 25
date: 2023-06-10
description: The rule is really simple. The only thing you have to do is to choose a single concept to test in every unit test you write.
category: General
slug: one-concept-per-test
---

## Usage
### 📝 Guideline
**One concept per test**: Choose a single concept to test in every unit test you write.

Unit tests should focus on testing a single concept or behavior. Each test case should cover a specific aspect of the code and verify its correctness. By adhering to the "One concept per test" principle, you ensure that your tests are focused, independent, and provide clear feedback on the behavior of the code.

### 🛠️ How to Apply
- **Keep tests focused**: Write tests that target specific behaviors or features of the code. Avoid combining multiple concepts in a single test case. 🎯
- **Use descriptive test names**: Give each test case a clear and concise name that reflects the concept being tested. This helps in understanding the purpose of the test and makes it easier to identify failures. 📛
- **Small, independent tests**: Break down complex scenarios into smaller, independent tests that each focus on a specific concept. 🔍
- **Isolate dependencies**: Mock or stub any external dependencies to isolate the code under test and focus solely on the intended behavior. 🔌

## Pros and Cons

### 👍 Pros
- **Focused tests**: Each test case addresses a specific behavior, making it easier to locate and fix issues. 🎯
- **Easier debugging**: Isolating concepts in separate tests makes it easier to identify the source of failures.
- **Improved maintainability**: Tests that focus on a single concept are easier to understand, maintain, and update when requirements change. 🔧
- **Acts as a specification**: Each test case becomes a clear and concise specification of the expected behavior for the specific concept being tested. 📋

### 👎 Cons
- **Increased test count**: Having one concept per test may lead to a larger number of tests, which can require more time and effort to maintain. ⏰
- **Test execution overhead**: Running a larger number of tests might impact the overall test suite execution time. ⏱️
- **Potential code duplication**: Isolating concepts in separate tests may result in duplicating setup code across multiple tests.

## Examples

### ❌ Bad
```typescript
describe("MomentJS", () => {
  it("handles date boundaries", () => {
    let date

    date = new MomentJS("1/1/2015")
    date.addDays(30)
    assert.equal("1/31/2015", date)

    date = new MomentJS("2/1/2016")
    date.addDays(28)
    assert.equal("02/29/2016", date)
  })
})

```

### ✅ Good
```typescript
describe("MomentJS", () => {
  it("handles 30-day months", () => {
    const date = new MomentJS("1/1/2015")
    date.addDays(30)
    assert.equal("1/31/2015", date)
  })

  it("handles leap year", () => {
    const date = new MomentJS("2/1/2016")
    date.addDays(28)
    assert.equal("02/29/2016", date)
  })
})

```

## References

### 🔀 Related principles
- **Separation of Concerns**: One concept per test aligns with the principle of separating concerns and helps maintain a clear and concise codebase. 🧩
- **Test-Driven Development (TDD)**: TDD encourages writing tests before implementing functionality, making one concept per test an essential practice. 🔴
- **Behavior-driven development (BDD)**: BDD encourages writing tests that describe the desired behavior of the code, which naturally leads to testing one concept at a time. 📝
- **Arrange, Act, Assert (AAA)**: The AAA pattern in unit testing emphasizes the separation of test setup, execution, and verification, aligning with the "One concept per test" principle. 🎭