//libraries
import React, { useEffect, useRef, useState } from 'react'

//components

import './Carousel.scss'

export function Carousel({ children }) {
  const slideRef = useRef(null)
  const [page, setPage] = useState(1)
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.7s ease-in-out'
    if (page === 1) {
      slideRef.current.style.transform = 'translateX(0%)'
    } else if (page === 2) {
      slideRef.current.style.transform = 'translateX(-100%)'
    }
  }, [page])
  return (
    <div className="carousel">
      <div className="carousel-row">
        <div className="carousel-wrap">
          <div className="carousel" ref={slideRef}>
            {children}
          </div>
        </div>
      </div>
      <div className="dot-pagination">
        {page === 1 && <div className="page-selected"></div>}
        {page === 1 && <div className="space"></div>}
        {page === 1 && <div className="page-unselected" onClick={() => setPage(2)}></div>}
        {page === 2 && <div className="page-unselected" onClick={() => setPage(1)}></div>}
        {page === 2 && <div className="space"></div>}
        {page === 2 && <div className="page-selected"></div>}
      </div>
    </div>
  )
}
