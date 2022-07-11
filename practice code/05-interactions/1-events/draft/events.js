async function createEvent() {
  const rectColors = [
    "yellowgreen",
    "cornflowerblue",
    "seagreen",
    "slateblue",
  ]

  // create and bind data to our rects
  const rects = d3.select("#svg")
    .selectAll(".rect")
    .data(rectColors)
    .enter().append("rect")
    .attr("height", 100)
    .attr("width", 100)
    .attr("x", (d, i) => i * 110)
    .attr("fill", "lightgrey")

  // on method is a d3 method
  console.log(rects)

  rects.on("mouseenter", (event, d) => {
    // console.log(event.currentTarget)
    //outputs the current rect that is hovered over

    const selection = d3.select(event.currentTarget)
    selection.attr("fill", d)

  })

    .on("mouseleave", (event) => {
      const selection = d3.select(event.currentTarget)
      selection.attr("fill", "lightgrey")
    })

  setTimeout(() => {
    rects
      .dispatch("mouseleave")//push event to end
      .on("mouseenter", null)
      .on("mouseleave", null)
  }, 3000)
}
createEvent()