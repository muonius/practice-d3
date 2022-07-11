---
title: "Getting set up"
description: "We're going to breeze through the first four steps: accessing our data, creating our dimensions, drawing our canvas, and creating our scales."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/g9bkl4dmkc
---

## Getting set up

We've already done a few of the steps, since they should be really familiar by now: we've grabbed our data, created square dimensions, and drawn our canvas.

<CodeSandboxEmbed
  src="//codesandbox.io/s/bvsoy?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

### Accessing the data

To start, let's create our data accessors. Doing this up front will remind us of the structure of our data, and let us focus on drawing our chart later.

Let's look at the first data point by logging it out to our console after we fetch our data:

```javascript
const dataset = await d3.json("./data/my_weather_data.json")
console.table(dataset[0])
```

{width=50%}
![Our dataset](./public/images/1-making-your-first-chart/dataset.png)

Since we already know what our final chart will look like, we can pull out all of the metrics we'll need. Let's create an accessor for each of the metrics we'll plot (_min temperature_, _max temperature_, _precipitation_, _cloud cover_, _uv_, and _date_).

{lang=javascript,crop-query=.temperatureMinAccessor-.dateAccessor}
<<[code/11-radar-weather-chart/completed/chart.js](./protected/code/11-radar-weather-chart/completed/chart.js)

That's a mouthful! Thankfully, we got that out of the way and won't need to look at the exact structure of our data again.

### Creating our scales

Next, we'll want to create scales to convert our weather metrics into physical properties so we know where to draw our data elements.

The location of a data element around the radar chart's center corresponds to its date. Let's create a scale that converts a date into an angle.

{lang=javascript,crop-query=context(.angleScale, 2, 0)}
<<[code/11-radar-weather-chart/completed/chart.js](./protected/code/11-radar-weather-chart/completed/chart.js)

A>Note that we're using **radians**, instead of **degrees**. Angular math is generally easier with **radians**, and we'll want to use `Math.sin()` and `Math.cos()` later, which deals with **radians**. There are **2π** radians in a full circle. If you want to know more about **radians**, [the Wikipedia entry is a good source](https://en.wikipedia.org/wiki/Radian).

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/n587b?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>