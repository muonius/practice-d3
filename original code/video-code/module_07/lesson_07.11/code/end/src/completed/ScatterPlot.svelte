<script>
  import * as d3 from "d3";

  import Chart from "./Chart/Chart.svelte";
  import Circles from "./Chart/Circles.svelte";
  import Axis from "./Chart/Axis.svelte";

  export let data = [];
  export let xAccessor = d => d.x;
  export let yAccessor = d => d.y;
  export let xLabel;
  export let yLabel;

  let width = 100;
  let height = 100;

  const margins = {
    marginTop: 40,
    marginRight: 30,
    marginBottom: 77,
    marginLeft: 75
  };
  $: dms = {
    width,
    height,
    ...margins,
    boundedHeight: Math.max(
      height - margins.marginTop - margins.marginBottom,
      0
    ),
    boundedWidth: Math.max(
      width - margins.marginLeft - margins.marginRight,
      0
    )
  };

  $: xScale = d3.scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dms.boundedWidth])
    .nice();

  $: yScale = d3.scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dms.boundedHeight, 0])
    .nice();

  $: xAccessorScaled = d => xScale(xAccessor(d));
  $: yAccessorScaled = d => yScale(yAccessor(d));
  $: keyAccessor = (d, i) => i
</script>

<div class="ScatterPlot placeholder" bind:clientWidth={width} bind:clientHeight={height}>
  <Chart dimensions={dms}>
    <Axis
      dimension="x"
      scale={xScale}
      label={xLabel}
    />
    <Axis
      dimension="y"
      scale={yScale}
      label={yLabel}
    />
    <Circles
      data={data}
      keyAccessor={keyAccessor}
      xAccessor={xAccessorScaled}
      yAccessor={yAccessorScaled}
    />
  </Chart>
</div>

<style>
  .ScatterPlot {
    height: 500px;
    width: 500px;
    margin-right: 2em;
  }
</style>
