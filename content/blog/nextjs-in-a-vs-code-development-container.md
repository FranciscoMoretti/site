---
tag: Next.js, VSCode, Docker
alias:

publish: true
slug: nextjs-in-a-vs-code-development-container

title: Next.js in a VS Code development container
description: A simple and minimalistic template to develop your Next.js application in a VS Code development container.
date: 2021-06-11
image:
---

# Next.js in a VS Code development container

A simple and minimalistic template to develop your Next.js application in a VS Code development container. Use Next.js with the portability of docker and the comfort of VS Code in just a few steps.

## Features

- Node + Typescript
- Docker
- Git
- Fast Refresh

## Pre-requisites

1. [Set up git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) in your host machine with the [credentials manager core](https://github.com/microsoft/Git-Credential-Manager-Core). The credentials manager will let you use the git credentials from your host machine inside the container without any extra step.

## Steps

1. Build and Activate the [Development Container](https://code.visualstudio.com/docs/remote/containers).
   1. Follow the VS Code containers [Getting Started Guide](https://code.visualstudio.com/docs/remote/containers#_getting-started).
   2. Open the repository folder in a container by following [these steps](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-an-existing-folder-in-a-container).
2. Setup your Next.js application by using one of these two options
   - **Option 1:** Follow the tutorial to [Create a Next.js App](https://nextjs.org/learn/basics/create-nextjs-app) `bash npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"`
   - **Option 2:** Add your Next.js project as a [Git Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) `git submodule add https://github.com/cassidoo/next-netlify-starter.git`
3. Go to the newly created directory to run `npm` commands. Just replace `your_project_folder` with the name folder name of the project you just added.

   ```bash
   cd `your_project_folder`
   ```

4. Run the development server

   ```npm
   npm run dev
   ```

## Usage example

![Usage Example](/assets/docs/53866313.gif)

## Code

**Check the** [**Github repository**](https://github.com/FranciscoMoretti/nextjs-devcontainer)
