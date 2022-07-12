async function drawLineChart() {
  //***********1. Access Data */
  const dataset = await d3.json("./../../my_weather_data.json");
  // console.log(data);
  const yAccessor = (d) => d["temperatureMax"];
  // console.log(yAccessor(data[0]));
  const parseDate = d3.timeParse("%Y-%m-%d");
  const xAccessor = (d) => parseDate(d["date"]);
  //console.log(typeof xAccessor(data[0]));
  //console.log(xAccessor(data[0]));

  //***********2. Create Bounds */
  let dimensions = {
    width: window.innerWidth * 0.9,
    height: 400,
    margins: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - dimensions.margins.left - dimensions.margins.right;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margins.top - dimensions.margins.bottom;

  // console.log(dimensions);
  //*************3.Create Workspace */
  const wrapper = d3
    .select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margins.left}px, ${dimensions.margins.top}px)`
    );

  // console.log(bounds);
  //g is like a div for svg

  //**************4. Create Scales */
  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, yAccessor))
    .range([dimensions.boundedHeight, 0]);

  // console.log(d3.extent(dataset, yAccessor));
  const freezingTemparaturePlacement = yScale(32);
  const freezingTemperature = bounds
    .append("rect")
    .attr("x", 0)
    .attr("width", dimensions.boundedWidth)
    .attr("y", freezingTemparaturePlacement)
    .attr("height", dimensions.boundedHeight - freezingTemparaturePlacement)
    .attr("fill", "#e0f3f3");

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth]);

  //***************5. Draw Line Chart */

  const lineGenerator = d3
    .line()
    .x((d) => xScale(xAccessor(d)))
    .y((d) => yScale(yAccessor(d)));

  const line = bounds
    .append("path")
    .attr("d", lineGenerator(dataset))
    .attr("fill", "none")
    .attr("stroke", "cornflowerblue")
    .attr("stroke-width", 2);

  //***************6. Draw Axes */
  const yAxisGenerator = d3.axisLeft().scale(yScale);

  const yAxis = bounds.append("g").call(yAxisGenerator);

  //yAxisGenerator(yAxis) will brea up the chain method
  //using .call() will execute the chaining

  const xAxisGenerator = d3.axisBottom().scale(xScale);
  const xAxis = bounds
    .append("g")
    .call(xAxisGenerator)
    .style("transform", `translateY(${dimensions.boundedHeight}px)`);
}

drawLineChart();
