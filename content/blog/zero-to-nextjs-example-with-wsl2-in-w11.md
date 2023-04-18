---
title: Zero to Next.js Example with WSL2 in W11
sidebar_position: 6
date: 2022-04-16
description: How to set up your web development environment with WSL2 in Windows 11 to run a Next.js example.
slug: zero-to-nextjs-example-with-wsl2-in-w11
page_id: c99c1755-6cb1-4273-90ad-68a75bdf9987
---

## Set up a development environment with

- VS Code
- An Ubuntu distribution in WSL2
- Node Version Manager (Node and npm)
- Windows Terminal
- A Next.js example

### Windows Requirements

This tutorial was created in Windows 11 but you can use any of the following Windows versions: - Windows 10 version 2004 and higher (Build 19041 and higher) - Windows 11

## VS Code

### Download and install

Simply download it from the [official site](https://code.visualstudio.com/download) and follow the install instructions.

### Remote - WSL extension

You’ll also need to install the [Remote-WSL extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) for a future step.

To install an extension open the extension panel with `ctrl+shift+X`. Search `Remote - WSL` and hit install.

## Windows Terminal

Windows Terminal is a modern host application for the command-line shell. Basically, it allows you to run commands in Windows. Open the Terminal by typing `Terminal` in the search bar.

## WSL2

### Why WSL2?s

The Windows subsystem for Linux has the following advantages: - You get the hardware support of Windows and the software flexibility of Linux. - The integration between Windows and Linux is impressive. Very few steps are required to set it up. - It has great performance to run web applications. - Most servers run Linux and you want to develop and test in a similar system. - It keeps your host OS clean. You’ll install most development dependencies in the WSL2 environment.

### Install an Ubuntu distribution with WSL

To install an Ubuntu distribution in WSL2 simply run the following command in PowerShell.

```text
wsl --install
```

For additional resources check [this website](https://docs.microsoft.com/en-us/windows/wsl/install).

![Instal WSL](/images/docs/1089865260.png)

After a few minutes, you should be able to open it in a new Terminal tab. **You will need to do a few setup steps the first time you run your WSL2 Ubuntu distribution, just follow the instructions that appear in the Ubuntu bash tab.**

![Open Ubuntu from terminal](/images/docs/2038276324.gif)

### Set up NVM in Ubuntu

Now paste the following commands in the Ubuntu bash tab and that should set up Node with its version manager.

```text
sudo apt update
sudo apt upgrade -y

## Install nvm and node
## nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

## node
nvm install --lts
```

## Run a Next.js application

Let’s run a Next.js application to verify that everything is working and get a Next.js project started at the same time.

### Create Next App

Since this is a new setup, you’ll need to install `create-next-app` package, but just trying to use it for the first time will run the installation as well. Create a new application and name it `blog-app` by running the following line.

```text
npx create-next-app@latest blog-app
```

You should see something like this once it’s done.

![Create next app usage](/images/docs/2088943018.png)

### Open with VS Code

Now we can open this with VS Code and close the circle. Let’s tell VS Code to open the `blog-app` folder. This will install VS Code remote server and it will also open the folder directly in VS Code in Windows.

```text
code blog-app
```

The result should look like the following screenshot. Note the `WSL:Ubuntu` at the bottom left corner indicating that VS Code is connected to that WSL distribution.

![Blog app in VS Code](/images/docs/14215319.png)

### Running the app

You can now use VS Code terminal instead of the Windows terminal. To open the VS Code terminal use `ctrl+``.

First, install the dependencies

```text
npm i
```

Then, run the server

```text
npm run dev
```

Your VS Code terminal should indicate that the application is running now.

![App started in VS Code](/images/docs/1208757097.png)

Your application should have started in http://localhost:3000/ in Windows now and you should be able to access it with any browser.

![App running in browser](/images/docs/697954683.png)

## Conclusion

This is a tutorial that set up many different tools. From Windows to Linux through VS Code and with the Terminal. You end up with a Next.js blog application from one of the hottest frameworks at the moment and with a clean setup to create other applications.

If you want to keep learning Next.js you can use the tools from this post to try one of the [many official examples](https://nextjs.org/examples).
