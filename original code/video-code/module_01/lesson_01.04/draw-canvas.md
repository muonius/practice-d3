---
title: "Step 3: Draw canvas"
description: "The third step: drawing our canvas. We create our wrapper & bounds, then shift them to respect our margins."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/m4j0w79os6
---

# Draw canvas

<CodeSandboxEmbed
  src="//codesandbox.io/s/4xn0w?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

Let's make some SVG elements! This step will look exactly like our line chart code. First, we find an existing DOM element (`#wrapper`), and append an `<svg>` element.

Then we use `attr` to set the size of the `<svg>` to our `dimensions.width` and `dimensions.height`. Note that these sizes are the size of the "outside" of our plot. Everything we draw next will be within this `<svg>`.

{lang=javascript,crop-query=.wrapper}
<<[code/02-making-a-scatterplot/completed/chart.js](./protected/code/02-making-a-scatterplot/completed/chart.js)

Next, we create our bounds and shift them to accommodate our top & left margins.

{lang=javascript,crop-query=.bounds}
<<[code/02-making-a-scatterplot/completed/chart.js](./protected/code/02-making-a-scatterplot/completed/chart.js)

Above, we create a `<g>` (think "group") element and we use the `transform` CSS property to move it to the right and down (note that the `left` margin pushes our bounds to the right, and a top margin pushes our bounds down).

This `bounds` is the "inner" part of our chart that we will use for our data elements.

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/52tse?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>