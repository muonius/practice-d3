import * as d3 from "d3";

async function drawBars() {

  // 1. Access data
  const dataset = await d3.json("./data/my_weather_data.json")

  const xAccessor = d => d.humidity

}
drawBars()