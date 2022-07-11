---
title: "Creating our scales"
description: "We learn about scales and create our first ones: our y and x scales."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/fvxj4effee
---

# Creating our scales

<CodeSandboxEmbed
  src="//codesandbox.io/s/ctl1n?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

Let's get back to the data.

**On our y axis, we want to plot the max temperature for every day.**

Before we draw our chart, we need to decide what temperatures we want to visualize. Do we need to plot temperatures over 1,000°F or under 0°F? We could hard-code a standard set of temperatures, but that range could be too large (making the data hard to see), or it could be too small or offset (cutting off the data). Instead, let's use the actual range by finding the lowest and highest temperatures in our dataset.

A>We've all seen over-dramatized timelines with a huge drop, only to realize that the change is relatively small. When defining an axis, we'll often want to start at 0 to show scale. We'll go over this more when we talk about types of data.

As an example, let's grab a sample day's data — say it has a maximum temperature of 55°F. We _could_ draw our point 55 pixels above the bottom of the chart, but that won't scale with our `boundedHeight`.

Additionally, if our lowest temperature is below 0 we would have to plot that value below the chart! Our y axis wouldn't be able to handle all of our temperature values.

To plot the max temperature values in the correct spot, **we need to convert them into pixel space**.

d3's [**d3-scale**](https://github.com/d3/d3-scale) module can create different types of scales. A scale is **a function that converts values between two domains**.

For our y axis, we want to convert values from the **temperature domain** to the **pixel domain**. If our chart needs to handle temperatures from 10°F to 100°F, a day with a max of 55°F will be halfway up the y axis.

Let's create a scale that converts those degrees into a y value. If our y axis is 200px tall, the y scale should convert 55°F into 100, the halfway point on the y axis.

{width=50%}
![Our dataset](./public/images/1-making-your-first-chart/scale-temp-px.png)

[**d3-scale**](https://github.com/d3/d3-scale) can handle many different types of scales - in this case, we want to use `d3.scaleLinear()` because our y axis values will be numbers that increase linearly. To create a new scale, we need to create an instance of `d3.scaleLinear()`.

{lang=javascript,crop-query=context(.yScale, 0, -2)}
<<[code/01-making-your-first-chart/completed/chart.js](./protected/code/01-making-your-first-chart/completed/chart.js)

Our scale needs two pieces of information:

- the **domain**: the minimum and maximum input values
- the **range**: the minimum and maximum output values

Let's start with the **domain**. We'll need to create an array of the smallest and largest numbers our y axis will need to handle — in this case the lowest and highest max temperature in our dataset.

The [**d3-array**](https://github.com/d3/d3-array) module has a `d3.extent()` method for grabbing those numbers. `d3.extent()` takes two parameters:

1. an array of data points
2. an accessor function which defaults to an identity function (`d => d`)

Let's test this out by logging `d3.extent(dataset, yAccessor)` to the console. The output should be an array of two values: the minimum and maximum temperature in our dataset. Perfect!

Let's plug that into our scale's domain:

{lang=javascript,crop-query=context(.yScale, 0, -1)}
<<[code/01-making-your-first-chart/completed/chart.js](./protected/code/01-making-your-first-chart/completed/chart.js)

Next, we need to specify the **range**. As a reminder, the **range** is the highest and lowest number we want our scale to output — in this case, the maximum & minimum number of pixels our point will be from the x axis. We want to use our `boundedHeight` to stay within our margins. Remember, SVG y-values count from top to bottom so we want our range to start at the top.

{lang=javascript,crop-query=.yScale}
<<[code/01-making-your-first-chart/completed/chart.js](./protected/code/01-making-your-first-chart/completed/chart.js)

We just made our first scale function! Let's test it by logging some values to the console. At what y value is the freezing point on our chart?

```javascript
console.log(yScale(32))
```

The outputted number should tell us how far away the freezing point will be from the bottom of the y axis.

A>If this returns a negative number, congratulations! You live in a lovely, warm place. Try replacing it with a number that "feels like freezing" to you. Or highlight another temperature that's meaningful to you.

Let's visualize this threshold by adding a rectangle covering all temperatures below freezing. The SVG `<rect>` element can do exactly that. We just need to give it four attributes: `x`, `y`, `width`, and `height`.

T>For more information about SVG elements, the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element) are a wonderful resource: [here is the page for `<rect>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect).

{lang=javascript,crop-query=context(.freezingTemperaturePlacement-.freezingTemperatures, 0, -1)}
<<[code/01-making-your-first-chart/completed/chart.js](./protected/code/01-making-your-first-chart/completed/chart.js)

Now we can see a black rectangle spanning the width of our bounds.

![freezing point rectangle](./public/images/1-making-your-first-chart/freezing-temperatures.png)

Let's make it a frosty blue to connote "freezing" and decrease its visual importance. You can't style SVG elements with `background` or `border` — instead, we can use `fill` and `stroke` respectively. We'll discuss the differences later in more depth. As we can see, the default fill for SVG elements is black and the default stroke color is `none` with a width of 1px.

{lang=javascript,crop-query=context(.freezingTemperaturePlacement-.freezingTemperatures, -1, 0)}
<<[code/01-making-your-first-chart/completed/chart.js](./protected/code/01-making-your-first-chart/completed/chart.js)

Let's look at the rectangle in the **Elements** panel to see how the `.attr()` methods manipulated it.

```html
<rect
  x="0"
  width="1530"
  y="325.7509689922481"
  height="24.24903100775191"
  fill="rgb(224, 243, 243)"
></rect>
```

Looking good!

A>Some SVG styles can be set with either a CSS style or an attribute value, such as **fill**, **stroke**, and **stroke-width**. It's up to you whether you want to set them with `.style()` or `.attr()`. Once we're familiar with styling our charts, we'll apply classes using `.attr("class", "class-name")` and add styles to a separate CSS file.
A>
A>In this code, we're using `.attr()` to set the fill because an attribute has a lower CSS precedence than linked stylesheets, which will let us overwrite the value. If we used `.style()`, we'd be setting an inline style which would require an `!important` CSS declaration to override.

Let's move on and create a scale for the x axis. This will look like our y axis but, since we're working with date objects, we'll use a time scale which knows how to handle date objects.

{lang=javascript,crop-query=.xScale}
<<[code/01-making-your-first-chart/completed/chart.js](./protected/code/01-making-your-first-chart/completed/chart.js)

Now that we have our scales defined, we can start drawing our chart!

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/evviv?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>