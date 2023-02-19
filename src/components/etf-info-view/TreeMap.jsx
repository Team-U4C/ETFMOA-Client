//libraries
import React, { useRef, useEffect, useState } from 'react'
import { select, selectAll, hierarchy, treemap } from 'd3'

import './TreeMap.scss'

//utils
import { getColorMap } from '../../utils/commonFunction'
let stockTiles
let hierarchyData
let durationTime = 1000
const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(new DOMRect(0, 0, 1400, 800));
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

  let data = null;
  const [isDrawn, setIsDrawn] = useState(false);
  const svgRef = useRef()

  const dimensions = useResizeObserver(svgRef)
  
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

    portion.children = []
    for(let i = 1; i <= 15; i++){
      const capName = info.portion[`cap${i.toString().padStart(2, '0')}name`];
      const capRatio = info.portion[`cap${i.toString().padStart(2, '0')}ratio`];
      if(capName !== null){
        portion.children.push({name: capName, ratio: capRatio, color: colorMap[i-1]});
      }
    }
    hierarchyData = hierarchy(portion)
    .sum((d) => d.ratio)
    .sort((a, b) => b.ratio - a.ratio)

  }, [])
  useEffect(() => {
    drawTreeMap()
    setIsDrawn(true);
  }, [dimensions])

  return (
    <div className="svg-wrapper">
      <svg className="treemap-svg" ref={svgRef}></svg>
    </div>
  )
}
