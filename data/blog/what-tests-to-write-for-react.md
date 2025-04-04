---
title: What tests to write for React
draft: false
tags: ['Testing', 'React', 'Best Practices']
date: 2025-04-04
summary: Learn which tests actually matter for React development. From static tests to end-to-end testing, we'll explore the Testing Trophy approach and why integration tests deserve the spotlight.
slug: what-tests-to-write-for-web-development
images: ['/thumbnails/what-tests-to-write-for-react.png']
---

This article explores what tests you should be writing for your web applications. Inspired by Igor Luchenkov's insightful talk at React Advanced London and drawing on wisdom from industry experts, we'll look at how testing strategies have evolved from the classic Test Pyramid to the more nuanced Testing Trophy approach.

## The evolution of testing strategies

For years, the dominant testing strategy in software development was **Martin Fowler's Test Pyramid**. This model suggested having many unit tests at the bottom, fewer integration tests in the middle, and even fewer end-to-end tests at the top.

![Testing Pyramid](/assets/testing_pyramid.jpg)

The pyramid made sense when it was created. Back then, running tests through a UI was painfully slow, expensive to set up, and notoriously brittle. A small change in the UI could break dozens of tests, requiring hours of maintenance.

But times have changed. Modern testing tools have evolved dramatically, making some of the pyramid's assumptions outdated. This led **Kent C. Dodds to propose an updated model - the Testing Trophy**.

Inspired by Guillermo Rauch's tweet:

> "**Write tests. Not too many. Mostly integration.**"

The trophy flips the script by placing **integration tests as the largest, most important section**. It also adds a new foundation: static tests. This shift reflects how testing tools and web development have evolved in recent years.

## Understanding the Testing Trophy

The Testing Trophy consists of four distinct layers:

![Testing Trophy showing the four types of tests](/assets/testing_throphy.jpg)

### Static (The Base)

These aren't traditional tests that run your code. Instead, they check your code without executing it. **TypeScript, ESLint, and Biome** fall into this category. They catch typos, type errors, and enforce coding standards with minimal effort.

### Unit (The Small Base)

Unit tests verify that individual functions work correctly in isolation. They're fast and focused but don't tell you if your components work well together.

### Integration (The Trophy Cup)

This is the **largest section of the trophy for good reason**. Integration tests verify that multiple units work together correctly. In web development, this often means testing how components interact without mocking every dependency.

### End-to-End (The Top)

These comprehensive tests simulate real user behavior, often through a browser. They're the most confidence-inspiring but also the slowest and most complex to maintain.

## Why integration tests deserve the spotlight

In 2016, Guillermo Rauch (creator of Socket.io and founder of Vercel) tweeted a simple yet profound message:

> "**Write tests. Not too many. Mostly integration.**"

This wasn't just a catchy phrase - it's solid advice backed by practical experience. Integration tests strike the perfect balance between confidence and cost.

Unit tests are quick to write and run, but they don't tell you if your components actually work together. End-to-end tests give you the most confidence but are slow and high-maintenance. Integration tests hit the sweet spot:

- They provide **high confidence that your features work**
- They run reasonably fast
- They're **more resilient to refactoring than unit tests**
- They catch real issues that users might encounter

Kent C. Dodds put it brilliantly when he said: "**The more your tests resemble the way your software is used, the more confidence they can give you.**"

Integration tests mirror how users actually experience your software better than isolated unit tests, making them more valuable for the time invested.

## Small examples of each test type

### Static Tests

```typescript
// TypeScript will catch this error without running any code
function addNumbers(a: number, b: number): number {
  return a + b
}

addNumbers('5', 10) // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

ESLint rules can catch potential bugs:

```javascript
// ESLint no-unused-vars rule
function calculateTotal(subtotal, tax) {
  const total = subtotal + tax
  // Error: 'total' is assigned a value but never used
}
```

### Unit Tests

Using Vitest to test a simple utility function:

```javascript
// utils.js
export function formatPrice(amount) {
  return `$${amount.toFixed(2)}`
}

// utils.test.js
import { test, expect } from 'vitest'
import { formatPrice } from './utils'

test('formats the price with dollar sign and two decimal places', () => {
  expect(formatPrice(10)).toBe('$10.00')
  expect(formatPrice(10.5)).toBe('$10.50')
})
```

### Integration Tests

Testing a form component with React Testing Library:

```javascript
// LoginForm.test.jsx
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from './LoginForm'

test('submits the form with user credentials', async () => {
  const handleSubmit = vi.fn()
  render(<LoginForm onSubmit={handleSubmit} />)

  await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com')
  await userEvent.type(screen.getByLabelText(/password/i), 'password123')
  await userEvent.click(screen.getByRole('button', { name: /log in/i }))

  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'user@example.com',
    password: 'password123',
  })
})
```

### End-to-End Tests

Using Playwright to test the login flow:

```javascript
// login.spec.js
import { test, expect } from '@playwright/test'

test('user can log in', async ({ page }) => {
  await page.goto('/login')

  await page.fill('input[name="email"]', 'user@example.com')
  await page.fill('input[name="password"]', 'password123')
  await page.click('button[type="submit"]')

  // Verify user was redirected to dashboard
  await expect(page).toURL('/dashboard')
  await expect(page.locator('h1')).toContainText('Welcome back')
})
```

## Recommended Frameworks for each test type

### Static Testing

- **TypeScript**: Adds type-checking to JavaScript
- **ESLint**: Identifies problematic patterns
- **Biome**: Modern linter and formatter

### Unit Testing

- **Vitest**: Fast unit test runner with great React support

### Integration Testing

- **Vitest**: Fast unit test runner with great React support
- **Storybook**: Component workshop for visual testing and development

### End-to-End Testing

- **Playwright**: Modern E2E testing tool with cross-browser support

## Balancing your test portfolio for maximum value

While the Testing Trophy offers a good template, your ideal test mix depends on your project. Consider these factors when deciding:

1. **Application complexity**: More complex apps need more integration and E2E tests
2. **Team size**: Larger teams benefit from more tests as communication overhead increases
3. **Stability requirements**: Critical systems need more test coverage
4. **Development phase**: Early-stage products might focus on fewer, high-value tests

Remember these practical tips:

- **Start with static type checking and linting** - they're the cheapest way to catch errors
- **Don't aim for 100% test coverage**; it often leads to testing implementation details
- **Focus on user workflows** rather than implementation details
- **If a test is hard to write, it might be telling you something about your code design**

By following the Testing Trophy approach and adjusting for your specific needs, you'll build a test suite that gives you confidence without slowing down development.
