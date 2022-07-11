---
title: "Creating our bounding box"
description: We create our bounding box, and shift it to respect our margins.
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/og2d5w23cy
---

# Creating our bounding box

<CodeSandboxEmbed
  src="//codesandbox.io/s/wyspy?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

Our SVG element is the size we wanted, but we want our chart to respect the margins we specified.

Let's create a **group** that shifts its contents to respect the top and left margins so we can deal with those in one place.

Any elements inside of an `<svg>` have to be SVG elements (with the exception of `<foreignObject>` which is fiddly to work with). Since we'll be inserting new chart elements inside of our `<svg>`, we'll need to use SVG elements for the rest of the chart.

The `<g>` SVG element is not visible on its own, but is used to group other elements. Think of it as the `<div>` of SVG — a wrapper for other elements. We can draw our chart inside of a `<g>` element and shift it all at once using the CSS `transform` property.

d3 selection objects have a `.style()` method for adding and modifying CSS styles. The `.style()` method is invoked similarly to `.attr()` and takes a key-value pair as its first and second arguments. Let's use `.style()` to shift our bounds.

{lang=javascript,crop-query=.bounds}
<<[code/01-making-your-first-chart/completed/chart.js](./protected/code/01-making-your-first-chart/completed/chart.js)

A>We're using backticks (`` ` ``) instead of quotes (`'` or `"`) to create our `translate` string. This lets us use ES6 string interpolation — if you're unfamiliar, [read more here](https://babeljs.io/docs/en/learn/#template-strings).

If we look at our **Elements** panel, we can see our new `<g>` element.

![g element](./public/images/1-making-your-first-chart/g-element.png)

We can see that the `<g>` element size is 0px by 0px — instead of taking a `width` or `height` attribute, a `<g>` element will expand to fit its contents. When we start drawing our chart, we'll see this in action.

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/sud21?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>