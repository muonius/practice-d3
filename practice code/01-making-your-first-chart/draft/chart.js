async function drawLineChart() {
  //***********1. Access Data */
  const data = await d3.json("./../../my_weather_data.json");
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

  console.log(bounds);
  //g is like a div for svg
}

drawLineChart();
