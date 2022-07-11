<script>
  export let data = [];
  export let keyAccessor = () => {};
  export let xAccessor = () => {};
  export let yAccessor = () => {};
  export let radius = 5;
</script>

{#each data as d, i (keyAccessor(d) || i)}
  <circle
    cx={xAccessor(d, i)}
    cy={yAccessor(d, i)}
    r={typeof radius == 'function' ? radius(d) : radius} />
{/each}

<style>
  circle {
    fill: #9980fa;
    transition: all 0.3s ease-out;
  }
</style>
