<script>
  import * as d3 from "d3";

  export let type = "line";
  export let data = [];
  export let xAccessor = () => {};
  export let yAccessor = () => {};
  export let y0Accessor = 0;
  export let interpolation = d3.curveMonotoneX;
  export let style = ""

</script>

<path class={`Line Line--type-${type}`} />

<style>
  .Line {
    transition: all 0.3s ease-out;
  }

  .Line--type-line {
    fill: none;
    stroke: #9980fa;
    stroke-width: 3px;
    stroke-linecap: round;
  }

  .Line--type-area {
    fill: rgba(152, 128, 250, 0.185);
    stroke-width: 0;
  }
</style>