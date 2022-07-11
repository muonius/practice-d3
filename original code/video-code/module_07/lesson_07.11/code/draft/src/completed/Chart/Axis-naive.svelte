<script>
  import { getContext } from "svelte";
  import * as d3 from "d3";

  export let dimension = "x";
  export let scale = null;
  export let label;
  export let formatTick = d3.format(",");

  const { dimensions: dimensionsStore } = getContext("Chart");
  $: dimensions = $dimensionsStore;

  const axisGeneratorsByDimension = {
    x: "axisBottom",
    y: "axisLeft",
  }
  const axisGenerator = d3[axisGeneratorsByDimension[dimension]]()
    .scale(scale)
    .tickFormat(formatTick)

  let ref
  if (ref) {
    d3.select(ref)
      .transition()
      .call(axisGenerator)
  }
</script>

<g bind:this={ref}
  class="Axis Axis--dimension-{dimension}"
  transform={`translate(0, ${dimensions.boundedHeight})`}>
</g>

