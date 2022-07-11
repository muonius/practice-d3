---
title: "Creating dimensions in React"
description: "Creating dimensions in React can be really easy! We use a custom hook for watching the size of our wrapper and automatically calculating the dimensions of our bounds."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/xbubmyokgb
---

# Creating dimensions

<CodeSandboxEmbed
  src="//codesandbox.io/s/hodh5?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/Timeline.jsx"
  style={{width: '100%', height: '35em'}}
/>

Next up, we need to specify the size of our chart. In our dashboard, we could have Timelines of many different sizes. Each of these Timelines are also likely to change size based on the window size. To keep things flexible, we'll need to grab the dimensions of our container `<div>`.

We could implement this by hand by creating a React ref, querying the size of `ref.current`, and instantiating a Resize Observer to update on resize. Because we'll use this same logic in multiple chart types, we created a custom React hook called `useChartDimensions`.

`useChartDimension` will accept an object of dimension overrides and return an array with two values:

1. a reference for a React ref
2. a `dimensions` object that looks like:

```javascript
{
  width: 1000,
  height: 1000,
  marginTop: 100,
  marginRight: 100,
  marginBottom: 100,
  marginLeft: 100,
  boundedHeight: 800,
  boundedWidth: 800,
}
```

A>To keep things simple, this object is flat, unlike some `dimensions` objects we've used before. In practice, if you need to rely on a specific structure for your `dimensions` object, it might be better to keep it flat instead of nesting `margins` inside another object.

We won't get into what that code looks like, but you can give it a look over in the `src/Chart/utils.js` file.

First, we'll use our hook and pull out the ref reference and the calculated dimensions.

```javascript
const Timeline = ({ data, xAccessor, yAccessor, label }) => {
  const [ref, dms] = useChartDimensions()

  return (
    <div className="Timeline" ref={ref}>
    </div>
  )
}
```

Then, we will tag our container `<div>` with our `ref`.

```javascript
<div className="Timeline" ref={ref}>
</div>
```

And voila! If we `console.log(dms)` before our render method, we can see that our dimensions are populated and update when we resize our window.

![dimensions object](./public/images/13-using-d3-with-react-js/react-dimensions.png)

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/6thf4?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/Timeline.jsx"
  style={{width: '100%', height: '35em'}}
/>