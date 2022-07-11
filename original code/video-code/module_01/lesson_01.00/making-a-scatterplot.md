---
title: "Making a Scatterplot"
description: "We dive into making a slightly more complex chart: a scatter plot. In this lesson, we talk about why you would create a scatter plot and its basic anatomy."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/palvvtoltg
---

# Intro


Now that we've created our first chart, let's create another chart that's a little more complex. At the end of this chapter, we'll have a deeper understanding of each step required to make a chart in d3.

There are endless questions we could ask our weather dataset — many of them ask about the relationship between different metrics. Let's investigate these two metrics:

- **dew point** is the highest temperature (°F) at which dew droplets form
- **humidity** is the amount of water vapor in the air

I would expect them to be correlated — high humidity should cause a higher dew point temperature, right? Let's dive in and find out!



# Deciding the chart type


When looking at the relationship between two metrics, **a scatterplot is a good choice**.

A scatterplot includes two axes:

- an **x axis** that displays one metric and
- a **y axis** that displays the other.

We'll plot **each data point** (in this case, a single day) as a dot. If we wanted to involve a third metric, we could even add another dimension by changing the color or the size of each dot.

{width=50%}
![Our Finished Scatterplot](./public/images/2-making-a-scatterplot/scatterplot-finished.png)

The great thing about scatter plots is that when we're finished plotting the chart, we'll get a clear view of the relationship between the two metrics.
