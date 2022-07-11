---
title: "Making Your First Chart"
description: We dig in right away, starting with a timeline of temperature over time. First, we need to get our bearings.
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/x2of9azq89
isPublicLesson: true
---

# Making Your First Chart

Many courses begin by talking about theory and abstract concepts. This is not one of those courses!

We'll dig in and create real charts right away! Once you're comfortable making your own charts, we'll discuss how to add animations & interactions, data visualization fundamentals, and practical tips for chart design, along with other goodies.

# Course Downloads - Code and Book PDFs

I> This course has Codepens embedded throughout, so you don't need to download any files to go through it. However, if you want to download offline resources, you will find the links for these here:
I>
I> 👩‍💻 Download the complete set of code for this course [here](https://api.newline.co/assets/protected/courses/fullstack-d3-masterclass/downloads/course-full.zip)
I>
I> 📚 Download the [PDF](https://api.newline.co/assets/protected/courses/fullstack-d3-masterclass/downloads/book/advanced/fullstack-d3-book-current-advanced.pdf), [EPub](https://api.newline.co/assets/protected/courses/fullstack-d3-masterclass/downloads/book/advanced/fullstack-d3-book-current-advanced.epub), or [Mobi (Kindle)](https://api.newline.co/assets/protected/courses/fullstack-d3-masterclass/downloads/book/advanced/fullstack-d3-book-current-advanced.mobi) of the _Fullstack D3 Book_
I>
I> 💽 Download the [sample code for the _book_](https://api.newline.co/assets/protected/courses/fullstack-d3-masterclass/downloads/book/advanced/fullstack-d3-book-current-advanced-code.zip) (note that the book is slightly different than the course)
I>
I> 🎳 Join us over at the `#d3` channel in our Discord server - [here](https://newline.co/discord/d3).

# Getting started


To start, let's make a line chart. Line charts are a great starting place because of their popularity, but also because of their simplicity.

In this module, **we'll create a line chart that plots the daily temperature**. Here's what our line chart will look like when we're finished:

![Finished line graph](./public/images/1-making-your-first-chart/line-finished.png)

In the tutorial below, don't worry too much about the details! We're just going to get our hands dirty and write the code to build this line chart. This will give us a good foundation to dive deeper into each concept in Modules 2 and 3, in which we'll create more complex charts.

The dataset we'll be analyzing contains 365 days of daily weather metrics. To make it easy, we've provided a JSON file with this data which includes 2018 data for New York City.

Let's dig in!

<CodeSandboxEmbed
  src="//codesandbox.io/s/xq260?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/index.html"
  style={{width: '100%', height: '35em'}}
/>

Find the `index.html` file, this is a very simple webpage — we're rendering one element and loading one javascript file.

{lang=html,crop-start-line=7,crop-end-line=9}
<<[code/01-making-your-first-chart/completed/index.html](./protected/code/01-making-your-first-chart/completed/index.html)

The page should be blank except for one `div` with an `id` of `wrapper` — this is where our chart will live.

Our `index.html` file loads the javascript file in which we'll write our chart code: `chart.js`.

Let's open up the `chart.js` file in a code editor and dig in.

We don't have much text in here to start with.

```javascript
async function drawLineChart() {
    // write your code here

}

drawLineChart()
```

The only thing happening so far is that we're defining a function named `drawLineChart()` and running it..
