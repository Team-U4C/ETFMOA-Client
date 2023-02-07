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
    if (info.portion.cap01name !== null)
      portion.children.push({ name: info.portion.cap01name, ratio: info.portion.cap01ratio, color: colorMap[0] })
    if (info.portion.cap02name !== null)
      portion.children.push({ name: info.portion.cap02name, ratio: info.portion.cap02ratio, color: colorMap[1] })
    if (info.portion.cap03name !== null)
      portion.children.push({ name: info.portion.cap03name, ratio: info.portion.cap03ratio, color: colorMap[2] })
    if (info.portion.cap04name !== null)
      portion.children.push({ name: info.portion.cap04name, ratio: info.portion.cap04ratio, color: colorMap[3] })
    if (info.portion.cap05name !== null)
      portion.children.push({ name: info.portion.cap05name, ratio: info.portion.cap05ratio, color: colorMap[4] })
    if (info.portion.cap06name !== null)
      portion.children.push({ name: info.portion.cap06name, ratio: info.portion.cap06ratio, color: colorMap[5] })
    if (info.portion.cap07name !== null)
      portion.children.push({ name: info.portion.cap07name, ratio: info.portion.cap07ratio, color: colorMap[6] })
    if (info.portion.cap08name !== null)
      portion.children.push({ name: info.portion.cap08name, ratio: info.portion.cap08ratio, color: colorMap[7] })
    if (info.portion.cap09name !== null)
      portion.children.push({ name: info.portion.cap09name, ratio: info.portion.cap09ratio, color: colorMap[8] })
    if (info.portion.cap10name !== null)
      portion.children.push({ name: info.portion.cap10name, ratio: info.portion.cap10ratio, color: colorMap[9] })
    if (info.portion.cap11name !== null)
      portion.children.push({ name: info.portion.cap11name, ratio: info.portion.cap11ratio, color: colorMap[10] })
    if (info.portion.cap12name !== null)
      portion.children.push({ name: info.portion.cap12name, ratio: info.portion.cap12ratio, color: colorMap[11] })
    if (info.portion.cap13name !== null)
      portion.children.push({ name: info.portion.cap13name, ratio: info.portion.cap13ratio, color: colorMap[12] })
    if (info.portion.cap14name !== null)
      portion.children.push({ name: info.portion.cap14name, ratio: info.portion.cap14ratio, color: colorMap[13] })
    if (info.portion.cap15name !== null)
      portion.children.push({ name: info.portion.cap15name, ratio: info.portion.cap15ratio, color: colorMap[14] })
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
