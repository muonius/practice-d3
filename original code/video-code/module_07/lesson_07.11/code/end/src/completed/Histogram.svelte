<script>
  import * as d3 from "d3";

  import Chart from "./Chart/Chart.svelte";
  import Bars from "./Chart/Bars.svelte";
  import Axis from "./Chart/Axis.svelte";
  import Gradient from "./Chart/Gradient.svelte";
  import { getUniqueId } from "./Chart/utils";

  const formatDate = d3.timeFormat("%-b %-d");
  const gradientColors = ["#9980FA", "rgb(226, 222, 243)"]
  const gradientId = getUniqueId("Histogram-gradient");

  export let data = [];
  export let xAccessor = d => d.x;
  export let label;

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

  const numberOfThresholds = 9

  $: xScale = d3.scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dms.boundedWidth])
    .nice(numberOfThresholds);

  $: binsGenerator = d3.histogram()
    .domain(xScale.domain())
    .value(xAccessor)
    .thresholds(xScale.ticks(numberOfThresholds));

  $: bins = binsGenerator(data);

  const yAccessor = d => d.length
  $: yScale = d3.scaleLinear()
    .domain(d3.extent(bins, yAccessor))
    .range([dms.boundedHeight, 0])
    .nice();

  const barPadding = 2
  $: xAccessorScaled = d => xScale(d.x0) + barPadding;
  $: yAccessorScaled = d => yScale(yAccessor(d));
  $: widthAccessorScaled = d => xScale(d.x1) - xScale(d.x0) - barPadding;
  $: heightAccessorScaled = d => dms.boundedHeight - yScale(yAccessor(d));
  $: keyAccessor = (d, i) => i;
</script>

<div class="Histogram placeholder" bind:clientWidth={width} bind:clientHeight={height}>
  <Chart dimensions={dms}>
    <defs>
      <Gradient
        id={gradientId}
        colors={gradientColors}
        x2="0"
        y2="100%"
      />
    </defs>
    <Axis
      dimension="x"
      scale={xScale}
      label={label}
    />
    <Axis
      dimension="y"
      scale={yScale}
      label="Count"
    />
    <Bars
      data={bins}
      keyAccessor={keyAccessor}
      xAccessor={xAccessorScaled}
      yAccessor={yAccessorScaled}
      widthAccessor={widthAccessorScaled}
      heightAccessor={heightAccessorScaled}
      style="fill: url(#{gradientId})"
    />
  </Chart>
</div>

<style>
  .Histogram {
    height: 500px;
    flex: 1;
    min-width: 500px;
    overflow: hidden;
  }
</style>
