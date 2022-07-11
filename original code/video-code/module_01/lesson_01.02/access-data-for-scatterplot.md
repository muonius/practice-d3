---
title: "Step 1: Access data"
description: "We talk through our first step: accessing our data."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/0bagvkxoz6
---

# Access data

<CodeSandboxEmbed
  src="//codesandbox.io/s/jv6fo?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

As we saw in **Chapter 1**, this step will be quick! We can utilize `d3.json()` to grab the `my_weather_data.json` file.

{lang=javascript,crop-query=.dataset}
<<[code/02-making-a-scatterplot/completed/chart.js](./protected/code/02-making-a-scatterplot/completed/chart.js)

The next part of the **Access data** step is to create our accessor functions. Let's log the first data point to the console to look at the available keys.

```javascript
const dataset = await d3.json("./data/my_weather_data.json")
console.table(dataset[0])
```

We can see the metrics we're interested in as `humidity` and `dewPoint`. Let's use those to define our accessor functions.

{lang=javascript,crop-query=.xAccessor-.yAccessor}
<<[code/02-making-a-scatterplot/completed/chart.js](./protected/code/02-making-a-scatterplot/completed/chart.js)

Perfect! Now that we can access our data, we can move to the next step.

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/eeqkh?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>