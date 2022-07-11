---
title: "Create dimensions"
description: "A hopefully familiar step by now: creating our chart dimensions."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/5v9u8zvssg
---

# Create dimensions

<CodeSandboxEmbed
  src="//codesandbox.io/s/87z0f?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

Histograms are easiest to read when they are wider than they are tall. Let's set the width before defining the rest of our dimensions so we can use it to calculate the height. We'll also be able to quickly change the `width` later and keep the same aspect ratio for our chart.

T> **Chart design tip**: Histograms are easiest to read when they are wider than they are tall.

Instead of filling the whole window, let's prepare for multiple histograms and keep our chart small. That way, the charts can stack horizontally and vertically, depending on the screen size.

{lang=javascript,crop-query=.width}
<<[code/03-making-a-bar-chart/completed/draw-bars.js](./protected/code/03-making-a-bar-chart/completed/draw-bars.js)

Alright! Let's use the `width` to set the `width` and `height` of our chart. We'll leave a larger margin on the top to account for the bar labels, which we'll position above each bar.

{lang=javascript,crop-query=.dimensions}
<<[code/03-making-a-bar-chart/completed/draw-bars.js](./protected/code/03-making-a-bar-chart/completed/draw-bars.js)

Remember, our **wrapper** encompasses the whole chart. If we subtract our margins, we'll get the size of our **bounds** which contain any data elements.

{width=75%}
![Chart terminology](./public/images/3-making-a-bar-chart/chart-terminology.png)

Now that we know the size of our **wrapper** and **margins**, we can calculate the size of our **bounds**.

{lang=javascript,crop-query=context(.dimensions.boundedWidth, 0, 6)}
<<[code/03-making-a-bar-chart/completed/draw-bars.js](./protected/code/03-making-a-bar-chart/completed/draw-bars.js)

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/rdl66?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>