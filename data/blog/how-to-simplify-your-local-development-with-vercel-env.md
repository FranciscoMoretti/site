---
tags: ["Services", "CLI", "Tools"]


draft: false


title: Simple Management of Environment Variables with Vercel Env
summary: Simplify your local development with Vercel Env! Manage environment variables effortlessly and enhance your workflow with this powerful CLI tool.
date: 2023-05-10
images: ["/thumbnails/how-to-simplify-your-local-development-with-vercel-env.png"]

---

Are you tired of manually setting up environment variables every time you work on a local development project? Vercel has a solution for you! Using Vercel Env from Vercel CLI can save you time and trouble, allowing you to work more efficiently and happily.

## What is Vercel Env?

Vercel Env is a command-line interface (CLI) tool that makes it easy for you to manage environment variables in your local development environment. It enables you to export your project's environment variables to a local file, such as `.env`, that can be used by local development tools like `next dev`. You can also use `vercel env` to list, add, or remove environment variables from your Vercel project.

## Benefits of Using Vercel Env

- **Improves local development workflow:** Vercel Env simplifies your local development workflow, making it more efficient and enjoyable. With Vercel Env, you can easily manage your environment variables and focus on writing code.

- **Easy to use:** Vercel Env is easy to use, even if you're new to the command line. With just a few simple commands, you can list, add, or remove environment variables from your Vercel project.

## How to Use Vercel Env

### Install

Install the Vercel CLI by running the following command in your terminal:

```npm
npm i -g vercel
```

### Pull

Run the following command to export your project's environment variables to a local file:

```bash
vercel env pull <file>
```

This will export your project's environment variables to the specified file (e.g., `.env`).

### List

To list all environment variables in a Vercel project, run the following command:

```bash
vercel env ls
```

### Add

To add an environment variable to a Vercel project, run the following command:

```bash
vercel env add
```

### Remove

To remove an environment variable from a Vercel project, run the following command:

```bash
vercel env rm
```

You'll be prompted to enter the name and value of the environment variable you want to add or remove.

Note: After updating environment variables on Vercel (via the dashboard, `vercel env add`, or `vercel env rm`), run `vercel env pull <file>` again to get the updated values.

## Conclusion

In this blog post, we've explored the features and benefits of using the [Vercel CLI env](https://vercel.com/docs/cli/env) commands. If you're a modern web developer looking to simplify environment variable management during local development, `vercel env` is the perfect tool for you. Check out other blog posts on this site to learn more about other useful tools for modern web development. Happy coding!
