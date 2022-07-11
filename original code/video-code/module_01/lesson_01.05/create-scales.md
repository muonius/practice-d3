---
title: "Step 4: Create scales"
description: "The fourth step: creating our scales. We talk about scales in more depth, and learn about d3.extent() & .nice()."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/nbxcqq2nrr
---

# Create scales

<CodeSandboxEmbed
  src="//codesandbox.io/s/6cxoh?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

Before we draw our data, **we have to figure out how to convert numbers from the data domain to the pixel domain**.

Let's start with the x axis. We want to decide the **horizontal position** of each day's dot based on its **dew point**.

To find this position we use a **d3 scale object**, which helps us map our data to pixels. Let's create a scale that will take a dew point (temperature) and tell us _how far to the right_ a dot needs to be.

This will be a _linear_ scale because the input (dew point) and the output (pixels) will be numbers that increase linearly.

```javascript
const xScale = d3.scaleLinear()
```

### The concept behind scales

Remember, we need to tell our scale:

- what _inputs_ it will need to handle (**domain**), and
- what _outputs_ we want back (**range**).

For a simple example, let's pretend that the temperatures in our dataset range from 0 to 100 degrees.

In this case, converting from _temperature_ to _pixels_ is easy: a temperature of **50 degrees** maps to **50 pixels** because both **range** and **domain** are `[0,100]`.

But the relationship between our data and the pixel output is rarely so simple. What if our chart was 200 pixels wide? What if we have to handle negative temperatures?

Mapping between metric values and pixels is one of the areas in which d3 scales shine.

### Finding the extents

In order to create a scale, **we need to pick the smallest and largest values we will handle**. These numbers can be anything you want, but **the standard practice** is to **examine your data and extract the minimum and maximum values**. This way your chart will "automatically" scale according to the values in your dataset.

D3 has a helper function we can use here: `d3.extent()` that takes two parameters:

1. an array
2. an accessor function that extracts the metric value from a data point. If not specified, this defaults to an identity function `d => d`.

We'll pass `d3.extent()` our dataset and our `xAccessor()` function and get the min and max temperatures we need to handle (in `[min, max]` format).

{lang=javascript,crop-query=context(.xScale, 0, -1)}
<<[code/02-making-a-scatterplot/completed/chart.js](./protected/code/02-making-a-scatterplot/completed/chart.js)

This scale will create a perfectly useable chart, but we can make it slightly friendlier. With this x scale, our x axis will have a domain of `[11.8, 77.26]` — the exact min and max values from the dataset. The resulting chart will have dots that extend all the way to the left and right edges.

{width=50%}
![Finished scatterplot without nice scales](./public/images/2-making-a-scatterplot/scatterplot-not-nice.png)

While this works, it would be easier to read the axes if the first and last tick marks were round values. Note that d3 won't even label the top and bottom tick marks of an axis with a strange domain — it might be hard to reason about a chart that scales up to 77.26 degrees. That number of decimal points gives too much unnecessary information to the reader, making them do the next step of rounding the number to a more tangible one.

{width=50%}
![Finished scatterplot with nice scales](./public/images/2-making-a-scatterplot/scatterplot-finished.png)

d3 scales have a `.nice()` method that will round our scale's domain, giving our x axis friendlier bounds.

We can look at how `.nice()` modifies our x scale's domain by looking at the values before and after using `.nice()`. _Note that  calling `.domain()` without parameters on an existing scale will output the scale's existing domain instead of updating it._

```javascript
console.log(xScale.domain())
xScale.nice()
console.log(xScale.domain())
```

With the New York City dataset, the domain changes from `[11.8, 77.26]` to `[10, 80]` — much friendlier! Let's chain that method when we create our scale.

{lang=javascript,crop-query=.xScale}
<<[code/02-making-a-scatterplot/completed/chart.js](./protected/code/02-making-a-scatterplot/completed/chart.js)

Creating our y scale will be very similar to creating our x scale. The only differences are:

1. we'll be using our `yAccessor()` to grab the humidity values, and
2. we want to invert the range to make sure the axis runs bottom-to-top.

{lang=javascript,crop-query=.yScale}
<<[code/02-making-a-scatterplot/completed/chart.js](./protected/code/02-making-a-scatterplot/completed/chart.js)

If we were curious about how `.nice()` modifies our y scale, we could log those values.

```javascript
console.log(d3.extent(dataset, yAccessor))
console.log(yScale.domain())
```

In this case, the domain changed from `[0.27, 0.97]` to `[0.2, 1]`, which will create a  much friendlier chart.

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/fdzyy?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>