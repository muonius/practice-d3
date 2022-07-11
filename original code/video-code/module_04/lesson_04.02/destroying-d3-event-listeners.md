---
title: "Destroying d3 event listeners"
description: "We can't let our event listeners hang around forever - we learn how to clean up after ourselves and cancel old ones."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/77ahpgbzyp
---
# Destroying d3 event listeners

Before we look at adding events to our charts, let's learn how to destroy our event handlers. Removing old event listeners is important for updating charts and preventing memory leaks, among other things.

<CodeSandboxEmbed
  src="//codesandbox.io/s/rogz0?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/events.js"
  style={{width: '100%', height: '35em'}}
/>

Let's add a 3 second timeout at the end of our code so we can test that our mouse events are working before we destroy them.

```javascript
setTimeout(() => {
}, 3000)
```

Removing a d3 event listener is easy — all we need to do is call `.on()` with `null` as the triggered function.

```javascript
setTimeout(() => {
  rects
    .on("mouseenter", null)
    .on("mouseleave", null)
}, 3000)
```

Perfect! Now our hover events will stop working after 3 seconds.

You might notice that a box might be stuck with its hovered color if it was hovered over when the mouse events were deleted.

![hovered boxes - stuck!](./public/images/5-interactions/boxes-hovered-stuck.png)

Luckily, there's an easy fix!

D3 selections have a `.dispatch()` method that will programatically trigger an event — no actual mouseleave needed. We can trigger a `mouseleave` event right before we remove it to ensure that our boxes finish in their "neutral" state.

```javascript
setTimeout(() => {
  rects
    .dispatch("mouseleave")
    .on("mouseenter", null)
    .on("mouseleave", null)
}, 3000)
```

Perfect! Now that we have a good handle on using d3 event listeners, let's use them to make our charts interactive.

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/jl402?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/events.js"
  style={{width: '100%', height: '35em'}}
/>