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

<style>
  rect {
    fill: #9980fa;
    transition: all 0.3s ease-out;
  }
</style>
