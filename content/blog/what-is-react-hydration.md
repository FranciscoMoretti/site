---
tag: React
alias:

publish: true
slug: what-is-react-hydration

title: What is React Hydration?
description: Discover the process of React hydration and how it connects server-rendered HTML with client-side JavaScript to enhance web interactivity.
date: 2024-04-30
image: /thumbnails/what-is-react-hydration.png
thumbnail:
  - React
  - Hydration
  - Explained
---

## Understanding React Hydration

React hydration is the process of taking a server-rendered HTML page and connecting the client-side JavaScript to it, adding interactivity and application state. Here's a step-by-step explanation:

1. **Server-side Rendering:** Server-side rendering involves generating the initial HTML content for the web page using React. This HTML is static and lacks interactivity.

2. **Sending HTML to the Client:** The server sends the pre-rendered HTML to the client's web browser.

3. **Hydration on the Client:** When the client receives the HTML, React's hydration process kicks in. The `hydrateRoot()` function is used to "hydrate" the static HTML by attaching event listeners, state, and other interactivity to the existing DOM elements.

4. **Reusing the Existing DOM:** During hydration, React tries to reuse the existing DOM nodes instead of creating new ones. It compares the server-rendered HTML with the virtual DOM and updates only the necessary parts.
5. **Interactivity:** After hydration, the web page becomes interactive. Users can now trigger events, update the UI, and interact with the application just like a traditional client-side rendered React app.


![React Hydration](assets/react_hydration.png)


## Improved Performance

Hydration allows for faster initial load times compared to a traditional client-side rendered app, as the server has already generated the initial HTML. The client-side JavaScript then enhances the experience by adding interactivity.

In summary, React hydration is the process of transforming a static, server-rendered HTML page into an interactive, client-side rendered React application, seamlessly connecting the two environments for a better user experience.
