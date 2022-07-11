---
title: "Creating our scales in React"
description: "Next, we need to create our scales. We also create scaled accessor functions to pass to the children of our Timeline, so they don't need to know about our scales."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/k8rlstvm42
---

### Creating our scales

<CodeSandboxEmbed
  src="//codesandbox.io/s/772i3?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/Timeline.jsx"
  style={{width: '100%', height: '35em'}}
/>

Next up, we need to create the scales to convert from the data domain to the pixel domain. Let's pop back to `src/Timeline.jsx`.

We'll create scales just like we did in **Module 1** — we'll need an time-based **xScale** and a linear **yScale**.

```javascript
const xScale = d3.scaleTime()
  .domain(d3.extent(data, xAccessor))
  .range([0, dms.boundedWidth])

const yScale = d3.scaleLinear()
  .domain(d3.extent(data, yAccessor))
  .range([dms.boundedHeight, 0])
  .nice()
```

A>If you wanted to make creating scales easier, you could abstract the concept of a "scale" and add ease-of-use methods to your chart library. For example, you could make a method that takes a dimension (eg. `x`) and an accessor function and create a scale. A more comprehensive chart library can abstract redundant code and make it easier for collaborators who are less familiar with data visualization.

Next, we'll make a scaled accessor function for both of our axes. These will take a data point and return the pixel value. This way, our `Line` component won't need any knowledge of our scales or data structure.

```javascript
const xAccessorScaled = d => xScale(xAccessor(d))
const yAccessorScaled = d => yScale(yAccessor(d))
```

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/e8e9k?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/Timeline.jsx"
  style={{width: '100%', height: '35em'}}
/>