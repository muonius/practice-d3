---
title: "Using d3 with Angular.js"
description: "We take a look at how to combine d3 + Angular, with a complete codebase."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/biq6ghvij9
---

# Using D3 with Angular.js

Angular is a framework for building modern, component-based user interfaces in HTML and Typescript. Typescript is a superset of Javascript: it looks very similar to Javascript and gets compiled to Javascript, but it has extra features like _static typing_, _classes_, and _interfaces_.

While the codebase looks very different to the React codebase, the chart library structure is largely the same.

<CodeSandboxEmbed
  src="//codesandbox.io/s/21d1x?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/app/app.module.ts"
  style={{width: '100%', height: '35em'}}
/>

If you're not interested in developing Angular applications, I'd recommend poking around and noticing how similar the code is to the React code. If you are interested in developing d3 + Angular apps, the best route would be:

1. Run through the previous lessons with the React code
2. Try to fill out the `/src/app/timeline/timeline.component.ts` component (including the nested chart, line, & axis components), following our steps
3. Check out the completed code in `/src/app/completed` after, or if you get stuck. You can switch these out if you change the imports in `src/app/app.module.ts`

```javascript
// import { TimelineComponent } from './timeline/timeline.component'
// import { ScatterComponent } from './scatter/scatter.component'
// import { HistogramComponent } from './histogram/histogram.component'
// import { ChartComponent } from './chart/chart.component'
// import { AxisComponent } from './chart/axis/axis.component'
// import { LineComponent } from './chart/line/line.component'
// import { CirclesComponent } from './chart/circles/circles.component'
// import { BarsComponent } from './chart/bars/bars.component'
// import { GradientComponent } from './chart/gradient/gradient.component'
import { TimelineComponent } from './completed/timeline/timeline.component'
import { ScatterComponent } from './completed/scatter/scatter.component'
import { HistogramComponent } from './completed/histogram/histogram.component'
import { ChartComponent } from './completed/chart/chart.component'
import { AxisComponent } from './completed/chart/axis/axis.component'
import { LineComponent } from './completed/chart/line/line.component'
import { CirclesComponent } from './completed/chart/circles/circles.component'
import { BarsComponent } from './completed/chart/bars/bars.component'
import { GradientComponent } from './completed/chart/gradient/gradient.component'
```

### Final code for this lesson

<CodeSandboxEmbed
  src="//codesandbox.io/s/ct30d?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&module=/src/app/app.module.ts"
  style={{width: '100%', height: '35em'}}
/>