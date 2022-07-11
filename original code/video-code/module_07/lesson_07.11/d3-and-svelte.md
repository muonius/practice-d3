---
title: "Using d3 with Svelte.js"
description: "We take a look at how to combine d3 + Svelte.js, with a complete codebase."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/yq1rabu5b5
---

# Using D3 with Svelte.js

Svelte is a framework for building reactive, component-based user interfaces. It's a great framework for devs new to javascript frameworks, and it leans into reactive coding - your variables will update when their dependencies do!

While the codebase looks very different to the React codebase, the chart library structure is largely the same.

<CodeSandboxEmbed
  src="//codesandbox.io/s/bl2qy?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/App.svelte"
  style={{width: '100%', height: '35em'}}
/>

If you're not interested in developing Svelte applications, I'd recommend poking around and noticing how similar the code is to the React code. If you are interested in developing d3 + Svelte apps, the best route would be:

1. Run through the previous lessons with the React code
2. Try to fill out the `/src/Timeline.svelte` component (including the nested chart, line, & axis components), following our steps
3. Check out the completed code in `/src/completed` after, or if you get stuck. You can switch these out if you change the imports in `src/App.svelte`

```javascript
// import Timeline from "./Timeline.svelte";
// import ScatterPlot from "./ScatterPlot.svelte";
// import Histogram from "./Histogram.svelte";
import Timeline from "./completed/Timeline.svelte";
import ScatterPlot from "./completed/ScatterPlot.svelte";
import Histogram from "./completed/Histogram.svelte";
```

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/o8z0i?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/App.svelte"
  style={{width: '100%', height: '35em'}}
/>