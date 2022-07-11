<script>
  import * as d3 from "d3";

  export let data = [];
  export let keyAccessor = () => {};
  export let xAccessor = () => {};
  export let yAccessor = () => {};
  export let widthAccessor = () => {};
  export let heightAccessor = () => {};
  export let style = "";

  export const callAccessor = (accessor, d, i) =>
    typeof accessor === "function" ? accessor(d, i) : accessor;
</script>

{#each data as d, i (keyAccessor(d) || i)}
  <rect
    {style}
    key={keyAccessor(d, i)}
    x={callAccessor(xAccessor, d, i)}
    y={callAccessor(yAccessor, d, i)}
    width={d3.max([callAccessor(widthAccessor, d, i), 0])}
    height={d3.max([callAccessor(heightAccessor, d, i), 0])} />
{/each}

<style>
  rect {
    fill: #9980fa;
    transition: all 0.3s ease-out;
  }
</style>
