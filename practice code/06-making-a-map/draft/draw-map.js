async function drawMap() {
  const countryShapes = await d3.json("./../world-geojson.json");
  // console.log(countryShapes);
  //************1. Create Accessors */
  const countryNameAccessor = (d) => d.properties["NAME"];
  const countryIDAccessor = (d) => d.properties["ADMI0_A3_IS"];
  // console.log(countryNameAccessor(countryShapes.features[0]));

  const dataset = await d3.csv("./../data_bank_data.csv");
  // console.log(dataset);

  //**************2. Data Cleaning */
  const metric = "Population growth (annual %)";

  let metricDataByCountry = {};
  dataset.forEach((d) => {
    if (d["Series Name"] != metric) return;
    metricDataByCountry[d["Country Code"]] = +d["2017[YR2017]"] || 0;
  });
  // console.log(metricDataByCountry);

  // **************3. Dimensions

  let dimensions = {
    width: window.innerWidth * 0.9,
    margin: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
  };
  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;

  const sphere = { type: "Sphere" };
  //a projection function is our scale in the geographic world

  const projection = d3
    .geoEqualEarth()
    .fitWidth(dimensions.boundedWidth, sphere);

  const pathGenerator = d3.geoPath(projection);
  //  pathGenerator has a bounds method that returns bound coordinates
  // console.log(pathGenerator.bounds(sphere));

  const [[x0, y0], [x1, y1]] = pathGenerator.bounds(sphere);
  dimensions.boundedHeight = y1;
  dimensions.height =
    dimensions.boundedHeight + dimensions.margin.top + dimensions.margin.bottom;

  // ***********4. Draw Canvas
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
}
drawMap();
