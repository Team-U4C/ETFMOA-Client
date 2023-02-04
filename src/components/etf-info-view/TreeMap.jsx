//libraries
import React, { useRef, useEffect, useState } from 'react'
import { select, selectAll, hierarchy, treemap } from 'd3'

import './TreeMap.scss'

//utils
import { getColorMap } from '../../utils/commonFunction'
let stockTiles
let hierarchyData

let durationTime = 700
//TODO: 반응형이 아니라 부모의 WIDTH, HEIGHT를 고정시켜 아래의 함수가 실행되지 않음
const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null)
  useEffect(() => {
    const observeTarget = ref.current
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect)
      })
    })
    resizeObserver.observe(observeTarget)
    return () => {
      resizeObserver.unobserve(observeTarget)
    }
  }, [ref])
  return dimensions
}

export function TreeMap({ info }) {
  let isDrawn = false

  const [data, setData] = useState(null)
  const svgRef = useRef()
  const wrapperRef = useRef()

  const dimensions = useResizeObserver(wrapperRef)
  let drawTreeMap = () => {
    let createTreeMap = treemap().size([dimensions.width, dimensions.height])

    createTreeMap(hierarchyData)

    let stockData = hierarchyData.leaves()
    if (!isDrawn) {
      if (stockTiles !== undefined) {
        stockTiles.selectAll('rect').remove()
        stockTiles.selectAll('text').remove()
      }
      // transform
      stockTiles = select(svgRef.current)
        .selectAll('g')
        .data(stockData)
        .join('g')
        .attr('transform', (d) => {
          return 'translate(' + d['x0'] + ', ' + d['y0'] + ')'
        })
      stockTiles
        .append('rect')
        .attr('class', 'leaf')
        .attr('fill', (d) => d['data']['color'])
        .attr('width', (d) => d['x1'] - d['x0'])
        .attr('height', (d) => d['y1'] - d['y0'])

      // name
      stockTiles
        .append('text')
        .text((d) => d['data']['name'])
        .attr('y', 20)

      // ratio
      stockTiles
        .append('text')
        .attr('class', 'ratio')
        .text((d) => d['data']['ratio'] + '%')
        .attr('x', (d) => (d['x1'] - d['x0']) / 2)
        .attr('y', (d) => (d['y1'] - d['y0']) / 2)
        .attr('font-size', (d) => {
          let fontSize = (d['x1'] - d['x0'] + d['y1'] - d['y0']) / 200
          return `${fontSize}rem`
        })
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
    } else {
      let coorMap = new Map()
      stockData.forEach((d) => {
        coorMap.set(d['data']['name'], { x0: d.x0, x1: d.x1, y0: d.y0, y1: d.y1 })
      })
      stockTiles
        .transition()
        .duration(durationTime)
        .attr('transform', (d) => {
          let coordination = coorMap.get(d['data']['name'])
          return `translate(${coordination.x0},${coordination.y0})`
        })

      // width,height
      stockTiles
        .selectAll('rect')
        .transition()
        .duration(durationTime)
        .attr('width', (movie) => {
          return movie['x1'] - movie['x0']
        })
        .attr('height', (movie) => {
          return movie['y1'] - movie['y0']
        })

      // ratio
      stockTiles
        .selectAll('.ratio')
        .transition()
        .duration(durationTime)
        .attr('x', (d) => (d['x1'] - d['x0']) / 2)
        .attr('y', (d) => (d['y1'] - d['y0']) / 2)
        .attr('font-size', (d) => {
          let fontSize = (d['x1'] - d['x0'] + d['y1'] - d['y0']) / 200
          return `${fontSize}rem`
        })
    }
  }
  useEffect(() => {
    let portion = {}
    let colorMap = getColorMap()

    portion.name = info.name
    portion.children = []

    if (info.cap01name !== null)
      portion.children.push({ name: info.cap01name, ratio: info.cap01ratio, color: colorMap[0] })
    if (info.cap02name !== null)
      portion.children.push({ name: info.cap02name, ratio: info.cap02ratio, color: colorMap[1] })
    if (info.cap03name !== null)
      portion.children.push({ name: info.cap03name, ratio: info.cap03ratio, color: colorMap[2] })
    if (info.cap04name !== null)
      portion.children.push({ name: info.cap04name, ratio: info.cap04ratio, color: colorMap[3] })
    if (info.cap05name !== null)
      portion.children.push({ name: info.cap05name, ratio: info.cap05ratio, color: colorMap[4] })
    if (info.cap06name !== null)
      portion.children.push({ name: info.cap06name, ratio: info.cap06ratio, color: colorMap[5] })
    if (info.cap07name !== null)
      portion.children.push({ name: info.cap07name, ratio: info.cap07ratio, color: colorMap[6] })
    if (info.cap08name !== null)
      portion.children.push({ name: info.cap08name, ratio: info.cap08ratio, color: colorMap[7] })
    if (info.cap09name !== null)
      portion.children.push({ name: info.cap09name, ratio: info.cap09ratio, color: colorMap[8] })
    if (info.cap10name !== null)
      portion.children.push({ name: info.cap10name, ratio: info.cap10ratio, color: colorMap[9] })
    setData(portion)

  }, [])
  useEffect(() => {
    if (!dimensions) return
    drawTreeMap()
    isDrawn = true
  }, [dimensions])

  useEffect(() => {
    if (data === null) return

    hierarchyData = hierarchy(data)
      .sum((d) => d.ratio)
      .sort((a, b) => b.ratio - a.ratio)

    if (!dimensions) return
    drawTreeMap()
  }, [data])

  return (
    <div className="svg-wrapper" ref={wrapperRef}>
      <svg className="treemap-svg" ref={svgRef}></svg>
    </div>
  )
}
