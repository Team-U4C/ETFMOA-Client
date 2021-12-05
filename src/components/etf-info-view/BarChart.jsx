//libraries
import React, { useRef, useEffect, useState } from 'react'
import { select, scaleLinear, scaleBand, axisBottom, axisLeft } from 'd3'

import './BarChart.scss'

export function BarChart() {
  const svgRef = useRef()

  let tempWidth = 1000
  let tempHeight = 500

  const [dummyYAxisData, setDummyYAxisData] = useState([
    {
      name: 'KODEX200',
      value: 60,
    },
    {
      name: 'KODEX 게임',
      value: 55,
    },
    {
      name: 'KODEX 삼성',
      value: 50,
    },
    {
      name: 'KODEX 금융',
      value: 40,
    },
    {
      name: 'KODEX 제조',
      value: 38,
    },
    {
      name: 'TIGER IT',
      value: 25,
    },
    {
      name: 'TIGER 전기차',
      value: 22,
    },
    {
      name: 'TIGER 레저',
      value: 20,
    },
    {
      name: 'TIGER 부동산',
      value: 5,
    },
  ])
  useEffect(() => {
    const svg = select(svgRef.current)
    const xScale = scaleLinear().domain([0, 100]).range([0, tempWidth])
    const yScale = scaleBand()
      .domain(dummyYAxisData.map((value, index) => value.name))
      .range([0, tempHeight])
      .padding(0.5)

    const xAxis = axisBottom(xScale)

    svg.select('.x-axis').style('transform', `translateY(${tempHeight}px)`).call(xAxis)

    const yAxis = axisLeft(yScale)
      .tickFormat((d) => d)
      .tickSize(0)

    svg.select('.y-axis').call(yAxis).style('font-size', '15px')

    svg
      .selectAll('.bar')
      .data(dummyYAxisData)
      .join('rect')
      .attr('class', 'bar')
      .attr('y', (value, index) => yScale(value.name))
      .attr('height', yScale.bandwidth())
      .attr('width', (value, index) => tempWidth * (value.value / 100))
      .attr('fill', '#0d59d0')
  }, [])

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </React.Fragment>
  )
}
