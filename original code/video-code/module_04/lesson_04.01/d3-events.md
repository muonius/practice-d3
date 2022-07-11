---
title: "d3 events"
description: "We learn how to add interaction event listeners using our d3 selection objects, then run through a concrete example."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/95h5vo22zz
---

# d3 events

Browsers have native **event listeners** — using `addEventListener()`, we can listen for events from a user's:

* mouse
* keyboard
* scroll wheel
* touch
* resize
* ... and more.

For example:

```javascript
function onClick(event) {
  // do something here...
}
addEventListener("click", onClick)
```

After running this code, the browser will trigger `onClick()` when a user clicks anywhere on the page.

These event listeners have tons of functionality and are simple to use. We can get even more functionality using d3's event listener wrappers!

Our d3 selection objects have an `.on()` method that will create event listeners on our selected DOM elements. Let's take a look at how to implement d3 event listeners.

<CodeSandboxEmbed
  src="//codesandbox.io/s/ohmh5?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/events.js"
  style={{width: '100%', height: '35em'}}
/>

If we open the `events.js` file, we can see a few things happening:

1. We define `rectColors` as an array of colors.
2. We grab all `.rect` elements inside of the `#svg` element (created in `index.html`) and bind our selection to the `rectColors` array.
3. We use `.join()` to isolate all new data points (every row in `rectColors`) and append a `<rect>` for each color.
4. Lastly, we set each `<rect>`'s size to 100 pixels by 100 pixels and shift each item 110 pixels to the right (multiplied by its index). We also make all of our boxes light grey.

In our browser, we can see our four boxes.

![grey boxes](./public/images/5-interactions/boxes.png)

They don't do much right now, let's make it so they change to their designated color on hover.

To add a d3 event listener, we pass the type of event we want to listen for as the first parameter of `.on()`. Any DOM event type will work — see the full list of event types on [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events). To mimic a hover start, we'll want to target `mouseenter`.

```javascript
rect.on("mouseenter")
```

The second parameter `.on()` receives is a callback function that will be executed when the specified event happens. This function will receive two parameters:

1. the _event_
2. the _bound datum_

Let's log these parameters to the console to get a better look.

```javascript
rects.on("mouseenter", (event, d) => {
  console.log({event, d})
})
```

T>It can often be helpful to use ES6 object property shorthand for logging multiple variables. This way, we can see the name and value of each variable!

When we hover over a box, we can see that our `mouseenter` event is triggered! The parameters passed to our function(in order) are:

1. an _event_ object
2. the matching _data point_ bound from the `rectColors` array (in this case, the color)

In order to change the color of the current box, we'll need to create a d3 selection targeting only that box. Let's take a look at what our `event` object looks like.

Perfect! It looks like our `event` object has a `currentTarget` key. We can use `event.currentTarget` to create a d3 selection and set the box's fill using the `datum`.

```javascript
rects.on("mouseenter", (event, d) => {
   const selection = d3.select(event.currentTarget)
   selection.attr("fill", d)
})
```

Now when we refresh our webpage, we can change our boxes to their related color on hover!

![hovered boxes](./public/images/5-interactions/boxes-hovered.png)

Hmm, we're missing something. We want our boxes to turn back to grey when our mouse leaves them. Let's chain another event listener that triggers on `mouseleave` and make our box grey again.

```javascript
rects.on("mouseenter", (event, d) => {
  const selection = d3.select(event.currentTarget)
  selection.attr("fill", d)
})
.on("mouseleave", (event) => {
  const selection = d3.select(event.currentTarget)
  selection.attr("fill", "lightgrey")
})
```

T>`mouseenter` is often seen as interchangeable with `mouseover`. The two events are very similar, but `mouseenter` is usually closer to the wanted behavior. They are both triggered when the mouse enters the targeted container, but `mouseover` is also triggered when the mouse moves between nested elements.
T>
T>This same distinction applies to `mouseleave` (preferred) and `mouseout`.

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/7nshp?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/events.js"
  style={{width: '100%', height: '35em'}}
/>