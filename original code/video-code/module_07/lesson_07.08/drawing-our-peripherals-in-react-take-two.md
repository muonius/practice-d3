---
title: "Drawing our peripherals in React, take two"
description: "We learn an alternate, less hacky solution for creating an Axis component that lets React do all of the rendering."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/e3rzbdjt1z
---

# Drawing our peripherals, take two

Now that we've shown how easy it is to plug basic d3 code into React, let's talk about **why it's not a good idea**.

React uses a fancy reconciliation algorithm to decide which DOM elements to update. It does this by creating a virtual DOM and diffing against the real DOM. **When we mutate the DOM outside of React render methods, we're removing the performance benefits we get and will unnecessarily re-render elements.**

Short-cutting around React render methods also makes our code less declarative. Usually, you can depend on the resulting DOM to closely align to any JSX you see in a component's render method. When you come back to a component you wrote a few months ago, you'll thank yourself for making the output obvious.

In a pinch, using React to create a wrapper element to modify with d3 (like we just did) will do. You might need to do this for special cases, like animating an arc. But try to lean towards solely creating elements with React and using d3 as more of a utility library. This will keep your app speedy and less "hacky".

Even without its DOM modifying methods, d3 is a very powerful library. In fact, we created most of our timeline without needing to re-create a d3 generator function. For example, creating a `d` string for our **Line** component would have been tricky without `d3.line()`.

But how does this look in practice? Let's re-create our **Axis** component without using any axis generators.

<CodeSandboxEmbed
  src="//codesandbox.io/s/4xtjd?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/Timeline.jsx"
  style={{width: '100%', height: '35em'}}
/>

Switch your Axis import in `src/Timeline.jsx` to use the `Axis` file.

```javascript
import Axis from "./Chart/Axis"
```

When we open up `src/Chart/Axis.jsx`, we should see three basic React components.

Similar to how `d3.axisBottom()` and `d3.axisLeft()` are different methods, we want to split out `x` and `y` axes into different components. This will keep our code clean and prevent too many ternary statements.

The first component is a directory component that grabs the chart dimensions and renders the appropriate `Axis`, based on the `dimension` prop.

```javascript
const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical,
}
const Axis = ({ dimension, ...props }) => {
  const dimensions = useDimensionsContext()
  const Component = axisComponentsByDimension[dimension]
  if (!Component) return null

  return (
    <Component {...props}
      dimensions={dimensions}
    />
  )
}
```

The other two components, `AxisHorizontal` and `AxisVertical`, are specific `Axis` implementations. Let's start by fleshing out `AxisHorizontal`.

```javascript
function AxisHorizontal (
  { dimensions, label, formatTick, scale, ...props }
) {
  return (
    <g className="Axis AxisHorizontal" {...props}>
    </g>
  )
}
```

Since we're not using a d3 axis generator, we'll need to generate the ticks ourselves. Fortunately, many of the methods d3 uses internally are also available for external use. d3 scales have a `.ticks()` method that will create an array with evenly spaced values in the scale's domain.

We can see this in action if we `console.log(scale.ticks())`.

![scale.ticks()](./public/images/13-using-d3-with-react-js/react-ticks.png)

By default, `.ticks()` will aim for ten ticks, but we can pass a specific count to target. Note that `.ticks()` will _aim for_ the count, but also tries to create ticks with meaningful intervals: a week in this example.

The number of ticks we want will depend on the chart width, though — ten ticks will likely crowd our x axis. Let's aim for one tick per 100 pixels for small screens and one tick per 250 pixels for wider screens.

```javascript
function AxisHorizontal (
  { dimensions, label, formatTick, scale, ...props }
) {
  const numberOfTicks = dimensions.boundedWidth < 600
        ? dimensions.boundedWidth / 100
        : dimensions.boundedWidth / 250

  const ticks = scale.ticks(numberOfTicks)
```

Great! We're ready to render some elements. First, we'll shift our axis to the bottom of the chart. Remember: our `<Axis>` will render within our shifted group from `<Chart>`, so we don't have to worry about the top margin.

```javascript
<g className="Axis AxisHorizontal" transform={`translate(0, ${
  dimensions.boundedHeight
})`} {...props}>
```

Most charts mark the end of the bounds with a line - let's draw a line above our axis to make it clear where the bottom of the y axis is.

