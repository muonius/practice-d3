---
title: "Steps in drawing any chart"
description: "We solidify our foundation by splitting our chart-creating code into seven general steps."
useMdx: true
privateVideoUrl: https://fullstack.wistia.com/medias/auhi540ysw
---

# Steps in drawing any chart


In d3, there are general steps that we need to take every time we make a chart — we briefly went through each of them in **Chapter 1** to create our line chart, but now **let's create a checklist to give us a roadmap for future charts**.

1. **Access data**

   Look at the data structure and declare how to access the values we'll need

2. **Create chart dimensions**

   Declare the physical (i.e. pixels) chart parameters

3. **Draw canvas**

   Render the chart area and bounds element

4. **Create scales**

   Create scales for every data-to-physical attribute in our chart

5. **Draw data**

   Render your data elements

6. **Draw peripherals**

   Render your axes, labels, and legends

7. **Set up interactions**

   Initialize event listeners and create interaction behavior - we'll get to this step in Lesson 5

![Chart drawing checklist](./public/images/appendix/chart-checklist.png)

Let's dig in!