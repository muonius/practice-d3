import React, { useRef } from "react"
import PropTypes from "prop-types"
import * as d3 from 'd3'
import { useDimensionsContext } from "./Chart";

const Axis = ({ dimension, scale, ...props }) => {
  const dimensions = useDimensionsContext()
  const ref = useRef()

  const axisGeneratorsByDimensions = {
    x: "axisBottom",
    y: "axisLeft",

  }

  const axisGenerator = d3[axisGeneratorsByDimensions[dimensions]]()
    .scale(scale)

  if (ref.current) {
    d3.select(ref.current)
      .transition()
      .call(axisGenerator)
  }

  return (
    <g {...props}
      className="Axis"
      ref={ref}
      transform={
        dimensions == "x" ?
          `translate(0,${dimensions.boundedHeight})` : null
      }
    />
  )
}

Axis.propTypes = {
  dimension: PropTypes.oneOf(["x", "y"]),
  scale: PropTypes.func,
}

const formatNumber = d3.format(",")
Axis.defaultProps = {
  dimension: "x",
}

export default Axis
