---
tags: ['React']

draft: false

title: useState vs useRef - When to use state and when to use ref
summary: Learn the differences between useState and useRef in React for state management and persisting values without re-renders.
date: 2024-05-21
images: ['/thumbnails/usestate-vs-useref.png']
---

## What is useState?

`useState` is a React hook used for managing state in functional components. It allows you to add state to your components, making them dynamic and interactive.

### Key Features of useState

- **State Management:** `useState` helps manage state within a component.
- **Re-renders on Change:** The component re-renders when the state changes.
- **Batched Updates:** React batches multiple state updates for performance.

### Example using useState

Here’s a simple counter that increments when a button is clicked.

```jsx
import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
```

In this example, `useState` initializes the count at 0 and updates it each time the button is clicked, causing the component to re-render.

## What is useRef?

`useRef` is another React hook, primarily used for accessing and manipulating DOM elements directly. It persists values between renders without causing re-renders.

### Key Features of useRef

- **DOM Reference:** Provides a way to reference and interact with DOM elements.
- **No Re-renders on Change:** Changing the ref value does not trigger a re-render.
- **Persistent Values:** Keeps the same object reference between renders.

### Example using useRef

Here’s an example where clicking a button focuses an input field.

```jsx
import React, { useRef } from 'react'

function FocusInput() {
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput
```

In this example, `useRef` creates a reference to the input element, allowing direct DOM manipulation to focus the input field when the button is clicked.

## useState vs useRef: A Comparison 🔍

Let's compare `useState` and `useRef` based on several aspects.

| Aspect              | useState                    | useRef                              |
| ------------------- | --------------------------- | ----------------------------------- |
| Purpose             | State management            | DOM reference                       |
| Return value        | Returns `[value, setValue]` | `{ current: initialValue }`         |
| Initial value       | Required                    | Optional                            |
| Re-render on change | Yes                         | No                                  |
| Mutablility         | Mutable                     | Immutable                           |
| Update trigger      | Function call               | Direct mutation of current          |
| Usage in rendering  | Yes                         | No                                  |
| Async updates       | Batched                     | Immediate                           |
| Hook type           | State hook                  | Ref hook                            |
| Common use case     | Managing component state    | Accessing/manipulating DOM elements |

### When to Use useState

- Managing dynamic values that impact the UI.
- Triggering re-renders to reflect state changes.

### When to Use useRef

- Accessing or modifying DOM elements directly.
- Storing mutable values that persist across renders without causing re-renders.

## Conclusion

Understanding the differences between `useState` and `useRef` is crucial for effective state management and DOM manipulation in React. Use `useState` when you need stateful logic that affects rendering. Use `useRef` for accessing DOM elements and persisting values without causing re-renders.
