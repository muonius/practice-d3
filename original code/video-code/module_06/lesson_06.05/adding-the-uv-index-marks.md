---
title: "Adding the UV index marks"
description: "We add marks to show which days are above a certain UV index threshold."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/p4cyrkgx7s
---

# Adding the UV index marks

<CodeSandboxEmbed
  src="//codesandbox.io/s/5y5cg?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

Next, **let's mark days that have a high UV index**. But what does a "high UV index" mean? We'll need to make that decision ourselves -- let's define a "high UV day" as any day with a UV index over 8.

{lang=javascript,crop-query=.uvIndexThreshold}
<<[code/11-radar-weather-chart/completed/chart.js](./protected/code/11-radar-weather-chart/completed/chart.js)

These kinds of decisions will come from your expertise as a subject matter expert. When setting a threshold like this in your own charts, think about what might be meaningful to the viewer.

Let's keep our code organized and keep our UV index lines within one group.

{lang=javascript,crop-query=.uvGroup}
<<[code/11-radar-weather-chart/completed/chart.js](./protected/code/11-radar-weather-chart/completed/chart.js)

We want to draw our UV lines just inside the edges of our radius -- let's set their `offset` to `0.95`.

{lang=javascript,crop-query=.uvOffset}
<<[code/11-radar-weather-chart/completed/chart.js](./protected/code/11-radar-weather-chart/completed/chart.js)

Next, let's draw one `<line>` per day over our threshold, drawing the outside edge just outside of our chart's radius.

{lang=javascript,crop-query=.highUvDays}
<<[code/11-radar-weather-chart/completed/chart.js](./protected/code/11-radar-weather-chart/completed/chart.js)

We won't be able to see our `<line>`s until we give them a stroke -- let's add a stroke color and width in our `styles.css` file.

```css
.uv-line {
     stroke: #feca57;
    stroke-width: 2;
}
```

Now we can see that all of the days with high UV index are between April and September, with the highest density around July.

{width=75%}
![Chart with uv index lines](./public/images/11-radar-weather-chart/uv.png)

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/guc92?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>