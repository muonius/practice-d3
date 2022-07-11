import * as d3 from "d3";

async function drawScatter() {

  // 1. Access data
  let dataset = await d3.json("./data/my_weather_data.json")

  const xAccessor = d => d.dewPoint
  const yAccessor = d => d.humidity

}
drawScatter()