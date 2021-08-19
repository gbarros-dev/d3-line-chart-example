import { line } from 'd3'

export const Marks = ({ data, yScale, xScale, yValue, xValue, tooltipFormat, circleRadius }) => (
  <>
    <path
      fill='none'
      stroke='black'
      d={line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))(data)}
    />
    {data.map((d, i) => (
      <circle key={i} className='mark' cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={circleRadius}>
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ))}
  </>
)