Remember that `<line>` elements are positioned with `x1`, `x2`, `y1`, and `y2` attributes. We'll want to draw a line from `[0,0]` to `[width, 0]` — since `x1`, `x2`, and `y1` will all be `0` (the default), we can leave those attributes out.

```javascript
<line
  className="Axis__line"
  x2={dimensions.boundedWidth}
/>
```

Next, we'll create the text for each of our ticks. To do this, we want to render a `<text>` element for each item in our `ticks` array. Let's shift each element down by 25px to give the axis line some breathing room and shift it to the right by converting the tick into the pixel domain using our `scale`.

```javascript
{ticks.map((tick, i) => (
  <text
    key={tick}
    className="Axis__tick"
    transform={`translate(${scale(tick)}, 25)`}
  >
    { formatTick(tick) }
  </text>
))}
```

When we look at our chart, we can see a wonderful x axis with ticks:

![timeline with x axis](./public/images/13-using-d3-with-react-js/react-x-axis-no-dates.png)

Those dates don't look right, though. Note that our react **Axis** component accepts a `formatTick` prop, which will be a function that takes a tick and converts it into a human-readable string. d3 axis generators have built-in logic that will detect date strings and format them correctly.

Let's override the default `formatTick` prop and pass `formatDate` defined at the top of `src/Timeline.jsx`.

```javascript
<Axis
  dimension="x"
  scale={xScale}
  formatTick={formatDate}
/>
```

Much better!

![timeline with x axis](./public/images/13-using-d3-with-react-js/react-x-axis.png)

In your own React chart library, it might be a good idea to detect whether or not the tick is a date object and format it accordingly. That will depend on your use cases: how often will you need to format dates? Will you want all dates to be formatted the same way?

Lastly, we'll want to render the label for our axis. Since we might not always want an axis label, we'll check if the `label` prop exists before rendering our label. We'll also horizontally center our label and shift it down 60 pixels to give our ticks space.

```javascript
{label && (
  <text
    className="Axis__label"
    transform={`translate(${dimensions.boundedWidth / 2}, 60)`}
  >
    { label }
  </text>
)}
```

Our `AxisVertical` will look very similar to `AxisHorizontal`. We'll start with the same basic component.

```javascript
function AxisVertical (
  { dimensions, label, formatTick, scale, ...props }
) {
  return (
    <g className="Axis AxisVertical" {...props}>
    </g>
  )
}
```

Try to fill out the component as much as possible without looking about the completed code below. You might want to tweak the `numberOfTicks` parameter — these ticks will be stacked vertically and might have more room.

Remember that your y axis label will need to be rotated -90 degrees to fit.

<CodeSandboxEmbed
  src="//codesandbox.io/s/6sxvk?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/Chart/Axis.jsx"
  style={{width: '100%', height: '35em'}}
/>

```javascript
function AxisVertical (
  { dimensions, label, formatTick, scale, ...props }
) {
  const numberOfTicks = dimensions.boundedHeight / 70

  const ticks = scale.ticks(numberOfTicks)

  return (
    <g className="Axis AxisVertical" {...props}>
      <line
        className="Axis__line"
        y2={dimensions.boundedHeight}
      />

      {ticks.map((tick, i) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(-16, ${scale(tick)})`}
        >
          { formatTick(tick) }
        </text>
      ))}

      {label && (
        <text
          className="Axis__label"
          style={{
            transform: `translate(-56px, ${
              dimensions.boundedHeight / 2
            }px) rotate(-90deg)`
          }}
        >
          { label }
        </text>
      )}
    </g>
  )
}
```

How did you do? No worries if you peeked! This code will be here for you if you need to refer back to it when you set up your own charts.

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/j6224?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/chart.js"
  style={{width: '100%', height: '35em'}}
/>

## Wrap up

See how we could replicate the d3 axes with a small amount of code? When we know how to do something one way (such as draw axes with a d3 axis generator), this knowledge prevents us from finding another way. D3 has many convenient methods, but they aren't always the best way to draw a chart. In fact, it can often help us to circumvent itself with smaller methods that it uses.

Another benefit of creating our own axes is that we can customize our charts however we want. Want tick marks but no line for your y axes? No problem! We can also style our axes in one place and ensure that our charts are consistent, even when created by different developers.
