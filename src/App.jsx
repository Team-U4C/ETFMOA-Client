import './App.css'
import React, { useRef, useEffect, useState } from 'react'
import { select, selectAll, hierarchy, treemap } from 'd3'
import { dummyData } from './dummyData'
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
let stockTiles
let hierarchyData = hierarchy(dummyData)
  .sum((d) => d.value)
  .sort((a, b) => b.value - a.value)

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20])
  const [isDrawn, setIsDrawn] = useState(false)
  const svgRef = useRef()
  const wrapperRef = useRef()

  const dimensions = useResizeObserver(wrapperRef)
  let drawTreeMap = () => {
    let createTreeMap = treemap().size([dimensions.width, dimensions.height])

    createTreeMap(hierarchyData)
    let stockData = hierarchyData.leaves()
    if (!isDrawn) {
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

      stockTiles
        .append('text')
        .text((d) => d['data']['name'])
        .attr('y', 20)
    } else {
      let coorMap = new Map()
      stockData.forEach((d) => {
        coorMap.set(d['data']['name'], { x0: d.x0, x1: d.x1, y0: d.y0, y1: d.y1 })
      })

      stockTiles
        .transition()
        .duration(800)
        .attr('transform', (d) => {
          let coordination = coorMap.get(d['data']['name'])
          return `translate(${coordination.x0},${coordination.y0})`
        })

      stockTiles
        .selectAll('rect')
        .transition()
        .duration(800)
        .attr('width', (movie) => {
          return movie['x1'] - movie['x0']
        })
        .attr('height', (movie) => {
          return movie['y1'] - movie['y0']
        })
    }
  }

  useEffect(() => {
    if (!dimensions) return
  }, [isDrawn])

  useEffect(() => {
    const svg = select(svgRef.current)

    if (!dimensions) return
    drawTreeMap()

    setIsDrawn(true)
  }, [data, dimensions])

  let root = treemap(dummyData)
  return (
    <React.Fragment>
      <div ref={wrapperRef}>
        <svg ref={svgRef}></svg>
      </div>
      <button onClick={() => setData(data.map((value) => value + 5))}>Update data</button>
      <button onClick={() => setData(data.filter((value) => value <= 35))}>Filter data</button>
    </React.Fragment>
  )
}

export default App
