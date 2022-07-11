async function drawBars() {

  // 1. Access Data

  const data = await d3.json("../../my_weather_data.json")

  const drawHistogram = metric => {

    const xAccessor = d => d[metric]
    const yAccessor = d => d.length //note d doesn't need to be the same, here d is bin
    // console.log(xAccessor(data[0]))

    // 2. Create dimensions
    //Histogram is easier to read when it's wider/like timeline

    const width = 600

    let dimensions = {
      width,
      height: width * 0.6,
      margin: {
        top: 30,
        right: 10,
        bottom: 50,
        left: 50
        //clockwise similar to how DOM renders 
      }
    }

    dimensions.boundedWidth = dimensions.width -
      dimensions.margin.left - dimensions.margin.right

    dimensions.boundedHeight = dimensions.height -
      dimensions.margin.top - dimensions.margin.bottom

    // 3. Create canvas

    const wrapper = d3.select("#wrapper")
      .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
    // .style("border", "1px solid")

    //tell screen reader the role of the content
    wrapper.attr("role", "figure")
      .attr("tabindex", "0") //items with a lower item will be tabbed first, stay within 0 and -1
      .append("title")
      .text("Histogram looking at the distribution of humidity over 2019")


    const bounds = wrapper.append("g")
      .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`)

    // 4. Create Scale

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, xAccessor))
      .range([0, dimensions.boundedWidth])
      .nice()

    const binGenerator = d3.bin()
      .domain(xScale.domain())
      .value(xAccessor)
      .thresholds(12) //guestimate aim for 13 bins

    const bins = binGenerator(data)
    // console.log(bins[0].x0)// generated 14 bins, bottom bin value (inclusive)
    // console.log(bins[0].x1)// generated 14 bins, top bin value (exclusive)

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(bins, yAccessor)])
      //for histogram, 0 is meaningful, count = 0 is a value to preserve, so histogram domain always starts from 0
      .range([dimensions.boundedHeight, 0])
      .nice()


    // 5. Draw data
    //each bin has a rect, text element
    const binsGroup = bounds.append("g")
      .attr("tabindex", "0")
      .attr("role", "list")
      .attr("aria-label", "histogram bars")

    console.log(bins)
    const binGroups = binsGroup.selectAll("g")
      .data(bins)
      .join("g")
      .attr("tabindex", "0")
      .attr("role", "listitem")
      .attr("aria-label", d => `There were ${yAccessor(d)} days between ${d.x0} and ${d.x1
        } humidity levels`)
    const barPadding = 1

    const barRects = binGroups.append("rect")
      .attr("x", d => xScale(d.x0) + barPadding / 2)
      .attr("y", d => yScale(yAccessor(d)))
      .attr("width", d => d3.max([0, xScale(d.x1) - xScale(d.x0) - barPadding]))
      //browser will complain if there is any negative num
      //use d3.max([0,code]) 
      .attr("height", d => dimensions.boundedHeight - yScale(yAccessor(d)))
      .attr("fill", "cornflowerblue")

    const barText = binGroups.filter(yAccessor)
      //if element, return any element other than 0
      //only return value when yAccessor has value so if 0, not show text 
      .append("text")
      .attr("x", d => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
      .attr("y", d => yScale(yAccessor(d)) - 5)
      .text(yAccessor)
      .style("text-anchor", "middle")
      .style("fill", "#666")
      .style("font-size", "10px")
      .style("font-family", "sans-serif")


    // const mean = data.map(xAccessor)
    const mean = d3.mean(data, xAccessor)
    // console.log(mean)

    const meanLine = bounds.append("line")
      .attr("x1", xScale(mean))
      .attr("x2", xScale(mean))
      .attr("y1", -15)
      .attr("y2", dimensions.boundedHeight)
      .attr("stroke", "maroon")
      .style("stroke-dasharray", "2px 1px")
    //SVG default is fill black, 0 stroke 

    const meanLabel = bounds.append("text")
      .attr("x", xScale(mean))
      .attr("y", -20)
      .style("text-anchor", "middle")
      .style("font-family", "sans-serif")
      .style("fill", "maroon")
      .style("font-size", "12px")
      .text("mean")
      .attr("role", "presentation")
      .attr("aria-hidden", true)
    //this label is too distracting for the screenreader

    const xAxisGenerator = d3.axisBottom().scale(xScale)

    const xAxis = bounds.append("g")
      .call(xAxisGenerator)
      .style("transform", `translateY(${dimensions.boundedHeight}px)`)
      .attr("aria-hidden", true)


    const xAxisLabel = xAxis.append("text")
      .attr("x", dimensions.boundedWidth / 2)
      .attr("y", dimensions.margin.bottom - 10)
      .text(metric)
      .style("fill", "black")
      .style("font-size", "1.4em")
      .attr("aria-hidden", true)
    //when append items to axis, fill is transparent by default
  }

  // drawHistogram("moonPhase")


  const metrics = [
    "windSpeed",
    "moonPhase",
    "dewPoint",
    "humidity",
    "uvIndex",
    "windBearing",
    "temperatureMin",
    "temperatureMax",
    "visibility",
    "cloudCover"]

  metrics.forEach(drawHistogram)
}
drawBars()