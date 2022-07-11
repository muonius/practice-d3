import * as d3 from "d3";

async function drawBars() {

  // 1. Access data
  const dataset = await d3.json("./data/my_weather_data.json")

  const xAccessor = d => d.humidity
  const yAccessor = d => d.length

  // 2. Create chart dimensions

  const width = 600
  let dimensions = {
    width: width,
    height: width * 0.6,
    margin: {
      top: 30,
      right: 10,
      bottom: 50,
      left: 50,
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

  const xScale = d3.scaleLinear()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth])
    .nice()

  const binsGenerator = d3.bin()
    .domain(xScale.domain())
    .value(xAccessor)
    .thresholds(12)

  const bins = binsGenerator(dataset)

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice()

}
drawBars()