async function drawBars() {
  //1. Access data
  const dataset = await d3.json("./../../my_weather_data.json");
  //   console.log(dataset[0]);
  const xAccessor = (d) => d.humidity;
  //   console.log(xAccessor(dataset[0]));
  const yAccessor = (d) => d.length;
  //2. Create dimensions
  const width = 600;
  let dimensions = {
    width,
    height: width * 0.6,
    margin: {
      top: 30,
      right: 10,
      bottom: 50,
      left: 50,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  //3. Draw canvas

  const wrapper = d3
    .select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margin.left}px,${dimensions.margin.top}px)`
    );
  //attr creates attr on the element
  //style creates css style that target the element
  //with attr, you won't need to specify px

  //4. Create scales

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  //no yAccessor because it's count
  const binsGenerator = d3
    .histogram()
    .domain(xScale.domain())
    .value(xAccessor)
    .thresholds(12);

  const bins = binsGenerator(dataset);
  //   console.log(bins);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice();
  //for histogram, 0 is meaningful, count = 0 is a value to preserve, so histogram domain always starts from 0

  //5. Draw data

  const binsGroup = bounds.append("g");
  const binGroups = binsGroup.selectAll("g").data(bins).join("g");
  const barPadding = 1;
  const barRects = binGroups
    .append("rect")
    .attr("x", (d) => xScale(d.x0) + barPadding / 2)
    .attr("y", (d) => yScale(yAccessor(d)))
    .attr("width", (d) => d3.max([0, xScale(d.x1) - xScale(d.x0) - barPadding]))
    .attr("height", (d) => dimensions.boundedHeight - yScale(yAccessor(d)))
    .attr("fill", "cornflowerblue");
  //you don't need xAccessor because d.x1 and d.x0 are created in the bins dataset already

  //6. Add labels
  const barText = binGroups
    .filter(yAccessor)
    .append("text")
    .attr("x", (d) => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
    .attr("y", (d) => yScale(yAccessor(d)) - 5)
    .text(yAccessor)
    .style("text-anchor", "middle")
    .style("fill", "#666")
    .style("font-size", "12px")
    .style("font-family", "sans-serif");
  //if length is 0, do not show value
}

drawBars();
