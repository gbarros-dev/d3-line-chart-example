import { curveNatural, line } from 'd3'

export const Marks = ({ data, yScale, xScale, yValue, xValue, tooltipFormat, circleRadius }) => (
  <g className='marks'>
    <path
      fill='none'
      stroke='black'
      d={line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))
        .curve(curveNatural)(data)}
    />
    {data.map((d, i) => (
      <circle key={i} cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={circleRadius}>
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ))}
  </g>
)
