<script>
  import * as d3 from "d3";

  import Chart from "./Chart/Chart.svelte";
  import Bars from "./Chart/Bars.svelte";
  import Axis from "./Chart/Axis.svelte";

  const formatDate = d3.timeFormat("%-b %-d");

  export let data = [];
  export let xAccessor = d => d.x;
  export let label;

</script>

<div class="Histogram placeholder">
</div>

<style>
  .Histogram {
    height: 500px;
    flex: 1;
    min-width: 500px;
    overflow: hidden;
  }
</style>
