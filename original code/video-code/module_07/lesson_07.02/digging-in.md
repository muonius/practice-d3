---
title: "Digging in"
description: "We walk through the structure of our React application, then dive into the first step of our chart drawing checklist: accessing our data"
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/ay9cbnrdvs
---

# Digging in

Our code for this chapter is a very bare bones React app. You should see an empty dashboard with three placeholders — one for a timeline, one for a scatter plot, and one for a histogram.

<CodeSandboxEmbed
  src="//codesandbox.io/s/hodh5?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/Timeline.jsx"
  style={{width: '100%', height: '35em'}}
/>

When we're finished, our dashboard will look like this:

![Finished dashboard](./public/images/13-using-d3-with-react-js/finished-dashboard.png)

Within the `src` folder, we have an `App` component that is loading random data and updating it every four seconds — this will help us design our chart transitions.

Our chart-making plan has four levels of components:

1. **App**, which will decide what our dataset is and how to access values for our axes (accessors),
2. **Timeline**, **ScatterPlot**, or **Histogram** which will be re-useable components that decide how a specific type of chart is laid out and what goes in it,
3. **Chart**, which will pass down chart dimensions, and
4. **Axis**, **Line**, **Bars**, etc., which will create individual components within our charts.

Levels **3** and **4** will be isolated in the `Chart` folder, creating a charting library that can be used throughout the app to make many types of charts. Having a basic charting library will help in many ways, such as abstracting svg components idiosyncracies (for example, collaborators won't need to know that you need to use a `<rect>` to create a rectangle, and it takes a **x** attribute whereas a `<circle>` takes a **cx** attribute).

We'll start by fleshing out our `Timeline` component, running through our usual chart making steps.

1. **Access data**
2. **Create dimensions**
3. **Draw canvas**
4. **Create scales**
5. **Draw data**
6. **Draw peripherals**
7. **Set up interactions**

### Access data

Let's open up our Timeline component, located in `src/Timeline.jsx`. There's not much in here: the bones of a React component, prop types, and all of the imports we'll need.

```javascript
const Timeline = ({ data, xAccessor, yAccessor, label }) => {
  return (
    <div className="Timeline">
    </div>
  )
}
```

Our `Timeline` component takes four props:

1. `data`
2. `xAccessor`
3. `yAccessor`
4. `label`

We can see that these accessor functions are already defined in `App.jsx`. These props are flexible enough to support throwing a timeline anywhere in our dashboard with any dataset. But we don't have so many props that creating a new timeline is overwhelming or allows us to create inconsistent timelines.

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/hodh5?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/Timeline.jsx"
  style={{width: '100%', height: '35em'}}
/>