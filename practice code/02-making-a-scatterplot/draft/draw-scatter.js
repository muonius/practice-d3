async function drawScatter() {
  const data = await d3.json("../../my_weather_data.json")

  //1. Access data

  const xAccessor = d => d.dewPoint
  const yAccessor = d => d.humidity
  const colorAccessor = d => d.cloudCover

  //2. Create chart dimensions

  const width = d3.min([
    window.innerWidth * 0.9, window.innerHeight * 0.9])
  //whichever is smaller

  const arr = [1, 2, 3, null]
  console.log({
    d3a: d3.min(arr, d => d * 2),
    d3b: d3.min(data, xAccessor)
    // Math: Math(...arr)//three dot spread syntax
    //Math method will turn null to 0, therefore, min number is 0
    //undefined, d3 ignores it, Math will return NaN
    //emty array, d3 returns undefined, Math.min returns infinity
  })

  const dimensions = {
    width,
    height: width,
    margin: {
      top: 10,
      right: 10,
      bottom: 50,
      left: 50
    }
  }

  dimensions.boundedWidth = dimensions.width
    - dimensions.margin.right - dimensions.margin.left

  dimensions.boundedHeight = dimensions.height
    - dimensions.margin.top - dimensions.margin.bottom

  //3. Draw Canvas

  const wrapper = d3.select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height)
    .style("border", "1px solid")

  const bounds = wrapper.append("g")
    .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`)

  //attr creates attributes on element
  //style creates a CSS style targeting that element

  //4. Create scales

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth])
    .nice()

  //convert start and end domain to nice rounded domains

  // console.log(xScale.domain())
  //when passing no value, this shows the range of domain

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dimensions.boundedHeight, 0])
    .nice()

  const colorScale = d3.scaleLinear()
    .domain(d3.extent(data, colorAccessor))
    .range(["skyblue", "darkslategrey"])

  console.log(colorScale(0))

  // 5. Draw data
  //each dot is a svg element
  // data.forEach(d => {
  //   bounds.append("circle")
  //     .attr("cx", xScale(xAccessor(d)))
  //     .attr("cy", yScale(yAccessor(d)))
  //     .attr("r", 5)
  //nested code is a bit hard to read, every time we run this code
  //we are creating new circles, there is no linkage
  //so if we have to update it, we need to erase and re-write

  // const drawDots = (data, color) => {
  //   const dots = bounds.selectAll("circle")
  //     .data(data)
  //     .enter().append("circle")
  //     .merge(dots)
  //     .attr("cx", d => xScale(xAccessor(d)))
  //     .attr("cy", d => yScale(yAccessor(d)))
  //     .attr("r", 5)
  //     .attr("fill", color)
  // }

  // drawDots(data.slice(0, 100), "gray")

  // setTimeout(() => {
  //   drawDots(data, "cornflowerblue")
  // }, 1000)


  //because enter, append, merge are so confusing, 
  //the new version `join` is more helpful


  const dots = bounds.selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", d => xScale(xAccessor(d)))
    .attr("cy", d => yScale(yAccessor(d)))
    .attr("r", 3)
    .attr("fill", d => colorScale(colorAccessor(d)))

  // 6. Draw peripherals

  const xAxisGenerator = d3.axisBottom()
    .scale(xScale)

  const xAxis = bounds.append("g")
    .call(xAxisGenerator)
    .style("transform", `translateY(${dimensions.boundedHeight}px)`)

  const xAxisLabel = xAxis.append("text")
    .attr("x", dimensions.boundedWidth / 2)
    .attr("y", dimensions.margin.bottom - 10)
    .attr("fill", "black")
    .style("font-size", "1.4em")
    .html("Dew Point (&deg;F)")
  //using html so it can pass through the unicode

  const yAxisGenerator = d3.axisLeft()
    .scale(yScale)
    .ticks(4)
  //this is just a suggestion, d3 will conjur up its own thing

  const yAxis = bounds.append("g")
    .call(yAxisGenerator)
  //no need to change postion

  const yAxisLabel = yAxis.append("text")
    .attr("x", -dimensions.boundedHeight / 2)
    .attr("y", -dimensions.margin.left + 20)
    .attr("fill", "black")
    .style("font-size", "1.4em")
    .text("Relative Humidity")
    .style("transform", "rotate(-90deg)")
    .style("text-anchor", "middle")
  //center text

}
drawScatter()