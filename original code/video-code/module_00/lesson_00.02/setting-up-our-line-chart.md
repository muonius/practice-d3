---
title: "Setting up our line chart"
description: We learn how to set up our chart - accessor functions are crucial for easy changes, documentation, and framing.
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/taf0vyoe49
isPublicLesson: true
---

# Setting up our line chart

<CodeSandboxEmbed
  src="//codesandbox.io/s/diszw?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

Let's dig in by looking at `temperatureMax` over time. Our timeline will have two axes:

- a y axis (vertical) on the left comprised of max temperature values
- an x axis (horizontal) on the bottom comprised of dates

To grab the correct metrics from each data point, we'll need _accessor_ functions. **Accessor functions convert a single data point into the metric value.**

Lets try it out by creating a `yAccessor` function that will take a data point and return the max temperature.

A>If you think of a **dataset** as a table, a **data point** would be a row in that table. In this case, a **data point** represents an item in our `dataset` array: an object that holds the weather data for one day.

We will use `yAccessor` for plotting points on the y axis.

Looking at the data point in our console, we can see that a day's max temperature is located on the object's `temperatureMax` key. To access this value, our `yAccessor` function looks like this:

{lang=javascript,crop-query=.yAccessor}
<<[code/01-making-your-first-chart/completed/chart.js](./protected/code/01-making-your-first-chart/completed/chart.js)

Next, we'll need an `xAccessor` function that will return a point's date, which we will use for plotting points on the x axis.

```javascript
const xAccessor = d => d.date
```

But look closer at the data point `date` value - notice that it is a _string_ (eg. `"2018-12-25"`). Unfortunately, this string won't make sense on our x axis. How could we know how far `"2018-12-25"` is from `"2018-12-29"`?.

**We need to convert the string into a JavaScript Date**, which is an object that represents a single point in time. Thankfully, d3 has a [**d3-time-format**](https://github.com/d3/d3-time-format) module with methods for parsing and formatting dates.

The `d3.timeParse()` method...

- takes a string specifying a date format, and
- outputs a function that will parse dates of that format.

For example, `d3.timeParse("%Y")` will parse a string with just a year (eg. `"2018"`).

Let's create a date parser function and use it to transform our date strings into date objects:

{lang=javascript,crop-query=.dateParser-.xAccessor}
<<[code/01-making-your-first-chart/completed/chart.js](./protected/code/01-making-your-first-chart/completed/chart.js)

Great! Now when we call `xAccessor(dataset[0])`, we'll get the first day's date.

A>If you look up d3 examples, you won't necessarily see accessor functions used. When I first started learning d3, I never thought about using them. Since then, I've learned my lesson and paid the price of painstakingly picking through old code and updating individual lines. I want to save you that time so you can spend it making even more wonderful charts.

Defining accessor functions might seem like unnecessary overhead right now, especially with this simple example. However, creating a separate function to read the values from our data points helps us in a few ways.

- **Easy changes**: every chart is likely to change at least once — whether that change is due to business requirements, design, or data structure. These changing requirements are especially prevalent when creating dashboards with dynamic data, where you might need to handle a new edge case two months later. Having the accessor functions in one place at the top of a chart file makes them easy to update throughout the chart.
- **Documentation**: having these functions at the top of a file can give you a quick reminder of what metrics the chart is plotting and the structure of the data.
- **Framing**: sitting down with the data and planning what metrics we'll need to access is a great way to start making a chart. It's tempting to rush in, then two hours later realize that another type of chart would be better suited to the data.

Now that we know how to access our dataset, we need to **prepare to draw our chart**.

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/c1gk7?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>