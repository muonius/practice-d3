import React from "react"
import PropTypes from "prop-types"
import * as d3 from 'd3'
import { dimensionsPropsType } from "./utils";
import { useDimensionsContext } from "./Chart";

//prevents unneccessary re-renderings
const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical,
}
const Axis = ({ dimension, ...props }) => {
  const dimensions = useDimensionsContext()
  const Component = axisComponentsByDimension[dimension]
  if (!Component) return null

  return (
    <Component {...props}
      dimensions={dimensions}
    />
  )
}

Axis.propTypes = {
  dimension: PropTypes.oneOf(["x", "y"]),
  dimensions: dimensionsPropsType,
  scale: PropTypes.func,
  label: PropTypes.string,
  formatTick: PropTypes.func,
}

const formatNumber = d3.format(",")
Axis.defaultProps = {
  dimension: "x",
  scale: null,
  formatTick: formatNumber,
}

export default Axis


function AxisHorizontal({ dimensions, label, formatTick, scale, ...props }) {

  const numberOfTicks = dimensions.boundedWidth < 600 ? dimensions.boundedWidth / 100 : dimensions.boundedWidth / 250
  const ticks = scale.ticks(numberOfTicks)

  return (
    <g className="Axis AxisHorizontal" {...props} transform={`translate(0,${dimensions.boundedHeight})`}>
      <Line className="Axis__line" x2={dimensions.boundedWidth} />
      {ticks.map((tick, i) => {
        <text key={i} className="Axis__tick" transform={`translate(${scale(tick)},0)`}>
          {formatTick(tick)}
        </text>

      })}
      {label && (<text className="Axis__label" transform={`translate(${dimensions.boundedWidth / 2},60)`}>
      </text>)}
    </g>
  )
}

function AxisVertical({ dimensions, label, formatTick, scale, ...props }) {
  return (
    <g className="Axis AxisVertical" {...props}>
    </g>
  )
}
