---
title: "Access data"
description: "Next, we grab our data and create our accessor function (only one this time!)"
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/501qj8w08x
---

# Chart checklist


To start, let's look over our chart-making checklist to remind ourselves of the necessary steps.

1. **Access data**
2. **Create dimensions**
3. **Draw canvas**
4. **Create scales**
5. **Draw data**
6. **Draw peripherals**
7. **Set up interactions**

We'll breeze through most of these steps, reinforcing what we've already learned.


# Access data

<CodeSandboxEmbed
  src="//codesandbox.io/s/bk5nn?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

In our javascript file, let's grab the data from our JSON file, waiting until it's loaded to continue.

{lang=javascript,crop-query=.dataset}
<<[code/03-making-a-bar-chart/completed/draw-bars.js](./protected/code/03-making-a-bar-chart/completed/draw-bars.js)

This time, **we're only interested in one metric for the whole chart**. Remember, the y axis is plotting the *frequency* (i.e. the number of occurrences) of the metric whose values are on the x axis. So instead of an `xAccessor()` and `yAccessor()`, we define a **single** `metricAccessor()`.

```javascript
const metricAccessor = d => d.humidity
```

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/nxgmc?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>