---
title: "Drawing our chart"
description: "To set up our chart environment, we learn why we need two containers: wrapper and bounds."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/uh4m3itqg6
---

# Drawing our chart

<CodeSandboxEmbed
  src="//codesandbox.io/s/820fx?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

When drawing a chart, there are two containers whose dimensions we need to define: the wrapper and the bounds.

![Chart dimensions](./public/images/1-making-your-first-chart/terminology.png)

The **wrapper** contains the entire chart: the data elements, the axes, the labels, etc. Every SVG element will be contained inside here.

The **bounds** contain all of our data elements: in this case, our line.

This distinction will help us separate the amount of space we need for extraneous elements (axes, labels), and let us focus on our main task: plotting our data. One reason this is so important to define up front is the inconsistent and unfamiliar way SVG elements are sized.

When adding a chart to a webpage, we start with the amount of space we have available for the chart. Then we decide how much space we need for the margins, which will accommodate the chart axes and labels. What's left is how much space we have for our data elements.

We will rarely have the option to decide how large our timeline is and then build up from there. Our charts will need to be accommodating of window sizes, surrounding text, and more.

A> While **wrapper** and **bounds** isn't terminology that you'll see in widespread use, it will be helpful for reference in this book. Defining these concepts also helps with thinking about chart dimensions and remembering to make space for your axes.

Let's define a dimensions object that will contain the size of the wrapper and the margins. We'll have one margin defined for each side of the chart: top, right, bottom, and left. For consistency, we'll mimic the order used for CSS properties.

{lang=javascript,crop-query=.dimensions}
<<[code/01-making-your-first-chart/completed/chart.js](./protected/code/01-making-your-first-chart/completed/chart.js)

We want a small `top` and `right` margin to give the chart some space. The line or the y axis might overflow the chart bounds. We'll want a larger `bottom` and `left` margin to create room for our axes.

Let's compute the size of our **bounds** and add that to our `dimensions` object.

{lang=javascript,crop-query=context(.dimensions.boundedWidth, 0, 6)}
<<[code/01-making-your-first-chart/completed/chart.js](./protected/code/01-making-your-first-chart/completed/chart.js)

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/8xtq1?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>