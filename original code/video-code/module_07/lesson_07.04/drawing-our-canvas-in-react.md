---
title: "Drawing our canvas in React"
description: "We create our wrapper and bounds within our Chart component to prevent from having to repeat ourselves for every chart we create."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/g8szmguaij
---

## Drawing our canvas

<CodeSandboxEmbed
  src="//codesandbox.io/s/9cs4i?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/Timeline.jsx"
  style={{width: '100%', height: '35em'}}
/>

Next up, we need to create our canvas. Since we'll want a canvas for all of our charts, we can put most of this logic in the `Chart` component. Let's add a `Chart` to our render method and pass it our `dimensions`.

```javascript
<div className="Timeline" ref={ref}>
  <Chart dimensions={dms}>
  </Chart>
</div>
```

When we look at our dashboard again, not much has changed. Let's open up `src/Chart/Chart.jsx` to see what we're starting with.

`Chart` is a very basic functional React component — it asks for only one prop: `dimensions`.

A>We're defining `useDimensionsContext()` at the top of our file as an empty function to prevent import errors in another file. We'll update it in a minute.

```javascript
export const useDimensionsContext = () => {}

const Chart = ({ dimensions, children }) => (
  <svg className="Chart">
    { children }
  </svg>
)
```

The `children` in a `Chart` can be any component from our chart library (or raw SVG elements). Each of these components might need to know the dimensions of our chart — for example, an `Axis` component might need to know how tall to be. Instead of passing `dimensions` to each of these components as a prop, we can create a React Context that defines the dimensions for the whole chart.

First, we'll use the native React `createContext()` to create a new context — this code will go outside of the component, after our imports.

```javascript
const ChartContext = createContext()
```

Next up, we can fill out our `useDimensionsContext()` variable to create a more descriptive, easy-to-grab function that Chart components can use.

```javascript
export const useDimensionsContext = () => useContext(ChartContext)
```

Lastly, we need to add the context provider to our render method and specify that we want the context consumers to receive our `dimensions` object.

```javascript
const Chart = ({ dimensions, children }) => (
  <ChartContext.Provider value={dimensions}>
    <svg className="Chart">
      { children }
    </svg>
  </ChartContext.Provider>
)
```

Great! Now all our chart components need to do to access the chart dimensions is to grab the value from `useDimensionsContext()`.

Next up, we'll use those `dimensions` to create our chart **wrapper** and **bounds**. If you remember from **Module 1**, our **wrapper** spans the full height and width of the chart and the **bounds** respect the chart **margins**.

![Chart dimensions](./public/images/1-making-your-first-chart/terminology.png)

Let's specify the **width** and **height** of the `<svg>` element.

```javascript
<svg
  className="Chart"
  width={dimensions.width}
  height={dimensions.height}>
  { children }
</svg>
```

Lastly, we'll create our chart bounds to shift our chart components and enforce our top and left margins.

```javascript
<svg
  className="Chart"
  width={dimensions.width}
  height={dimensions.height}>
  <g transform={`translate(${
    dimensions.marginLeft
  }, ${
    dimensions.marginTop
  })`}>
    { children }
  </g>
</svg>
```

Perfect! Our `Chart` component is ready to go. We won't be able to see the difference on our webpage, but we can see our wrapper components in the **Elements** panel of our dev tools.

![Chart elements](./public/images/13-using-d3-with-react-js/react-Chart.png)

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/dbvd0?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/Chart/Chart.jsx"
  style={{width: '100%', height: '35em'}}
/>