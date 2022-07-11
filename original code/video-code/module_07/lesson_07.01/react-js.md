---
title: "React.js"
description: "We are introduced to React.js and learn a basic principle for combining d3 + React."
privateVideoUrl: https://fullstack.wistia.com/medias/ig7t51fsp5
---

# React.js

React.js is a framework for building declarative, module-based user interfaces. It helps you split your interface code into components, which each have a `render` function that describes the resulting DOM structure. One of React's greatest strengths is its diffing algorithm, which ensures minimal DOM updates, which are relatively expensive.

If you're unfamiliar with React, spend some time running through an introduction [like this one](https://reactjs.org/docs/hello-world.html). Our walkthrough will assume a basic understanding of the core concepts since we want to focus on the **d3 _and_ React** bits.

In this module, we'll write React components' render methods in JSX, which is an HTML-like syntax. We'll also be using **hooks**, which were released in the v16.8 release — don't worry about versioning here, we'll get all set up in a minute. **Hooks** are a way to use state and lifecycle methods without making a class component, and also help share code between components. We'll even use our own custom hook!

But wait a minute, it seems like React and d3 are both used to create elements and update the DOM. To draw a chart, should we use both of libraries? Just one? Neither?

Having just gotten comfortable with d3, you probably aren't going to like the answer. Instead of using axis generators and letting d3 draw elements, **we're going to let React handle the rendering and to use d3 as a (very powerful) utility library**. Let's build an example chart library and see for ourselves why this makes the most sense.

A>For a detailed run-down of the different d3.js modules and which ones are involved with common use cases, check out this [Intro to D3 blog post](https://wattenberger.com/blog/d3).