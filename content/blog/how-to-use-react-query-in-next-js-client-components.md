---
tag: Next.js, React
alias:

publish: true
slug: how-to-use-react-query-in-next-js-client-components

title: How to Use React Query in Next.js Client Components
description: Learn how to integrate React Query in Next.js client components to improve your apps. Use React Query to handle data fetching, mutations, and revalidation.

date: 2023-07-23
image: /thumbnails/how-to-use-react-query-in-next-js-client-components.png
thumbnail:
  - React
  - Query
  - Next.js
---

## What is React Query?

[React Query](https://tanstack.com/query/latest/docs/react/overview) is a powerful data fetching and caching library for [[react|React]]  applications. It simplifies the process of fetching and managing data from various sources, like APIs, databases, or serverless functions. By leveraging React Query, you can optimize your application's data fetching, reduce unnecessary network requests, and handle caching.


## Setting Up React Query in Next.js

### Installing the package

To start using React Query in your [[next-js|Next.js]] application, you first need to install the package. React Query can be easily installed via NPM:
```sh
npm i @tanstack/react-query
```

Ensure that your project meets the compatibility requirements.

React Query works with React versions 16.8 and above, and it is compatible with ReactDOM and React Native.

### ESLint Plugin Query

For a smoother development experience and to catch bugs and inconsistencies early on, we recommend using the ESLint Plugin Query. You can install it using the following NPM command:

```sh
npm i -D @tanstack/eslint-plugin-query
```


Once you have React Query and the ESLint Plugin Query installed, you're ready to dive into the exciting world of data fetching and caching with React Query in your Next.js application!

### Wrap Your Application in a Provider
In order to use React Query, you need to wrap your application in a context provider. You can do this in the root layout of your application. This allows all components within the context to access the React Query hooks and functionalities.

In Next.js 13, by default, all components are rendered on the server side. However, React Query doesn't work with Server Components, so we need to create a custom provider to render the `QueryClientProvider` within a Client Component.

The provider needs to be run in the client, that's why we use `"use client"` at the top. This configuration also includes [React Query Devtools](https://tanstack.com/query/latest/docs/react/devtools).

Install with
```sh
npm i @tanstack/react-query-devtools
```


```tsx title="app/react-query-provider"
"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


export function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}


```

And the root layout could look like this:

```tsx title="app/layout.tsx"
import { ReactQueryProvider } from './react-query-provider'
 
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
```


## Queries, Mutations and Query Invalidation
React Query has 3 main concepts: Queries, Mutations and Query Invalidation.  The main entry points for those are useQuery, useMutation and invalidateQueries, respectively. Let's explore the differences.

In React Query, you have two main hooks: `useQuery` and `useMutation`. Use `useQuery` for GET and optional DELETE requests, and use `useMutation` for most other types of requests, such as POST or PUT. On the other hand, `invalidateQueries` lets you mark queries as stale or re-fetch them.


## Learn how to work with Queries

### Adding Queries with useQuery

After setting up the context, you can start adding queries to your components. Simply use the `useQuery` hook in places where you want to fetch data. The best part is that you no longer need to `await` the query, as React Query handles the data fetching asynchronously.

```tsx
// You no longer need to await the query, as React Query handles the data fetching asynchronously.
import { useQuery } from 'react-query';

function MyComponent() {
  const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  
  // Rest of the code...
}

```


### Adding TypeScript Support

If you're using TypeScript, you can enhance type safety by annotating the response received from `useQuery` to a specific type. This helps you catch potential type-related bugs and ensures a more robust codebase.

To do this you can create a `queryFn`  with a well defined return type.

```tsx
const fetchGroups = (): Promise<Group[]> =>  axios.get('/groups').then((response) => response.data)

const { data } = useQuery({ queryKey: ['groups'], queryFn: fetchGroups })
//      ^? const data: Group[] | undefined
```



### Managing Query State with isLoading and isError

React Query provides two return variables, `isLoading` and `isError`, which you can use to manage the loading state and gracefully handle errors in your components. 

The `isLoading` variable is a boolean value that indicates whether the query is currently fetching data. It automatically updates based on the query's result, allowing you to track the loading state of your data. By using `isLoading`, you can display loading indicators or conditionally render components while waiting for data to arrive.

The `isError` variable is another boolean value that indicates whether an error occurred during the data fetch. If the query encounters an error, `isError` will be set to `true`. By checking the value of `isError`, you can implement error handling logic, display error messages, or take other appropriate actions to inform users about the issue.

```tsx
import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const function DataDisplay(){
  const { data, isLoading, isError } = useQuery('data', fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  // Render data using the 'data' object

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default DataDisplay;

```


### Refreshing Data with refetch 

React Query offers the option to manually trigger data refetching. You can use the `refetch` function to refresh the data.

```tsx
function YetAnotherComponent() {
  const { data, isLoading, isError, refetch } = useQuery('data', fetchData, {
    // Define the onError and onSuccess functions
    onError: (error) => {
      console.error('Error fetching data:', error);
    },
    onSuccess: (data) => {
      console.log('Data fetched successfully:', data);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h2>Data</h2>
      {/* Display the fetched data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>

      {/* Step 4: Refreshing Data with refetch */}
      <button onClick={() => refetch()}>Refresh Data</button>
    </div>
  );
}
```

### Customizing Query Behavior with onError and onSuccess

Besides the query function itself, you can further customize the query behavior using the `onError` and `onSuccess` options. These allow you to handle errors and perform specific actions after a successful data fetch.

```tsx
import { useQuery } from 'react-query';

interface UserData {
  id: number;
  name: string;
  email: string;
}

const fetchUserData = async (userId: number): Promise<UserData> => {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
};

const UserProfile = ({ userId }: { userId: number }) => {
  const { data, isLoading, isError } = useQuery<UserData, Error>(
    ['user', userId],
    () => fetchUserData(userId),
    {
      onError: (error: Error) => {
        // Custom error handling logic
        console.error('Error occurred:', error.message);
      },
      onSuccess: (data: UserData) => {
        // Custom success handling logic
        console.log('User data fetched successfully:', data);
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching user data.</div>;
  }

  // Render user profile data using the 'data' object

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default UserProfile;

```


## How to work with Mutations


When it comes to handling mutations, such as creating, updating, or deleting data, you can use the `useMutation` hook. It works similarly to `useQuery` but requires a mutation function instead of a query function.

### ### Initializing useMutation

To start using `useMutation`, first, import it from React Query and define your mutation function. The mutation function handles the logic for creating, updating, or deleting data on the server.
```tsx
import { useMutation } from 'react-query';

const createTodoMutation = async (newTodo: Todo) => {
  // Your logic to create a new todo on the server
  // For example, make a POST request to an API endpoint
};

const updateTodoMutation = async (updatedTodo: Todo) => {
  // Your logic to update an existing todo on the server
  // For example, make a PUT request to an API endpoint
};

```

### Using useMutation Hook

Next, utilize the `useMutation` hook in your component to execute the mutation. It returns an array with the mutation function and an object with the mutation status.
```tsx
const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');
  const mutation = useMutation(
	mutationFn: createTodoMutation, {
    onSuccess: () => {
      // Handle successful mutation, such as updating the UI or showing a success message
    },
    onError: (error) => {
      // Handle errors, display an error message, or perform fallback actions
    },
  });

  const handleCreateTodo = () => {
    // Call the mutation function with the newTodo object
    mutation.mutate({ title: newTodo, completed: false });
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleCreateTodo}>Add Todo</button>
    </div>
  );
};

```


### How to handle Mutation Status

The `useMutation` hook provides several properties to help you handle the mutation status. For instance, you can check if the mutation is loading, successful, or encountered an error.

A mutation can only be in one of the following states at any given moment:

- `isIdle` or `status === 'idle'` - The mutation is currently idle or in a fresh/reset state
- `isLoading` or `status === 'loading'` - The mutation is currently running
- `isError` or `status === 'error'` - The mutation encountered an error
- `isSuccess` or `status === 'success'` - The mutation was successful and mutation data is available

```typescript
const TodoForm = () => {
  // ... (previous code)

  return (
    <div>
      {/* Render loading state */}
      {mutation.isLoading && <p>Loading...</p>}

      {/* Render success message */}
      {mutation.isSuccess && <p>Todo added successfully!</p>}

      {/* Render error message */}
      {mutation.isError && <p>An error occurred while adding the todo.</p>}

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleCreateTodo}>Add Todo</button>
    </div>
  );
};
```

### How to do Optimistic Updates

To provide a seamless user experience, you can perform an optimistic update while the mutation is loading. This means updating the UI immediately and later handling the actual server response.

```typescript
const TodoList = () => {
  const mutation = useMutation(updateTodoMutation);

  const handleUpdateTodo = (todo: Todo) => {
    // Optimistically update the UI
    mutation.mutate({ ...todo, completed: !todo.completed }, {
      // If the server request fails, revert the optimistic update
      onError: (error) => mutation.rollback(),
    });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleUpdateTodo(todo)}
          />
        </li>
      ))}
    </ul>
  );
};
```


## How to Work with Query Invalidation

React Query provides a powerful method called `invalidateQueries`, which allows you to manually invalidate and refetch specific queries. This concept is called Query Invalidation. This comes in handy when you want to update the data in response to certain events or actions in your application. Let's explore how to use `invalidateQueries` with some code examples.

### Invalidating a Single Query

You can invalidate a single query by passing its query key to the `invalidateQueries` function. This triggers a refetch of the affected query, ensuring the data is up-to-date.

```typescript
// Example: Invalidate a single query
import { useMutation, useQueryClient } from 'react-query';

const deletePostMutation = useMutation(deletePost, {
  onSuccess: () => {
    // Invalidate the 'posts' query to update the post list
    const queryClient = useQueryClient();
    queryClient.invalidateQueries('posts');
  },
});

const handleDeletePost = (postId: number) => {
  // Call the deletePost mutation
  deletePostMutation.mutate(postId);
};
```

### Invalidating Multiple Queries

You can also invalidate multiple queries simultaneously by passing an array of query keys to the `invalidateQueries` function. This is useful when one action affects multiple queries in your application.

```typescript
// Example: Invalidate multiple queries
import { useMutation, useQueryClient } from 'react-query';

const updatePostMutation = useMutation(updatePost, {
  onSuccess: () => {
    // Invalidate both 'posts' and 'postDetails' queries
    const queryClient = useQueryClient();
    queryClient.invalidateQueries(['posts', 'postDetails']);
  },
});

const handleUpdatePost = (postId: number, updatedData: any) => {
  // Call the updatePost mutation
  updatePostMutation.mutate({ postId, updatedData });
};
```

### Conditional Invalidation

You can add conditions to control when to trigger the invalidation of queries. For instance, you might want to invalidate a query only if certain data meets specific criteria.

```typescript
// Example: Conditional invalidation
import { useMutation, useQueryClient } from 'react-query';

const updateCommentMutation = useMutation(updateComment, {
  onSuccess: (updatedComment) => {
    if (updatedComment.isApproved) {
      // Invalidate the 'approvedComments' query
      const queryClient = useQueryClient();
      queryClient.invalidateQueries('approvedComments');
    }
  },
});

const handleUpdateComment = (commentId: number, updatedData: any) => {
  // Call the updateComment mutation
  updateCommentMutation.mutate({ commentId, updatedData });
};
```

### Invalidating Queries with invalidateQueries Function

Apart from using the `useQueryClient` hook, you can also use the `invalidateQueries` function directly. This is helpful when you need to perform invalidation outside of React components or in utility functions.

```typescript
// Example: Invalidating queries with 'invalidateQueries' function
import { invalidateQueries } from 'react-query';

const handleUserLogout = () => {
  // Perform the logout logic
  logoutUser();

  // Invalidate all queries to clear user-related data
  invalidateQueries();
};
```

Using `invalidateQueries`, you have fine-grained control over data refetching in your React Query-powered Next.js application. Whether it's a single query or multiple queries, you can keep your data fresh and up-to-date with ease.




## Conclusion

In conclusion, React Query is my a library for client-side data management in Next.js applications (and React). With `useQuery`, `useMutation`, and the flexible `invalidateQueries` function, developers can efficiently handle data fetching and mutations with ease. React Query ensures optimized performance, a robust solution and a great user experience. Happy Coding! 🚀
