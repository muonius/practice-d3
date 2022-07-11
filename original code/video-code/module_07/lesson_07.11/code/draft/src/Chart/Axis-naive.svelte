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

