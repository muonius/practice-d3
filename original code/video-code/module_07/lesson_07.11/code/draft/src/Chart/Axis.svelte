<script>
  import { getContext } from "svelte";
  import * as d3 from "d3";

  export let dimension = "x";
  export let scale = null;
  export let label;
  export let formatTick = d3.format(",");

</script>

<g
  class="Axis Axis--dimension-{dimension}">
</g>

<style>
  .Axis__line {
    stroke: #bdc3c7;
  }

  .Axis__label {
    text-anchor: middle;
    font-size: 0.8em;
    letter-spacing: 0.01em;
  }

  .Axis__tick {
    font-size: 0.9em;
    transition: all 0.3s ease-out;
  }

  .Axis--dimension-x .Axis__tick {
    text-anchor: middle;
  }

  .Axis--dimension-y .Axis__tick {
    dominant-baseline: middle;
    text-anchor: end;
  }
</style>
