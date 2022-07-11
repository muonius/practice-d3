---
title: "Looking at our chart"
description: "Our hard work completed, we sit back and talk about what insights our chart can teach us."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/426j3vuvc3
---

# Looking at our chart

<CodeSandboxEmbed
  src="//codesandbox.io/s/bcu6s?fontsize=14&hidenavigation=1&theme=dark&autoresize=1&view=preview"
  style={{width: '100%', height: '35em'}}
/>

Now that we've finished drawing our scatter plot, we can step back and see what we can learn from displaying the data in this manner. Without running statistical analyses (such as the Pearson Correlation Coefficient or Mutual Analyses), we won't be able to make any definitive statements about whether or not our metrics are correlated. However, we can still get a sense of how they relate to one another.

Looking at the plotted dots, they do seem to group around an invisible line from the bottom left to the top right of the chart.

{width=50%}
![Finished scatterplot](./public/images/2-making-a-scatterplot/scatterplot-finished.png)

Generally, it seems like we were correct in guessing that a high humidity would likely coincide with a high dew point.
