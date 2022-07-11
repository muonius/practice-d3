import * as d3 from "d3";

async function drawChart() {

  // 1. Access data

  let dataset = await d3.json("./data/my_weather_data.json")
  console.log(dataset[3])

  const temperatureMinAccessor = d => d.temperatureMin
  const temperatureMaxAccessor = d => d.temperatureMax
  const uvAccessor = d => d.uxIndex
  const precipitationProbabilityAccessor = d => d.precipProbability
  const precipitationTypeAccessor = d => d.precipType
  const cloudAccessor = d => d.cloudCover
  const dateParser = d3.timeParse("%Y-%m-%d")
  const dateAccessor = d => dateParser(d.date)

  // 2. Create chart dimensions

  const width = 600
  let dimensions = {
    width: width,
    height: width,
    radius: width / 2,
    margin: {
      top: 120,
      right: 120,
      bottom: 120,
      left: 120,
    },
  }
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom
  dimensions.boundedRadius = dimensions.radius - ((dimensions.margin.left + dimensions.margin.right) / 2)

  // 3. Draw canvas

  const wrapper = d3.select("#wrapper")
    .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)

  const bounds = wrapper.append("g")
      .style("transform", `translate(${
        dimensions.margin.left + dimensions.boundedRadius
      }px, ${
        dimensions.margin.top + dimensions.boundedRadius
      }px)`)

  // 4. Create scales

  const angleScale = d3.scaleTime()
    .domain(d3.extent(dataset, dateAccessor))
    .range([0, Math.PI * 2])

  const radiusScale = d3.scaleLinear()
      .domain(d3.extent([
        ...dataset.map(temperatureMinAccessor),
        ...dataset.map(temperatureMaxAccessor),
      ]))
      .range([0, dimensions.boundedRadius])
      .nice()

  const getCoordinatesForAngle = (angle, offset=1) => [
    Math.cos(angle - Math.PI / 2) * dimensions.boundedRadius * offset,
    Math.sin(angle - Math.PI / 2) * dimensions.boundedRadius * offset,
  ]
  const getXFromDataPoint = (d, offset=1.4) => (
    getCoordinatesForAngle(
      angleScale(dateAccessor(d)), offset
    )[0]
  )
  const getYFromDataPoint = (d, offset=1.4) => (
    getCoordinatesForAngle(
      angleScale(dateAccessor(d)), offset
    )[1]
  )

  // 6. Draw peripherals

  const peripherals = bounds.append("g")
  const months = d3.timeMonth.range(...angleScale.domain())

  months.forEach(month => {
    const angle = angleScale(month)
    const [x, y] = getCoordinatesForAngle(angle, 1)

    peripherals.append("line")
      .attr("x2", x)
      .attr("y2", y)
      .attr("class", "grid-line")

    const [labelX, labelY] = getCoordinatesForAngle(angle, 1.38)
    peripherals.append("text")
      .attr("x", labelX)
      .attr("y", labelY)
      .attr("class", "tick-label")
      .text(d3.timeFormat("%b")(month))
      .style("text-anchor",
        Math.abs(labelX) < 5 ? "middle" :
        labelX > 0           ? "start"  :
                               "end"
      )

  })

  const temperatureTicks = radiusScale.ticks(4)
  const gridCircles = temperatureTicks.map(d => {
    peripherals.append("circle")
      .attr("r", radiusScale(d))
      .attr("class", "grid-line")
  })

  const tickLabelBackgrounds = temperatureTicks.map(d => {
    if (d < 1) return
    return peripherals.append("rect")
      .attr("y", -radiusScale(d) - 10)
      .attr("width", 40)
      .attr("height", 20)
      .attr("fill", "#f8f9fa")
  })

  const gridLabels = temperatureTicks.map(d => {
    if (d < 1) return
    return peripherals.append("text")
      .attr("x", 4)
      .attr("y", -radiusScale(d) + 2)
      .attr("class", "tick-label-temperature")
      .html(`${d3.format(".0f")(d)}°F`)
  })

  // 5. Draw data

  const containsFreezing = radiusScale.domain()[0] < 32
  if (containsFreezing) {
    const freezingCircle = bounds.append("circle")
      .attr("r", radiusScale(32))
      .attr("class", "freezing-circle")
  }


  // 7. Set up interactions


}
drawChart()