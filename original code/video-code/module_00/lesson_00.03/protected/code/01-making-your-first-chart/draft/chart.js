import * as d3 from "d3";

async function drawLineChart() {
  const dataset = await d3.json("./data/my_weather_data.json");

  const yAccessor = d => d.temperatureMax
  const dateParser = d3.timeParse("%Y-%m-%d")
  const xAccessor = d => dateParser(d.date)

}

drawLineChart()