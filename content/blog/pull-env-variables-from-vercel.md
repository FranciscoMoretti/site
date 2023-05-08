---
tag: Vercel, CLI
alias: 

publish: true
slug: pull-env-variables-from-vercel

title: Pull ENV variables from Vercel
description: Pull the ENV variables from a Vercel project using the CLI.
date: 2022-04-18
image: 

page_id: 718ecd49-9be2-403b-b1ec-d5784c38f1b5
---

## Pull the ENV variables from a Vercel project using the CLI

I used to copy-paste my ENV variables from the hosting. More often than not a tiny error caused the whole application to fail, especially when working with keys.

Today I’ve learned that [Vercel](https://vercel.com/) CLI allows you to pull all the ENV variables from your project. I’ll never fill that file manually again!

## How to do it

I’ll show you how to do it by sharing the steps I’ve applied to a new project I’m working on called `cheese-store`.

### Install the Vercel CLI globally

Vercel is my main hosting solution for new projects, so I just installed the CLI globally.

```shell
npm i -g vercel
```

### Link to your repository

Simply run `vercel link` and follow the steps from the CLI to link your local repository with your vercel project. This is what the output looked like for me.

```shell
>> fran@tpx1:~/code/cheese-store$ vercel linkVercel CLI 24.1.0> > No existing credentials found. Please log in:> Log in to Vercel github> Success! GitHub authentication complete for your_mail_address@mail_provider.com? Set up “~/code/cheese-store”? [Y/n] y? Which scope should contain your project? Francisco Moretti? Found project “franciscomoretti/cheese-store”. Link to it? [Y/n] y✅  Linked to franciscomoretti/cheese-store (created .vercel)
```

### Pull the ENV variables

Now that Vercel is linked you can download the ENV variables just by running `vercel env pull`.

```shell
>> fran@tpx1:~/code/cheese-store$ vercel env pullVercel CLI 24.1.0Downloading Development Environment Variables for Project cheese-store✅  Created .env file [492ms]
```

You can also add a new variable with another commands. Check the documentation for [Vercel CLI env](https://vercel.com/docs/cli#commands/env).

### The result

And just like that, all the environment variables were created and completed in my local repository. Pretty cool, right?

![ENV variables in the local file](/assets/docs/468490004.png)
