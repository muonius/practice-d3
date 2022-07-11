---
title: "Draw canvas"
description: "Creating our wrapper and bounds elements."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/oimhqb4yl3
---

# Draw canvas

<CodeSandboxEmbed
  src="//codesandbox.io/s/dzk89?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

Let's create our **wrapper** element. Try to write this code without looking first. Like we've done before, we want to select the existing element, add a new `<svg>` element, and set its **width** and **height**.

{lang=javascript,crop-query=.wrapper}
<<[code/03-making-a-bar-chart/completed/draw-bars.js](./protected/code/03-making-a-bar-chart/completed/draw-bars.js)

How far did you get without looking? Let's try that again for this next part: creating our **bounds**. As a reminder, our **bounds** are a `<g>` element that will contain our main chart bits and be shifted to respect our **top** and **left** margins.

{lang=javascript,crop-query=.bounds}
<<[code/03-making-a-bar-chart/completed/draw-bars.js](./protected/code/03-making-a-bar-chart/completed/draw-bars.js)

Perfect! Let's make our scales.

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/k76lz?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>