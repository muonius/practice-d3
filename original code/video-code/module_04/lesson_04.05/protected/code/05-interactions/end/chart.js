import * as d3 from "d3";

async function drawLineChart() {

  // 1. Access data
  const dataset = await d3.json("./data/my_weather_data.json")

  const yAccessor = d => d.temperatureMax
  const dateParser = d3.timeParse("%Y-%m-%d")
  const xAccessor = d => dateParser(d.date)

  // 2. Create chart dimensions

  let dimensions = {
    width: window.innerWidth * 0.9,
    height: 400,
    margin: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60,
    },
  }
  dimensions.boundedWidth = dimensions.width
    - dimensions.margin.left
    - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height
    - dimensions.margin.top
    - dimensions.margin.bottom

  // 3. Draw canvas

  const wrapper = d3.select("#wrapper")
    .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)

  const bounds = wrapper.append("g")
      .style("transform", `translate(${
        dimensions.margin.left
      }px, ${
        dimensions.margin.top
      }px)`)

  // 4. Create scales

  const yScale = d3.scaleLinear()
    .domain(d3.extent(dataset, yAccessor))
    .range([dimensions.boundedHeight, 0])

  const freezingTemperaturePlacement = yScale(32)
  const freezingTemperatures = bounds.append("rect")
      .attr("x", 0)
      .attr("width", dimensions.boundedWidth)
      .attr("y", freezingTemperaturePlacement)
      .attr("height", dimensions.boundedHeight
        - freezingTemperaturePlacement)
      .attr("fill", "#e0f3f3")

  const xScale = d3.scaleTime()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth])

  // 5. Draw data

  const lineGenerator = d3.line()
    .x(d => xScale(xAccessor(d)))
    .y(d => yScale(yAccessor(d)))

  const line = bounds.append("path")
      .attr("d", lineGenerator(dataset))
      .attr("fill", "none")
      .attr("stroke", "#af9358")
      .attr("stroke-width", 2)

  // 6. Draw peripherals

  const yAxisGenerator = d3.axisLeft()
    .scale(yScale)

  const yAxis = bounds.append("g")
    .call(yAxisGenerator)

  const xAxisGenerator = d3.axisBottom()
    .scale(xScale)

  const xAxis = bounds.append("g")
    .call(xAxisGenerator)
      .style("transform", `translateY(${
        dimensions.boundedHeight
      }px)`)

  // 7. Set up interactions

  const listeningRect = bounds.append("rect")
    .attr("class", "listening-rect")
    .attr("width", dimensions.boundedWidth)
    .attr("height", dimensions.boundedHeight)
    .on("mousemove", onMouseMove)
    .on("mouseleave", onMouseLeave)

  const tooltip = d3.select("#tooltip")
  const tooltipCircle = bounds.append("circle")
      .attr("class", "tooltip-circle")
      .attr("r", 4)

  function onMouseMove(event) {
    const mousePosition = d3.pointer(event)
    const hoveredDate = xScale.invert(mousePosition[0])

    const getDistanceFromHoveredDate = d => Math.abs(xAccessor(d) - hoveredDate)
    const closestIndex = d3.leastIndex(dataset, (a, b) => (
      getDistanceFromHoveredDate(a) - getDistanceFromHoveredDate(b)
    ))
    const closestDataPoint = dataset[closestIndex]

    const closestXValue = xAccessor(closestDataPoint)
    const closestYValue = yAccessor(closestDataPoint)

    const formatDate = d3.timeFormat("%B %A %-d, %Y")
    tooltip.select("#date")
        .text(formatDate(closestXValue))

    const formatTemperature = d => `${d3.format(".1f")(d)}°F`
    tooltip.select("#temperature")
        .html(formatTemperature(closestYValue))

    const x = xScale(closestXValue)
      + dimensions.margin.left
    const y = yScale(closestYValue)
      + dimensions.margin.top

    tooltip.style("transform", `translate(`
      + `calc( -50% + ${x}px),`
      + `calc(-100% + ${y}px)`
      + `)`)

    tooltip.style("opacity", 1)

    tooltipCircle
        .attr("cx", xScale(closestXValue))
        .attr("cy", yScale(closestYValue))
        .style("opacity", 1)
  }

  function onMouseLeave() {
    tooltip.style("opacity", 0)

    tooltipCircle.style("opacity", 0)
  }

}
drawLineChart()