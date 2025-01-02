---
tags: ['Best Practices']

draft: false

title: DRY vs WET vs AHA Principles Comparison for Web Development
summary: Explore the comparison of the DRY (Don't Repeat Yourself), WET (Write Everything Twice), and AHA (Avoid Hasty Abstractions) principles in web development.
date: 2023-06-24
images: ['/thumbnails/dry-vs-wet-vs-aha-principles-comparison-for-web-development.png']
---

## Introduction

Efficiency and maintainability are crucial for web developers. The [**DRY (Don't Repeat Yourself)**](/blog/dont-repeat-yourself-dry), [**Write Everything Twice (WET)**](/blog/write-everything-twice-wet), and [**AHA (Avoid Hasty Abstractions)**](/blog/avoid-hasty-abstractions-aha) approaches offer different perspectives on achieving these goals. Let's explore each approach and gain insights into their strengths and weaknesses.

## DRY (Don't Repeat Yourself) Approach 👥

The DRY principle advocates for **code reuse and maintaining a single source of truth**. By avoiding code duplication, developers can reduce maintenance efforts and enhance consistency throughout the project. **The DRY approach promotes modularization and encourages the use of functions, classes, and libraries.**

When implementing the DRY approach, developers should focus on identifying repetitive patterns and extracting reusable components. Utilizing functions and libraries not only saves time but also ensures changes propagate consistently across the codebase.

```tsx
import React from 'react'

interface Props {
  name: string
}

const Greeting: React.FC<Props> = ({ name }) => {
  return <h1>Hello, {name}!</h1>
}

export default Greeting
```

In this example, the `Greeting` component accepts a `name` prop and renders a greeting message. By extracting this component, we can reuse it across multiple parts of our application, promoting code reusability and maintaining a single source of truth.

## WET (Write Everything Twice) Approach ✍️

Contrary to the DRY approach, the WET approach **emphasizes explicitness and independence**. While it may seem counterintuitive, the WET approach suggests that **duplicating code can enhance clarity and reduce unexpected side effects**. Writing simple code may be advantageous for small-scale projects or scenarios with unique requirements.

However, caution must be exercised when using the WET approach. Duplicated code increases maintenance efforts. Furthermore, code updates require modifications in multiple places, leading to potential errors.

An example of duplication being the recommended approach is TailwindCSS classes. They advocate against abstracting groups of classes because they are easier to maintain with the IDE tools. Check out their documentation on reusing styles https://tailwindcss.com/docs/reusing-styles.

```tsx
import React from 'react'

const Greeting: React.FC = () => {
  const name = 'John Doe'

  return <h1>Hello, {name}!</h1>
}

export default Greeting
```

In this example, the `name` variable is hardcoded within the component. While it simplifies the code, it limits the flexibility to change the name dynamically. If the name needs to be modified in multiple instances, it becomes tedious and error-prone.

## AHA (Avoid Hasty Abstractions) Approach 🤔

The AHA approach encourages coders to **strike a balance between the DRY and WET approaches**. It promotes caution when abstracting code too early because **premature abstractions can lead to unnecessary complexity and decreased readability**. The AHA approach encourages developers to evaluate the context and prioritize simplicity and clarity. Kudos to Kent C. Dodds for [coming up with this](https://kentcdodds.com/blog/aha-programming).

By avoiding hasty abstractions, developers can focus on solving the immediate problem effectively.

```tsx
import React from 'react'

const Greeting: React.FC = () => {
  const name = 'John Doe'

  return <h1>Hello, {name}!</h1>
}

export default Greeting
```

As the project evolves and patterns emerge, selective abstractions can be introduced, keeping the codebase maintainable while avoiding unnecessary overhead.

```tsx
import React from 'react'

interface Props {
  name: string
}

const Greeting: React.FC<Props> = ({ name }) => {
  const greet = (name: string) => {
    return <h1>Hello, {name}!</h1>
  }

  return greet(name)
}

export default Greeting
```

## Conclusion

The DRY, WET, and AHA approaches offer distinct perspectives on achieving code efficiency and maintainability. The DRY approach promotes code reuse and consistency, while the WET approach prioritizes clarity and independence. On the other hand, the AHA approach advocates for the correct abstractions at the right moment.

As a web developer, understanding these approaches and their implications will enable you to make informed decisions. Consider the requirements of your project and strike a balance between code reuse, clarity, and simplicity.
