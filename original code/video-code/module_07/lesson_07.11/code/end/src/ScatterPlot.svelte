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

</script>

<div class="ScatterPlot placeholder">
</div>

<style>
  .ScatterPlot {
    height: 500px;
    width: 500px;
    margin-right: 2em;
  }
</style>
