import React, { useRef, useEffect, useState } from 'react'

let stockTiles
let hierarchyData
let isDrawn = false
let durationTime = 700
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

function TreeMap() {
  const [data, setData] = useState(dummyData.data[0])
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
    if (!dimensions) return
    //drawTreeMap()
    isDrawn = true
  }, [dimensions])

  useEffect(() => {
    hierarchyData = hierarchy(data)
      .sum((d) => d.ratio)
      .sort((a, b) => b.ratio - a.ratio)

    if (!dimensions) return
    //drawTreeMap()
  }, [data])

  return {
    /* 
      <div ref={wrapperRef}>
        <svg ref={svgRef}></svg>
      </div> */
  }
}
